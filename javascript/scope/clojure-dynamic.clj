;;; Clojure 예제
(def ^:dynamic x "global") ; Clojure의 변수선언은 기본적으로 static

(defn f []
  (println x))

;; dynamic scope
(defn g []
  (binding [x "local"] ; binding 키워드로 이미 존재하는 변수에 값을 바인딩
    (f)))

;; lexical scope
(defn h []
  (let [x "local"] ; let 키워드로 렉시컬 스코프를 가지는 immutable alias 생성
    (f)))

(f) ; global
(g) ; local
(h) ; global

;; 참고 - Let vs. Binding in Clojure
;; https://stackoverflow.com/questions/1523240/let-vs-binding-in-clojure
