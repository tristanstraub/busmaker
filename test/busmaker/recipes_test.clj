(ns busmaker.recipes-test
  (:require [clojure.test :refer [deftest is]]
            [busmaker.recipes :as recipes]))

(deftest ingredients-by-recipe-recursive
  (is (= '("coal" "stone" "stone-brick")
         (recipes/ingredients-by-recipe-recursive "stone-brick"))))

