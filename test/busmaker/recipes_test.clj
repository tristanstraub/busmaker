(ns busmaker.recipes-test
  (:require [clojure.test :refer [deftest is]]
            [busmaker.recipes :as recipes]))

(deftest sorted-recipe-order
  (is (= '("water" "crude-oil" "heavy-oil")
         (recipes/sorted-recipe-order "heavy-oil"))))

(deftest ingredients-by-recipe-recursive
  (is (= '("coal" "stone")
         (recipes/ingredients-by-recipe-recursive "stone-brick")))

  (is (= '("water" "crude-oil")
         (recipes/ingredients-by-recipe-recursive "heavy-oil"))))

(deftest required-ingredients
  []
  (is (= #{"stone" "coal"}
         (recipes/required-ingredients ["stone-brick"])))

  (is (= #{"iron-ore" "stone" "coal"}
         (recipes/required-ingredients ["stone-brick" "iron-plate"])))

  (is (= #{"crude-oil" "water"}
         (recipes/required-ingredients ["heavy-oil"]))))
