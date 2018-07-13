(ns busmaker.app
  (:require [rum.core :as rum]
            [cljs.reader]
            [busmaker.template :as template]
            [cljs.tools.reader.edn :as edn]
            [clojure.walk :as walk]
            ["pako" :as pako]
            [goog.crypt.base64 :as base64]
            [busmaker.recipes :as recipes]
            [busmaker.plan :as plan]
            [busmaker.web :as web]
            [busmaker.main-bus :as main-bus]
            [busmaker.pixi :as pixi]
            [busmaker.state :as state]
            [busmaker.bus :as bus]
            [busmaker.recipe-data :as recipe-data]
            [impi.core]
            [clojure.string :as str]))

(enable-console-print!)

(defn set-item!
  "Set `key' in browser's localStorage to `val`."
  [key val]
  (.setItem (.-localStorage js/window) key val))

(defn get-item
  "Returns value of `key' from browser's localStorage."
  [key]
  (.getItem (.-localStorage js/window) key))

(defn remove-item!
  "Remove the browser's localStorage value for the given `key`"
  [key]
  (.removeItem (.-localStorage js/window) key))

(defonce state (atom (state/default-state)))

(defn solve!
  [state]
  (let [solution (doall (plan/plan (:factories @state)
                                   (:bus-outputs @state)))]
    (swap! state assoc :solution solution)
;;    (set-item! "busmaker" (pr-str (dissoc @state :solution :recipes)))
    ))

(rum/defc recipe-selector < rum/reactive
  [state]
  (let [recipe (rum/react (rum/cursor-in state [:recipe]))
        recipes (->> recipe-data/recipes
                     (map :name)
                     (remove #(#{"advanced-oil-processing"} %)))]
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
                   (swap! state state/add-recipe recipe)
                   (solve! state))}
      "+"]]))



(def facilities
  ["stone-furnace"
   "electric-furnace"
   "steel-furnace"
   "oil-refinery"
   "chemical-plant"
   "assembling-machine-1"
   "assembling-machine-2"
   "lab"])

(rum/defc facility-selector
  [state {:keys [facility] :as factory}]
  [:select {:value     facility
            :on-change (fn [e]
                         (swap! state state/swap-facility factory (.. e -target -value))
                         (solve! state))}
   (for [facility facilities]
     [:option {:key facility
               :value facility}
      facility])])

(rum/defc bus < rum/reactive
  [state]
  (let [factories   (rum/react (rum/cursor-in state [:factories]))
        bus-outputs (rum/react (rum/cursor-in state [:bus-outputs]))]

    (if (seq bus-outputs)
      [:div.card
       [:table.components.table
        [:thead
         [:tr
          [:th "Output"]
          [:th "Bus index"]]]
        [:tbody
         (for [[bus-index output] (map-indexed vector bus-outputs)]
           [:tr {:key bus-index}

            [:td output]
            [:td bus-index]])]]])))

(rum/defc factories < rum/reactive
  [state]
  (let [factories    (rum/react (rum/cursor-in state [:factories]))]

    (if (seq factories)
      [:div.card
       [:table.components.table
        [:thead
         [:tr
          [:th "Recipes"]
          [:th "Facility"]
          [:th "Count"]]]
        [:tbody
         (for [[i {:keys [facility n recipes] :as factory}] (map-indexed vector factories)]
           [:tr {:key i}
            [:td (str/join "," recipes)]
            [:td (facility-selector state factory)]
            [:td [:input {:type "number" :value n
                          :on-change (fn [e]
                                       (println :change )
                                       (swap! state state/change-facility-line-length factory (js/parseInt (.. e -target -value)))
                                       (solve! state))}]]
            [:td [:button {:on-click (fn [e]
                                       (swap! state state/remove-factory factory)
                                       (solve! state))}
                  "-"]
]])]]])))

(rum/defc components < rum/reactive
  [state]
  (let [recipe-names (rum/react (rum/cursor-in state [:recipe-names]))
        factories (rum/react (rum/cursor-in state [:factories]))]
    (if (seq recipe-names)
      [:div.card
       [:h6 "Components"]
       [:ul.components
        (for [ingredient (sort (recipes/required-ingredients recipe-names))]
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
                           (reset! state (state/empty-state)))}
      "Clear"]

     (factories state)
     (bus state)
     (blueprint-encoded state)
     (components state)
     (blueprint-decoded state)]

    [:div.d-flex.flex-column.flex-grow-1
     (pixi/panel state)
     [:div.entity-details-wrapper
      (entity-details state)
      ]]]])

(defn ^:expose init
  []
;;  (swap! state merge (cljs.reader/read-string (get-item "busmaker")))
  (solve! state)
  (rum/mount (blueprint state)
             (. js/document (getElementById "container"))))

(defn reload!
  []
  (init))
