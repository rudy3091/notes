import { Just, Nothing, unwrap } from "./maybe";

const dictionary = {
  a: 'b',
  b: 'c'
};

const lookUp = (key: string) =>
  dictionary[key] === undefined ? Nothing () : Just ( dictionary[key] );

console.log( unwrap( lookUp ('a') ['>>='] (lookUp) ) ) // Just c
console.log( unwrap( lookUp ('b') ['>>='] (lookUp) ) ) // Nothing
console.log( unwrap( lookUp ('b') ) ) // Just c
console.log( unwrap( lookUp ('c') ) ) // Nothing

