(ns busmaker.state
  (:require [busmaker.bus :as bus]
            [busmaker.recipe-data :as recipe-data]
            [busmaker.recipes :as recipes]
            [busmaker.plan :as plan]))

(def default-recipe-names
  #_ #{"_research_"}
    #{"transport-belt"}
  
  )

(defn empty-state
  []
  {:blueprint-name "blueprint-1"
   :factories      []
   :bus-outputs    []
   :bus-width      4})

(defn default-state
  []
  (let [factories   (bus/default-factories default-recipe-names)
        bus-outputs (bus/default-buses default-recipe-names)
        state (empty-state)]
    (merge state
           {:factories    factories
            :bus-outputs  bus-outputs
            :solution     (plan/plan :matrix factories bus-outputs (:bus-width state))})))

(defn add-recipe
  [state recipe-name]
  (if (some #{recipe-name} (mapcat :recipes (:factories state)))
    state
    (let [bus-outputs (bus/add-bus-outputs (:bus-outputs state)
                                           (bus/default-buses [recipe-name]))
          factories (bus/add-factories (:factories state)
                                       (bus/default-factories [recipe-name])
                                       (:bus-outputs state))]
      (-> state
          (assoc :factories factories)
          (assoc :bus-outputs bus-outputs)))))

(defn add-bus-output
  [state recipe-name]
  (cond (not (or recipe-name
                 (seq recipe-name)))
        state

        ((set (map :name recipe-data/extra-buses)) recipe-name)
        (update state :bus-outputs bus/add-bus-outputs-multi [recipe-name])
        
        (some #{recipe-name} (mapcat :recipes (:factories state)))
        state

        :else
        (update state :bus-outputs bus/add-bus-outputs [recipe-name])))

(defn remove-factory
  [state factory]
  (update state :factories bus/remove-factory factory))

(defn remove-recipe
  [state recipe-name]
  (remove-factory state
                  (bus/get-factory (:factories state) recipe-name)))

(defn remove-bus
  [state recipe-name]
  (update state :bus-outputs #(vec (remove #{recipe-name} %))))

(defn set-bus-output-recipe
  [state bus-index recipe]
  (update state :bus-outputs
          (fn [bus-outputs]
            (vec (map-indexed (fn [index output]
                                (if (= index bus-index)
                                  recipe
                                  output))
                              bus-outputs)))))

(defn move-bus-output-up
  [state bus-index]
  (let [{:keys [bus-outputs]} state
        [left middle right]   [(subvec bus-outputs 0 bus-index)
                               (subvec bus-outputs bus-index (inc bus-index))
                               (subvec bus-outputs (inc bus-index))]]
    (assoc state :bus-outputs (vec (concat left
                                           (take 1 right)
                                           middle
                                           (drop 1 right))))))

(defn move-bus-output-down
  [state bus-index]
  (let [{:keys [bus-outputs]} state
        [left middle right] [(subvec bus-outputs 0 bus-index)
                             (subvec bus-outputs bus-index (inc bus-index))
                             (subvec bus-outputs (inc bus-index))]]
    (assoc state :bus-outputs (vec (concat (butlast left)
                                           middle
                                           (take-last 1 left)
                                           right)))))

(defn swap-facility
  [state factory facility]
  (update state :factories #(mapv (fn [f]
                                    (if (= factory f)
                                      (assoc f :facility facility)
                                      f))
                                  %)))

(defn change-facility-line-length
  [state factory n]
  (update state :factories #(mapv (fn [f]
                                    (if (= factory f)
                                      (assoc f :n n)
                                      f))
                                  %)))

(defn set-bus-width
  [state bus-width]
  (assoc state :bus-width bus-width))

