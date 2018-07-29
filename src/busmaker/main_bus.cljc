(ns busmaker.main-bus
  (:require [busmaker.bus :as bus]
            [busmaker.recipe-data :as recipe-data]
            [busmaker.recipes :as recipes :refer [fluid?]]
            [busmaker.templates :as templates
             :refer [blueprint-direction
                     blueprint-direction-inserter
                     underground-belt
                     inserter
                     factory
                     factory-line
                     transport-belt
                     template
                     input-tap-indexes
                     output-tap-indexes
                     direction-blueprint]]))


(defn rotate-90
  [[x y]]
  [(- y) x])

(defn entity-direction
  [entity]
  (when-let [dir (get-in entity ["direction"])]
    (direction-blueprint dir)))


(defn entity-coord
  [entity]
  (vector (int (Math/floor (double (get-in entity ["position" "x"]))))
          (int (Math/floor (double (get-in entity ["position" "y"]))))))

(defn entity-coords
  ([entity]
   (entity-coords entity (entity-direction entity)))
  ([entity dir]
   (let [coord (entity-coord entity)
         dir   (let [[x y] (rotate-90 dir)]
                 [(Math/abs x)
                  (Math/abs y)])]
     (case (get entity "name")
       "splitter" [coord
                   (mapv +
                         coord
                         dir)]
       entity
       [coord]))))

(defn recipe
  [recipes recipe-name]
  (first (filter (comp #{recipe-name} :name) recipes)))

(defn pipe-to-ground
  [& {:keys [x y direction type] :or {direction [0 -1]
                                      x         0
                                      y         0}}]
  {"direction"     (blueprint-direction direction)
   "name"          "pipe-to-ground"
   "position"      {"x" x
                    "y" y}})

(defn splitter
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  
  (let [[dx dy] (rotate-90 direction)]
    [{"direction"     (blueprint-direction direction)
      "name"          "splitter"
      "position"      {"x" (+ (* (Math/abs dx) 0.5)
                              x)
                       "y" (+ (* (Math/abs dy) 0.5)
                              y)}}]))

(defn long-handed-inserter
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  {"direction"     (blueprint-direction-inserter direction)
   "name"          "long-handed-inserter"
   "position"      {"x" x
                    "y" y}})

(defn pipe
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  {"name"          "pipe"
   "position"      {"x" x
                    "y" y}})

(defn pipe-bus
  [& {:keys [x y height] :or {x 0
                              y 0
                              height 1}}]
  (for [i (range height)]
    (pipe :x x :y (+ y i))))

(defn bus
  [& {:keys [x y height] :or {x 0
                              y 0
                              height 1}}]
  (apply concat
         (for [i (range height)]
           (transport-belt :x x
                           :y (+ y i)))))

(defn pipe-input-down-tap
  [& {:keys [x y input-index input-extension x-extension y-extension] :or {x 0 y 0 input-index 0 input-extension 0 x-extension 0 y-extension 0}}]
  (let [n (+ (dec (+ (* 2 input-index) 4))
             x-extension)]
    `[~@(for [i (range y-extension)]
          (pipe :x x
                :y (+ y i)))]))

(defn pipe-input-tap-lhs
  [& {:keys [x y input-index input-extension x-extension y-extension] :or {x 0 y 0 input-index 0 input-extension 0 x-extension 0 y-extension 0}}]
  [(pipe-to-ground :x x
                   :y y
                   :direction [1 0])

   (pipe :x (inc x)
         :y y)

   (pipe-to-ground :x (+ x 2)
                   :y y
                   :direction [-1 0])])

(defn pipe-output-tap
  [& {:keys [x y output-index
             output-extension
             y-extension] :or {x 0 y 0 output-index 0 output-extension 0
             y-extension 0}}]
  `[~(pipe-to-ground :x (dec x)
                     :y y
                     :direction [1 0])
    ~(pipe :x x
           :y y)

    ~(pipe-to-ground :x (inc x)
                     :y y
                     :direction [-1 0])
    ~@(for [i (range (+ (* 2 output-index)
                        1))]
        (pipe :x x
              :y (+ y 1 i)))])

(defn input-tap
  [& {:keys [x y input-index bus-index bus-width]
      :or {x           0
           y           0
           input-index 0
           bus-index   0
           bus-width   1}}]
  (when bus-index
    (let [n (* (+ 2 bus-width) bus-index)]
      `[~@(underground-belt :x (+ x n -5) :y (- y 5) :direction [-1 0] :type "input")
        ~@(transport-belt :x (+ x n -4) :y (- y 5) :direction [-1 0])
        ~@(apply concat
                 (for [i (range n)
                       :when (#{0 1} (mod i (+ 2 bus-width)))]
                   (case (mod i (+ 2 bus-width))
                     0 (underground-belt :x (+ x i -5) :y (- y 5) :direction [-1 0] :type "input")
                     1 (underground-belt :x (+ x i -5) :y (- y 5) :direction [-1 0] :type "output"))))
        ~@(apply concat
                 (for [k (range bus-width)]
                   (splitter :x (+ x
                                   (* (+ 2 bus-width) bus-index)
                                   -4
                                   k)
                             :y (+ y -4
                                   k))))])))

(defn output-tap-common
  [& {:keys [x y output-index y-extension] :or {x 0
                                                y 0
                                                output-index 0}}]
  `[~@(inserter  :x (- x 8) :y (- y 3 (- y-extension)) :direction [0 -1])
    ~@(apply concat
             (for [i (range (inc y-extension))]
               (transport-belt :x (- x 8) :y (+ (- y 4)
                                                i) :direction [0 -1])))

    
    
    ~@(transport-belt :x (- x 8) :y (- y 5) :direction [1 0])
    ~@(splitter :x (- x 7) :y (- y 6) :direction [1 0])
    ~@(transport-belt :x (- x 6) :y (- y 6) :direction [0 1])
    ~@(transport-belt :x (- x 7) :y (- y 5) :direction [1 0])
    ~@(transport-belt :x (- x 6) :y (- y 5) :direction [1 0])
    ~@(transport-belt :x (- x 5) :y (- y 5) :direction [1 0])
    ~@(transport-belt :x (- x 4) :y (- y 5) :direction [1 0])
    ~@(transport-belt :x (- x 3) :y (- y 5) :direction [1 0])])

(defn output-tap
  [& {:keys [x y output-index y-extension bus-width] :or {x 0
                                                          y 0
                                                          output-index 0
                                                          bus-width 1}}]
  (let [n (* (+ 2 bus-width) output-index)]
    `[~@(output-tap-common :x x :y y :output-index output-index :y-extension y-extension)

      ~@(transport-belt :x (- x 2) :y (- y 5) :direction [1 0])

      ~@(apply concat
               (for [i (range 1 (+ 3 n))
                     :when (#{0 1} (mod i (+ 2 bus-width)))]
                 (if (>= i n)
                   (case (mod i (+ 2 bus-width))
                     0 (underground-belt :x (+ x i -2) :y (- y 5) :direction [1 0] :type "output")
                     1 (transport-belt :x (+ x i -2) :y (- y 5) :direction [1 0]))
                   (case (mod i (+ 2 bus-width))
                     0 (underground-belt :x (+ x i -2) :y (- y 5) :direction [1 0] :type "output")
                     1 (underground-belt :x (+ x i -2) :y (- y 5) :direction [1 0] :type "input")))))
      ~@(apply concat
               (for [k (range (dec bus-width))]
                 (splitter :x (+ x n k)
                           :y (+ y -6 (- k)))))]))

(defn output-tap-extension
  [& {:keys [x y output-index y-extension bus-width] :or {x 0
                                                          y 0
                                                          output-index 0
                                                          bus-width 1}}]
  (let [n (* (+ 2 bus-width) output-index)]
    `[~@(output-tap-common :x x :y y :output-index output-index :y-extension y-extension :bus-width bus-width)]))

(defn ingredients
  [recipe-name facility]
  (let [recipe-name (if (#{"petroleum-gas" "heavy-oil" "light-oil"} recipe-name)
                      "basic-oil-processing" #_"advanced-oil-processing"
                      recipe-name)]
    (-> recipe-data/recipes
        (recipe recipe-name)
        recipes/recipe-ingredients
        (cond->
            (#{"steel-furnace" "stone-furnace"} facility) (conj "coal")))))

(defn ingredient-height
  [ingredient facility bus-width]
  {:pre [(seq facility)]}
  (let [n (count (ingredients ingredient facility))]
    (+ (dec bus-width) ;; input splitters
       (dec bus-width) ;; output splitters
       (cond (#{"lab"} facility)                                         12
             (#{"steel-furnace" "stone-furnace"} facility)               8
             (#{"electric-furnace"} facility)                            12
             (#{"oil-refinery"} facility)                                16
             (#{"assembling-machine-1" "assembling-machine-2"} facility) (+ 11 (if (> n 3)
                                                                                 (+ (- n 3) 1)
                                                                                 0))
             (#{"chemical-plant"} facility)                              12
             :else                                                       (do
                                                                           #?(:cljs (enable-console-print!))
                                                                           #?(:cljs (.log js/console (ex-info "Unknown ingredient height" {:ingredient ingredient
                                                                                                                                           :facility facility})))
                                                                           (throw (ex-info "Unknown ingredient height" {:ingredient ingredient
                                                                                                                        :facility facility})))))))

(defn facility-dy
  [ingredient facility bus-width]
  (let [n (count (ingredients ingredient facility))]
    (+ (dec bus-width) ;; input splitters
       
;;       (dec bus-width) ;; output splitters
       (cond (#{"chemical-plant"} facility)                              4
             (#{"lab"} facility)                                         5
             (#{"steel-furnace" "stone-furnace"} facility)                               1
             (#{"oil-refinery"} facility)                                5
             (#{"electric-furnace"} facility)                            5
             (#{"assembling-machine-1" "assembling-machine-2"} facility) (+ 4 (if (> n 3)
                                                                                0
                                                                                0))
             :else                                                       0))))

(defn main-bus-line
  [& {:keys [x y n-factories facility recipes buses input-indexes bus-width]}]
  (let [ingredient (first recipes)]
    (filter identity
            (map #(assoc %1 "entity_number" (inc %2))
                 (-> []
                     (concat (templates/template :factory-line
                                                 :n-factories n-factories :x x :y y :recipes recipes :facility facility))

                     (concat (apply concat (for [[bus-ingredient i] buses]
                                             (let [x  (+ x 6)
                                                   y  (+ y 4 (- (ingredient-height ingredient facility bus-width))
                                                         (cond (#{"oil-refinery"} facility) 0
                                                               :else 0))
                                                   dy (facility-dy ingredient facility bus-width)]
                                               (apply concat
                                                (for [j (range bus-width)]
                                                  (if (fluid? bus-ingredient)
                                                    (pipe-bus :x (+ x (* i (+ bus-width 2)) j)
                                                              :y (+ y dy)
                                                              :height (ingredient-height ingredient facility bus-width))

                                                    (bus :x (+ x (* i (+ bus-width 2)) j)
                                                         :y (+ y dy)
                                                         :height (ingredient-height ingredient facility bus-width)))))))))

                     ;; RHS -- input tap (transport belt)
                     (concat (let [x                     (+ x 6)
                                   y                     (+ y 6)
                                   non-fluid-ingredients (map-indexed vector (sort (map buses (remove fluid? (ingredients ingredient facility)))))]
                               (concat (when (and (> (count non-fluid-ingredients) 3)
                                                  (#{"assembling-machine-1" "assembling-machine-2" "electric-furnace"} facility))
                                         (apply concat (for [i    (range n-factories)
                                                             :let [x (+ x -4 2 -5)
                                                                   y  (+ -5 y 3 -2 4)
                                                                   dx (* -6 i)]]
                                                         `[~(long-handed-inserter :x (+ x dx)
                                                                                  :y (- y 2)
                                                                                  :direction [0 -1])
                                                           ~@(inserter :x (+ x dx -1)
                                                                       :y (- y 2)
                                                                       :direction [0 -1])])))
                                       (apply concat
                                              (for [[input-index bus-index] non-fluid-ingredients]
                                                (if (>= input-index 3)
                                                  (let [y (+ y 7)]
                                                    (concat (input-tap :x (+ x 3) :y (+ y 3 (- input-index) -2) :input-index input-index :bus-index bus-index
                                                                       :bus-width bus-width)
                                                            
                                                            (apply concat
                                                                   (let [x  (+ x -4 2 -5)
                                                                         y  (+ -5 y 3 (- input-index) -2)]
                                                                     (for [i    (range n-factories)
                                                                           :let [dx (* -6 i)]]
                                                                       (concat (underground-belt :x (+ x dx)
                                                                                                 :y y
                                                                                                 :direction [-1 0]
                                                                                                 :type "output")
                                                                               (underground-belt :x (+ x dx -1)
                                                                                                 :y y
                                                                                                 :direction [-1 0]
                                                                                                 :type "input")))))))
                                                  (input-tap :x (+ x 3) :y (+ y 3 (- input-index) -1) :input-index input-index :bus-index bus-index :bus-width bus-width)))))))


                     ;; input pipe taps - RHS
                     (concat (apply concat (for [[output-recipe output-index] (input-tap-indexes ingredient)
                                                 :when                        (and (fluid? output-recipe)
                                                                                   (get buses output-recipe))]
                                             (let [tap-x (+ 4 (* 3 (get buses output-recipe)))
                                                   x     (+ x 2)
                                                   y     (+ y 6 (cond (#{"oil-refinery"} facility) 1
                                                                      :else                        0))]
                                               (conj (for [i (range tap-x)
                                                           :when (not= 2 (mod i 3))]

                                                       (pipe-to-ground :x (+ -1 (+ x i))
                                                                       :y (+ 2 -3 y (* 2 output-index))
                                                                       :direction (case (mod i 3)
                                                                                    0 [1 0]
                                                                                    1 [-1 0])))
                                                     (pipe :x (+ -1 x tap-x)
                                                           :y (+ -3 y (* 2 output-index)
                                                                 (cond (#{"oil-refinery"} facility) 2
                                                                       (#{"chemical-plant"} facility) 2
                                                                       (#{"assembling-machine-1" "assembling-machine-2"} facility) 2
                                                                       :else 0))))))))
                     ;; output pipe taps - RHS
                     (concat (apply concat (for [[output-recipe output-index] (output-tap-indexes ingredient)
                                                 ;; TODO output-tap-indexes should be based on facility + "advanced-oil-processing", not recipes ["heavy-oil","light-oil","petroleum-gas"]
                                                 :when                        (and (fluid? output-recipe)
                                                                                   (get buses output-recipe))]
                                             (let [tap-x (+ 4 (* 3 (get buses output-recipe)))
                                                   x (+ x 2)
                                                   y (+ y (cond (#{"oil-refinery"} facility) -2
                                                                :else -1))]
                                               (conj (for [i (range tap-x)
                                                           :when (not= 2 (mod i 3))]

                                                       (pipe-to-ground :x (+ -1 (+ x i))
                                                                       :y (+ y (- (* 2 output-index)))
                                                                       :direction (case (mod i 3)
                                                                                    0 [1 0]
                                                                                    1 [-1 0])))
                                                     (pipe :x (+ -1 x tap-x)
                                                           :y (+ y (- (* 2 output-index)))))))))

                     (cond->
                         ;; LHS - output tap (transport belt)
                         (not (fluid? ingredient))
                         (concat (apply concat (let [x (+ x 6)
                                                     y (+ y 6)
                                                     output-index (buses ingredient)]
                                                 (for [i     (range n-factories)
                                                       :let  [y-extension (cond (#{"steel-furnace" "stone-furnace"} facility) 1
                                                                                :else                         0)]
                                                       :when output-index]
                                                   (if (> i 0)
                                                     (output-tap-extension :x (+ x (* -6 i))
                                                                           :y (+ y -2 -1)
                                                                           :output-index output-index
                                                                           :y-extension y-extension
                                                                           :bus-width bus-width)
                                                     (output-tap :x (+ x (* -6 i))
                                                                 :y (+ y -2 -1)
                                                                 :output-index output-index
                                                                 :y-extension y-extension
                                                                 :bus-width bus-width))))))

                         ;; LHS fluid input tap
                         (some fluid? (ingredients ingredient facility))
                         (concat (apply concat (for [i                          (range n-factories)
                                                     [input-recipe input-index] (input-tap-indexes ingredient)
                                                     :let                       [dx (* i (cond (#{"oil-refinery"} facility) -8
                                                                                               :else                                         -6))
                                                                                 x (+ x 3 dx)
                                                                                 y (+ y 6 (cond (#{"oil-refinery"} facility) 1
                                                                                                :else 0))
                                                                                 args [:input-index input-index
                                                                                       :input-extension
                                                                                       (cond (#{"oil-refinery"} facility) 1
                                                                                             :else                        0)

                                                                                       :x-extension (cond (#{"oil-refinery"} facility) 1
                                                                                                          (#{"assembling-machine-1" "assembling-machine-2"} facility) 1
                                                                                                          :else 0)
                                                                                       :y-extension (+ 1 (* 2 input-index))]]]
                                                 `[~@(apply pipe-input-down-tap
                                                            :y (+ y -2)
                                                            :x (- x 5 (* 2 input-index)
                                                                  (cond (#{"chemical-plant"} facility) -1
                                                                        :else 0))
                                                            args)
                                                   ~@(apply pipe-input-tap-lhs
                                                            :y (+ y -1 (* 2 input-index))
                                                            :x (+ (- x 5 (* 2 input-index) 1
                                                                     (cond (#{"chemical-plant"} facility) -1
                                                                           :else 0)))
                                                            args)])))

                         ;; LHS fluid output tap
                         (fluid? ingredient)
                         (concat (apply concat (let [y (+ y 6 (cond (#{"oil-refinery"} facility) -1
                                                                    :else 0))
                                                     x (+ x 4 (cond (#{"oil-refinery"} facility) -1
                                                                    (#{"chemical-plant"} facility) -1
                                                                    :else 0))]
                                                 (for [i (range n-factories)
                                                       [output-recipe output-index] (output-tap-indexes ingredient)
                                                       :let [dx (* i (cond (#{"oil-refinery"} facility) -8
                                                                           :else -6))]]
                                                   (pipe-output-tap :x (+ (- x 4 (* 2 output-index)) dx)
                                                                    :y (+ y -7 (- (* 2 output-index)))
                                                                    :output-index output-index
                                                                    :y-extension (cond (#{"chemical-plant"} facility) 1
                                                                                       :else 0))))))))
                 (iterate inc 0)))))

(defn main-bus
  [factories bus-outputs]
  (let [bus-index (into {} (map-indexed (comp vec reverse vector) bus-outputs))
        bus-width 6]
    (apply concat (:output (reduce (fn [{:keys [x y] :as acc} factory]
                                     (let [{:keys [facility n recipes]} factory
                                           ;; TODO fix (first recipes)
                                           height             (ingredient-height (first recipes) facility bus-width)
                                           input-indexes      (map bus-index (ingredients (first recipes) facility))]
                                       (-> acc
                                           (update :output conj
                                                   (main-bus-line :buses bus-index
                                                                  :bus-width bus-width
                                                                  :recipes recipes
                                                                  :x x
                                                                  :y (+ y (cond (#{"steel-furnace" "stone-furnace"} facility) 4
                                                                                (#{"chemical-plant" "assembling-machine-1" "assembling-machine-2"} facility) 1
                                                                                :else 0))
                                                                  :n-factories n
                                                                  :facility facility
                                                                  :input-indexes input-indexes))
                                           (update :y - height)
                                           ;;                                         (update :x + (+ 9 (* 3 (count bus-index))))
                                           )))
                                   {:x 0 :y 0}
                                   factories)))))

(defn normalize
  [entities]
  (let [splitters     (filter (comp #{"splitter"} #(get % "name")) entities)
        splitter-pos  (set (->> splitters
                                (mapcat entity-coords)))
        
        non-splitters (->> entities
                           (remove (comp #{"splitter"} #(get % "name")))
                           (remove (comp splitter-pos entity-coord)))

        entities      (concat splitters non-splitters)]

    (vals (into {} (map (juxt #(vector (int (Math/round (double (get-in % ["position" "y"]))))
                                       (int (Math/round (double (get-in % ["position" "x"])))))
                              identity)
                        entities)))))
