(ns busmaker.main-bus
  (:require [clojure.set :as set]
            [busmaker.recipes :as recipes]
            [com.stuartsierra.dependency :as dep]))

(defn fluid?
  [bus-ingredient]
  (#{"water"
     "lubricant"
     "heavy-oil"
     "light-oil"
     "petroleum-gas"
     "sulfuric-acid"
     "crude-oil"} bus-ingredient))

(defn recipe
  [recipes recipe-name]
  (first (filter (comp #{recipe-name} :name) recipes)))

(defn ingredient
  [i]
  (cond (map? i)
        (:name i)
        (vector? i)
        (first i)
        :else
        (ex-info "Unknown ingredient" {:ingredient i})))

(defn recipe-ingredients
  [recipe]
  (cond (:ingredients recipe)
        (map ingredient (get-in recipe [:ingredients]))
        (:normal recipe)
        (map ingredient (get-in recipe [:normal :ingredients]))
        :else
        nil))

(defn ingredients
  [recipe-name]
  (let [recipe-name (if (#{"petroleum-gas" "heavy-oil" "light-oil"} recipe-name)
                      "advanced-oil-processing"
                      recipe-name)]
    (-> recipes/recipes
        (recipe recipe-name)
        recipe-ingredients)))

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

(defn fast-underground-belt
  [& {:keys [x y direction type] :or {direction [0 -1]
                                      type      "input"
                                      x         0
                                      y         0}}]
  {"direction"     (blueprint-direction direction)
   "name"          "fast-underground-belt"
   "type"          type
   "position"      {"x" x
                    "y" y}})

(defn pipe-to-ground
  [& {:keys [x y direction type] :or {direction [0 -1]
                                      x         0
                                      y         0}}]
  {"direction"     (blueprint-direction direction)
   "name"          "pipe-to-ground"
   "position"      {"x" x
                    "y" y}})

(defn fast-splitter
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  {"direction"     (blueprint-direction direction)
   "name"          "fast-splitter"
   "position"      {"x" (+ 0.5 x)
                    "y" y}})

(defn fast-transport-belt
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  {"direction"     (blueprint-direction direction)
   "name"          "fast-transport-belt"
   "position"      {"x" x
                    "y" y}})

(defn medium-electric-pole
  [& {:keys [x y] :or {
                       x         0
                       y         0}}]
  {"name"          "medium-electric-pole"
   "position"      {"x" x
                    "y" y}})

(defn fast-inserter
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  {"direction"     (blueprint-direction-inserter direction)
   "name"          "fast-inserter"
   "position"      {"x" x
                    "y" y}})

(defn long-handed-inserter
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  {"direction"     (blueprint-direction-inserter direction)
   "name"          "long-handed-inserter"
   "position"      {"x" x
                    "y" y}})

(defn factory-type
  [recipe]
  (cond (#{"iron-plate" "copper-plate" "steel-plate" "stone-brick"} recipe)                    "electric-furnace"
        (#{"light-oil" "heavy-oil" "petroleum-gas"} recipe)                      "oil-refinery"
        (#{"lubricant" "sulfur" "sulfuric-acid" "battery" "plastic-bar" "explosives"} recipe) "chemical-plant"
        (re-find #"ore" recipe)                                                  "electric-mining-drill"
        :else                                                                    "assembling-machine-2"))

(defn recipe-type
  [recipe]
  (cond (#{"light-oil" "heavy-oil" "petroleum-gas"} recipe) "advanced-oil-processing"
        :else                   recipe))

(defn factory
  [& {:keys [x y recipe] :or {x 0
                              y 0}}]
  {"name"     (factory-type recipe)
   "recipe"   (recipe-type recipe)
   "position" {"x"      (cond (or (not (fluid? recipe))
                                  (#{"lubricant" "sulfur" "sulfuric-acid" "battery"} recipe)) x
                              :else (dec x))
               "y"      y}

   "direction" (cond (#{"oil-refinery"} (factory-type recipe)) (blueprint-direction-inserter [0 1])
                     :else (blueprint-direction-inserter [0 -1]))})

(defn tap
  [& {:keys [x y length] :or {x 0
                              y 0
                              length 1}}]
  `[~(fast-splitter :x (dec x) :y (dec y))

    ~@(for [i (range length)
            :when (not= 2 (mod i 3))]
        (if (<= i 1)
          (case (mod i 3)
            1 (fast-underground-belt :x (- x i 1) :y (+ y -2) :direction [-1 0] :type "input")
            0 (fast-transport-belt :x (- x i 1) :y (+ y -2) :direction [-1 0]))
          (case (mod i 3)
            0 (fast-underground-belt :x (- x i 1) :y (+ y -2) :direction [-1 0] :type "output")
            1 (fast-underground-belt :x (- x i 1) :y (+ y -2) :direction [-1 0] :type "input"))))])

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
  (for [i (range height)]
    (fast-transport-belt :x x
                         :y (+ y i))))

(defn ingredient-taps
  [xs & {:keys [x y] :or {x 0
                          y 0}}]
  (apply concat
         (for [[i xi] (map-indexed vector (sort xs))]
           (tap :x xi :y (- y i 1) :length (inc (- xi x))))))

(defn factory-line
  [& {:keys [x y ingredient n-factories] :or {x 0
                                              y 0
                                              n-factories 2}}]
  (let [n-factories (if (#{"oil-refinery" "chemical-plant" "assembling-machine-2" "electric-furnace"} (factory-type ingredient))
                      n-factories
                      1)]
    `[~@(apply concat
               (for [i (range n-factories)
                     :let [dx (* i (cond (#{"oil-refinery"} (factory-type ingredient)) -8
                                         :else -6))]]
                 (concat [(medium-electric-pole :x (+ x dx)
                                                :y y)
                          (medium-electric-pole :x (+ x dx)
                                                :y (+ y 4))

                          (factory :x (+ x -2 dx)
                                   :y (+ y 2)
                                   :recipe ingredient)

                          (fast-inserter :x (+ x dx)
                                         :y (+ y 1)
                                         :direction [-1 0])
                          (fast-inserter :x (+ x dx)
                                         :y (+ y 2)
                                         :direction [-1 0])
                          (fast-inserter :x (+ x dx)
                                         :y (+ y 3)
                                         :direction [-1 0])]

                         (apply concat
                                (for [j    (range 3)
                                      :let [y (+ 3 y (- j))]]
                                  [(fast-underground-belt :x (+ x 1 dx)
                                                          :y y
                                                          :direction [-1 0]
                                                          :type "input")
                                   (fast-underground-belt :x (+ x 2 dx)
                                                          :y y
                                                          :direction [-1 0]
                                                          :type "output")])))))]))

(def input-tap-indexes
  {"heavy-oil"            {"crude-oil" 0
                           "water"     1}
   "light-oil"            {"crude-oil" 0
                           "water"     1}
   "lubricant"            {"heavy-oil" 0}
   "sulfuric-acid"        {"water" 0}
   "sulfur"               {"water"         0
                           "petroleum-gas" 1}
   "battery"              {"sulfuric-acid" 0}
   "petroleum-gas"        {"crude-oil" 0
                           "water"     1}
   "plastic-bar"          {"petroleum-gas" 0}

   "electric-engine-unit" {"lubricant" 0}
   "concrete"             {"water" 0}
   "processing-unit"      {"sulfuric-acid" 0}})

(def output-tap-indexes
  {"lubricant"     {"lubricant" 0}
   "light-oil"     {"heavy-oil"     2
                    "light-oil"     1
                    "petroleum-gas" 0}
   "heavy-oil"     {"heavy-oil"     2
                    "light-oil"     1
                    "petroleum-gas" 0}
   "petroleum-gas" {"petroleum-gas" 0
                    "light-oil"     1
                    "heavy-oil"     2}
   "sulfuric-acid" {"sulfuric-acid" 0}})

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
  [& {:keys [x y input-index bus-index]
      :or {x           0
           y           0
           input-index 0
           bus-index   0}}]
  (when bus-index
    (let [n (* 3 bus-index)]
      `[~(fast-underground-belt :x (+ x n -5) :y (- y 5) :direction [-1 0] :type "input")
        ~(fast-transport-belt :x (+ x n -4) :y (- y 5) :direction [-1 0])
        ~@(for [i (range n)
                :when (not= 2 (mod i 3))]
            (case (mod i 3)
              0 (fast-underground-belt :x (+ x i -5) :y (- y 5) :direction [-1 0] :type "input")
              1 (fast-underground-belt :x (+ x i -5) :y (- y 5) :direction [-1 0] :type "output")))
        ~(fast-splitter :x (+ x
                              (* 3 bus-index)
                              -4)
                        :y (- y 4))])))

(defn output-tap
  [& {:keys [x y output-index] :or {x 0
                                    y 0
                                    output-index 0}}]
  (let [n (* 3 output-index)]
    `[~(fast-inserter  :x (- x 8) :y (- y 3) :direction [0 -1])
      ~(fast-transport-belt :x (- x 8) :y (- y 4) :direction [0 -1])

      ~(fast-transport-belt :x (- x 8) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 7) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 6) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 5) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 4) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 3) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 2) :y (- y 5) :direction [1 0])

      ~@(for [i (range 1 (+ 3 n))
              :when (not= 2 (mod i 3))]
          (if (>= i n)
            (case (mod i 3)
              0 (fast-underground-belt :x (+ x i -2) :y (- y 5) :direction [1 0] :type "output")
              1 (fast-transport-belt :x (+ x i -2) :y (- y 5) :direction [1 0]))
            (case (mod i 3)
              0 (fast-underground-belt :x (+ x i -2) :y (- y 5) :direction [1 0] :type "output")
              1 (fast-underground-belt :x (+ x i -2) :y (- y 5) :direction [1 0] :type "input"))))]))

(defn output-tap-extension
  [& {:keys [x y output-index] :or {x 0
                                    y 0
                                    output-index 0}}]
  (let [n (* 3 output-index)]
    `[~(fast-inserter  :x (- x 8) :y (- y 3) :direction [0 -1])
      ~(fast-transport-belt :x (- x 8) :y (- y 4) :direction [0 -1])

      ~(fast-transport-belt :x (- x 8) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 7) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 6) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 5) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 4) :y (- y 5) :direction [1 0])
      ~(fast-transport-belt :x (- x 3) :y (- y 5) :direction [1 0])]))

(defn ingredient-height
  [ingredient]
  (let [t (factory-type ingredient)
        n (count (ingredients ingredient))]
    (cond (#{"electric-furnace"} t) 9
          (#{"oil-refinery"} t) 16
          (#{"assembling-machine-2"} t) (+ 11 (if (> n 3)
                                                (+ (- n 3) 1)
                                                0))
          (#{"chemical-plant"} t) 12
          :else                                       (throw (ex-info "Unknown ingredient height" {})))))

(defn main-bus-line
  [& {:keys [x y n-factories buses output-index ingredient input-indexes ready-indexes] :or {buses       []
                                                                                             n-factories 2
                                                                                             y           0
                                                                                             x           0
                                                                                             ingredient  "iron-gear"}}]
  (let [outputs     #{output-index}
        y           (+ y (cond (#{"electric-furnace"} (factory-type ingredient)) -3
                               (#{"chemical-plant"} (factory-type ingredient)) -3
                               (#{"assembling-machine-2"} (factory-type ingredient)) -3

                               :else 0))]

    (filter identity
            (map #(assoc %1 "entity_number" (inc %2))
                 (-> []
                     (concat (factory-line :n-factories n-factories :x x :y y :ingredient ingredient))

                     (concat (apply concat (for [[bus-ingredient i] buses
                                                 ;; :when (and (not (outputs i))
                                                 ;;            (ready-indexes i))
                                                 ]
                                             (let [t  (factory-type ingredient)
                                                   x  (+ x 6)
                                                   y  (+ y 4 (- (ingredient-height ingredient))
                                                         (cond (#{"oil-refinery"} t) 3
                                                               :else 0))
                                                   n  (count (ingredients ingredient))
                                                   dy (cond (#{"chemical-plant"} t) 4
                                                            (#{"oil-refinery"} t) 2
                                                            (#{"electric-furnace"} t) 1
                                                            (#{"assembling-machine-2"} t) (+ 3 (if (> n 3)
                                                                                                 (+ 1 (- n 3))
                                                                                                 0))
                                                            :else 0)]
                                               (if (fluid? bus-ingredient)
                                                 (pipe-bus :x (+ x (* i 3))
                                                           :y (+ y dy)
                                                           :height (ingredient-height ingredient))

                                                 (bus :x (+ x (* i 3))
                                                      :y (+ y dy)
                                                      :height (ingredient-height ingredient)))))))

                     ;; RHS -- output tap (transport belt)
                     (concat (let [x                     (+ x 6)
                                   y                     (+ y 6)
                                   non-fluid-ingredients (map-indexed vector (sort (map buses (remove fluid? (ingredients ingredient)))))]
                               (concat (when (and (> (count non-fluid-ingredients) 3)
                                                  (#{"assembling-machine-2" "electric-furnace"} (factory-type ingredient)))
                                         (apply concat (for [i    (range n-factories)
                                                             :let [x (+ x -4 2 -5)
                                                                   y  (+ -5 y 3 -2 4)
                                                                   dx (* -6 i)]]
                                                         [(long-handed-inserter :x (+ x dx)
                                                                                :y (- y 2)
                                                                                :direction [0 -1])
                                                          (fast-inserter :x (+ x dx -1)
                                                                         :y (- y 2)
                                                                         :direction [0 -1])])))
                                       (apply concat
                                              (for [[input-index bus-index] non-fluid-ingredients]
                                                (if (>= input-index 3)
                                                  (let [y (+ y 7)]
                                                    (concat (input-tap :x (+ x 3) :y (+ y 3 (- input-index) -2) :input-index input-index :bus-index bus-index)
                                                            (apply concat
                                                                   (let [x  (+ x -4 2 -5)
                                                                         y  (+ -5 y 3 (- input-index) -2)]
                                                                     (for [i    (range n-factories)
                                                                           :let [dx (* -6 i)]]
                                                                       [(fast-underground-belt :x (+ x dx)
                                                                                               :y y
                                                                                               :direction [-1 0]
                                                                                               :type "output")
                                                                        (fast-underground-belt :x (+ x dx -1)
                                                                                               :y y
                                                                                               :direction [-1 0]
                                                                                               :type "input")])))
                                                            ))
                                                  (input-tap :x (+ x 3) :y (+ y 3 (- input-index) -1) :input-index input-index :bus-index bus-index)))))))


                     ;; input pipe taps - RHS
                     (concat (apply concat (for [[output-recipe output-index] (input-tap-indexes ingredient)
                                                 :when                        (and (fluid? output-recipe)
                                                                                   (get buses output-recipe))]
                                             (let [tap-x (+ 4 (* 3 (get buses output-recipe)))
                                                   x     (+ x 2)
                                                   y     (+ y 6 (cond (#{"oil-refinery"} (factory-type ingredient))         1
                                                                      :else 0))]
                                               (conj (for [i (range tap-x)
                                                           :when (not= 2 (mod i 3))]

                                                       (pipe-to-ground :x (+ -1 (+ x i))
                                                                       :y (+ 2 -3 y (* 2 output-index))
                                                                       :direction (case (mod i 3)
                                                                                    0 [1 0]
                                                                                    1 [-1 0])))
                                                     (pipe :x (+ -1 x tap-x)
                                                           :y (+ -3 y (* 2 output-index)
                                                                 (cond (#{"oil-refinery"} (factory-type ingredient)) 2
                                                                       (#{"chemical-plant"} (factory-type ingredient)) 2
                                                                       (#{"assembling-machine-2"} (factory-type ingredient)) 2
                                                                       :else 0))))))))
                     ;; output pipe taps - RHS
                     (concat (apply concat (for [[output-recipe output-index] (output-tap-indexes ingredient)
                                                 :when                        (and (fluid? output-recipe)
                                                                                   (get buses output-recipe))]
                                             (let [tap-x (+ 4 (* 3 (get buses output-recipe)))
                                                   x (+ x 2)
                                                   y (+ y (cond (#{"oil-refinery"} (factory-type ingredient)) -2
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
                         ;; RHS - output tap (transport belt)
                         (not (fluid? ingredient))
                         (concat (apply concat (let [x (+ x 6)
                                                     y (+ y 6)]
                                                 (for [i (range n-factories)]
                                                   (if (> i 0)
                                                     (output-tap-extension :x (+ x (* -6 i))
                                                                           :y (+ y -2 -1)
                                                                           :output-index output-index)
                                                     (output-tap :x (+ x (* -6 i))
                                                                 :y (+ y -2 -1)
                                                                 :output-index output-index))))))

                         ;; LHS input tap
                         (some fluid? (ingredients ingredient))
                         (concat (apply concat (for [i                          (range n-factories)
                                                     [input-recipe input-index] (input-tap-indexes ingredient)
                                                     :let                       [dx (* i (cond (#{"oil-refinery"} (factory-type ingredient)) -8
                                                                                               :else                                         -6))
                                                                                 x (+ x 3 dx)
                                                                                 y (+ y 6 (cond (#{"oil-refinery"} (factory-type ingredient)) 1
                                                                                                :else 0))
                                                                                 args [:input-index input-index
                                                                                       :input-extension
                                                                                       (cond (#{"oil-refinery"} (factory-type ingredient))         1
                                                                                             :else                                                 0)

                                                                                       :x-extension (cond (#{"oil-refinery"} (factory-type ingredient)) 1
                                                                                                          (#{"assembling-machine-2"} (factory-type ingredient)) 1
                                                                                                          :else 0)
                                                                                       :y-extension (+ 1 (* 2 input-index))]]]
                                                 `[~@(apply pipe-input-down-tap
                                                            :y (+ y -2)
                                                            :x (- x 5 (* 2 input-index)
                                                                  (cond (#{"chemical-plant"} (factory-type ingredient)) -1
                                                                        :else 0))
                                                            args)
                                                   ~@(apply pipe-input-tap-lhs
                                                            :y (+ y -1 (* 2 input-index))
                                                            :x (+ (- x 5 (* 2 input-index) 1
                                                                     (cond (#{"chemical-plant"} (factory-type ingredient)) -1
                                                                           :else 0)))
                                                            args)])))

                         ;; LHS output tap
                         (fluid? ingredient)
                         (concat (apply concat (let [y (+ y 6 (cond (#{"oil-refinery"} (factory-type ingredient)) -1
                                                                    :else 0))
                                                     x (+ x 4 (cond (#{"oil-refinery"} (factory-type ingredient)) -1
                                                                    (#{"chemical-plant"} (factory-type ingredient)) -1
                                                                    :else 0))]
                                                 (for [i (range n-factories)
                                                       [output-recipe output-index] (output-tap-indexes ingredient)
                                                       :let [dx (* i (cond (#{"oil-refinery"} (factory-type ingredient)) -8
                                                                           :else -6))]]
                                                   (pipe-output-tap :x (+ (- x 4 (* 2 output-index)) dx)
                                                                    :y (+ y -7 (- (* 2 output-index)))
                                                                    :output-index output-index
                                                                    :y-extension (cond (#{"chemical-plant"} (factory-type ingredient)) 1
                                                                                       :else 0))))))))
                 (iterate inc 0)))))

(defn recipe-by-name
  [recipes recipe-name]
  (first (filter (comp #{recipe-name} :name) recipes)))

(defn recipe-order
  [g recipes recipe-name]
  (let [r (recipe-by-name recipes recipe-name)]
    (if-not r
      g
      (reduce (fn [g ingredient]
                (let [g (dep/depend g recipe-name ingredient)]
                  (recipe-order g recipes ingredient)))
              g
              (recipe-ingredients r)))))

(defn sorted-recipe-order
  [recipe-name]
  (dep/topo-sort (recipe-order (dep/graph)
                               recipes/recipes
                               recipe-name)))

(defn distinct-by
  "Returns a lazy sequence of the elements of coll removing duplicates of (f item).
  Returns a stateful transducer when no collection is provided."
  {:added "1.0"
   :static true}
  ([f]
   (fn [rf]
     (let [seen (volatile! #{})]
       (fn
         ([] (rf))
         ([result] (rf result))
         ([result input]
          (if (contains? @seen input)
            result
            (do (vswap! seen conj input)
                (rf result input))))))))
  ([f coll]
   (let [step (fn step [xs seen]
                (lazy-seq
                 ((fn [[h :as xs] seen]
                    (when-let [s (seq xs)]
                      (if (contains? seen (f h))
                        (recur (rest s) seen)
                        (cons h (step (rest s) (conj seen (f h)))))))
                  xs seen)))]
     (step coll #{}))))

(defn ingredients-by-recipe
  ([]
   (ingredients-by-recipe "fast-underground-belt"))
  ([name]
   (distinct (sorted-recipe-order name))))

(defn main-bus
  [recipe-name & {:keys [n-factories depth] :or {n-factories 2
                                                 depth 1000}}]
  (let [products    (into ["heavy-oil"]
                          (remove #(#{"advanced-oil-processing"} (recipe-type %))
                                  (ingredients-by-recipe recipe-name)))
        others      (set/difference (set (concat (map :name (mapcat :results (filter (comp #{"advanced-oil-processing"} :name)
                                                                                     recipes/recipes)))
                                                 (map :name (mapcat :ingredients (filter (comp #{"advanced-oil-processing"} :name)
                                                                                         recipes/recipes)))))
                                    (set products))

        deps        (map-indexed vector products)

        bus-outputs (into {}
                          (map (comp vec reverse) (map-indexed vector (concat products others))))]
    (apply concat (:output (reduce (fn [{:keys [y] :as acc} [output-index ingredient]]
                                     (-> acc
                                         (update :output conj
                                                 (let [input-indexes (map bus-outputs (ingredients ingredient))]
                                                   (main-bus-line :buses bus-outputs
                                                                  :y (- y (ingredient-height ingredient) 1)
                                                                  :n-factories n-factories
                                                                  :output-index output-index
                                                                  :ingredient ingredient
                                                                  :input-indexes input-indexes
                                                                  :ready-indexes (set (range output-index)))))
                                         (update :y - (ingredient-height ingredient))))
                                   {:y 0}
                                   (->> (take depth deps)
                                        (remove #(re-find #".*ore|water|coal|^stone$" (second %)))
                                        ;; (drop 16)
                                        ;; (take 4)
                                        ))))))

(defn normalize
  [entities]
  (vals (into {} (map (juxt #(vector (int (Math/round (double (get-in % ["position" "y"]))))
                                     (int (Math/round (double (get-in % ["position" "x"])))))
                            identity)
                      entities))))



