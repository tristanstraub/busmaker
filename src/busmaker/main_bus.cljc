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

(defn underground-belt
  [& {:keys [x y direction type] :or {direction [0 -1]
                                      type      "input"
                                      x         0
                                      y         0}}]
  {"direction"     (blueprint-direction direction)
   "name"          "underground-belt"
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

(defn splitter
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  {"direction"     (blueprint-direction direction)
   "name"          "splitter"
   "position"      {"x" (+ 0.5 x)
                    "y" y}})

(defn transport-belt
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  {"direction"     (blueprint-direction direction)
   "name"          "transport-belt"
   "position"      {"x" x
                    "y" y}})

(defn medium-electric-pole
  [& {:keys [x y] :or {
                       x         0
                       y         0}}]
  {"name"          "medium-electric-pole"
   "position"      {"x" x
                    "y" y}})

(defn inserter
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  {"direction"     (blueprint-direction-inserter direction)
   "name"          "inserter"
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
  (cond (#{"iron-plate" "copper-plate" "steel-plate" "stone-brick"} recipe)                    "stone-furnace"
        (#{"light-oil" "heavy-oil" "petroleum-gas"} recipe)                      "oil-refinery"
        (#{"lubricant" "sulfur" "sulfuric-acid" "battery" "plastic-bar" "explosives"} recipe) "chemical-plant"
        (re-find #"ore" recipe)                                                  "electric-mining-drill"
        :else                                                                    "assembling-machine-1"))

(defn recipe-type
  [recipe]
  (cond (#{"light-oil" "heavy-oil" "petroleum-gas"} recipe) "advanced-oil-processing"
        :else                   recipe))

(defn factory
  [& {:keys [x y facility recipe] :or {x 0
                                       y 0}}]
  {"name"     facility
   "recipe"   (recipe-type recipe)
   "position" {"x"      (cond (or (not (fluid? recipe))
                                  (#{"lubricant" "sulfur" "sulfuric-acid" "battery"} recipe)) x
                              :else (dec x))
               "y"      y}

   "direction" (cond (#{"oil-refinery"} facility) (blueprint-direction-inserter [0 1])
                     :else (blueprint-direction-inserter [0 -1]))})

(defn tap
  [& {:keys [x y length] :or {x 0
                              y 0
                              length 1}}]
  `[~(splitter :x (dec x) :y (dec y))

    ~@(for [i (range length)
            :when (not= 2 (mod i 3))]
        (if (<= i 1)
          (case (mod i 3)
            1 (underground-belt :x (- x i 1) :y (+ y -2) :direction [-1 0] :type "input")
            0 (transport-belt :x (- x i 1) :y (+ y -2) :direction [-1 0]))
          (case (mod i 3)
            0 (underground-belt :x (- x i 1) :y (+ y -2) :direction [-1 0] :type "output")
            1 (underground-belt :x (- x i 1) :y (+ y -2) :direction [-1 0] :type "input"))))])

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
    (transport-belt :x x
                         :y (+ y i))))

(defn ingredient-taps
  [xs & {:keys [x y] :or {x 0
                          y 0}}]
  (apply concat
         (for [[i xi] (map-indexed vector (sort xs))]
           (tap :x xi :y (- y i 1) :length (inc (- xi x))))))

(defn factory-line
  [& {:keys [x y ingredient n-factories facility] :or {x 0
                                                       y 0
                                                       n-factories 1}}]
  `[~@(apply concat
             (for [i (range n-factories)
                   :let [dx (* i (cond (#{"oil-refinery"} facility) -8
                                       :else -6))]]
               (concat [(medium-electric-pole :x (+ x dx)
                                              :y y)
                        (medium-electric-pole :x (+ x dx)
                                              :y (+ y 4))

                        (factory :x (+ x -2 dx)
                                 :y (+ y 2)
                                 :recipe ingredient
                                 :facility facility)

                        (inserter :x (+ x dx)
                                       :y (+ y 1)
                                       :direction [-1 0])
                        (inserter :x (+ x dx)
                                       :y (+ y 2)
                                       :direction [-1 0])
                        (inserter :x (+ x dx)
                                       :y (+ y 3)
                                       :direction [-1 0])]

                       (apply concat
                              (for [j    (range 3)
                                    :let [y (+ 3 y (- j))]]
                                [(underground-belt :x (+ x 1 dx)
                                                        :y y
                                                        :direction [-1 0]
                                                        :type "input")
                                 (underground-belt :x (+ x 2 dx)
                                                        :y y
                                                        :direction [-1 0]
                                                        :type "output")])))))])

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
      `[~(underground-belt :x (+ x n -5) :y (- y 5) :direction [-1 0] :type "input")
        ~(transport-belt :x (+ x n -4) :y (- y 5) :direction [-1 0])
        ~@(for [i (range n)
                :when (not= 2 (mod i 3))]
            (case (mod i 3)
              0 (underground-belt :x (+ x i -5) :y (- y 5) :direction [-1 0] :type "input")
              1 (underground-belt :x (+ x i -5) :y (- y 5) :direction [-1 0] :type "output")))
        ~(splitter :x (+ x
                         (* 3 bus-index)
                         -4)
                   :y (- y 4))])))

(defn output-tap-common
  [& {:keys [x y output-index y-extension] :or {x 0
                                                y 0
                                                output-index 0}}]
  `[~(inserter  :x (- x 8) :y (- y 3 (- y-extension)) :direction [0 -1])
    ~@(for [i (range (inc y-extension))]
        (transport-belt :x (- x 8) :y (+ (- y 4)
                                              i) :direction [0 -1]))

    ~(transport-belt :x (- x 8) :y (- y 5) :direction [1 0])
    ~(transport-belt :x (- x 7) :y (- y 5) :direction [1 0])
    ~(transport-belt :x (- x 6) :y (- y 5) :direction [1 0])
    ~(transport-belt :x (- x 5) :y (- y 5) :direction [1 0])
    ~(transport-belt :x (- x 4) :y (- y 5) :direction [1 0])
    ~(transport-belt :x (- x 3) :y (- y 5) :direction [1 0])])

(defn output-tap
  [& {:keys [x y output-index y-extension] :or {x 0
                                    y 0
                                    output-index 0}}]
  (let [n (* 3 output-index)]
    `[~@(output-tap-common :x x :y y :output-index output-index :y-extension y-extension)
      
      ~(transport-belt :x (- x 2) :y (- y 5) :direction [1 0])

      ~@(for [i (range 1 (+ 3 n))
              :when (not= 2 (mod i 3))]
          (if (>= i n)
            (case (mod i 3)
              0 (underground-belt :x (+ x i -2) :y (- y 5) :direction [1 0] :type "output")
              1 (transport-belt :x (+ x i -2) :y (- y 5) :direction [1 0]))
            (case (mod i 3)
              0 (underground-belt :x (+ x i -2) :y (- y 5) :direction [1 0] :type "output")
              1 (underground-belt :x (+ x i -2) :y (- y 5) :direction [1 0] :type "input"))))]))

(defn output-tap-extension
  [& {:keys [x y output-index y-extension] :or {x 0
                                    y 0
                                    output-index 0}}]
  (let [n (* 3 output-index)]
    `[~@(output-tap-common :x x :y y :output-index output-index :y-extension y-extension)]))

(defn ingredients
  [recipe-name facility]
  (let [recipe-name (if (#{"petroleum-gas" "heavy-oil" "light-oil"} recipe-name)
                      "advanced-oil-processing"
                      recipe-name)]
    (-> recipes/recipes
        (recipe recipe-name)
        recipe-ingredients
        (cond->
            (#{"stone-furnace"} facility) (conj "coal")))))


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

(defn ingredients-by-recipe
  [recipe-name facility]
  (let [ingredients (sorted-recipe-order recipe-name)]
    (distinct (cond (#{"stone-furnace"} facility) (into ["coal"] ingredients)
                    :else                         ingredients))))

(defn ingredient-height
  [ingredient facility]
  (let [n (count (ingredients ingredient facility))]
    (cond (#{"stone-furnace"} facility)                               11
          (#{"electric-furnace"} facility)                            9
          (#{"oil-refinery"} facility)                                16
          (#{"assembling-machine-1" "assembling-machine-2"} facility) (+ 11 (if (> n 3)
                                                                              (+ (- n 3) 1)
                                                                              0))
          (#{"chemical-plant"} facility)                              12
          :else                                                       (throw (ex-info "Unknown ingredient height" {:ingredient ingredient
                                                                                                                   :facility facility})))))

(defn main-bus-line
  [& {:keys [x y n-factories facility buses output-index ingredient input-indexes ready-indexes] :or {buses       []
                                                                                                      n-factories 2
                                                                                                      y           0
                                                                                                      x           0
                                                                                                      ingredient  "iron-gear"}}]
  (let [outputs     #{output-index}
        y           (+ y (cond (#{"electric-furnace"} facility) -3
                               (#{"chemical-plant"} facility) -3
                               (#{"assembling-machine-2"} facility) -3

                               :else 0))]

    (filter identity
            (map #(assoc %1 "entity_number" (inc %2))
                 (-> []
                     (concat (factory-line :n-factories n-factories :x x :y y :ingredient ingredient :facility facility))

                     (concat (apply concat (for [[bus-ingredient i] buses
                                                 ;; :when (and (not (outputs i))
                                                 ;;            (ready-indexes i))
                                                 ]
                                             (let [x  (+ x 6)
                                                   y  (+ y 4 (- (ingredient-height ingredient facility))
                                                         (cond (#{"oil-refinery"} facility) 3
                                                               :else 0))
                                                   n  (count (ingredients ingredient facility))
                                                   dy (cond (#{"chemical-plant"} facility) 4
                                                            (#{"oil-refinery"} facility) 2
                                                            (#{"electric-furnace"} facility) 1
                                                            (#{"assembling-machine-2"} facility) (+ 3 (if (> n 3)
                                                                                                        (+ 1 (- n 3))
                                                                                                        0))
                                                            :else 0)]
                                               (if (fluid? bus-ingredient)
                                                 (pipe-bus :x (+ x (* i 3))
                                                           :y (+ y dy)
                                                           :height (ingredient-height ingredient facility))

                                                 (bus :x (+ x (* i 3))
                                                      :y (+ y dy)
                                                      :height (ingredient-height ingredient facility)))))))

                     ;; RHS -- output tap (transport belt)
                     (concat (let [x                     (+ x 6)
                                   y                     (+ y 6)
                                   non-fluid-ingredients (map-indexed vector (sort (map buses (remove fluid? (ingredients ingredient facility)))))]
                               (concat (when (and (> (count non-fluid-ingredients) 3)
                                                  (#{"assembling-machine-2" "electric-furnace"} facility))
                                         (apply concat (for [i    (range n-factories)
                                                             :let [x (+ x -4 2 -5)
                                                                   y  (+ -5 y 3 -2 4)
                                                                   dx (* -6 i)]]
                                                         [(long-handed-inserter :x (+ x dx)
                                                                                :y (- y 2)
                                                                                :direction [0 -1])
                                                          (inserter :x (+ x dx -1)
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
                                                                       [(underground-belt :x (+ x dx)
                                                                                               :y y
                                                                                               :direction [-1 0]
                                                                                               :type "output")
                                                                        (underground-belt :x (+ x dx -1)
                                                                                               :y y
                                                                                               :direction [-1 0]
                                                                                               :type "input")])))))
                                                  (input-tap :x (+ x 3) :y (+ y 3 (- input-index) -1) :input-index input-index :bus-index bus-index)))))))


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
                                                                       (#{"assembling-machine-2"} facility) 2
                                                                       :else 0))))))))
                     ;; output pipe taps - RHS
                     (concat (apply concat (for [[output-recipe output-index] (output-tap-indexes ingredient)
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
                                                     y (+ y 6)]
                                                 (for [i (range n-factories)
                                                       :let [y-extension (cond (#{"stone-furnace"} facility) 1
                                                                               :else                         0)]]
                                                   (if (> i 0)
                                                     (output-tap-extension :x (+ x (* -6 i))
                                                                           :y (+ y -2 -1)
                                                                           :output-index output-index
                                                                           :y-extension y-extension)
                                                     (output-tap :x (+ x (* -6 i))
                                                                 :y (+ y -2 -1)
                                                                 :output-index output-index
                                                                 :y-extension y-extension))))))

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
                                                                                                          (#{"assembling-machine-2"} facility) 1
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


(defn created?
  [recipe-name]
  (not (re-find #".*ore|water|coal|^stone$" recipe-name)))

(defn recipe-products
  ([recipe-names]
   (recipe-products recipe-names nil))
  ([recipe-names factories]
   (let [oil?        (seq (mapcat (fn [recipe-name]
                                    (let [facility (get-in factories [recipe-name :facility] (factory-type recipe-name))]
                                      (filter #(#{"advanced-oil-processing"} (recipe-type %))
                                              (ingredients-by-recipe recipe-name facility))))
                                  recipe-names))

         products    (reduce (fn [products recipe-name]
                               (let [facility (get-in factories [recipe-name :facility] (factory-type recipe-name))]
                                 (apply conj products (remove (set products)
                                                              (remove #(#{"advanced-oil-processing"} (recipe-type %))
                                                                      (ingredients-by-recipe recipe-name facility))))))
                             (if oil? ["heavy-oil"] [])
                             recipe-names)

         others      (when oil?
                       (set/difference (set (concat (map :name (mapcat :results (filter (comp #{"advanced-oil-processing"} :name)
                                                                                        recipes/recipes)))
                                                    (map :name (mapcat :ingredients (filter (comp #{"advanced-oil-processing"} :name)
                                                                                            recipes/recipes)))))
                                       (set products)))

         bus-outputs (->> (concat others products)
                          (map-indexed vector)
                          (map (comp vec reverse))
                          (into {}))]
     
     {:oil?        oil?
      :products    products
      :others      others
      :bus-outputs bus-outputs})))

(defn default-factories
  [recipe-names]
  (into {} (map #(vector % {:n 1
                            :facility (factory-type %)})
                (filter created? (:products (recipe-products recipe-names))))))

(defn main-bus
  [recipe-names factories]
  (let [{:keys [oil? products others bus-outputs]} (recipe-products recipe-names factories)
        deps                                       (map-indexed vector products)]
    (apply concat (:output (reduce (fn [{:keys [y] :as acc} [output-index ingredient]]
                                     (let [facility      (get-in factories [ingredient :facility])
                                           input-indexes (map bus-outputs (ingredients ingredient facility))]
                                       (-> acc
                                           (update :output conj
                                                   (main-bus-line :buses bus-outputs
                                                                  :y (- y (ingredient-height ingredient facility) 1)
                                                                  :n-factories (get-in factories [ingredient :n] 1)
                                                                  :facility facility
                                                                  :output-index output-index
                                                                  :ingredient ingredient
                                                                  :input-indexes input-indexes
                                                                  :ready-indexes (set (range output-index))))
                                           (update :y - (ingredient-height ingredient facility)))))
                                   {:y 0}
                                   (filter #(created? (second %)) deps))))))

(defn normalize
  [entities]
  (vals (into {} (map (juxt #(vector (int (Math/round (double (get-in % ["position" "y"]))))
                                     (int (Math/round (double (get-in % ["position" "x"])))))
                            identity)
                      entities))))




