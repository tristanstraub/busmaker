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

(defn recipe-width
  [recipe]
  (let [facility          (recipe-data/factory-type recipe)]
    (cond (#{"lab"} facility)                                         3
          (#{"steel-furnace" "stone-furnace"} facility)               2
          (#{"electric-furnace"} facility)                            3
          (#{"oil-refinery"} facility)                                5
          (#{"assembling-machine-1" "assembling-machine-2"} facility) 3
          (#{"chemical-plant"} facility)                              3
          (#{"electric-mining-drill"} facility)                       1


          :else                                                       (do (println :unknown facility)
                                                                          3))))

(defn recipe-margin-and-height
  [recipe last?]
  (let [required-bus-ingredients (filter recipes/raw? (recipes/immediate-ingredients recipe))]
    [(if (not last?)
       (count required-bus-ingredients)
       0)
     (recipe-width recipe)]))

(defn recipe-height
  [recipe last?]
  (second (recipe-margin-and-height recipe last?)))

(defn rows
  [tree]
  (vec (apply concat (for [[output inputs] tree
                           :let [input-rows (rows inputs)]]
                       `[[~output ~@(first input-rows)]
                         ~@(for [input-row (rest input-rows)]
                             `[nil ~@input-row])]))))

(defn max-facility-height
  [row]
  (let [recipes (map-indexed vector (remove nil? row))]
    (or (let [[margin height] (->> recipes
                                   (map (fn [[i recipe]]
                                          (recipe-margin-and-height recipe (= i (dec (count recipes))))))
                                   (reduce (fn [[total-margin max-height] [margin height]]
                                             [(+ total-margin margin)
                                              (max max-height height)])
                                           [0 0]))]
          (+ margin height))
        0)))

(defn max-facility-width
  [row]
  (or (->> (remove nil? row)
           (map recipe-width)
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
    [(reduce + (map #(+ 1 %)  (map max-facility-width (take i columns))))
     (reduce + (map #(+ 1 %) (map max-facility-height (take j rows))))]))

(defn grid-dimensions
  [rows i j]
  (let [[x0 y0] (grid-position rows i j)
        [x1 _]  (grid-position rows (inc i) j)
        [_ y2]  (grid-position rows i (inc j))]
    [(- x1 x0)
     (- y2 y0)]))


(defn ingredient-indexes
  [rows i j]
  (for [jd (range j (count rows))
        :when (get-in rows [jd (inc i)])]
    [(inc i) jd]))

(defn ingredient-positions
  [rows i j]
  (let [result
        (map #(apply grid-position rows %)
             (ingredient-indexes rows i j))]
;;    (println :ingredient-positions result)
    result))

(defn horizontal-belt
  [rows x0 y0 x1 y1]
  (let [Dx (- x1 x0)
        s  (if (< 0 Dx) 1 -1)]
    (->> (for [dx (range (inc (Math/abs Dx)))]
           (templates/transport-belt :x (+ x0 (* s dx))
                                     :y y0
                                     :direction [s 0]))
         (apply concat))))

(defn horizontal-pipe
  [rows x0 y0 x1 y1]
  (let [Dx (- x1 x0)
        s  (if (< 0 Dx) 1 -1)]
    (->> (for [dx (range (inc (Math/abs Dx)))]
           (templates/pipe :x (+ x0 (* s dx))
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

(defn vertical-pipe
  [x0 y0 x1 y1]
  (let [Dy (- y1 y0)
        s  (if (< 0 Dy) 1 -1)]
    (->> (for [dy (range (inc (Math/abs Dy)))]
           (templates/pipe :x x0
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
  (println :bus (filter recipes/raw? (mapcat recipes/immediate-ingredients (distinct (remove nil? (apply concat (pad (rows tree-seq))))))))
  (let [rows            (pad (rows tree-seq))
        columns         (transpose rows)
        [bus-x0 bus-y0] (mapv + [1 0] (grid-position rows (count columns) 0))
        [bus-x1 bus-y1] (grid-position rows (count columns) (count rows))
        bus-ingredients (into {} (vec (map (comp vec reverse) (map-indexed vector (filter recipes/raw? (distinct (mapcat recipes/immediate-ingredients (distinct (remove nil? (apply concat rows))))))))))]
    
    (println :bus-ingredients bus-ingredients)
    
    (concat 
            
     (apply concat
            (for [[j row]    (map-indexed vector rows)
                  [i recipe] (map-indexed vector row)
                  :when      recipe]
              (let [n-ingredients       3
                    [x y]               (grid-position rows i j)
                    [x-left y-left]     (grid-position rows (dec i) j)
                    [w h]               (grid-dimensions rows i j)
                    [w1 h1]             (grid-dimensions rows (dec i) j)
                    facility            (recipe-data/factory-type recipe)
                    [dx dy]             (facility-type-offset facility)
                    [x2 y2]             (grid-position rows i j)
                    [x3 y3]             (grid-position rows (dec (count row)) j)

                    fw                  (recipe-width recipe)
                    fh                  (recipe-height recipe (not (get row (inc i))))

                    ingredients         (recipes/immediate-ingredients recipe)


                    ]

                

                
                (concat (when (and facility
                                   (not (recipes/raw? recipe)))
                          (templates/factory :facility facility
                                             :x (+ x dx)
                                             :y (+ y dy)
                                             :matrix/width fw
                                             :recipe recipe))

                        (concat (if (not (get row (inc i)))
                                  (concat
                                   (apply concat
                                          (for [[i ingredient] (map-indexed vector ingredients)]
                                            (if (recipes/fluid? ingredient)
                                              (horizontal-pipe rows
                                                               (+ bus-x0 -1 (* 3 (get bus-ingredients ingredient)))
                                                               (+ (* 2 i) y)
                                                               (+ x2 fw)
                                                               (+ (* 2 i) y))
                                              (horizontal-belt rows
                                                               (+ bus-x0 -1 (* 3 (get bus-ingredients ingredient)))
                                                               (+ (* 2 i) y 1)
                                                               (+ x2 fw 1)
                                                               (+ (* 2 i) y 1)))))
                                   (apply concat
                                          (for [[j ingredient] (map-indexed vector ingredients)
                                                :when (get bus-ingredients ingredient)
                                                :let [n (get bus-ingredients ingredient)]
                                                i (range n)]

                                            (if (recipes/fluid? ingredient)
                                              (concat (templates/pipe-to-ground :x (+ (* i 3)
                                                                                      bus-x0
                                                                                      1)
                                                                                :y (+ (* 2 j) y)
                                                                                :direction [1 0]
                                                                                :type "input")
                                                      (templates/pipe-to-ground :x (+ (* i 3)
                                                                                      bus-x0
                                                                                      -1)
                                                                                :y (+ (* 2 j) y)
                                                                                :direction [-1 0]
                                                                                :type "output"))
                                              (concat (templates/underground-belt :x (+ (* i 3)
                                                                                        bus-x0
                                                                                        1)
                                                                                  :y (+ 1 y)
                                                                                  :y (+ 1 (* 2 j) y)
                                                                                  :direction [-1 0]
                                                                                  :type "input")
                                                      (templates/underground-belt :x (+ (* i 3)
                                                                                        bus-x0
                                                                                        -1)
                                                                                  :y (+ 1 y)
                                                                                  :y (+ 1 (* 2 j) y)
                                                                                  :direction [-1 0]
                                                                                  :type "output")))))
                                   (apply concat
                                          (for [[i ingredient] (map-indexed vector ingredients)
                                                :when (not (recipes/fluid? ingredient))]
                                            (templates/splitter :x (+ (* 3 (get bus-ingredients ingredient))
                                                                      bus-x0
                                                                      -1)
                                                                :y (+ 2 y)
                                                                :direction [0 -1])))))

                                (let [required-bus-ingredients     (filter bus-ingredients ingredients)
                                      
                                      non-bus-ingredients          (remove bus-ingredients ingredients)
                                      non-bus-ingredient-positions (take (count non-bus-ingredients)
                                                                         (partition 2
                                                                                    (interleave ingredients
                                                                                                (ingredient-positions rows i j))))]
                                  (concat (when (get row (inc i))
                                            (apply concat
                                                   (for [[index ingredient] (map-indexed vector required-bus-ingredients)]
                                                     (concat (if (recipes/fluid? ingredient)
                                                               (concat (vertical-pipe (+ x fw -1 (- index))
                                                                                      (+ h -1 y (- (get bus-ingredients ingredient)))
                                                                                      nil
                                                                                      (+ fh y))
                                                                       (horizontal-pipe rows
                                                                                        bus-x0                                                                       
                                                                                        (+ h -1 y (- (get bus-ingredients ingredient)))
                                                                                        (+ x fw (- index))
                                                                                        nil)
                                                                       (horizontal-pipe rows
                                                                                        (+ bus-x0 (* 3 (get bus-ingredients ingredient)) -1)
                                                                                        (+ h -1 y (- (get bus-ingredients ingredient)))
                                                                                        (+ bus-x0 (* 3 (get bus-ingredients ingredient)) -1)
                                                                                        nil))
                                                               (concat (templates/inserter :x (+ x fw -1 (- index))
                                                                                           :y (+ fh y)
                                                                                           :direction [0 -1])
                                                                       (vertical-belt (+ x fw -1 (- index))
                                                                                      (+ fh y 2)
                                                                                      nil
                                                                                      (+ fh y 1))
                                                                       (horizontal-belt rows
                                                                                        bus-x0                                                                       
                                                                                        (+ fh y 3)
                                                                                        (+ x fw (- index))
                                                                                        nil)
                                                                       (templates/splitter :x (+ x fw (- index))
                                                                                           :y (+ fh y 2)
                                                                                           :direction [-1 0])))
                                                             (apply concat
                                                                    (let [n (get bus-ingredients ingredient)]
                                                                      (for [i (range n)
                                                                            :let [y (+ fh y 3)]]

                                                                        (if (recipes/fluid? ingredient)
                                                                          (concat (templates/pipe-to-ground :x (+ (* i 3)
                                                                                                                  bus-x0
                                                                                                                  1)
                                                                                                            :y y
                                                                                                            :direction [1 0]
                                                                                                            :type "input")
                                                                                  (templates/pipe-to-ground :x (+ (* i 3)
                                                                                                                  bus-x0
                                                                                                                  -1)
                                                                                                            :y y
                                                                                                            :direction [-1 0]
                                                                                                            :type "output"))
                                                                          (concat (templates/underground-belt :x (+ (* i 3)
                                                                                                                    bus-x0
                                                                                                                    1)
                                                                                                              ;; :y (+ 1 y)
                                                                                                              :y y
                                                                                                              :direction [-1 0]
                                                                                                              :type "input")
                                                                                  (templates/underground-belt :x (+ (* i 3)
                                                                                                                    bus-x0
                                                                                                                    -1)
                                                                                                              ;; :y (+ 1 y)
                                                                                                              :y y
                                                                                                              :direction [-1 0]
                                                                                                              :type "output"))))))
                                                             (when (not (recipes/fluid? ingredient))
                                                               (concat
                                                                (templates/splitter :x (+ (* 3 (get bus-ingredients ingredient))
                                                                                          bus-x0
                                                                                          -1)
                                                                                    :y (+ fh y 4)
                                                                                    :direction [0 -1])
                                                                (horizontal-belt rows
                                                                                 (+ (* 3 (get bus-ingredients ingredient))
                                                                                    bus-x0
                                                                                    -1)
                                                                                 (+ fh y 3)
                                                                                 (+ (* 3 (get bus-ingredients ingredient))
                                                                                    bus-x0
                                                                                    -1)
                                                                                 nil)))))))
                                          
                                          (apply concat
                                                 (for [[index [ingredient [x1 y1]]] (map-indexed vector (drop 1 non-bus-ingredient-positions))
                                                       :let [index (+ index (count required-bus-ingredients))]]
                                                   (if (recipes/fluid? ingredient)
                                                     (concat (vertical-pipe (+ x fw -1 (- index))
                                                                            (+ 1 y1)
                                                                            nil
                                                                            (+ y fh))

                                                             (when (> index 0)
                                                               (horizontal-pipe rows
                                                                                (- (+ x w) 1)
                                                                                (+ 1 y1)
                                                                                (- (+ x w) 2 index -1)
                                                                                nil)))
                                                     (concat (vertical-belt (+ x fw -1 (- index))
                                                                            (+ 1 y1)
                                                                            nil
                                                                            (+ y fh 1))
                                                             (templates/inserter :x (+ x fw -1 (- index))
                                                                                 :y (+ y fh)
                                                                                 :direction [0 -1])
                                                             (when (> index 0)
                                                               (horizontal-belt rows
                                                                                (- (+ x w) 2)
                                                                                (+ 1 y1)
                                                                                (- (+ x w) 2 index -1)
                                                                                nil))))))))

                                ;; output from facility
                                (when (and (not (recipes/fluid? recipe))
                                           (not= 0 i))
                                  (templates/inserter :x (dec x)
                                                      :y (+ 1 y)
                                                      :direction [-1 0]))

                                ;; input to facility
                                (apply concat
                                       (for [ingredient ingredients
                                             :when (not (recipes/fluid? ingredient))]
                                         (templates/inserter :x (+ x2 fw)
                                                             :y (+ 1 y)
                                                             :direction [-1 0])))

                                #_(when (and (< 0 index)
                                             (not (recipes/raw? recipe)))
                                    (templates/inserter :x (+ x1 fh-2 (- index))
                                                        :y (+ y1 fh-2)
                                                        :direction [0 -1])))))))
     (apply concat
            (for [[recipe i] bus-ingredients]
              (if (recipes/fluid? recipe)
                (vertical-pipe (+ (* i 3)
                                  bus-x0)
                               bus-y1
                               (+ (* i 3)
                                  bus-x0)
                               bus-y0)
                (vertical-belt (+ (* i 3)
                                  bus-x0)
                               bus-y1
                               (+ (* i 3)
                                  bus-x0)
                               bus-y0)))))))

(defn matrix-bus
  [tree-seq]
  (layout tree-seq))
