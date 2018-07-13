(ns busmaker.app
  (:require [rum.core :as rum]
            [busmaker.data :as data]
            [cljs.reader]
            [busmaker.template :as template]
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

(def default-recipe-names
  #{"iron-plate"})

(def empty-value
  {:widgets      widgets/widgets
   :recipes      (->> recipes/recipes
                      (map :name)
                      (remove #(#{"advanced-oil-processing"} %)))
   :recipe-names #{}
   :bus-outputs  nil
   :products     nil})

(def default-value
  (merge empty-value template/template2))

#_ (def default-value
  (let [factories                      (main-bus/default-factories default-recipe-names)
        {:keys [bus-outputs products]} (main-bus/recipe-products default-recipe-names)]
    (merge empty-value
           {:recipe-names default-recipe-names
            :factories    factories
            :products     products
            :bus-outputs  bus-outputs

            :solution     (plan/plan default-recipe-names
                                     factories
                                     products
                                     bus-outputs)})))

(defonce state (atom default-value))

(defn solve!
  [state]
  (let [solution (doall (plan/plan (:recipe-names @state)
                                   (:factories @state)
                                   (:products @state)
                                   (:bus-outputs @state)))]
    (swap! state assoc :solution solution)
;;    (set-item! "busmaker" (pr-str (dissoc @state :solution :recipes :widgets)))
    ))

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
                                       (update :factories data/add-factories (main-bus/default-factories [recipe]))
                                       (merge (main-bus/recipe-products recipe-names))))
                     (solve! state)))}
      "+"]]))

(rum/defc canvas < rum/reactive
  [state]
  (let [solution (rum/react (rum/cursor-in state [:solution]))
        widgets  (rum/react (rum/cursor-in state [:widgets]))]
    [:div.cursor
     (web/print-entities state solution widgets)]))

(defn required-ingredients
  [recipe-names factories]
  (set (mapcat (fn [recipe-name]
                 (let [facility (get-in factories [recipe-name :facility])]
                   (main-bus/ingredients-by-recipe recipe-name facility)))
               recipe-names)))

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
                                           (update :factories (fn [factories]
                                                                (select-keys factories (required-ingredients (disj (:recipe-names %) recipe-name)
                                                                                                             factories))))))
                         (solve! state))}
            "-"]])]])))

(def facilities
  ["stone-furnace"
   "electric-furnace"
   "steel-furnace"
   "oil-refinery"
   "chemical-plant"
   "assembling-machine-1"
   "assembling-machine-2"])

(rum/defc facility-selector
  [state ingredient facility]
  [:select {:value     facility
            :on-change (fn [e]
                         (swap! state assoc-in [:factories ingredient :facility] (.. e -target -value))
                         (solve! state))}
   (for [facility facilities]
     [:option {:key facility
               :value facility}
      facility])])

(rum/defc bus < rum/reactive
  [state]
  (let [factories    (rum/react (rum/cursor-in state [:factories]))
        bus-outputs      (rum/react (rum/cursor-in state [:bus-outputs]))]
    
    (if (seq bus-outputs)
      [:div.card
       [:table.components.table
        [:thead
         [:tr
          [:th "Output"]
          [:th "Bus index"]]]
        [:tbody
         (for [[output bus-index] (sort-by second bus-outputs)]
           [:tr {:key bus-index}

            [:td output]
            [:td bus-index]])]]])))

(rum/defc factories < rum/reactive
  [state]
  (let [factories    (rum/react (rum/cursor-in state [:factories]))
        products     (keys factories)]

    (if (seq factories)
      [:div.card
       [:table.components.table
        [:thead
         [:tr
          [:th]
          [:th "Recipe"]
          [:th "Facility"]
          [:th "Count"]]]
        [:tbody
         (for [ingredient (reverse products)
               :let       [{:keys [facility n]} (get factories ingredient)]]
           [:tr {:key ingredient}
            [:td
             [:button
              "^"]
             [:button
              "v"]]
            [:td ingredient]
            [:td (facility-selector state ingredient facility)]
            [:td [:input {:type "number" :value n
                          :on-change (fn [e]
                                       (swap! state assoc-in [:factories ingredient :n]
                                              (js/parseInt (.. e -target -value)))
                                       (solve! state))}]]
            [:td [:button {:on-click (fn [e]
                                       (enable-console-print!)
                                       (swap! state #(-> %
                                                         (update :factories dissoc ingredient)
                                                         (update :products (fn [ps] (vec (remove #{ingredient} ps))))))

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
        (for [ingredient (sort (required-ingredients recipe-names
                                                     factories))]
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
     (bus state)
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
  (swap! state merge (cljs.reader/read-string (get-item "busmaker")))
  (solve! state)
  (rum/mount (blueprint state)
             (. js/document (getElementById "container"))))

(defn reload!
  []
  (init))
