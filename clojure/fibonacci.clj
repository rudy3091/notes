(defn fib
  ([n] (fib n 1 1))
  ([n a b] (if (<= n 2) b (fib (- n 1) b (+ a b)))))

(println (fib 5)) ; 5
(println (fib 6)) ; 8
(println (fib 7)) ; 13
(println (fib 8)) ; 21
(println (fib 9)) ; 34
(println (fib 10)) ; 55
