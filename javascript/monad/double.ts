import { Just, Nothing } from "./maybe";

const doub = (x: number) => Just (x * 2);

const res = (Just (3)) ['>>='] (doub);
console.log(res.unwrap()); // 6
console.log(res.toString()); // 'Just 6'

const resNothing = (Nothing ()) ['>>='] (doub);
console.log(resNothing.unwrap()); // [Function: nothing]
console.log(resNothing.toString()); // 'Nothing'

