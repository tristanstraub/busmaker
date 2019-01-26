(ns busmaker.autoroute
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
        (#{"electric-mining-drill"} facility)                       0

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
  (take n (concat coll (repeat nil))))

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
  [rows x0 y0 x1 y1]
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

(defn route
  [[ax ay] [bx by]]
  (concat (vertical-belt rows ax ay ax by)
          (horizontal-belt rows ax by bx by)))

(defn layout
  [tree-seq]
  (concat (templates/factory :facility "assembling-machine-1"
                             :x 0
                             :y 0
                             :matrix/width 3
                             :recipe "electronic-circuit")
          (templates/factory :facility "assembling-machine-1"
                             :x 10
                             :y 10
                             :matrix/width 3
                             :recipe "electronic-circuit")
          (route [0 3] [7 10])
          (route [1 3] [7 9])))

(defn matrix-bus
  [tree-seq]
  (layout tree-seq))
