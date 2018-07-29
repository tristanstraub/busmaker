(ns busmaker.state
  (:require [busmaker.bus :as bus]
            [busmaker.recipe-data :as recipe-data]
            [busmaker.recipes :as recipes]
            [busmaker.plan :as plan]))

(def default-recipe-names
  #_ #{"_research_"}
  #{"electronic-circuit"}
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
            :solution     (plan/plan factories bus-outputs (:bus-width state))})))

(defn add-recipe
  [state recipe-name]
  (if (some #{recipe-name} (mapcat :recipes (:factories state)))
    state
    (let [bus-outputs (bus/add-bus-outputs (:bus-outputs state)
                                           (bus/default-buses [recipe-name]))
          factories (bus/add-factories (:factories state)
                                       (bus/default-factories [recipe-name]))]
      (-> state
          (assoc :factories factories)
          (assoc :bus-outputs bus-outputs)))))

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

(defn move-bus-output-up
  [state recipe-name]
  (let [{:keys [bus-outputs]} state
        [left middle right]   (partition-by #{recipe-name} bus-outputs)]
    (assoc state :bus-outputs (vec
                               (cond (= left (list recipe-name))
                                     (concat (take 1 middle) left (drop 1 middle) right)
                                     (= right (list recipe-name))
                                     bus-outputs
                                     :else
                                     (concat left
                                             (take 1 right)
                                             middle
                                             (drop 1 right)))))))

(defn move-bus-output-down
  [state recipe-name]
  (let [{:keys [bus-outputs]} state
        [left middle right]   (partition-by #{recipe-name} bus-outputs)]
    (assoc state :bus-outputs (vec
                               (cond (= left (list recipe-name))
                                     bus-outputs
                                     (= right (list recipe-name))
                                     (concat left
                                             (butlast middle)
                                             right
                                             [(last middle)])
                                     :else
                                     (concat (butlast left)
                                             middle
                                             [(last left)]
                                             right))))))

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

