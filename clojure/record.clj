(defrecord Band [name members albums])

(defrecord Member [fname lname])

(defrecord Album [no name])

(def linkin-park (Band. "Linkin Park"
                        [(Member. "Chester" "Bennington")
                         (Member. "Mike" "Shinoda")
                         (Member. "Brad" "Delson")
                         (Member. "Rob" "Bourdon")
                         (Member. "Joe" "Hahn")
                         (Member. "Phoenix" "Farrell")]
                        [(Album. 1 "Hybrid Theory")
                         (Album. 2 "Meteora")
                         (Album. 3 "Minutes to Midnight")
                         (Album. 4 "A Thousand Suns")
                         (Album. 5 "Living Things")
                         (Album. 6 "The Hunting Party")
                         (Album. 7 "One More Light")]))

(println (:name linkin-park)) ; "Linkin Park"
(println (-> linkin-park :members (nth 0))) ; #user.Member{:fname Chester, :lname Bennington}
(println (-> linkin-park :members (nth 0) :fname)) ; "Chester"
(println (-> linkin-park :albums (nth 0) :name)) ; "Hybrid Theory"

