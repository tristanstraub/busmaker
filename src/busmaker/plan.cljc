(ns busmaker.plan
  (:require [busmaker.main-bus :as main-bus]
            [busmaker.matrix :as matrix]
            [busmaker.recipes :as recipes]))

(defn plan
  [factories bus-outputs bus-width]
  (when (last bus-outputs)
    (main-bus/normalize (matrix/matrix-bus (recipes/matrix (last bus-outputs))
                                           (recipes/matrix (last bus-outputs) (partial into {})))))
  #_(main-bus/normalize (matrix/matrix-bus (recipes/matrix "science-pack-2")))
  #_ (let [result (main-bus/normalize (main-bus/main-bus factories bus-outputs bus-width))]
    (prn result)
    result))

