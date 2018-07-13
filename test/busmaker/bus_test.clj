(ns busmaker.bus-test
  (:require [busmaker.bus :as bus]
            [clojure.test :refer [deftest is]]))

(deftest default-factories
  (is (= [{:facility "stone-furnace" :recipes ["stone-brick"] :n 1}]
         (bus/default-factories ["stone-brick"])))

  (is (= [{:facility "stone-furnace", :n 1, :recipes ["stone-brick"]}
          {:facility "stone-furnace", :n 1, :recipes ["iron-plate"]}
          {:facility "oil-refinery", :n 1, :recipes ["heavy-oil" "light-oil" "petroleum-gas"]}
          {:facility "chemical-plant", :n 1, :recipes ["sulfur"]}
          {:facility "chemical-plant", :n 1, :recipes ["sulfuric-acid"]}
          {:facility "stone-furnace", :n 1, :recipes ["copper-plate"]}
          {:facility "chemical-plant", :n 1, :recipes ["battery"]}]
         (bus/default-factories ["stone-brick" "iron-plate" "battery"])))

  (is (= [{:facility "stone-furnace", :n 1, :recipes ["iron-plate"]}
          {:facility "oil-refinery", :n 1, :recipes ["heavy-oil" "light-oil" "petroleum-gas"]}
          {:facility "chemical-plant", :n 1, :recipes ["sulfur"]}
          {:facility "chemical-plant", :n 1, :recipes ["sulfuric-acid"]}
          {:facility "stone-furnace", :n 1, :recipes ["copper-plate"]}
          {:facility "chemical-plant", :n 1, :recipes ["battery"]}]
         (bus/default-factories ["iron-plate" "battery"]))))

(deftest add-factories
  (is (= (bus/default-factories ["stone-brick"])
         (bus/add-factories
          (bus/default-factories ["stone-brick"])
          (bus/default-factories []))))

  (is (= (bus/default-factories ["stone-brick"])
         (bus/add-factories
          (bus/default-factories [])
          (bus/default-factories ["stone-brick"]))))

  (is (= [{:facility "stone-furnace", :recipes ["stone-brick"], :n 1}
          {:facility "stone-furnace", :recipes ["iron-plate"], :n 1}]
         (bus/add-factories
          (bus/default-factories ["stone-brick"])
          (bus/default-factories ["iron-plate"]))))

  (is (= [{:facility "stone-furnace", :recipes ["stone-brick"], :n 1}
          {:facility "stone-furnace", :recipes ["iron-plate"], :n 1}]
         (bus/add-factories
          (bus/default-factories ["stone-brick"])
          (bus/default-factories ["iron-plate"]))))

  (is (= [{:facility "stone-furnace" :recipes ["iron-plate"] :n 1}
          {:facility "oil-refinery" :recipes ["heavy-oil" "light-oil" "petroleum-gas"] :n 1}
          {:facility "chemical-plant" :recipes ["sulfur"] :n 1}
          {:facility "chemical-plant" :recipes ["sulfuric-acid"] :n 1}
          {:facility "stone-furnace" :recipes ["copper-plate"] :n 1}
          {:facility "chemical-plant" :recipes ["battery"] :n 1}]
         (bus/add-factories
          (bus/default-factories ["iron-plate"])
          (bus/default-factories ["battery"]))))

  (is (= {:facility "stone-furnace", :recipes ["iron-plate"], :n 1}
         (bus/get-factory
          (bus/add-factories
           (bus/default-factories ["iron-plate"])
           (bus/default-factories ["battery"]))
          "iron-plate")))

  (is (= [{:facility "stone-furnace", :recipes ["stone-brick"], :n 1}]
         (let [factories (bus/default-factories ["iron-plate" "stone-brick"])]
           (bus/remove-factory factories
                               (bus/get-factory factories "iron-plate"))))))


(deftest get-factory
  (is (= {:facility "oil-refinery", :n 1, :recipes ["heavy-oil" "light-oil" "petroleum-gas"]}
         (bus/get-factory (bus/default-factories ["battery"])
                          "heavy-oil")))
  (is (= {:facility "stone-furnace", :n 1, :recipes ["iron-plate"]}
         (bus/get-factory (bus/default-factories ["battery"])
                          "iron-plate"))))

(deftest add-bus-outputs
  (is (= ["stone-brick"]
         (bus/add-bus-outputs [] ["stone-brick"])))
  (is (= ["coal"]
         (bus/add-bus-outputs ["coal"] ["coal"]))))
