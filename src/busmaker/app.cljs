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

(def default-value
  {:widgets widgets/widgets
   :recipes (map :name recipes/recipes)
   :recipe-names #{}})

(defonce state (atom default-value))

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
      {:on-click (fn [_]
                   (swap! state update :recipe-names conj recipe))}
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
                         (swap! state update :recipe-names disj recipe-name))}
            "-"]])]])))

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
                        (let [solution (doall (plan/plan (:recipe-names @state)))]
                          (swap! state assoc :solution solution)))
            :disabled (not (seq (rum/react (rum/cursor-in state [:recipe-names]))))}
   "Generate"])

(rum/defc blueprint < rum/reactive
  [state]
  [:div.bg-light.d-flex
   [:div.d-flex.flex-row
    [:div.d-flex.flex-column
     [:div
      (recipe-selector state)]

     (generate-button state)

     [:button {:on-click (fn [_]
                           (reset! state default-value))}
      "Clear"]

     (recipe-name-list state)
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
