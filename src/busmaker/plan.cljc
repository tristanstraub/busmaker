(ns busmaker.plan
  (:require #?@(:clj [[busmaker.blueprint]]
                :cljs [])
            [busmaker.main-bus :as main-bus]))

(defn plan
  [recipe-name]
  (main-bus/normalize (main-bus/main-bus recipe-name
                                         :depth 1000
                                         :n-factories 5)))

