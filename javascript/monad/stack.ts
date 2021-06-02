import { Nothing, Just, Maybe } from "./maybe";

type Stack<T> = T[];
const newStack = () => [];
const push = <T extends unknown>(s: Stack<T>, x: T) => s.concat(x);
const pop = <T extends unknown>(s: Stack<T>) => s.slice(0, s.length - 1);
const peek = <T extends unknown>(s: Stack<T>) =>
  s.length === 0 ? Nothing () : Just ( s[s.length - 1] );
const isEmpty = <T extends unknown>(s: Stack<T>) =>
  peek(s) () === undefined ? true : false;

const log = <T extends unknown>(m: Maybe<T>) =>
  console.log( m === undefined ? 'Nothing' : `Just ${m}` );
const peekLog = <T extends unknown>(s: Stack<T>) =>
  (log) ['<$>'] (peek (s));

// s = [ 1, 2, 3 ];
const s = push ( push ( push (newStack(), 1), 2 ), 3 );

peekLog ( s ); // Just 3
peekLog ( pop (s) ); // Just 2
peekLog ( pop (pop (s)) ); // Just 1
peekLog ( pop (pop (pop (s))) ); // Nothing
peekLog ( pop (pop (pop (pop (s)))) ); // Nothing
