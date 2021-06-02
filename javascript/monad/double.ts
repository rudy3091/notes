import { Just, Nothing, unwrap } from "./maybe";

const doub = (x: number) => Just (x * 2);

const res = (Just (3)) ['>>='] (doub);
console.log( unwrap(res) ); // Just 6

const resNothing = (Nothing ()) ['>>='] (doub);
console.log( unwrap(resNothing) ); // Nothing

