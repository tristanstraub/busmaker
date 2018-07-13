(ns busmaker.plan-test
  (:require [busmaker.plan :as plan]
            [busmaker.state :as state]
            [clojure.test :refer [deftest is]]))

(deftest plan
  (is (let [state (-> nil
                      (state/add-recipe "accumulator")
                      (state/remove-recipe "accumulator"))]

        (plan/plan (:factories state)
                   (:bus-outputs state)))))
