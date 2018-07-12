(defn decompress-blueprint
  [blueprint]
  (spit "blueprint.txt" blueprint)
  (with-open [r (-> (let [s (clojure.java.io/input-stream "blueprint.txt")]
                      (.read s (byte-array 1))
                      s)
                    (->> (.wrap (java.util.Base64/getDecoder)))
                    java.util.zip.InflaterInputStream.
                    clojure.java.io/reader)]
    (-> (slurp r)
        cheshire.core/parse-string)))
