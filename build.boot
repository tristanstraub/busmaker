(set-env! :dependencies '[[org.clojure/clojure "1.9.0"]
                          [org.clojure/clojurescript "1.10.339"]
                          [cheshire "5.8.0"]
                          [com.stuartsierra/dependency "0.2.0"]
                          [org.clojure/data.codec "0.1.1"]
                          [jansi-clj "0.1.1"]
                          [org.clojure/core.match "0.3.0-alpha5"]
                          [adzerk/boot-cljs          "2.1.4"      :scope "test"]
                          [adzerk/boot-cljs-repl     "0.3.3"      :scope "test"]
                          [adzerk/boot-reload        "0.6.0"      :scope "test"]
                          [pandeiro/boot-http        "0.8.3"      :scope "test"]
                          [com.cemerick/piggieback   "0.2.1"      :scope "test"]
                          [org.clojure/tools.nrepl   "0.2.13"     :scope "test"]
                          [weasel                    "0.7.0"      :scope "test"]
                          [org.clojure/clojurescript "1.9.562"]
                          [rum "0.10.7"]
                          [org.martinklepsch/boot-garden "1.3.2-0" :scope "test"]
                          [ring/ring-core "1.6.3"]
                          [ring/ring-jetty-adapter "1.6.3"]
                          [compojure "1.6.1"]
                          [enlive "1.1.6"]
                          [cljs-http "0.1.45"]
                          [org.clojure/core.async "0.4.474"]
                          [ring-middleware-accept "2.0.3"]

                          [integrant "0.6.3"]
                          [impi "0.0.10"]
                          [cheshire "5.8.0"]]
          :source-paths #{"src"}
          :resource-paths #{"resources"})

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]]
 '[org.martinklepsch.boot-garden :refer [garden]])

(deftask build
  "This task contains all the necessary steps to produce a build
   You can use 'profile-tasks' like `production` and `development`
   to change parameters (like optimizations level of the cljs compiler)"
  []
  (comp (cljs)

        (garden :styles-var 'busmaker.styles/screen
:output-to "public/css/garden.css")))

(deftask run
  "The `run` task wraps the building of your application in some
   useful tools for local development: an http server, a file watcher
   a ClojureScript REPL and a hot reloading mechanism"
  []
  (comp (serve)
        (watch)
        (cljs-repl)

        (reload)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced}
                 garden {:pretty-print false})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none}
                 reload {:on-jsload 'busmaker.app/reload!})
  identity)

(deftask whitespace []
  (task-options! cljs {:optimizations :whitespace})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))
