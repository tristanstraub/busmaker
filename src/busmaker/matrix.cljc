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

(defn matrix-bus
  ([tree]
   (matrix-bus tree 20 0 0))
  ([tree width x y]
   (when (seq tree)
     (second (reduce (fn [[y entities last-height] [j [recipe subtree]]]
                       [(+ y (matrix-height subtree))
                        (concat entities
                                (let [x (* 4 x)
                                      y (* 4 y)]
                                  (concat (templates/factory :facility (recipe-data/factory-type recipe)
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
                                                     (for [i (range (- (* 4 last-height)
                                                                       2))]
                                                       (templates/transport-belt :x (- x j -1)
                                                                                 :y (- y i))))))
                                          
                                          (templates/inserter :x (+ (- x 2) (recipe-data/factory-width (recipe-data/factory-type recipe))
                                                                    2)
                                                              :y y
                                                              :direction [-1 0])

                                          ;; (apply concat
                                          ;;        (for [i (range (- (recipe-data/factory-width (recipe-data/factory-type recipe))
                                          ;;                          3))]
                                          ;;          (templates/transport-belt :x (+ 2 x)
                                          ;;                                    :y y
                                          ;;                                    :direction [-1 0])))


                                          (when (< 0 j)
                                            (templates/inserter :x (- x 2 j)
                                                                :y (- y (* 4 last-height)
                                                                      -2)
                                                                :direction [0 -1]))))

                                (matrix-bus subtree width (inc x) y))
                        (+ last-height
                           (matrix-height subtree))])
                     [y nil 0]
                     (map vector (iterate inc 0) tree))))))
