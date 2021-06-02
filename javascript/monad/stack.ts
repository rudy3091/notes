import { Nothing, Just, unwrap } from "./maybe";

type Stack<T> = T[];

const newStack = () => Just ([]);

const push = <T> (x: T) => (s: Stack<T>) =>
  Just (s.concat(x));

const isEmpty = <T> (s: Stack<T>) =>
  peek(s) === undefined ? Just (true) : Just (false);

const pop = <T> (s: Stack<T>) =>
  isEmpty (s) () ? Nothing () : Just (s.slice(0, s.length - 1));

const peek = <T> (s: Stack<T>) =>
  s.length === 0 ? Nothing () : Just (s[s.length - 1]);

const peekLog = <T> (s: Stack<T>) =>
  console.log( unwrap( peek (s) ) )


// s = Just [ 1, 2, 3 ];
const s = newStack() ['>>='] (push (1)) ['>>='] (push (2)) ['>>='] (push (3))

peekLog ['<$>'] ( s ); // Just 3
peekLog ['<$>'] ( s ['>>='] (pop) ) // Just 2
peekLog ['<$>'] ( s ['>>='] (pop) ['>>='] (pop) ) // Just 1
peekLog ['<$>'] ( s ['>>='] (pop) ['>>='] (pop) ['>>='] (pop)) // Nothing
peekLog ['<$>'] ( s ['>>='] (pop) ['>>='] (pop) ['>>='] (pop) ['>>='] (pop)) // Nothing

console.log( unwrap (s ['>>='] (pop) ) ); // Just 1, 2
console.log( unwrap (s ['>>='] (pop) ['>>='] (pop)) ); // Just 1

