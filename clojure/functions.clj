(ns functions)

; multi-arity functions
(defn messenger
  ([] (messenger "Hello World!"))
  ([msg] (println msg)))

; variadic functions
(defn hello [greeting & who]
  (println greeting who))

(hello "Hello" "world" "class") ; Hello (world class)

; private functions
(defn- f []
  (println "this will be private"))
