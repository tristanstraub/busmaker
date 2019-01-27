(ns busmaker.templates
  (:require [busmaker.recipes :as recipes]))

(defn blueprint-direction-inserter
  [[x y]]
  (case [x y]
    [1 0]  6 ;; 3
    [0 1]  0
    [0 -1] 4
    [-1 0] 2))

(defn blueprint-direction
  [[x y]]
  (case [x y]
    [1 0]  2 ;; 3
    [0 1]  4
    [0 -1] 0
    [-1 0] 6))

(defn direction-blueprint
  [d]
  (case d
    2 [1 0]
    4 [0 1]
    0 [0 -1]
    6 [-1 0]))

(defn inserter
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  [{"direction"     (blueprint-direction-inserter direction)
     "name"          "inserter"
     "position"      {"x" x
                      "y" y}}])

(defn long-handed-inserter
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  [{"direction"     (blueprint-direction-inserter direction)
     "name"          "long-handed-inserter"
     "position"      {"x" x
                      "y" y}}])


(defn transport-belt
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  [{"direction"     (blueprint-direction direction)
     "name"          "transport-belt"
     "position"      {"x" x
                      "y" y}}])

(defn underground-belt
  [& {:keys [x y direction type] :or {direction [0 -1]
                                      type      "input"
                                      x         0
                                      y         0}}]
  [{"direction"     (blueprint-direction direction)
     "name"          "underground-belt"
     "type"          type
     "position"      {"x" x
                      "y" y}}])

(defn pipe
  [& {:keys [x y direction] :or {direction [0 -1]
                                 x         0
                                 y         0}}]
  [{"name"          "pipe"
    "direction"     (blueprint-direction direction)
    "position"      {"x" x
                     "y" y}}])

(defn pipe-to-ground
  [& {:keys [x y direction type] :or {direction [0 -1]
                                      x         0
                                      y         0}}]
  [{"direction"     (blueprint-direction direction)
     "name"          "pipe-to-ground"
     "position"      {"x" x
                      "y" y}}])

(defn small-electric-pole
  [& {:keys [x y] :or {
                       x         0
                       y         0}}]
  [{"name"          "small-electric-pole"
     "position"      {"x" x
                      "y" y}}])

(defn factory
  [& {:keys [x y facility recipe] :or {x 0
                                       y 0}}]
  [{"name"     facility
     "recipe"   (recipes/recipe-type recipe)
     "position" {"x" (cond (#{"steel-furnace" "stone-furnace"} facility)                                   (+ x 0.5)
                           (or (not (recipes/fluid? recipe))
                               (#{"lubricant" "sulfur" "sulfuric-acid" "battery"} recipe)) x

                           :else                                                           (dec x))
                 "y" (cond (#{"steel-furnace" "stone-furnace"} facility) (+ y 0.5)
                           :else                         y)}

     "direction" (cond (#{"oil-refinery"} facility) (blueprint-direction-inserter [0 1])
                       :else (blueprint-direction-inserter [0 -1]))}])

(defn medium-electric-pole
  [& {:keys [x y] :or {
                       x         0
                       y         0}}]
  [{"name"          "medium-electric-pole"
     "position"      {"x" x
                      "y" y}}])

(defn rotate-90
  [[x y]]
  [(- y) x])

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

(defn factory-line
  [& {:keys [x y recipes n-factories facility] :or {x           0
                                                    y           0
                                                    n-factories 1
                                                    facility    "assembling-machine-1"}}]
  (apply concat
         (for [i (range n-factories)
               :let [dx (* i (cond (#{"oil-refinery"} facility) -8
                                   :else -6))]]
           (concat (medium-electric-pole :x (+ x dx)
                                        :y y)
                   (medium-electric-pole :x (+ x dx)
                                        :y (+ y 4))

                   (factory :x (+ x -2 dx)
                            :y (+ y 2)
                            :recipe (first recipes)
                            :facility facility)

                   (inserter :x (+ x dx)
                             :y (+ y 1)
                             :direction [-1 0])
                   (inserter :x (+ x dx)
                             :y (+ y 2)
                             :direction [-1 0])
                   (inserter :x (+ x dx)
                             :y (+ y 3)
                             :direction [-1 0])

                   (apply concat
                          (for [j    (range 3)
                                :let [y (+ 3 y (- j))]]
                            (concat (underground-belt :x (+ x 1 dx)
                                                      :y y
                                                      :direction [-1 0]
                                                      :type "input")
                                    (underground-belt :x (+ x 2 dx)
                                                      :y y
                                                      :direction [-1 0]
                                                      :type "output"))))))))

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

(def templates
  {:inserter            {:template/constructor #'inserter}
   :underground-belt    {:template/constructor #'underground-belt}
   :transport-belt      {:template/constructor #'transport-belt}
   :small-electric-pole {:template/constructor #'small-electric-pole}
   :factory             {:template/constructor #'factory}
   :factory-line        {:template/constructor #'factory-line}})

(defn template
  [key & options]
  (let [{:keys [template/constructor]} (templates key)]
    (assert constructor)
    (apply constructor options)))

