(ns busmaker.bus-test
  (:require [busmaker.bus :as bus]
            [clojure.test :refer [deftest is]]))

(deftest default-factories
  (is (= [{:facility "stone-furnace" :recipe "stone-brick" :n 1}]
         (bus/default-factories ["stone-brick"])))

  (is (= [{:facility "oil-refinery" :recipe "heavy-oil" :n 1}
          {:facility "stone-furnace" :recipe "stone-brick" :n 1}
          {:facility "stone-furnace" :recipe "iron-plate" :n 1}
          {:facility "chemical-plant" :recipe "sulfur" :n 1}
          {:facility "chemical-plant" :recipe "sulfuric-acid" :n 1}
          {:facility "stone-furnace" :recipe "copper-plate" :n 1}
          {:facility "chemical-plant" :recipe "battery" :n 1}]
         (bus/default-factories ["stone-brick" "iron-plate" "battery"])))

  (is (= [{:facility "oil-refinery", :recipe "heavy-oil", :n 1}
          {:facility "stone-furnace", :recipe "iron-plate", :n 1}
          {:facility "chemical-plant", :recipe "sulfur", :n 1}
          {:facility "chemical-plant", :recipe "sulfuric-acid", :n 1}
          {:facility "stone-furnace", :recipe "copper-plate", :n 1}
          {:facility "chemical-plant", :recipe "battery", :n 1}]
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

  (is (= [{:facility "stone-furnace", :recipe "stone-brick", :n 1}
          {:facility "stone-furnace", :recipe "iron-plate", :n 1}]
         (bus/add-factories
          (bus/default-factories ["stone-brick"])
          (bus/default-factories ["iron-plate"]))))

  (is (= [{:facility "stone-furnace", :recipe "stone-brick", :n 1}
          {:facility "stone-furnace", :recipe "iron-plate", :n 1}]
         (bus/add-factories
          (bus/default-factories ["stone-brick"])
          (bus/default-factories ["iron-plate"]))))

  (is (= [{:facility "stone-furnace" :recipe "iron-plate" :n 1}
          {:facility "oil-refinery" :recipe "heavy-oil" :n 1}
          {:facility "chemical-plant" :recipe "sulfur" :n 1}
          {:facility "chemical-plant" :recipe "sulfuric-acid" :n 1}
          {:facility "stone-furnace" :recipe "copper-plate" :n 1}
          {:facility "chemical-plant" :recipe "battery" :n 1}]
         (bus/add-factories
          (bus/default-factories ["iron-plate"])
          (bus/default-factories ["battery"])))))
