(defn fac
  ([n] (fac n 1))
  ([n acc] (if (< n 2) acc (fac (- n 1) (* n acc)))))

(println (fac 3)) ; 6
(println (fac 4)) ; 24
(println (fac 5)) ; 120
(println (fac 6)) ; 720
