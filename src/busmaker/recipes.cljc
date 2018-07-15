(ns busmaker.recipes
  (:require [com.stuartsierra.dependency :as dep]
            [busmaker.recipe-data :as recipe-data]))

(defn factory-type
  [recipe]
  (cond (#{"_research_" "_research_full_" "_research_military_"} recipe) "lab"
        (#{"iron-plate" "copper-plate" "steel-plate" "stone-brick"} recipe)                   "stone-furnace"
        (#{"light-oil" "heavy-oil" "petroleum-gas"} recipe)                                   "oil-refinery"
        (#{"lubricant" "sulfur" "sulfuric-acid" "battery" "plastic-bar" "explosives"} recipe) "chemical-plant"
        (re-find #"ore" recipe)                                                               "electric-mining-drill"
        :else                                                                                 "assembling-machine-1"))

(defn recipe-type
  [recipe]
  (cond (#{"light-oil" "heavy-oil" "petroleum-gas"} recipe) "basic-oil-processing" #_ "advanced-oil-processing"
        :else                   recipe))

(defn recipe-by-name
  [recipes recipe-name]
  (if (#{"heavy-oil" "light-oil" "petroleum-gas"} recipe-name)
    (recipe-by-name recipes "basic-oil-processing" #_"advanced-oil-processing")
    (first (filter (comp #{recipe-name} :name) recipes))))

(defn ingredient
  [i]
  (cond (map? i)
        (:name i)
        (vector? i)
        (first i)
        :else
        (ex-info "Unknown ingredient" {:ingredient i})))

(defn recipe-ingredients
  [recipe]
  (cond (:ingredients recipe)
        (map ingredient (get-in recipe [:ingredients]))
        (:normal recipe)
        (map ingredient (get-in recipe [:normal :ingredients]))
        :else
        nil))

(defn recipe-order
  [g recipes recipe-name]
  (let [r (recipe-by-name recipes recipe-name)]
    (if-not r
      g
      (reduce (fn [g ingredient]
                (let [g (dep/depend g recipe-name ingredient)]
                  (recipe-order g recipes ingredient)))
              g
              (recipe-ingredients r)))))

(defn sorted-recipe-order
  [recipe-name]
  (dep/topo-sort (recipe-order (dep/graph)
                               recipe-data/recipes
                               recipe-name)))

(defn ingredients-by-recipe-recursive
  [recipe-name]
  (let [ingredients (remove #{recipe-name} (sorted-recipe-order recipe-name))
        coal?       (some #{"stone-furnace"} (map factory-type (conj ingredients recipe-name)))
        ;; TODO replace oil-refinery with other output/input mechanism
        oil?        (some #{"oil-refinery"} (map factory-type (conj ingredients recipe-name)))]
    (distinct (cond->> ingredients
                coal? (into ["coal"])
                oil? (into ["water" "crude-oil"])))))

(defn required-ingredients
  [recipe-names]
  (set (mapcat (fn [recipe-name]
                 (ingredients-by-recipe-recursive recipe-name))
               recipe-names)))

(defn raw?
  [recipe-name]
  (re-find #".*ore|water|coal|^stone$|crude-oil" recipe-name))
