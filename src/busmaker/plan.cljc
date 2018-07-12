(ns busmaker.plan
  (:require [busmaker.main-bus :as main-bus]))

(defn plan
  [recipe-names factories]
  (main-bus/normalize (main-bus/main-bus recipe-names factories)))

