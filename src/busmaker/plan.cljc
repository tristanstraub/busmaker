(ns busmaker.plan
  (:require [busmaker.main-bus :as main-bus]
            [busmaker.matrix :as matrix]
            [busmaker.autoroute :as autoroute]
            [busmaker.recipes :as recipes]))

(defn plan
  [layout factories bus-outputs bus-width]
  (case layout
    :matrix
    (when (last bus-outputs)
      (let [solution (recipes/matrix (last bus-outputs)
                                     (fn [items]
                                       (mapcat (fn [[k vs]]
                                                 (if (= k "science-pack-10")
                                                   (repeat 3 [k vs])
                                                   [[k vs]]))
                                               items)))]
        (main-bus/normalize (matrix/matrix-bus solution))))

    :bus
    (let [result (main-bus/normalize (main-bus/main-bus factories bus-outputs bus-width))]
      (prn result)
      result)
    
    (when (last bus-outputs)
      (main-bus/normalize (autoroute/matrix-bus (recipes/matrix (last bus-outputs))))))
  
  #_(main-bus/normalize (matrix/matrix-bus (recipes/matrix "science-pack-2")))
  )




