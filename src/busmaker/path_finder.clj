(ns busmaker.path-finder
  (:require [jansi-clj.core :as ansi]
            [clojure.core.match :as match :refer [match]]
            [busmaker.recipes :as recipes])
  (:gen-class))

(def directions
  #{[1 0]
    [-1 0]
    [0 1]
    [0 -1]})

(defn direction
  [[a b]]
  (case [a b]
    [1 0] :e
    [-1 0] :w
    [0 1] :s
    [0 -1] :n
    nil))

(defn extensions-multi-fn
  [entity]
  (if (or (vector? entity)
          (list? entity)
          (seq? entity))
    :paths
    (case (:entity/type entity)
      :node (case (:node/type entity)
              :transport-belt [:node :transport-belt]
              :underground-belt [:node :underground-belt (:underground-belt/type entity)])
      :path :path
      :grid :grid)))

(defmulti extensions extensions-multi-fn)

(defn opposite-direction?
  [a b]
  (= [0 0] (mapv + a b)))

(defn extend-transport
  [node]
  (let [coords (mapv + (:node/coords node) (:node/direction node))]
    (into [{:entity/type           :node
             :node/coords           coords
             :node/direction        (:node/direction node)
             :node/type             :underground-belt
             :underground-belt/type :input}]
          (for [direction (remove #(opposite-direction? % (:node/direction node))
                                  directions)]
            {:entity/type    :node
             :node/coords    coords
             :node/direction direction
             :node/type      :transport-belt}))))

(defmethod extensions [:node :transport-belt]
  [node]
  (extend-transport node))

(defn draw
  [node]
  (if (not node)
    " "
    (match [(:node/type node) (direction (:node/direction node)) (:underground-belt/type node)]
      [:underground-belt :n :input]  (ansi/red "^")
      [:underground-belt :s :input]  (ansi/red "v")
      [:underground-belt :w :input]  (ansi/red "<")
      [:underground-belt :e :input]  (ansi/red ">")

      [:underground-belt :n :output] (ansi/green "^")
      [:underground-belt :s :output] (ansi/green "v")
      [:underground-belt :w :output] (ansi/green "<")
      [:underground-belt :e :output] (ansi/green ">")

      [:transport-belt :n nil]       "^"
      [:transport-belt :s nil]       "v"
      [:transport-belt :w nil]       "<"
      [:transport-belt :e nil]       ">"

      [:assembling-machine-2 nil nil]  (ansi/blue "a")
      [:fast-inserter _ nil]       (ansi/yellow "i")
      )))

(defmethod extensions [:node :underground-belt :input]
  [node]
  (for [i (range 2 6)]
    {:entity/type           :node
     :node/coords           (mapv + (:node/coords node) (mapv #(* i %) (:node/direction node)))
     :node/direction        (:node/direction node)
     :node/type             :underground-belt
     :underground-belt/type :output}))

(defmethod extensions [:node :underground-belt :output]
  [node]
  (extend-transport node))

(defmethod extensions :path
  [path]
  (let [last-node (last (:path/nodes path))]
    (for [node (extensions last-node)
          :when (not= (:node/coords last-node)
                      (:node/coords node))]
      (update path :path/nodes conj node))))

(defn path
  [nodes]
  {:entity/type :path
   :path/nodes nodes})

(defn transport-belt
  [coord direction]
  {:entity/type :node
   :node/type :transport-belt
   :node/coords coord
   :node/direction direction})

(defn underground-belt
  [coord direction]
  {:entity/type :node
   :node/type :underground-belt
   :node/coords coord
   :node/direction direction
   :underground-belt/type :input})

(defn cartesian-product
  [colls]
  (apply concat (for [item (first colls)]
                  (if (next colls)
                    (for [subset (cartesian-product (rest colls))]
                      (into [item] subset))
                    [[item]]))))

(defmethod extensions :paths
  [paths]
  (cartesian-product (map extensions paths)))

(defn can-move-to?
  [grid previous-node node]
  (and (nil? (get-in (:grid/cells grid)
                     (vec (reverse (:node/coords node)))
                     :out-of-bounds))
       (or (empty? (:nodes/forbidden grid))
           (not ((:nodes/forbidden grid) (:node/coords node))))
       (or (not previous-node)
           (not= [:underground-belt :output]
                 [(:node/type node) (:underground-belt/type node)])
           (not (some (fn [coord]
                        (let [middle-node (get-in (:grid/cells grid) (vec (reverse coord)))]
                          (or (and (= :underground-belt (:node/type middle-node))
                                   (not= [0 0]
                                         (mapv *
                                               (:node/direction node)
                                               (:node/direction middle-node))))
                              (and (not (empty? (:nodes/forbidden grid)))
                                   ((:nodes/forbidden grid) (:node/coords middle-node))))))
                      (let [d (:node/direction previous-node)]
                        (loop [coords []
                               coord   (mapv + (:node/coords previous-node) d)]
                          (if (= coord (:node/coords node))
                            coords
                            (recur (conj coords coord)
                                   (mapv + coord d))))))))))

(defn apply-path-ends
  [grid paths]
  (reduce (fn [grid path]
            (first (reduce (fn [[grid previous-node] node]
                             (if (and grid (can-move-to? grid previous-node node))
                               [(update grid :grid/cells assoc-in (vec (reverse (:node/coords node))) node)
                                node]
                               []))
                           [grid nil]
                           (:path/nodes path))))
          grid
          paths))

(defn print-grid
  [grid]
  (println "-----------------")
  (println (clojure.string/join "\n" (for [row (:grid/cells grid)]
                                       (apply str (for [cell row]
                                                    (draw cell)))))))

(defn path-solved?
  [indexed-start-end path]
  (let [start (:node/coords (first (:path/nodes path)))]
    (= (get indexed-start-end start)
       (:node/coords (last (:path/nodes path))))))

(defn unsolved-paths
  [grid]
  (let [indexed-start-end (into {} (:grid/start-ends grid))]
    (remove #(path-solved? indexed-start-end %) (:grid/paths grid))))

(defn solved-paths
  [grid]
  (let [indexed-start-end (into {} (:grid/start-ends grid))]
    (filter #(path-solved? indexed-start-end %) (:grid/paths grid))))


(defn solves?
  [grid start-ends]
  (let [endpoints (->> grid
                       :grid/paths
                       (map :path/nodes)
                       (map (juxt (comp :node/coords first)
                                  (comp :node/coords last)))
                       set)]
    (and (= start-ends endpoints)
         (->> grid
              :grid/paths
              (map :path/nodes)
              (every? #( ;;(= :transport-belt (-> % last :node/type))
                        or (= [0 -1] (-> % last :node/direction))
                        (= [0 1] (-> % last :node/direction))
                        ))))))

(defn unitize
  [[a b]]
  [(cond (< a 0) -1
         (= a 0) 0
         :else 1)
   (cond (< b 0) -1
         (= b 0) 0
         :else 1)])

(defn score
  [grid]
  (let [{:keys [grid/start-ends]} grid
        indexed-start-end         (into {} start-ends)]
    (+ ;;(* -1000 (count (solved-paths grid)))
       (->> grid
            :grid/paths
            (map (comp count :path/nodes))
            (reduce +))

       (->> grid
            :grid/paths
            (map :path/nodes)
            (map (fn [path-nodes]
                   (let [end-coord (get indexed-start-end (:node/coords (first path-nodes)))]
                     (let [path-end-node  (last path-nodes)
                           path-end-coord (:node/coords path-end-node)]
                       (- (Math/pow (reduce + (mapv +
                                                    (unitize (mapv - end-coord path-end-coord))
                                                    (:node/direction path-end-node)))
                                    2))))))
            (reduce +))

       (->> grid
            :grid/paths
            (map :path/nodes)
            (map (fn [path-nodes]
                   (let [start     (:node/coords (first path-nodes))
                         end-coord (get indexed-start-end start)]
                     (let [path-end-coord (:node/coords (last path-nodes))
                           d              (mapv - path-end-coord end-coord)]
                       (Math/pow (reduce + (map * d d)) 2)))))
            (reduce +)))))

(defmethod extensions :grid
  [grid]
  (let [solved   (solved-paths grid)
        unsolved (unsolved-paths grid)
        grids    (remove nil?
                         (for [paths (->> (map  #(concat solved %) (extensions unsolved))
                                          (map (fn [paths]
                                                 [(score (assoc grid :grid/paths paths)) paths]))
                                          (sort-by first)
                                          (map second))
                               :when (and (seq paths)
                                          (apply-path-ends grid paths))]
                           (assoc grid :grid/paths paths)))]
    ;;    (run! print-grid grids)
    grids))

(defn grid
  [w h start-ends start-nodes]
  {:entity/type     :grid
   :grid/start-ends (set start-ends)
   :grid/cells      (vec (repeat h (vec (repeat w nil))))
   :grid/paths      (mapv (fn [node]
                            {:entity/type :path :path/nodes [node]})
                          start-nodes)})



(def display (atom nil))

(defonce counter (atom 0))

(defn next?
  [n]
  (= 0 (mod (swap! counter inc) n)))

(defn solve
  [{:keys [grid/start-ends] :as grid}]
  (print-grid grid)
  (loop [candidates [grid]
         rejects    nil]

    (let [n          2
          rejects    (vec (concat rejects (drop n candidates)))
          candidates (take n candidates)
          solutions  (filter #(solves? % start-ends) candidates)]
;;     (prn (count rejects))
      (run! #(print-grid (apply-path-ends % (:grid/paths %))) (take 1 candidates))
      (cond (seq solutions)
            solutions
            (seq candidates)
            (recur (->> (pmap extensions (remove #(solves? % start-ends) candidates))
                        (apply concat)
                        (map (fn [grid]
                               [(score grid) grid]))
                        (sort-by first)
                        (map second))
                   rejects)
            (seq rejects)
            (recur rejects nil)))))

(defn factory
  [coords recipe]
  {:entity/type    :node
   :node/type      :assembling-machine-2
   :node/coords    coords
   :factory/recipe recipe})

(defn inserter
  [coords direction]
  {:entity/type    :node
   :node/type      :fast-inserter
   :node/coords    coords
   :node/direction direction})

(defn stamp
  [grid entity]
  (case [(:node/type entity)]
    [:assembling-machine-2] (reduce (fn [grid [x y]]
                                    (assoc-in grid `[:grid/cells ~@(reverse (mapv + [x y] (:node/coords entity)))] entity))
                                  grid
                                  (for [x (range 3)
                                        y (range 3)]
                                    [x y]))

    [:fast-inserter]      (assoc-in grid `[:grid/cells ~@(reverse (:node/coords entity))] entity)))

#_(recipe "fast-transport-belt")
(defn recipe
  ([]
   (recipe "fast-underground-belt"))
  ([name]
   (reverse (remove #{"copper-ore" "iron-ore" "copper-plate" "iron-plate" "petroleum-gas" "coal"}
                    (distinct (recipes/sorted-recipe-order name))))))

(defn distinct-by [f coll]
  (let [groups (group-by f coll)]
    (map #(first (second %)) groups)))

(defonce ids (atom 0))
(defn id! [] (swap! ids inc))

(defn blueprint-direction
  [[x y]]
  (case [x y]
    [1 0]  2 ;; 3
    [0 1]  4
    [0 -1] 0
    [-1 0] 6))

(defn blueprint-direction-inserter
  [[x y]]
  (case [x y]
    [1 0]  6 ;; 3
    [0 1]  0
    [0 -1] 4
    [-1 0] 2))

(defn blueprint-entity
  [node]
  {:pre [node]}
  (let [coords (:node/coords node)
        coords (if (= :assembling-machine-2 (:node/type node))
                 (mapv + coords [1 1])
                 coords)]
    (merge {"entity_number" (id!)
            "name"          (name (:node/type node))
            "position" {"x" (first coords)
                        "y" (second coords)}}
           (if-let [direction (:node/direction node)]
             {"direction"     (case (:node/type node)
                                :fast-inserter (blueprint-direction-inserter direction)
                                (blueprint-direction direction))})
           (if (= :underground-belt (:node/type node))
             {"type" (name (:underground-belt/type node))})
           (if (= :assembling-machine-2 (:node/type node))
             {"recipe" (:factory/recipe node)}))))

(defn grid-entities
  [grid]
  (->> (distinct-by :node/coords (remove nil? (apply concat (:grid/cells grid))))
       (map blueprint-entity)))

;; (defn blueprint
;;   [grid]
;;   (recipes/blueprint! (grid-entities (apply-path-ends grid (:grid/paths grid)))))

;; (defn ingredients
;;   [recipe-name]
;;   (-> (recipes/read-recipes)
;;       (recipes/recipe recipe-name)
;;       recipes/ingredients))

(defn assign-slots
  [requests & {:keys [remaining]}]
  (reduce (fn [[assignments unassigned] request]
            (let [space (if remaining
                          3 2)
                  output (get assignments (first request))
                  input  (get assignments (second request))]

              (if (or (= (count input) space)
                      (= (count output) space))
                ;; TODO missing assignment
                [assignments (conj unassigned request)]
                [(-> assignments
                     (update (first request) conj request)
                     (update (second request) conj request))
                 unassigned])))
          [{} []]
          requests))

(defn indexes
  [needle haystack]
  (keep-indexed #(when (= %2 needle) %1) haystack))

(def edges
  [[0 0]
   [3 0]
   [6 0]])

(defn delta
  [separation i]
  (let [n 20]
    (mapv (fn [s] (* s separation)) [(mod i n) (int (/ i n))])))

(defn assign-coords
  [offset separation y assignments]
  (distinct (reduce (fn [paths [from path-indexes]]
                      (concat paths (map (fn [[i j]]
                                           (let [ii      (first (indexes [i j] (get assignments i)))
                                                 jj      (first (indexes [i j] (get assignments j)))
                                                 edge-ii (get edges ii)
                                                 edge-jj (get edges jj)]
                                             (let [ix (delta separation i)
                                                   jx (delta separation j)]
                                               [(mapv + offset ix [0 y] edge-ii)
                                                (mapv + offset jx [0 y] edge-jj)])))
                                         path-indexes)))
                    []
                    assignments)))

(defn recipe-paths
  [offset separation recipe-name & {:keys [remaining]}]
  (let [ordered               (into {} (map-indexed #(vector %2 {:index %1 :ingredients (recipes/ingredients %2)}) (recipe recipe-name)))
        deps                  (merge ordered
                                     {"iron-plate"    {:index (+ 0 (count ordered))}
                                      "copper-plate"  {:index (+ 1 (count ordered))}
                                      "coal"          {:index (+ 2 (count ordered))}
                                      "plastic-bar"   {:index (+ 3 (count ordered))}
                                      "petroleum-gas" {:index (+ 4 (count ordered))}
                                      "sulfur" {:index (+ 5 (count ordered))}
                                      "water" {:index (+ 6 (count ordered))}}
                                     )

        factories             (reduce (fn [deps [output details]]
                                        (assoc deps output (assoc details :ingredient-indexes (map (fn [ingredient]
                                                                                                     (:index (get deps ingredient)))
                                                                                                   (:ingredients details)))))
                                      deps
                                      deps)
        slots                 (->> (mapcat (fn [[output details]]
                                             (map (fn [input]
                                                    [input (:index details)])
                                                  (:ingredient-indexes details)))
                                           factories)
                                   (group-by first)
                                   (mapcat (fn [[start ends]]
                                             (map #(vector start %) (map second ends))))
                                   (sort-by first))
        [assigned unassigned] (assign-slots slots)
        [assigned unassigned] (if remaining
                                (assign-slots unassigned :remaining remaining)
                                [assigned unassigned])]
    (prn :unassigned unassigned)
    [(assign-coords offset separation 0 assigned)
     deps]))

(defn spec
  ([paths separation offset recipe-names]
   (prn paths)
   (let [paths paths]
     (-> (grid 120 45
               (set paths)
               (mapv (fn [[start _]] (transport-belt start
                                                     ;; TODO direction
                                                     (cond (= (start 1) 5)
                                                           [0 -1]
                                                           (= (start 1) 10)
                                                           [0 1]
                                                           (= (start 1) 25)
                                                           [0 -1]
                                                           :else
                                                           [0 1]
                                                           )))
                     paths))
         (#(reduce (fn [grid i]
                     (let [ ;;d [(* i separation) 0]
                           d (delta separation i)]
                       (-> grid
                          (stamp (factory (mapv + offset d) (nth recipe-names i)))
                           ;; (stamp (inserter (mapv + offset d [0 3]) [0 -1]))
                           ;; (stamp (inserter (mapv + offset d [1 3]) [0 -1]))
                           ;; (stamp (inserter (mapv + offset d [2 3]) [0 -1]))

                           ;; (stamp (inserter (mapv + offset d [0 (- 3 4)]) [0 1]))
                           ;; (stamp (inserter (mapv + offset d [1 (- 3 4)]) [0 1]))
                           ;; (stamp (inserter (mapv + offset d [2 (- 3 4)]) [0 1]))


                           ;; (stamp (inserter (mapv + offset d [-1 (+ 3 -1)]) [1 0]))
                           ;; (stamp (inserter (mapv + offset d [-1 (+ 3 -2)]) [1 0]))
                           ;; (stamp (inserter (mapv + offset d [-1 (+ 3 -3)]) [1 0]))

                           ;; (stamp (inserter (mapv + offset d [3 (+ 3 -1)]) [-1 0]))
                           ;; (stamp (inserter (mapv + offset d [3 (+ 3 -2)]) [-1 0]))
                           ;; (stamp (inserter (mapv + offset d [3 (+ 3 -3)]) [-1 0]))

                           )))
                   %
                   (range (count recipe-names))))))))

(defn factory-layout-spec
  ([paths separation offset recipe-names]
   (prn paths)
   (let [paths paths]
     (-> (grid 120 45
               (set paths)
               (mapv (fn [[start _]] (transport-belt start
                                                     (cond (= (start 1) 5)
                                                           [0 -1]
                                                           (= (start 1) 10)
                                                           [0 1]
                                                           (= (start 1) 25)
                                                           [0 -1]
                                                           :else
                                                           [0 1]
                                                           )))
                     paths))
         (#(reduce (fn [grid i]
                     (let [d (delta separation i)]
                       (-> grid
                          (stamp (factory (mapv + offset d) (nth recipe-names i))))))
                   %
                   (range (count recipe-names))))))))


#_(recipe)

;; (:grid/paths (spec))
;; (def s (first (solve (spec))))

#_(print-grid (apply-path-ends (spec) (:grid/paths (spec))))



(defonce solutions (atom []))

(defn factory-layout
  [recipe-name & {:keys [exclude]}]
  (let [offset       [0 0]
        separation   5
        [_ deps]     (recipe-paths offset separation recipe-name)
        recipe-names (remove exclude (->> deps
                                          (sort-by (comp :index second)) (map first)))]

    (prn :recipe-names recipe-names)
    (prn :grid-entities (grid-entities (factory-layout-spec nil separation offset recipe-names)))
    (grid-entities (spec nil separation offset recipe-names))))

(defn flip-y-blueprint-direction
  [x]
  (case x
    4 0
    0 4
    x))

(defn flip-x-blueprint-direction
  [x]
  (case x
    2 6
    6 2
    x))


(defn- flip-x-positions
  [entities]
  (->> entities
       (map (fn [entity]
              (-> entity
                  (update "position" #(update % "x" (fn [x] (- x))))
                  (update "direction" flip-x-blueprint-direction))))))

(defn- flip-y-positions
  [entities]
  (->> entities
       (map (fn [entity]
              (-> entity
                  (update "position" #(update % "y" (fn [y] (- y))))
                  (update "direction" flip-y-blueprint-direction))))))

(defn factory-paths
  [recipe-name & {:keys [remaining]}]
  (let [offset       [0 0]
        separation   14
        [paths deps] (recipe-paths offset separation recipe-name :remaining remaining)
        dimensions   [(+ 5 (apply max (flatten paths))) 10]
        paths        paths]
    (prn :paths paths :dimensions dimensions :deps (->> deps (sort-by (comp :index second)) (map first)))
    (let [grid (-> (grid (dimensions 0) (dimensions 1)
                         paths
                         (mapv (fn [[start _]] (transport-belt start [0 1]))
                               paths))
                  (solve)
                  first
                   )]
      (println "Solution:")
      (let [solution (apply-path-ends grid (:grid/paths grid))]
        (print-grid solution)

        (let [entities (if remaining
                         (flip-x-positions (grid-entities solution))
                         (grid-entities solution))]
          entities)
        (swap! solutions conj solution)
        nil))))



(defn -main
  [& args]
  (println "Solve!")
  (let [recipe-name           "roboport"
        separation            5
        offset                [0 0]
        n                     2
        [unsolved-paths deps] (recipe-paths offset separation recipe-name)
        recipe-names          (->> deps (sort-by (comp :index second)) (map first))]
    (prn "unsolved:" unsolved-paths)
    (prn "recipes:" recipe-names)
    (let [[grid solution-paths] (loop [solved-paths   nil
                                       unsolved-paths unsolved-paths]

                                  (let [solving-paths  (take n unsolved-paths)
                                        grid           (apply-path-ends (spec solving-paths separation offset recipe-names)
                                                                        solved-paths)
                                        forbidden      (set (apply concat (drop n unsolved-paths)))
                                        solutions      (solve (assoc grid :nodes/forbidden forbidden))
                                        solution-paths (:grid/paths (first solutions))
                                        solved-grid    (apply-path-ends grid solution-paths)]
                                    (prn "solving: " solving-paths)

                                    (println "Solution:" (count unsolved-paths) (count solution-paths))
                                    (print-grid solved-grid)

                                    (if-let [rest-paths (seq (drop n unsolved-paths))]
                                      (recur (concat solved-paths solution-paths) rest-paths)
                                      [solved-grid (concat solved-paths solution-paths)])))]
      (println "Solution:" (count unsolved-paths) (count solution-paths))
      (print-grid grid))))

#_ (def solved (first (-main)))
#_ (grid-entities (apply-path-ends solved (:grid/paths solved)))
#_ (blueprint (apply-path-ends solved (:grid/paths solved)))
