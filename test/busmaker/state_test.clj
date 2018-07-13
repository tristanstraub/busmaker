(ns busmaker.state-test
  (:require [busmaker.state :as state]
            [clojure.test :refer [deftest is testing]]))

(deftest add-recipe
  []
  (testing :factories
    (is (= [{:facility "stone-furnace", :recipe "stone-brick", :n 1}]
           (:factories (state/add-recipe nil "stone-brick"))))

    (is (= [{:facility "stone-furnace", :recipe "stone-brick", :n 1}
            {:facility "stone-furnace", :recipe "iron-plate", :n 1}]
           (:factories (-> nil
                           (state/add-recipe "stone-brick")
                           (state/add-recipe "iron-plate"))))))

  (testing :products
    (is (= ["coal" "stone" "stone-brick"]
           (:products (state/add-recipe nil "stone-brick"))))
    
    (is (= ["coal" "stone" "stone-brick" "iron-ore" "iron-plate"]
           (:products (-> nil
                          (state/add-recipe "stone-brick")
                          (state/add-recipe "iron-plate"))))))

  (testing :bus-outputs
    (is (= {"coal" 0, "stone" 1, "stone-brick" 2}	  
           (:bus-outputs (state/add-recipe nil "stone-brick"))))
    
    (is (= {"coal" 0, "stone" 1, "stone-brick" 2 "iron-ore" 3 "iron-plate" 4}
           (:bus-outputs (-> nil
                             (state/add-recipe "stone-brick")
                             (state/add-recipe "iron-plate"))))))  )

 
