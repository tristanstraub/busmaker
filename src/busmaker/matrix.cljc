(ns busmaker.matrix
  (:require [busmaker.templates :as templates]
            [busmaker.recipe-data :as recipe-data]
            [busmaker.recipes :as recipes]))

(defn factory
  [& {:keys [x y facility recipe] :or {x 0
                                       y 0}}]
  [{"name"     facility
    "recipe"   recipe
    "position" {"x" x
                "y" y}}])

(defn matrix-height
  [tree]
  (if (empty? tree)
    1
    (reduce + (map matrix-height (vals tree)))))

(defn facility-height
  [facility]
  (cond (#{"lab"} facility)                                         3
        (#{"steel-furnace" "stone-furnace"} facility)               2
        (#{"electric-furnace"} facility)                            3
        (#{"oil-refinery"} facility)                                5
        (#{"assembling-machine-1" "assembling-machine-2"} facility) 3
        (#{"chemical-plant"} facility)                              3
        :else                                                       3))

(defn facility-width
  [facility]
  (facility-height facility))

(defn rows
  [tree]
  (vec (apply concat (for [[output inputs] tree
                           :let [input-rows (rows inputs)]]
                       `[[~output ~@(first input-rows)]
                         ~@(for [input-row (rest input-rows)]
                             `[nil ~@input-row])]))))

(defn max-facility-dimension
  [row]
  (or (->> (remove nil? row)
           (map recipe-data/factory-type)
           (map facility-height)
           (apply max))
      0))

#_(rows '(["advanced-circuit" (["electronic-circuit"
                              (["iron-plate" nil]
                               ["copper-cable" (["copper-plate" nil])])]
                             ["plastic-bar" (["petroleum-gas" nil])]
                             ["copper-cable" (["copper-plate" nil])])]))

#_(map row-height (rows '(["advanced-circuit" (["electronic-circuit"
                                              (["iron-plate" nil]
                                               ["copper-cable" (["copper-plate" nil])])]
                                             ["plastic-bar" (["petroleum-gas" nil])]
                                             ["copper-cable" (["copper-plate" nil])])])))

;; (tree-row-height '(["petroleum-gas" nil]))

(defn build-row
  [row]
;;   (println :row row )
;;   (reduce (fn [entities recipe]
;;             (concat entities
;; ))
;;           nil
;;           (remove nil? row))
  
  #_  [(+ y (row-height (first (rows [[recipe subtree]]))))
       (concat entities
               (let [x        (* 6 x)
                     facility (recipe-data/factory-type recipe)]
                 (concat (templates/factory :facility facility
                                            :x x
                                            :y y
                                            :recipe recipe)

                         (when (empty? subtree)
                           (apply concat
                                  (for [i (range (- width x))]
                                    (templates/transport-belt :x (+ x i 3)
                                                              :y y
                                                              :direction [-1 0]))))

                         (when (empty? subtree)
                           (templates/inserter :x (+ 2 x)
                                               :y y
                                               :direction [-1 0]))
                        
                         (when (empty? subtree)
                           (templates/inserter :x (+ 3 width)
                                               :y y
                                               :direction [-1 0]))

                         (apply concat
                                (for [k (range (dec j))]
                                  (templates/transport-belt :x (- x k 3)
                                                            :y y
                                                            :direction [-1 0])))

                        
                         (when (< 0 j)
                           (apply concat
                                  (let [x (- x 3)]
                                    (for [i (range (- (* 3 last-height)
                                                      2
                                                      ))]
                                      (templates/transport-belt :x (- x j -1)
                                                                :y (- y i))))))

                         (let [f-width (recipe-data/factory-width (recipe-data/factory-type recipe))]
                           (if (= 2 f-width)
                             (templates/long-handed-inserter
                             
                              :x (+ (- x 2) (- (recipe-data/factory-width (recipe-data/factory-type recipe)))
                                    3)
                              :y y
                              :direction [-1 0])
                             (templates/inserter
                             
                              :x (+ (- x 2) (- (recipe-data/factory-width (recipe-data/factory-type recipe)))
                                    3)
                              :y y
                              :direction [-1 0])))
                        

                         ;; (apply concat
                         ;;        (for [i (range (- (recipe-data/factory-width (recipe-data/factory-type recipe))
                         ;;                          3))]
                         ;;          (templates/transport-belt :x (+ 2 x)
                         ;;                                    :y y
                         ;;                                    :direction [-1 0])))


                         (when (< 0 j)
                           (templates/inserter :x (- x 2 j)
                                               :y (- y (* 3 last-height)
                                                     -2)
                                               :direction [0 -1]))
                         ))

               (matrix-bus subtree width (inc x) y))
       (+ last-height
          (row-height [[recipe subtree]])
          ;;                           (matrix-height subtree)
          )])

(defn facility-type-offset
  [facility]
  (cond (#{"oil-refinery"} facility) [3 2]
        (#{"stone-furnace"} facility) [0 0]
        :else [1 1]))

(defn pad*
  [coll n]
  (take n (concat coll (repeat nil))))

(defn pad
  [m]
  (let [width (apply max (map count m))]
    (mapv #(pad* % width) m)))

(defn transpose
  [m]
  (apply map vector (pad m)))

(defn transport-between
  [{:keys [from to]}]
  )

(defn ingredient-index
  [rows i j]
  (loop [j j
         index 0]
    (cond (get-in rows [j (dec i)]) [j index]
          (= j 0)                   [j 0]
          (not (get-in rows [j i])) (recur (dec j) index)
          :else                     (recur (dec j) (inc index)))))

(defn grid-position
  [rows i j]
  (let [columns (transpose rows)]
    [(reduce + (map #(+ 3 %)  (map max-facility-dimension (take i columns))))
     (reduce + (map #(+ 7 %) (map max-facility-dimension (take j rows))))]))

(defn grid-dimensions
  [rows i j]
  (let [[x0 y0] (grid-position rows i j)
        [x1 _]  (grid-position rows (inc i) j)
        [_ y2]  (grid-position rows i (inc j))]
    [(- x1 x0)
     (- y2 y0)]))

(defn horizontal-belt
  [rows x0 y0 x1 y1]
  (let [Dx (- x1 x0)
        s  (if (< 0 Dx) 1 -1)]
    (->> (for [dx (range (inc (Math/abs Dx)))]
           (templates/transport-belt :x (+ x0 (* s dx))
                                     :y y0
                                     :direction [s 0]))
         (apply concat))))

(defn vertical-belt
  [rows x0 y0 x1 y1]
  (let [Dy (- y1 y0)
        s  (if (<= 0 Dy) 1 -1)]
    (->> (for [dy (range (inc (Math/abs Dy)))]
           (templates/transport-belt :x x0
                                     :y (+ y0 (* s dy))
                                     :direction [0 s]))
         (apply concat))))

#_(defn belt
  [rows [i0 j0] [i1 j1] & [{:keys [bottom-margin
                                   top-margin
                                   left-margin
                                   right-margin]
                            :or   {bottom-margin 0
                                   top-margin    0
                                   left-margin   0
                                   right-margin  0}}]]
  (let [[x0 y0] (grid-position rows i0 j0)
        [x0 y1] (grid-position rows i1 j1)
        w       (reduce + (map #(second (grid-dimensions rows % j0)) (range i0 (inc i1))))
        h       (reduce + (map #(second (grid-dimensions rows i0 %)) (range j0 (inc j1))))]
    
    (concat (->> (for [dy (range (inc (- h bottom-margin top-margin)))]
                   (templates/transport-belt :x (+ x0 left-margin -1)
                                             :y (+ y0 dy top-margin)
                                             :direction [0 -1]))
                 (apply concat))
            (->> (for [dx (range (inc (- w left-margin right-margin)))]
                   (templates/transport-belt :x (+ x0 dx left-margin)
                                             :y (+ y0 (- h bottom-margin 1))
                                             :direction [-1 0]))
                 (apply concat)))))

(defn move
  [object d]
  (-> object
      (update-in ["position" "x"] + (d 0))
      (update-in ["position" "y"] + (d 1))))

(defn layout
  [tree-seq tree]
  (let [rows    (rows tree-seq)
        columns (transpose rows)]
    (->> (for [[j row]    (map-indexed vector rows)
               [i recipe] (map-indexed vector row)
               :when      recipe
               :let       [n-ingredients 3
                           [x y] (grid-position rows i j)
                           [w h] (grid-dimensions rows i j)
                           [w1 h1] (grid-dimensions rows (dec i) j)
                           facility (recipe-data/factory-type recipe) 
                           [dx dy] (facility-type-offset facility)
                           [j2 index] (ingredient-index rows i j)
                           [x1 y1] (grid-position rows i j2)
                           fh (facility-height facility)
                           recipe-1 (get (vec row) (dec i))
                           recipe-1-facility-type (if recipe-1 (recipe-data/factory-type recipe-1))
                           fh-1 (if recipe-1 (facility-height recipe-1-facility-type))]]
           (do (println recipe (drop 1 (remove nil? (get (vec columns) (inc i)))))
               (concat (templates/factory :facility facility
                                          :x (+ x dx)
                                          :y (+ y dy)
                                          :matrix/width (facility-width recipe)
                                          :recipe recipe)

                       (concat (when (not= [i j] [0 0])
                                 (if (< 0 index)
                                   (horizontal-belt rows
                                                    (- x 2)
                                                    y
                                                    (- x fh index)
                                                    y)
                                   (horizontal-belt rows
                                                    (- x 2)
                                                    y
                                                    (+ x (- w1) fh-1 1)
                                                    y)))
                               (if (< 0 index)
                                 (vertical-belt rows
                                                (- x index (- w1 fh)) #_(- index n-ingredients 2)
                                                y
                                                (- x index (- w1 fh))
                                                (+ y1 fh 1)))
                               (when (not= 0 i)
                                 (templates/inserter :x (dec x)
                                                     :y y
                                                     :direction [-1 0]))
                               (when (= 0 index)
                                 (templates/inserter :x (+ x (- w1) fh-1)
                                                     :y y
                                                     :direction [-1 0]))
                               (when (< 0 index)
                                 (let [[i1 j1] [(dec i) (- j2 index)]
                                       [x1 y1] (grid-position rows i1 j1)]
                                   (templates/inserter :x (+ x1 (- 3 index))
                                                       :y (+ y1 3)
                                                       :direction [0 -1])))))))
         (apply concat))))

(defn matrix-bus
  ;; ([tree _ _ _]
  ;;  (matrix-bus tree))
  ([tree-seq tree]
   (layout tree-seq tree)))


