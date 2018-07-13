(ns busmaker.state-test
  (:require [busmaker.state :as state]
            [clojure.test :refer [deftest is testing]]
            [busmaker.plan :as plan]))

(deftest add-recipe
  []
  (testing :factories
    (is (= [{:facility "stone-furnace", :recipes ["stone-brick"], :n 1}]
           (:factories (state/add-recipe nil "stone-brick"))))

    (is (= [{:facility "stone-furnace", :recipes ["stone-brick"], :n 1}
            {:facility "stone-furnace", :recipes ["iron-plate"], :n 1}]
           (:factories (-> nil
                           (state/add-recipe "stone-brick")
                           (state/add-recipe "iron-plate"))))))

  (testing :bus-outputs
    (is (= ["coal" "stone" "stone-brick"]
           (:bus-outputs (state/add-recipe nil "stone-brick"))))

    (is (= ["coal" "stone" "stone-brick" "iron-ore" "iron-plate"]
           (:bus-outputs (-> nil
                             (state/add-recipe "stone-brick")
                             (state/add-recipe "iron-plate")))))))

(deftest remove-recipe
  (is (= {:factories [] :bus-outputs ["coal" "stone" "stone-brick"]}
         (-> nil
             (state/add-recipe "stone-brick")
             (as-> state
                 (state/remove-recipe state "stone-brick")))))

  (is (= {:factories    [{:facility "stone-furnace", :recipes ["iron-plate"], :n 1}]
          :bus-outputs     ["coal" "stone" "stone-brick" "iron-ore" "iron-plate"]}
         (-> nil
             (state/add-recipe "stone-brick")
             (state/add-recipe "iron-plate")
             (state/remove-recipe "stone-brick"))))

  (is (= [{:facility "oil-refinery", :n 1, :recipes ["heavy-oil" "light-oil" "petroleum-gas"]}
          {:facility "stone-furnace", :n 1, :recipes ["iron-plate"]}
          {:facility "chemical-plant", :n 1, :recipes ["sulfur"]}
          {:facility "chemical-plant", :n 1, :recipes ["sulfuric-acid"]}
          {:facility "stone-furnace", :n 1, :recipes ["copper-plate"]}
          {:facility "chemical-plant", :n 1, :recipes ["battery"]}
          {:facility "assembling-machine-1", :n 1, :recipes ["accumulator"]}]
         (:factories (state/add-recipe nil "accumulator"))))

  (is (= [{:facility "oil-refinery", :n 1, :recipes ["heavy-oil" "light-oil" "petroleum-gas"]}
          {:facility "stone-furnace", :n 1, :recipes ["iron-plate"]}
          {:facility "chemical-plant", :n 1, :recipes ["sulfur"]}
          {:facility "chemical-plant", :n 1, :recipes ["sulfuric-acid"]}
          {:facility "stone-furnace", :n 1, :recipes ["copper-plate"]}
          {:facility "chemical-plant", :n 1, :recipes ["battery"]}]
         (-> nil
             (state/add-recipe "accumulator")
             (state/remove-recipe "accumulator")
             :factories)))

  (is (= [{:facility "oil-refinery", :n 1, :recipes ["heavy-oil" "light-oil" "petroleum-gas"]}
          {:facility "stone-furnace", :n 1, :recipes ["iron-plate"]}
          {:facility "chemical-plant", :n 1, :recipes ["sulfur"]}
          {:facility "chemical-plant", :n 1, :recipes ["sulfuric-acid"]}
          {:facility "stone-furnace", :n 1, :recipes ["copper-plate"]}
          {:facility "assembling-machine-1", :n 1, :recipes ["accumulator"]}]
         (:factories (-> nil
                         (state/add-recipe "accumulator")
                         (state/remove-recipe "battery")))))

  (is (= ["coal"
          "petroleum-gas"
          "water"
          "iron-ore"
          "iron-plate"
          "sulfur"
          "sulfuric-acid"
          "copper-ore"
          "copper-plate"
          "battery"
          "accumulator"]
         (-> nil
             (state/add-recipe "accumulator")
             (state/remove-recipe "battery")
             :bus-outputs)))

  (is (let [state (-> nil
                      (state/add-recipe "accumulator")
                      (state/remove-recipe "battery"))]
        (plan/plan (:factories state)
                   (:bus-outputs state)))))

(deftest default-state
  []
  (is (= {:bus-outputs     ["coal" "iron-ore" "iron-plate"],
          :factories    [{:facility "stone-furnace", :recipes ["iron-plate"], :n 1}]}
         (dissoc (state/default-state)
                 :solution))))

(deftest change-facility-line-length
  (is (= {:factories
          [{:facility "stone-furnace", :n 2, :recipes ["stone-brick"]}],
          :bus-outputs ["coal" "stone" "stone-brick"]}
         (-> (state/add-recipe nil "stone-brick")
             (state/change-facility-line-length "stone-brick" 2)))))
