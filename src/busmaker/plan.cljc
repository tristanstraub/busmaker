(ns busmaker.plan
  (:require [busmaker.main-bus :as main-bus]))

(defn plan
  [factories bus-outputs bus-width]
  (main-bus/normalize (main-bus/main-bus factories bus-outputs bus-width)))

