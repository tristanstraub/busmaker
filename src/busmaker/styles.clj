(ns busmaker.styles
  (:require [garden.def :refer [defrule defstyles]]
            [garden.stylesheet :refer [rule]]))

(defstyles screen
  [:body {:font-family "Helvetica Neue"
          :font-size   "16px"
          :line-height 1.5}]
  [:.entity-details-wrapper {:height "25vh"}]
  [:.blueprint-encoded {:height "300px"
                        :overflow "scroll"}]
  [:.blueprint-decoded {:height "300px"
                        :overflow "scroll"}]
  [:.cell {:display "inline-block"
           :width "16px"
           :height "16px"
           :padding 0
           :margin 0}]
;;  [:.bar-wrapper {:width "30vw"}]
  [:.canvas-wrapper {:width "100%"
                     ;;                     :height "100vh"
;;                     :height "70vh"
                     :overflow "scroll"}]
  [:.canvas {:width "75vw"
             :height "75vh"
             }]
  [:.components {:height "150px"
                 :overflow "scroll"}]
  [:.cell-row {:height "16px"}]
  [:.cursor {:cursor "pointer"}])
