(ns busmaker.plan
  (:require [busmaker.main-bus :as main-bus]))

(defn plan
  [recipe-names factories products bus-outputs]
  (main-bus/normalize (main-bus/main-bus recipe-names factories products bus-outputs)))

