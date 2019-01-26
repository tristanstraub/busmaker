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
        (#{"oil-refinery"} facility)                                6
        (#{"assembling-machine-1" "assembling-machine-2"} facility) 3
        (#{"chemical-plant"} facility)                              3
        (#{"electric-mining-drill"} facility)                       1

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

(defn facility-type-offset
  [facility]
  (cond (#{"oil-refinery"} facility) [3 2]
        (#{"stone-furnace"} facility) [0 0]
        :else [1 1]))

(defn pad*
  [coll n]
  (vec (take n (concat coll (repeat nil)))))

(defn pad
  [m]
  (let [width (apply max (map count m))]
    (mapv #(pad* % width) m)))

(defn transpose
  [m]
  (apply map vector (pad m)))

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
    [(reduce + (map #(+ 1 %)  (map max-facility-dimension (take i columns))))
     (reduce + (map #(+ 1 %) (map max-facility-dimension (take j rows))))]))

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
  [x0 y0 x1 y1]
  (let [Dy (- y1 y0)
        s  (if (< 0 Dy) 1 -1)]
    (->> (for [dy (range (inc (Math/abs Dy)))]
           (templates/transport-belt :x x0
                                     :y (+ y0 (* s dy))
                                     :direction [0 s]))
         (apply concat))))

(defn move
  [object d]
  (-> object
      (update-in ["position" "x"] + (d 0))
      (update-in ["position" "y"] + (d 1))))

(defn last-not-nil
  [coll]
  (first (drop-while nil? (reverse coll))))

(defn layout
  [tree-seq]
  (let [rows            (pad (rows tree-seq))
        columns         (transpose rows)
        [bus-x0 bus-y0] (grid-position rows (count columns) 0)
        [bus-x1 bus-y1] (grid-position rows (count columns) (count rows))
        bus-ingredients (into {} (vec (map (comp vec reverse) (map-indexed vector (distinct (map last-not-nil rows))))))]

    (println :bus-ingredients bus-ingredients)
    (concat 
            
     (apply concat
            (for [[j row]    (map-indexed vector rows)
                  [i recipe] (map-indexed vector row)
                  :when      recipe]
              (let [n-ingredients          3
                    [x y]                  (grid-position rows i j)
                    [x-left y-left]        (grid-position rows (dec i) j)
                    [w h]                  (grid-dimensions rows i j)
                    [w1 h1]                (grid-dimensions rows (dec i) j)
                    facility               (recipe-data/factory-type recipe)
                    [dx dy]                (facility-type-offset facility)
                    [j2 index]             (ingredient-index rows i j)
                    [x1 y1]                (grid-position rows (dec i) j2)
                    [x2 y2]                (grid-position rows i j)
                    [x3 y3]                (grid-position rows (dec (count row)) j)
                    fh                     (facility-height facility)
                    recipe-1               (get row (dec i))
                    recipe-2               (get (vec (get (vec rows) j2))
                                                (dec i))
                    recipe-1-facility-type (if recipe-1 (recipe-data/factory-type recipe-1))
                    recipe-2-facility-type (if recipe-2 (recipe-data/factory-type recipe-2))
                    fh-1                   (if recipe-1 (facility-height recipe-1-facility-type))
                    fh-2                   (if recipe-2 (facility-height recipe-2-facility-type))]
                (concat (when facility
                          (templates/factory :facility facility
                                             :x (+ x dx)
                                             :y (+ y dy)
                                             :matrix/width (facility-width recipe)
                                             :recipe recipe))

                        (concat (when (not= [i j] [0 0])
                                  (cond (< 0 index)
                                        (horizontal-belt rows
                                                         (- x 2)
                                                         y
                                                         (+ x1 fh-2 (- index))
                                                         y)

                                        (<= (+ x (- w1) fh-1 1) (- x 2))
                                        (horizontal-belt rows
                                                         (- x 2)
                                                         y
                                                         (+ x (- w1) fh-1 1)
                                                         y)))

                                (if (not (get row (inc i)))
                                  (concat
                                   (horizontal-belt rows
                                                    (+ x3 3 (* 3 (get bus-ingredients recipe)))
                                                    y
                                                    (dec x2)
                                                    y)
                                   (apply concat
                                          (for [i (range 0 (get bus-ingredients recipe))]
                                            (concat (templates/underground-belt :x (+ (* i 3)
                                                                                      bus-x0
                                                                                      1)
                                                                                :y y
                                                                                :direction [-1 0]
                                                                                :type "input")
                                                    (templates/underground-belt :x (+ (* i 3)
                                                                                      bus-x0
                                                                                      -1)
                                                                                :y y
                                                                                :direction [-1 0]
                                                                                :type "output"))))
                                   (let [i (get bus-ingredients recipe)]
                                     (templates/splitter :x (+ (* i 3)
                                                               bus-x0
                                                               -1)
                                                         :y (inc y)
                                                         :direction [0 1]))))
                                       
                                (if (< 0 index)
                                  (vertical-belt (+ x1 fh-2 (- index))
                                                 y
                                                 (+ x1 fh-2 (- index))
                                                 (+ y1 fh-2 1)))

                                (when (and (not= 0 i)
                                           (get row (inc i)))
                                  (templates/inserter :x (dec x)
                                                      :y y
                                                      :direction [-1 0]))

                                (when (and (= 0 index)
                                           (not= [0 0] [i j]))
                                  (templates/inserter :x (+ x (- w1) fh-1)
                                                      :y y
                                                      :direction [-1 0]))

                                (when (< 0 index)
                                  (templates/inserter :x (+ x1 fh-2 (- index))
                                                      :y (+ y1 fh-2)
                                                      :direction [0 -1])))))))
     (apply concat
            (for [i (range (count bus-ingredients))]
              (vertical-belt (+ (* i 3)
                                bus-x0)
                             bus-y1
                             (+ (* i 3)
                                bus-x0)
                             bus-y0))))))

(defn matrix-bus
  [tree-seq]
  (layout tree-seq))
