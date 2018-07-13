(ns busmaker.state
  (:require [busmaker.bus :as bus]))

(defn add-recipe
  [state recipe-name]
  (let [recipe-names (conj (:recipe-names state) recipe-name)]
    (-> state
        (assoc :recipe-names recipe-names)
        (update :factories bus/add-factories (bus/default-factories [recipe-name]))
        (merge (bus/recipe-products recipe-names)))))
