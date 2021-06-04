; collection literals
(def list-me '("HM" "Kim")) ; list (single linked list)
(def vector-me ["HM" "Kim"]) ; vector
(def set-me #{"HM" "Kim"}) ; set
(def map-me {:name "HM" :lastname "Kim"}) ; map

; accessing map
(println (:name map-me)) ; HM

(defn f1 []
  '(1, 2, 3, 3))

(println (hash-set (f1))) ; #{(1, 2, 3, 3)}

(defn f2 []
  [1, 2, 3, 3])
(println (hash-set (f2))) ; #{[1, 2, 3, 3]}
(println (set (f2))) ; #{1, 3, 2}

; collection handling functions
; cons :: appending
(cons 0 [1 2 3]) ; (0 1 2 3)
(cons 0 '(1 2 3)) ; (0 1 2 3)
(cons 0 #{1 2 3}) ; (0 1 3 2)
(cons {:a 0} {:b 1 :c 2 :d 3}) ; ({:a 0} [:b 1] [:c 2] [:d 3]) :: map is tuples of (key, value)

; conj :: appending in most effective order for each collections
(conj [1 2 3] 4) ; (1 2 3 4)
(conj [1 2 3] 4 5 6) ; (1 2 3 4 5 6)

(conj '(1 2 3) 0) ; (0 1 2 3)
(conj '(4 5 6) 1 2 3) ; (1 2 3 4 5 6)
(conj {:a 1} [:b 2]) ; {:a 1, :b 2}
(conj #{1 2 3} 0) ; (0 1 3 2)

; disj :: deleting
; assoc :: appending items with older map with new item
; dissoc :: opposite of assoc
