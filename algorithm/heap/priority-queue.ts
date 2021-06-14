import { Heap } from "./heap";

class PriorityQueue {
  private heap: Heap;

  constructor(cmp = (x: number, y: number) => y - x) {
    this.heap = new Heap(cmp);
  }

  isEmpty(): boolean {
    return this.heap.isEmpty();
  }

  push(x: number) {
    this.heap.insert(x);
  }

  pop() {
    return this.heap.delete();
  }
}

function test() {
  const pq = new PriorityQueue();
  pq.push(5);
  pq.push(3);
  pq.push(6);
  pq.push(2);
  pq.push(1);
  pq.push(4);

  console.log("max priority queue");
  console.log(pq.pop()); // 6
  console.log(pq.pop()); // 5
  console.log(pq.pop()); // 4
  console.log(pq.pop()); // 3
  console.log(pq.pop()); // 2
  console.log(pq.pop()); // 1
  // console.log(pq.pop()); // Error

  const pq2 = new PriorityQueue((x, y) => x - y);
  pq2.push(5);
  pq2.push(3);
  pq2.push(6);
  pq2.push(2);
  pq2.push(1);
  pq2.push(4);

  console.log("min priority queue");
  console.log(pq2.pop()); // 1
  console.log(pq2.pop()); // 2
  console.log(pq2.pop()); // 3
  console.log(pq2.pop()); // 4
  console.log(pq2.pop()); // 5
  console.log(pq2.pop()); // 6
  // console.log(pq2.pop()); // Error
}

test();
