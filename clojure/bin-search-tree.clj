(defrecord Node [value left right])

(defn insert [root value]
  (cond
    (nil? (:value root)) (Node. value nil nil)
    (< value (:value root)) (Node. (:value root)
                                   (insert (:left root) value)
                                   (:right root))
    (> value (:value root)) (Node. (:value root)
                                   (:left root)
                                   (insert (:right root) value))
    :else (update root :count (fnil inc 1))))

(defn coll->tree [coll] (reduce insert nil coll))

(print (coll->tree [5 9 3 7 2 8]))

(comment
  "binary search tree from [5 9 3 7 2 8]"
  (#user.Node{:value 5,
           :left #user.Node{:value 3,
                            :left #user.Node{:value 2,
                                             :left nil,
                                             :right nil},
                            :right nil},
           :right #user.Node{:value 9,
                             :left #user.Node{:value 7,
                                              :left nil,
                                              :right #user.Node{:value 8,
                                                                :left nil,
                                                                :right nil}},
                             :right nil}}
  )
)

;     5
;    / \
;   3   9
;  /   /
; 2   7
;      \
;       8
