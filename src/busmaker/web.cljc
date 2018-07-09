(ns busmaker.web
  (:require #?(:clj [clojure.core.match :as match :refer [match]]
               :cljs [cljs.core.match :refer-macros [match]])))

(defn direction
  [d]
  (case d
    2 :e
    6 :w
    4 :s
    0 :n
    nil))

(defn cell
  [state entity x y & {:keys [widgets]}]
  
  (let [{:keys [grass
                electrical-pole
                inserter
                long-handed-inserter
                splitter
                transport-belt
                pipe
                assembling-machine
                furnace
                chemical-plant
                oil-refinery
                underground-pipe
                underground-belt-input
                underground-belt-output]} widgets
        c                                 (fn [v]
                                            [:text {:transform (str " translate(" (* 16 x) " " (* 16 y) ")")}
                                             v])
        g                                 (fn [v & {:keys [rotate translate]}]
                                            [:g {:on-mouse-enter (fn [_]
                                                                   (swap! state assoc :entity entity))
                                                 :transform (str 
                                                             (str " translate(" (* 16 x) " " (* 16 (dec y)) ")")
                                                             (when translate
                                                               (str " translate(" (translate 0) " " (translate 1) ")"))
                                                             (when rotate
                                                               (str " rotate(" rotate " 8 8)")))}
                                             v])]
    (match [(get entity "name")
            (direction (get entity "direction"))
            (keyword (get entity "type"))]
           ["grass" _ _] (g grass)
           ["fast-underground-belt" :n :input]  (g underground-belt-input)
           ["fast-underground-belt" :s :input]  (g underground-belt-input :rotate "180")
           ["fast-underground-belt" :w :input]  (g underground-belt-input :rotate "-90")
           ["fast-underground-belt" :e :input]  (g underground-belt-input :rotate "90")

           ["fast-underground-belt" :n :output] (g underground-belt-output)
           ["fast-underground-belt" :s :output] (g underground-belt-output :rotate "180")
           ["fast-underground-belt" :w :output] (g underground-belt-output :rotate "-90")
           ["fast-underground-belt" :e :output] (g underground-belt-output :rotate "90")

           ["fast-transport-belt" :n nil]       (g transport-belt)
           ["fast-transport-belt" :s nil]       (g transport-belt :rotate "180")
           ["fast-transport-belt" :w nil]       (g transport-belt :rotate "-90")
           ["fast-transport-belt" :e nil]       (g transport-belt :rotate "90")

           ["medium-electric-pole" _ _] (g electrical-pole)

           ["pipe" _ _] (g pipe)

           ["pipe-to-ground" :w _] (g underground-pipe :rotate "90")
           ["pipe-to-ground" :e _] (g underground-pipe :rotate "-90")

           ["assembling-machine-2" _ _]  (g assembling-machine :translate [-16 -16])
           ["fast-inserter" :s nil]       (g inserter :rotate "90")
           ["fast-inserter" :n nil]       (g inserter :rotate "-90")
           ["fast-inserter" :e nil]       (g inserter)
           ["fast-inserter" :w nil]       (g inserter :rotate "180")

           ["long-handed-inserter" :s nil]       (g long-handed-inserter :rotate "90")
           ["long-handed-inserter" :n nil]       (g long-handed-inserter :rotate "-90")
           ["long-handed-inserter" :e nil]       (g long-handed-inserter)
           ["long-handed-inserter" :w nil]       (g long-handed-inserter :rotate "180")
           
           ["chemical-plant" _ _] (g chemical-plant :translate [-16 -16])
           ["oil-refinery" _ _] (g oil-refinery :translate [-32 -32])

           ["electric-mining-drill" _ _] (c "x")
           ["electric-furnace" _ _] (g furnace :translate [-16 -16])
           ["fast-splitter" _ _] (g splitter))))

(defn print-entities
  [state entities widgets]
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
    [:svg.canvas {:xmlns "http://www.w3.org/2000/svg"          
                  ;;           :viewBox "0 0 2000 4000"
                  }
     (for [y (range dy)]
       (for [x (range dx)]
         [:g {:key x}
          (when-let [entity (get indexed [(+ y min-y) (+ x min-x)])]
            (cell state entity x y :widgets widgets))]))]))

