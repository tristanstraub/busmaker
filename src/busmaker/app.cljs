(ns busmaker.app
  (:require [rum.core :as rum]
            [cljs.tools.reader.edn :as edn]
            [clojure.walk :as walk]
            ["pako" :as pako]
            [goog.crypt.base64 :as base64]
            [busmaker.recipes :as recipes]
            [busmaker.widgets :as widgets]
            [busmaker.plan :as plan]
            [busmaker.web :as web]
            [busmaker.main-bus :as main-bus]
            [busmaker.pixi :as pixi]
            [impi.core]))

(enable-console-print!)

(def default-recipe-names
  #{"iron-plate"
    "copper-plate"})


(def empty-value
  {:widgets      widgets/widgets
   :recipes      (->> recipes/recipes
                      (map :name)
                      (remove #(#{"advanced-oil-processing"} %)))})

(defn default-factories
  [recipe-names]
  (into {} (map #(vector % {:n 1
                            :facility (main-bus/factory-type %)})
                (filter main-bus/created? (:products (main-bus/products recipe-names))))))

(def default-value
  (merge empty-value
         {:recipe-names default-recipe-names
          :factories    (default-factories default-recipe-names)
          
          :solution     (plan/plan default-recipe-names
                                   (default-factories default-recipe-names))}))

(defonce state (atom default-value))

(defn solve!
  [state]
  (let [solution (doall (plan/plan (:recipe-names @state)
                                   (:factories @state)))]
    (swap! state assoc :solution solution)))

(rum/defc recipe-selector < rum/reactive
  [state]
  (let [recipe (rum/react (rum/cursor-in state [:recipe]))
        recipes (rum/react (rum/cursor-in state [:recipes]))]
    [:label "Recipe"
     [:select {:value recipe
               :on-change (fn [e]
                            (let [recipe (.. e -target -value)]
                              (swap! state assoc :recipe recipe)))}
      [:option "Select recipe"]
      (for [recipe (sort recipes)]
        
        [:option {:key recipe :value recipe} recipe])]
     [:button
      {:disabled (not (seq recipe))
       :on-click (fn [_]
                   (let [recipe-names (conj (:recipe-names @state) recipe)]
                     (swap! state #(-> %
                                       (assoc :recipe-names recipe-names)
                                       (update :factories (fn [factories]
                                                            (merge (default-factories recipe-names)
                                                                   factories)))))
                     (solve! state)))}
      "+"]]))

(rum/defc canvas < rum/reactive
  [state]
  (let [solution (rum/react (rum/cursor-in state [:solution]))
        widgets  (rum/react (rum/cursor-in state [:widgets]))]
    [:div.cursor
     (web/print-entities state solution widgets)]))

(rum/defc recipe-name-list < rum/reactive
  [state]
  (let [recipe-names (:recipe-names (rum/react state))]
    (if (seq recipe-names)
      [:div.card
       [:h6 "Recipes"]
       [:ul.components
        (for [recipe-name recipe-names]
          [:li {:key recipe-name}
           recipe-name
           [:button
            {:on-click (fn [_]
                         (swap! state #(-> %
                                           (update :recipe-names disj recipe-name)
                                           (update :factories dissoc recipe-name)))
                         (solve! state))}
            "-"]])]])))

(def facilities
  ["stone-furnace"
   "electric-furnace"
   "steel-furnace"
   "oil-refinery"
   "chemical-plant"])

(rum/defc facility-selector
  [state ingredient facility]
  [:select {:value     facility
            :on-change (fn [e]
                         (swap! state assoc-in [:factories ingredient :facility] (.. e -target -value))
                         (solve! state)
                         (println :solving))}
   (for [facility facilities]
     [:option {:key facility
               :value facility}
      facility])])

(rum/defc factories < rum/reactive
  [state]
  (let [factories    (rum/react (rum/cursor-in state [:factories]))
        recipe-names (keys factories)
        products     (filter #(main-bus/created? %)
                             (:products (main-bus/products recipe-names)))]

    (if (seq factories)
      [:div.card
       [:table.components.table
        [:thead
         [:tr
          [:th "Recipe"]
          [:th "Facility"]
          [:th "Count"]]]
        [:tbody
         (for [ingredient (reverse products)
               :let       [{:keys [facility n]} (get factories ingredient)]]
           [:tr {:key ingredient}
            [:td ingredient]
            [:td (facility-selector state ingredient facility)]
            [:td [:input {:type "number" :value n
                          :on-change (fn [e]
                                       
                                       (swap! state assoc-in [:factories ingredient :n]
                                              (js/parseInt (.. e -target -value)))
                                       (solve! state))}]]])]]])))

(rum/defc components < rum/reactive
  [state]
  (let [recipe-names (rum/react (rum/cursor-in state [:recipe-names]))]
    (if (seq recipe-names)
      [:div.card
       [:h6 "Components"]
       [:ul.components
        (for [ingredient (sort (set (mapcat main-bus/ingredients-by-recipe recipe-names)))]
          [:li {:key ingredient}
           ingredient])]])))

(rum/defc entity-details < rum/reactive
  [state]
  (let [entity (walk/keywordize-keys (rum/react (rum/cursor-in state [:entity])))]
    [:table.table.table-dark.table-striped.entity-details
     `[:tbody
       ~@(for [[key value] (sort-by first entity)]
           [:tr
            [:th (name key)]
            [:td (pr-str value)]])]]))

(defn wrap-entities
  [entities]
  {"blueprint" {"entities" (vec entities)
                "icons"    [{"index" 1
                             "signal" {"name" "assembling-machine-2"
                                       "type" "item"}}]
                "item"     "blueprint"
                "version"  68721836034}})

(defn encode-blueprint
  [blueprint]
  (str "0"
       (->> blueprint
            clj->js
            js/JSON.stringify
            pako/deflate
            base64/encodeByteArray)))

(defn decode-blueprint
  [blueprint]
  (-> (subs blueprint 1)
      base64/decodeStringToByteArray
      (pako/inflate #js {:to "string"})
      (js/JSON.parse)))

(rum/defc blueprint-encoded < rum/reactive
  [state]
  [:div.card
   [:textarea.blueprint-encoded
    {:value
     (let [solution (rum/react (rum/cursor-in state [:solution]))]
       (encode-blueprint (wrap-entities solution)))
     :on-click (fn [e]
                 (.select (.. e -target))
                 (js/document.execCommand "copy"))}]])

(rum/defc blueprint-decoded < rum/reactive
  [state]
  [:div.card
   [:textarea.blueprint-decoded {:on-click (fn [e]
                                             (.select (.. e -target))
                                             (js/document.execCommand "copy"))
                                 :value
                                 (let [solution (rum/react (rum/cursor-in state [:solution]))]
                                   (js/JSON.stringify (clj->js (wrap-entities solution))))}]])



(rum/defc generate-button < rum/reactive
  [state]
  [:button {:on-click (fn [_]
                        (solve! state))
            :disabled (not (seq (rum/react (rum/cursor-in state [:recipe-names]))))}
   "Generate"])

(rum/defc blueprint < rum/reactive
  [state]
  [:div.bg-light.d-flex
   [:div.d-flex.flex-row
    [:div.d-flex.flex-column
     [:div
      (recipe-selector state)]

;;     (generate-button state)

     [:button {:on-click (fn [_]
                           (reset! state empty-value))}
      "Clear"]

     (recipe-name-list state)
     (factories state)
     (blueprint-encoded state)
     (components state)
     (blueprint-decoded state)]
    
    [:div.d-flex.flex-column.flex-grow-1
     (pixi/panel state)
     
;;     (canvas state)
     [:div.entity-details-wrapper
      (entity-details state)]]]])

(defn ^:expose init
  []
  (rum/mount (blueprint state)
             (. js/document (getElementById "container"))))

(defn reload!
  []
  (init))

