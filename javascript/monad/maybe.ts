export type Maybe<T> = T | undefined

export function Just<T> (x: T): () => Maybe<T> {
  const just = () => x;
  const nothing = () => undefined;
  return x === undefined ? nothing : just;
}

export function Nothing<T>(): () => Maybe<T> {
  const nothing = () => undefined;
  return nothing;
}

export function unwrap<T>(m: () => Maybe<T>): string {
  const M = m();
  return M === undefined ? 'Nothing' : `Just ${M}`;
}

Function.prototype['>>='] = function <T>(f: (x: any) => Maybe<T>) {
  const M = this ();
  return M === undefined ? Nothing () : f (M);
}

Function.prototype['<$>'] = function <T>(m: () => Maybe<T>): () => Maybe<T> {
  const x = m();
  const M = x === undefined ? undefined : this ( x );
  return M === undefined ? Nothing () : Just ( M );
}

