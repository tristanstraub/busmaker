(ns busmaker.plan
  (:require [busmaker.main-bus :as main-bus]))

(defn plan
  [recipe-names]
  (main-bus/normalize (main-bus/main-bus recipe-names
                                         :depth 1000
                                         :n-factories 5)))

