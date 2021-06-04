(defn is-bigger-than? [num1 num2]
  (if (> num1 num2) true false))

(println (is-bigger-than? 10 5)) ; true
(println (is-bigger-than? 1 5)) ; false

(defn is-bigger-than-5? [num]
  (is-bigger-than? num 5))

(println (is-bigger-than-5? 10)) ; true
(println (is-bigger-than-5? 1)) ; false

;; when
;; (when test & body)
(defn sleep-if-night [t]
  (when (>= t 22)
    (println "go sleep right now!")))

(sleep-if-night 20) ; (nothing)
(sleep-if-night 23) ; "go sleep right now!"

;; case
;; (case e & clauses)
(defn greet [t]
  (case t
    (6 7 8 9 10) "Good Morning"
    (11 12 13 14 15 16 17) "Good Afternoon"
    (18 19 20 21 22) "Good Evening"
    "Good Night"))

(println (greet 7)) ; "Good Morning"
(println (greet 12)) ; "Good Afternoon"
(println (greet 15)) ; "Good Afternoon"
(println (greet 20)) ; "Good Evening"
(println (greet 23)) ; "Good Night"

;; cond
(defn greet-with-cond [t]
  (cond
    (and (>= t 6) (< t 11)) "Good Morning"
    (and (>= t 11) (< t 18)) "Good Afternoon"
    (and (>= t 18) (< t 23)) "Good Evening"
    :else "Good Night"))

(println (greet-with-cond 7)) ; "Good Morning"
(println (greet-with-cond 12)) ; "Good Afternoon"
(println (greet-with-cond 15)) ; "Good Afternoon"
(println (greet-with-cond 20)) ; "Good Evening"
(println (greet-with-cond 23)) ; "Good Night"
