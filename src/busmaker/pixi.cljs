(ns busmaker.pixi
  (:require [impi.core :as impi]
            [rum.core :as rum]
            [cljs.core.match :refer-macros [match]]))


(defn direction
  [d]
  (case d
    2 :e
    6 :w
    4 :s
    0 :n
    nil))

(def widgets
  {:grass                   "widgets/grass.svg"
   :electrical-pole         "widgets/electrical-pole.svg"
   :inserter                "widgets/inserter.svg"
   :long-handed-inserter    "widgets/long-handed-inserter.svg"
   :splitter                "widgets/splitter.svg"
   :transport-belt          "widgets/transport-belt.svg"
   :pipe                    "widgets/pipe.svg"
   :assembling-machine      "widgets/assembling-machine.svg"
   :furnace                 "widgets/furnace.svg"
   :chemical-plant          "widgets/chemical-plant.svg"
   :oil-refinery            "widgets/oil-refinery.svg"
   :underground-pipe        "widgets/underground-pipe.svg"
   :underground-belt-input  "widgets/underground-belt-input.svg"
   :underground-belt-output "widgets/underground-belt-output.svg"}) 

(defn cell
  [entity x y]
  (let [g (fn [v & {:keys [rotate translate] :or {translate [0 0]
                                                  rotate    0}}]
            {:pixi.object/type     :pixi.object.type/sprite
             :pixi.object/position (mapv + [(* 16 x) (* 16 y)] translate)
             :pixi.sprite/anchor   [0.5 0.5]
             :pixi.sprite/texture  {:pixi.texture/source (widgets v)}
             :pixi.object/rotation (* Math/PI (/ rotate 180))})]
    (match [(get entity "name")
            (direction (get entity "direction"))
            (keyword (get entity "type"))]
           ["grass" _ _] (g :grass)
           ["fast-underground-belt" :n :input]  (g :underground-belt-input)
           ["fast-underground-belt" :s :input]  (g :underground-belt-input :rotate 180)
           ["fast-underground-belt" :w :input]  (g :underground-belt-input :rotate -90)
           ["fast-underground-belt" :e :input]  (g :underground-belt-input :rotate 90)

           ["fast-underground-belt" :n :output] (g :underground-belt-output)
           ["fast-underground-belt" :s :output] (g :underground-belt-output :rotate 180)
           ["fast-underground-belt" :w :output] (g :underground-belt-output :rotate -90)
           ["fast-underground-belt" :e :output] (g :underground-belt-output :rotate 90)

           ["fast-transport-belt" :n nil]       (g :transport-belt)
           ["fast-transport-belt" :s nil]       (g :transport-belt :rotate 180)
           ["fast-transport-belt" :w nil]       (g :transport-belt :rotate -90)
           ["fast-transport-belt" :e nil]       (g :transport-belt :rotate 90)

           ["medium-electric-pole" _ _] (g :electrical-pole)

           ["pipe" _ _] (g :pipe)

           ["pipe-to-ground" :w _] (g :underground-pipe :rotate 90)
           ["pipe-to-ground" :e _] (g :underground-pipe :rotate -90)

           ["assembling-machine-2" _ _]  (g :assembling-machine :translate [0 0])
           ["fast-inserter" :s nil]       (g :inserter :rotate 90)
           ["fast-inserter" :n nil]       (g :inserter :rotate -90)
           ["fast-inserter" :e nil]       (g :inserter)
           ["fast-inserter" :w nil]       (g :inserter :rotate 180)

           ["long-handed-inserter" :s nil]       (g :long-handed-inserter :rotate 90)
           ["long-handed-inserter" :n nil]       (g :long-handed-inserter :rotate -90)
           ["long-handed-inserter" :e nil]       (g :long-handed-inserter)
           ["long-handed-inserter" :w nil]       (g :long-handed-inserter :rotate 180)
           
           ["chemical-plant" _ _] (g :chemical-plant :translate [0 0])
           ["oil-refinery" _ _] (g :oil-refinery)

           ["electric-furnace" _ _] (g :furnace :translate [0 0])
           ["fast-splitter" _ _] (g :splitter :translate [8 0]))))

(def margin-x 2)

(defn entities-stage-children
  [entities]
  (let [indexed (into {} (map (juxt #(vector (Math/floor (double (get-in % ["position" "y"])))
                                             (Math/floor (double (get-in % ["position" "x"]))))
                                    identity)
                              entities))
        min-y   (apply min (map first (keys indexed)))
        max-y   (apply max (map first (keys indexed)))
        min-x   (apply min (map second (keys indexed)))
        max-x   (apply max (map second (keys indexed)))
        dx      (inc (- max-x min-x))
        dy      (inc (- max-y min-y))]
    (for [y (range dy)
          x (range dx)
          :let [entity (get indexed [(+ y min-y) (+ x min-x)])]
          :when entity]
      (assoc (cell entity (+ margin-x x) y)
             :impi/key (str (* y dy) "-" x)))))

(defn solution-stage
  [entities]
  {:impi/key :stage
   :pixi.object/type :pixi.object.type/container
   :pixi.container/children (vec (entities-stage-children entities))})

(defn render-stage!
  [dom-node stage]
  (impi/mount :blueprint
              {:pixi/renderer {:pixi.renderer/size [2000 1400]}
               :pixi/stage    stage}
              dom-node))

(defn render-dom-stage!
  [state]
  (let [[app-state] (:rum/args state)
        stage       (solution-stage (:solution @app-state))]
    (render-stage! (rum/dom-node state)
                   stage)))

(def impi
  {:did-mount (fn [state]
                (render-dom-stage! state)
                state)

   :will-update (fn [state]
                  (render-dom-stage! state)
                  state)
   
   :will-unmount (fn [state]
                   (impi/unmount :blueprint)
                   state)})

(rum/defc panel
  < impi
    rum/reactive
  [state]
  (let [_ (rum/react (rum/cursor-in state [:solution]))]
    [:div]))


