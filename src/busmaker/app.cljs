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
            [clojure.string :as str]
            [cljs.tools.reader.edn :as edn]))

(def busmaker-store-key "busmaker-0.0.5")

(defn encode-store
  [blueprint]
  (->> blueprint
       pr-str
       pako/deflate
       base64/encodeByteArray))

(defn decode-store
  [blueprint]
  (-> blueprint
      base64/decodeStringToByteArray
      (pako/inflate #js {:to "string"})
      cljs.reader/read-string))

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

(defn busmaker-store
  []
  (some-> (get-item busmaker-store-key) decode-store))

(defn serialize-to-store!
  [state]
  (let [new-value (encode-store (:store @state))]
    (set-item! busmaker-store-key new-value)
    (assert (= (:store @state)
               (busmaker-store))
            "Save was unsuccessful")
    (println "Saved!")))

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

(defonce state (atom (state/default-state)))

(defn save!
  [state]
  (swap! state (fn [state]
                 (assoc-in state [:store :settings (:blueprint-name state)]
                           ;; TODO eliminate dissoc
                           (dissoc state :store))))
  
  (serialize-to-store! state))

(defn delete-blueprint!
  [state blueprint-name]
  (swap! state (fn [state]
                 (update-in state [:store :settings] dissoc (:blueprint-name state))))

  (serialize-to-store! state))

(defn solve-part!
  [state factory-index]
  (let [part (doall (plan/plan (or (:layout @state) :bus)
                               (take 1 (drop factory-index (:factories @state)))
                               (:bus-outputs @state)
                               (:bus-width @state)))]
    (swap! state assoc :part part)))


(defn solve!
  [state]
  (let [solution (doall (plan/plan (or (:layout @state) :bus)
                                   (:factories @state)
                                   (:bus-outputs @state)
                                   (:bus-width @state)))]
    (swap! state assoc :solution solution)))

(defn load!
  [state]
  (swap! state (fn [state]
                 (merge state (get-in state [:store :settings (:blueprint-name state)]))))
  (solve! state))

(rum/defc layout-selector < rum/reactive
  [state]
  (let [layout (rum/cursor-in state [:layout])]
    [:label "Layout"
     [:select {:value (pr-str (rum/react layout))
               :on-change (fn [e]
                            (reset! layout (edn/read-string (.. e -target -value)))
                            (solve! state))}
      [:option "Select layout"]
      [:option {:key (pr-str :bus) :value (pr-str :bus)}
       "Bus"]
      [:option {:key (pr-str :matrix) :value (pr-str :matrix)}
       "Matrix"]
      [:option {:key (pr-str :autoroute) :value (pr-str :autoroute)}
       "Autoroute"]]]))

(rum/defc recipe-selector < rum/reactive
  ([state]
   (recipe-selector state
                    (rum/react (rum/cursor-in state [:recipe]))
                    (fn [recipe]
                      (swap! state assoc :recipe recipe))
                    (fn [_]
                      (swap! state state/add-recipe (:recipe @state))
                      (solve! state))
                    recipe-data/recipes))
  ([state recipe on-change]
   (recipe-selector state recipe on-change nil recipe-data/recipes))
  ([state recipe on-change on-add recipes]
   (let [recipes (->> recipes
                      (map :name)
                      (remove #(#{"basic-oil-processing" "advanced-oil-processing"} %)))]
     [:label "Recipe"
      [:select {:value (pr-str recipe)
                :on-change (when on-change
                             (fn [e]
                               (on-change (edn/read-string (.. e -target -value)))))}
       [:option "Select recipe"]
       (for [recipe (sort-by str recipes)]
         [:option {:key (str recipe) :value (pr-str recipe)}
          (str recipe)])]
      (when on-add
        [:button
         {:disabled (not (or recipe (seq recipe)))
          :on-click on-add}
         "+"])])))



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
        bus-outputs (rum/react (rum/cursor-in state [:bus-outputs]))
        new-bus-output (rum/react (rum/cursor-in state [:new-bus-output]))]
    [:div.card
     [:table.components.table
      [:thead
       [:tr
        [:th "Output"]
        [:th "Bus index"]
        [:th]
        [:th]
        [:th]]]
      [:tbody
       [:tr
        [:td (recipe-selector state new-bus-output
                              (fn [recipe]
                                (swap! state assoc :new-bus-output recipe))
                              (fn [_]
                                (println :add-bus-output)
                                (swap! state state/add-bus-output new-bus-output)
                                (solve! state))
                              recipe-data/buses)]]
       (for [[bus-index output] (reverse (map-indexed vector bus-outputs))]
         [:tr {:key bus-index}

          [:td (recipe-selector state output
                                (fn [recipe]
                                  (swap! state state/set-bus-output-recipe bus-index recipe)
                                  (solve! state))
                                nil
                                recipe-data/buses)]
          [:td bus-index]
          [:td
           [:button
            {:on-click (fn [_]
                         (swap! state state/remove-bus output)
                         (solve! state))}
            "-"]]
          [:td
           [:button
            {:on-click (fn [_]
                         (swap! state state/move-bus-output-up bus-index)
                         (solve! state))}
            "up"]]
          [:td
           [:button
            {:on-click (fn [_]
                         (swap! state state/move-bus-output-down bus-index)
                         (solve! state))}
            "down"]]])]]]))

(rum/defc bus-width-input < rum/reactive
  [state]
  (let [bus-width (rum/react (rum/cursor-in state [:bus-width]))]
    [:div.card
     [:label "Bus width"
      [:input {:type "number" :value bus-width
               :on-change (fn [e]
                            (swap! state state/set-bus-width (js/parseInt (.. e -target -value)))
                            (solve! state))}]]]))

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
          [:th "Count"]
          [:th]]]
        [:tbody
         (for [[i {:keys [facility n recipes] :as factory}] (reverse (map-indexed vector factories))]
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
                  "-"]]
            [:td [:button {:on-click (fn [e]
                                       (solve-part! state i))
                           :data-toggle "modal"
                           :data-target "#blueprint-part"}
                  "Blueprint"]]])]]])))

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
            [:td (pr-str value)]])
       [:tr
        [:th "ingredients"]
        [:td ~(when (:recipe entity)
                (pr-str (recipes/immediate-ingredients (:recipe entity))))]
        ]]]))


(rum/defc solution-encoded < rum/reactive
  [solution]
  [:div.card
   [:textarea.blueprint-encoded
    {:value
     (encode-blueprint (wrap-entities solution))
     :on-click (fn [e]
                 (.select (.. e -target))
                 (js/document.execCommand "copy"))}]])

(rum/defc blueprint-encoded < rum/reactive
  [state]
  [:div.modal.fade#blueprint
   [:div.modal-dialog
    [:div.modal-content
     (solution-encoded (rum/react (rum/cursor-in state [:solution])))]]])

(rum/defc blueprint-part-encoded < rum/reactive
  [state]
  [:div.modal.fade#blueprint-part
   [:div.modal-dialog
    [:div.modal-content
     (solution-encoded (rum/react (rum/cursor-in state [:part])))]]])

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

(rum/defc blueprint-load-save < rum/reactive
  [state]
  [:div
   [:label "Blueprint name"
    [:input {:value     (rum/react (rum/cursor-in state [:blueprint-name]))
             :on-change (fn [e]
                          (swap! state assoc :blueprint-name (.. e -target -value)))}]]
   
   [:button {:on-click (fn [_]
                         (save! state))}
    "Save"]
   [:button {:data-toggle "modal"
             :data-target "#blueprint"}
    "Blueprint"]
   [:table
    [:tbody
     (for [[blueprint-name blueprint-state] (rum/react (rum/cursor-in state [:store :settings]))]
       [:tr {:key [blueprint-name]}
        [:td blueprint-name]
        [:td
         [:button {:on-click (fn [_]
                               (swap! state assoc :blueprint-name blueprint-name)
                               (load! state))}
          "Load"]
         [:button {:on-click (fn [_]
                               (when (js/confirm "Are you sure?")
                                 (delete-blueprint! state blueprint-name)))}
          "Delete"]]])]]])



(rum/defc blueprint < rum/reactive
  [state]
  [:div.bg-light.d-flex
   [:div.d-flex.flex-row
    [:div.d-flex.flex-column
     [:div
      (recipe-selector state)]
     [:div
      (layout-selector state)]

     ;;     (generate-button state)

     [:button {:on-click (fn [_]
                           (reset! state (assoc (state/empty-state)
                                                :store (busmaker-store))))}
      "Clear"]

     (blueprint-load-save state)

     (bus-width-input state)
     (factories state)
     (bus state)
     (blueprint-encoded state)
     (blueprint-part-encoded state)
     (components state)
     (blueprint-decoded state)]

    [:div.d-flex.flex-column.flex-grow-1
     (pixi/panel state)
     [:div.entity-details-wrapper
      (entity-details state)
      ]]]])

(defn ^:expose init
  []
  (swap! state assoc :store (busmaker-store))
  (solve! state)
  (rum/mount (blueprint state)
             (. js/document (getElementById "container")))
  (enable-console-print!))

(defn reload!
  []
  (solve! state)
  
  ;;(swap! state assoc :dragging (pixi/g state :assembling-machine))

;;  (init)
  )


