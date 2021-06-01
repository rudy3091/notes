type Maybe<T> = T | undefined

function Just<T> (x: T): () => Maybe<T> {
  const just = () => x;
  return just;
}

function Nothing<T>(): () => Maybe<T> {
  const nothing = () => undefined;
  return nothing;
}

Function.prototype['>>='] = function <T>(f: Function) {
  const that: () => Maybe<T> = this;
  return that() === undefined ? {
    unwrap: () => Nothing(),
    toString: () => 'Nothing'
  } : {
    unwrap: () => f ( that() ) (),
    toString: () => `Just ${f ( that() ) ()}`
  };
}

const doub = (x: number) => Just (x * 2);

const res = (Just (3)) ['>>='] (doub);
console.log(res.unwrap()); // 6
console.log(res.toString()); // 'Just 6'

const resNothing = (Nothing ()) ['>>='] (doub);
console.log(resNothing.unwrap()); // [Function: nothing]
console.log(resNothing.toString()); // 'Nothing'
