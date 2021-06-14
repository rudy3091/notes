export class Heap {
  private _arr = [0];
  private _cmp: Function;

  constructor(cmp = (x: number, y: number) => y - x) {
    this._cmp = cmp;
  }

  isEmpty(): boolean {
    return this._arr.length === 1;
  }

  peek(): number {
    if (this.isEmpty()) throw new Error("cannot peek empty heap");
    return this._arr[1];
  }

  insert(x: number) {
    this._arr.push(x);
    this._upHeap();
  }

  delete() {
    if (this.isEmpty()) throw new Error("cannot delete from empty heap");
    this._swap(1, this._arr.length - 1);
    const top = this._arr.pop();
    this._downHeap();
    return top;
  }

  private _swap(i: number, j: number) {
    [this._arr[i], this._arr[j]] = [this._arr[j], this._arr[i]];
  }

  private _upHeap() {
    let idx = this._arr.length - 1;
    while (idx > 1) {
      const parent = Math.floor(idx / 2);
      const x = this._arr[parent];
      const y = this._arr[idx];

      if (this._cmp(x, y) > 0 /* stable sort */) this._swap(parent, idx);
      else break;

      idx = parent;
    }
  }

  private _downHeap() {
    let idx = 1;
    const last = this._arr.length - 1;

    while (idx < last) {
      const left = idx * 2;
      const right = idx * 2 + 1;

      const y1 = this._arr[left];
      const y2 = this._arr[right];

      const childIdx = this._cmp(y1, y2) > 0 ? right : left;
      const x = this._arr[idx];
      const y = this._arr[childIdx];

      if (this._cmp(x, y) > 0) this._swap(childIdx, idx);
      else break;

      idx = childIdx;
    }
  }

  debug(label = "") {
    console.log(`${label === "" ? label : label + " "} this._arr.slice(1)`);
  }
}

function test() {
  // default: max heap
  const h = new Heap();
  h.insert(4);
  h.insert(8);
  h.insert(3);
  h.insert(5);
  h.insert(1);
  h.insert(7);
  h.insert(6);
  h.insert(2);
  h.insert(9);

  console.log("max heap");
  console.log(h.delete()); // 9
  console.log(h.delete()); // 8
  console.log(h.delete()); // 7
  console.log(h.delete()); // 6
  console.log(h.delete()); // 5
  console.log(h.delete()); // 4
  console.log(h.delete()); // 3
  console.log(h.delete()); // 2
  console.log(h.delete()); // 1
  // console.log(h.delete()); // Error

  // min heap
  const h2 = new Heap((a, b) => a - b);
  h2.insert(4);
  h2.insert(8);
  h2.insert(3);
  h2.insert(5);
  h2.insert(1);
  h2.insert(7);
  h2.insert(6);
  h2.insert(2);
  h2.insert(9);

  console.log("min heap");
  console.log(h2.delete()); // 1
  console.log(h2.delete()); // 2
  console.log(h2.delete()); // 3
  console.log(h2.delete()); // 4
  console.log(h2.delete()); // 5
  console.log(h2.delete()); // 6
  console.log(h2.delete()); // 7
  console.log(h2.delete()); // 8
  console.log(h2.delete()); // 9
  // console.log(h2.delete()); // Error
}

// test();
