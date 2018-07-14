(ns busmaker.bus
  (:require [busmaker.recipes :as recipes]
            [clojure.set :as set]
            [busmaker.recipe-data :as recipe-data]))

(defn factory-outputs
  [factory-type recipe-name]
  (cond (= factory-type "oil-refinery") ["heavy-oil" "light-oil" "petroleum-gas"]
        :else [recipe-name]))

(defn outputs-by-recipe
  [recipe-name]
  ;; TODO makes no sense when facility+facility setting == inputs/outputs
  (factory-outputs (recipes/factory-type recipe-name) recipe-name))

(defn default-buses
  [recipe-names]
  (let [ingredients (mapcat recipes/ingredients-by-recipe-recursive recipe-names)]
    (distinct (concat ingredients
                      (mapcat outputs-by-recipe (concat recipe-names ingredients))))))

(defn default-factories
  [recipe-names]
  (mapv #(hash-map :n        1
                   :recipes  (factory-outputs (recipes/factory-type %)
                                              %)
                   :facility (recipes/factory-type %))
        (remove recipes/raw?
                (first (reduce (fn [[recipe-names outputs :as state] recipe-name]
                                 (if (some #{recipe-name} outputs)
                                   state
                                   [(conj recipe-names recipe-name)
                                    (apply conj outputs (outputs-by-recipe recipe-name))]))
                               [[] #{}]
                               (default-buses recipe-names))))))

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
