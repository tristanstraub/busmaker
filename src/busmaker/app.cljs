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
            [busmaker.main-bus :as main-bus]))

(enable-console-print!)

(defonce state (atom {:widgets widgets/widgets
                      :recipes (map :name recipes/recipes)}))

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
        
        [:option {:key recipe :value recipe} recipe])]]))

(rum/defc canvas < rum/reactive
  [state]
  (let [solution (rum/react (rum/cursor-in state [:solution]))
        widgets  (rum/react (rum/cursor-in state [:widgets]))]
    [:div.cursor
     (web/print-entities state solution widgets)]))

(rum/defc components < rum/reactive
  [state]
  [:div.card
   [:h6 "Components"]
   (if-let [recipe (:recipe (rum/react state))]
     [:ul.components
      (for [ingredient (main-bus/ingredients-by-recipe recipe)]
        [:li ingredient])])])

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

(rum/defc blueprint < rum/reactive
  [state]
  [:div.container-fluid.bg-light
   [:div.d-flex.flex-row
    [:div.d-flex.flex-column {:style {:min-width "300px"
                                      :width "300px"}}
     (recipe-selector state)

     [:button {:on-click (fn [_]
                           (let [solution (doall (plan/plan (:recipe @state)))]
                             (swap! state assoc :solution solution)
                             (prn :generate)))}
      "Generate"]
     [:button {:on-click (fn [_]
                           (swap! state dissoc :solution))}
      "Clear"]

     (components state)
     (entity-details state)
     (blueprint-encoded state)
     (blueprint-decoded state)]
    [:div.d-flex.flex-column.canvas-wrapper
     (canvas state)]]])

(defn ^:expose init
  []
  (rum/mount (blueprint state)
             (. js/document (getElementById "container"))))

