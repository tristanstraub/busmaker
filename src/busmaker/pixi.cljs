(ns busmaker.pixi
  (:require [impi.core :as impi]
            [rum.core :as rum]
            [cljs.core.match :refer-macros [match]]
            [goog.style :as style]
            [goog.dom :as dom]))

(set! *warn-on-infer* true)

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
   :underground-belt-output "widgets/underground-belt-output.svg"
   :stone-furnace           "widgets/stone-furnace.svg"
   :lab                     "widgets/lab.svg"}) 

(defn cell
  [entity x y]
  (let [g (fn [v & {:keys [rotate translate] :or {translate [0 0]
                                                  rotate    0}}]
            {:pixi.object/type         :pixi.object.type/sprite
             :pixi.object/position     (mapv + [(* 16 x) (* 16 y)] translate)
             :pixi.sprite/anchor       [0.5 0.5]
             :pixi.sprite/texture      {:pixi.texture/source (widgets v)}
             :pixi.object/rotation     (* Math/PI (/ rotate 180))
             :pixi.object/interactive? true
             :pixi.event/mouse-over    [:mouse-over entity]})]
    (match [(get entity "name")
            (direction (get entity "direction"))
            (keyword (get entity "type"))]
           ["grass" _ _] (g :grass)
           ["underground-belt" :n :input]  (g :underground-belt-input)
           ["underground-belt" :s :input]  (g :underground-belt-input :rotate 180)
           ["underground-belt" :w :input]  (g :underground-belt-input :rotate -90)
           ["underground-belt" :e :input]  (g :underground-belt-input :rotate 90)

           ["underground-belt" :n :output] (g :underground-belt-output)
           ["underground-belt" :s :output] (g :underground-belt-output :rotate 180)
           ["underground-belt" :w :output] (g :underground-belt-output :rotate -90)
           ["underground-belt" :e :output] (g :underground-belt-output :rotate 90)

           ["transport-belt" :n nil]       (g :transport-belt)
           ["transport-belt" :s nil]       (g :transport-belt :rotate 180)
           ["transport-belt" :w nil]       (g :transport-belt :rotate -90)
           ["transport-belt" :e nil]       (g :transport-belt :rotate 90)

           ["small-electric-pole" _ _] (g :electrical-pole)
           ["medium-electric-pole" _ _] (g :electrical-pole)

           ["pipe" _ _] (g :pipe)

           ["pipe-to-ground" :w _] (g :underground-pipe :rotate 90)
           ["pipe-to-ground" :e _] (g :underground-pipe :rotate -90)

           ["assembling-machine-1" _ _]  (g :assembling-machine)
           ["assembling-machine-2" _ _]  (g :assembling-machine)
           
           ["inserter" :s nil]       (g :inserter :rotate 90)
           ["inserter" :n nil]       (g :inserter :rotate -90)
           ["inserter" :e nil]       (g :inserter)
           ["inserter" :w nil]       (g :inserter :rotate 180)

           ["long-handed-inserter" :s nil]       (g :long-handed-inserter :rotate 90)
           ["long-handed-inserter" :n nil]       (g :long-handed-inserter :rotate -90)
           ["long-handed-inserter" :e nil]       (g :long-handed-inserter)
           ["long-handed-inserter" :w nil]       (g :long-handed-inserter :rotate 180)
           
           ["chemical-plant" _ _] (g :chemical-plant)
           ["oil-refinery" _ _] (g :oil-refinery)


           ["lab" _ _] (g :lab)
           ["electric-furnace" _ _] (g :furnace)
           ["stone-furnace" _ _] (g :stone-furnace :translate [8 8])
           ["steel-furnace" _ _] (g :stone-furnace :translate [8 8])
           ["splitter" _ _] (g :splitter :translate [8 0]))))

(def margin-x 2)

(def viewport-window
  {:width 1000
   :height 1000})


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
  [children position]
  {:impi/key                :stage
   :pixi.object/position    position
   :pixi.object/type        :pixi.object.type/container
   :pixi.container/children children})

(defmethod impi/update-prop! :pixi.event/pointer-down [object index _ listener]
  (impi/replace-listener object "pointerdown" index listener))

(defmethod impi/update-prop! :pixi.event/pointer-up [object index _ listener]
  (impi/replace-listener object "pointerup" index listener))

(defmethod impi/update-prop! :pixi.event/pointer-move [object index _ listener]
  (impi/replace-listener object "pointermove" index listener))

(defmethod impi/update-prop! :pixi.object/button-mode? [^js/PIXI.DisplayObject object _ _ button-mode?]
  (set! (.-buttonMode object) button-mode?))

(defn render-stage!
  [state drag children id]
  (let [[w h]       [2000 800]
        [app-state] (:rum/args state)]

    (impi/mount :blueprint
                {:pixi/renderer  {:pixi.renderer/size [w h]}
                 
                 :pixi/stage     (merge (solution-stage children
                                                        [(get @drag :x 0)
                                                         (get @drag :y 0)])
                                        
                                        {:pixi.object/interactive? true
                                         :pixi.object/contains-point (constantly true)
                                         :pixi.event/pointer-down  [:pointer-down]
                                         :pixi.event/pointer-up    [:pointer-up]
                                         :pixi.event/pointer-move  [:pointer-move]})
                 
                 :pixi/listeners {:mouse-over   (fn [_ entity]
                                                  (swap! app-state assoc :entity entity))

                                  :pointer-down (fn [^js/PIXI.interaction.InteractionEvent e]
                                                  (let [{:keys [x y]} @drag]
                                                    (swap! drag assoc
                                                           :mx0       (.. e -data -originalEvent -clientX)
                                                           :my0       (.. e -data -originalEvent -clientY)
                                                           :x0        x
                                                           :y0        y
                                                           :dragging? true)))
                                  
                                  :pointer-move (fn [^js/PIXI.interaction.InteractionEvent e]
                                                  (when (:dragging? @drag)
                                                    (let [{:keys [x y
                                                                  mx0 my0
                                                                  x0 y0]} @drag
                                                          dmx (- mx0 (.. e -data -originalEvent -clientX))
                                                          dmy (- my0 (.. e -data -originalEvent -clientY))]
                                                      (swap! drag
                                                             assoc
                                                             :x (- x0 dmx)
                                                             :y (- y0 dmy)))))

                                  :pointer-up   (fn [_]
                                                  (swap! drag assoc :dragging? false))}}
                (rum/dom-node state))))

(def impi
  {:did-mount (fn [state]
                (let [drag        (atom {:dragging? false
                                         :x         0
                                         :y         0})
                      [app-state] (:rum/args state)
                      children    (atom (vec (entities-stage-children (:solution @app-state))))
                      id          (rand-int 10000)]

                  (render-stage! state drag @children id)

                  (add-watch drag ::drag (fn [& _]
                                           (render-stage! state drag @children id)))

                  (assoc state ::drag drag ::children children ::id id)))

   :will-update (fn [state]
                  (let [[app-state] (:rum/args state)]
                    (render-stage! state
                                   (::drag state)
                                   (reset! (::children state)
                                           (vec (entities-stage-children (:solution @app-state))))
                                   (::id state))

                    (add-watch (::drag state) ::drag
                               (fn [k r o n]
                                 (render-stage! state
                                                (::drag state)
                                                @(::children state)
                                                (::id state)))))
                  state)
   
   :will-unmount (fn [state]
                   (remove-watch (::drag state) ::drag)
                   (impi/unmount :blueprint)
                   (dissoc state ::drag ::children))})

(rum/defc panel < impi rum/reactive
  [state]
  (rum/react (rum/cursor-in state [:solution]))
  
  [:div])



