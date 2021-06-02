export type Maybe<T> = T | undefined

export function Just<T> (x: T): () => Maybe<T> {
  const just = () => x;
  return just;
}

export function Nothing<T>(): () => Maybe<T> {
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

Function.prototype['<$>'] = function <T>(m: () => Maybe<T>) {
  const that: (x: T) => Maybe<T> = this;
  // return that ( m () ) === undefined ? Nothing () : Just ( m () );
  return that( m () ) === undefined ? {
    unwrap: () => Nothing(),
    toString: () => 'Nothing'
  } : {
    unwrap: () => Just ( that (m ()) ) (),
    toString: () => `Just ${Just ( that (m ()) ) ()}`
  }
}

