import { Just, Nothing } from "./maybe";

const dictionary = {
  a: 'b',
  b: 'c'
};

const lookUp = (key: string) =>
  dictionary[key] === undefined ? Nothing () : Just (dictionary[key]);

console.log( ( (lookUp ('a')) ['>>='] (lookUp) ).toString() ) // Just c

