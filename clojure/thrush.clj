;;;; thrush operator -> , ->>

;;; -> threads first
;; same as (- (/ (+ 5 3) 2) 1)
(-> 5 (+ 3) (/ 2) (- 1)) ; 3

(def person
  {:name "Mark Volkmann"
   :address {:street "644 Glen Summit"
             :city "St. Charles"
             :state "Missouri"
             :zip 63304}
   :employer {:name "Object Computing, Inc."
              :address {:street "12140 Woodcrest Dr."
                        :city "Creve Coeur"
                        :state "Missouri"
                        :zip 63141}}})

;; same as (:city (:address (:employer person)))
(println
  (-> person
      :employer
      :address
      :city))

;; same as (first (.split (.replace (.toUpperCase "a b c d") "A" "X") " "))
(-> "a b c d"
    .toUpperCase
    (.replace "A" "X")
    (.split " ")
    first)


;;; ->> threads last
;; same as (- 1 (/ 2 (+ 3 5)))
(->> 5 (+ 3) (/ 2) (- 1)) ; 3/4

;; same as (first (.split "a b c d" " "))
(println
  (->> " "
       (.split "a b c d")
       first))

(-> " Hello " (str " rudy ")) ; " Hello  rudy "
(->> " Hello " (str " rudy ")) ; " rudy  Hello "
