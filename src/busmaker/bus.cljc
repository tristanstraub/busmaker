(ns busmaker.bus
  (:require [busmaker.recipes :as recipes]
            [clojure.set :as set]
            [busmaker.recipe-data :as recipe-data]))

(defn created?
  [recipe-name]
  (not (re-find #".*ore|water|coal|^stone$" recipe-name)))

(defn recipe-products
  ([recipe-names]
   (recipe-products recipe-names nil))
  ([recipe-names factories]
   (let [oil?        (seq (mapcat (fn [recipe-name]
                                    (let [facility (get-in factories [recipe-name :facility] (recipes/factory-type recipe-name))]
                                      (filter #(#{"advanced-oil-processing"} (recipes/recipe-type %))
                                              (recipes/ingredients-by-recipe-recursive recipe-name))))
                                  recipe-names))

         products    (reduce (fn [products recipe-name]
                               (let [facility (get-in factories [recipe-name :facility] (recipes/factory-type recipe-name))]
                                 (apply conj products (remove (set products)
                                                              (remove #(#{"advanced-oil-processing"} (recipes/recipe-type %))
                                                                      (recipes/ingredients-by-recipe-recursive recipe-name))))))
                             (if oil? ["heavy-oil"] [])
                             recipe-names)

         others      (when oil?
                       (set/difference (set (concat (map :name (mapcat :results (filter (comp #{"advanced-oil-processing"} :name)
                                                                                        recipe-data/recipes)))
                                                    (map :name (mapcat :ingredients (filter (comp #{"advanced-oil-processing"} :name)
                                                                                            recipe-data/recipes)))))
                                       (set products)))

         bus-outputs (->> (concat others products)
                          (map-indexed vector)
                          (map (comp vec reverse))
                          (into {}))]
     
     {:oil?        oil?
      :products    products
      :others      others
      :bus-outputs bus-outputs})))

(defn default-factories
  [recipe-names]
  (mapv #(hash-map :n        1
                   :recipe   %
                   :facility (recipes/factory-type %))
        (filter created? (:products (recipe-products recipe-names)))))

(defn add-factories
  [factories new-factories]
  (let [existing-recipes (set (map :recipe factories))]
    (->> (remove (comp existing-recipes :recipe) new-factories)
         (into (vec factories)))))

