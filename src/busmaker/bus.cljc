(ns busmaker.bus
  (:require [busmaker.recipes :as recipes]
            [clojure.set :as set]
            [busmaker.recipe-data :as recipe-data]))

(defn default-buses
  [recipe-names]
  (distinct (mapcat recipes/ingredients-by-recipe-recursive recipe-names)))

(defn- factory-outputs
  [factory-type recipe-name]
  (cond (= factory-type "oil-refinery") ["heavy-oil" "light-oil" "petroleum-gas"]
        :else [recipe-name]))

(defn default-factories
  [recipe-names]
  (mapv #(hash-map :n        1
                   :recipes  (factory-outputs (recipes/factory-type %)
                                              %)
                   :facility (recipes/factory-type %))
        (remove recipes/raw? (default-buses recipe-names))))

(defn add-factories
  [factories new-factories]
  (let [existing-recipes (set (mapcat :recipes factories))]
    (->> (remove #(every? existing-recipes (:recipes %)) new-factories)
         (into (vec factories)))))

(defn add-bus-outputs
  [bus-outputs new-bus-outputs]
  (let [existing-bus-outputs (set bus-outputs)]
    (->> (remove existing-bus-outputs new-bus-outputs)
         (into (vec bus-outputs)))))

(defn remove-factory
  [factories factory]
  (vec (remove #{factory} factories)))

(defn get-factory
  [factories recipe-name]
  {:post [%]}
  (first (filter #(some #{recipe-name} (:recipes %)) factories)))
