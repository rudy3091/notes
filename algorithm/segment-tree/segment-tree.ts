export default class SegmentTree {
	public tree: number[];
	private arr: number[];

	private root = 1;
	private left = 0;
	private right = 0;

	constructor(arr: number[]) {
		this.tree = new Array<number>(arr.length * 4);
		this.arr = arr;

		this.right = arr.length - 1;
		this.init(this.root, this.left, this.right);
	}

	public update(idx: number, newValue: number) {
		this._update(
			this.root,
			idx + 1, // root index is 1, not 0
			this.left,
			this.right,
			newValue - this.arr[idx]
		);
	}

	public query(from: number, to: number): number {
		return this._query(this.root, from, to, this.left, this.right);
	}

	private init(nodeIdx: number, left: number, right: number): number {
		if (left == right) {
			return (this.tree[nodeIdx] = this.arr[left]);
		}

		const mid = Math.floor((left + right) / 2);
		return (this.tree[nodeIdx] =
			this.init(nodeIdx * 2, left, mid) +
			this.init(nodeIdx * 2 + 1, mid + 1, right));
	}

	private _update(
		nodeIdx: number,
		idx: number,
		left: number,
		right: number,
		diff: number
	) {
		if (!(left <= idx && idx <= right)) return;

		this.tree[nodeIdx] += diff;

		if (left != right) {
			const mid = Math.floor((left + right) / 2);
			this._update(nodeIdx * 2, idx, left, mid, diff);
			this._update(nodeIdx * 2 + 1, idx, mid + 1, right, diff);
		}
	}

	private _query(
		nodeIdx: number,
		a: number,
		b: number,
		left: number,
		right: number
	): number {
		if (b < left || right < a) return 0;
		if (a <= left && right <= b) return this.tree[nodeIdx];

		const mid = Math.floor((left + right) / 2);
		return (
			this._query(nodeIdx * 2, a, b, left, mid) +
			this._query(nodeIdx * 2 + 1, a, b, mid + 1, right)
		);
	}
}

const segTree = new SegmentTree([3, 5, 6, 7, 2, 9, 4, 5, 2, 8, 1, 5]);
console.log(segTree.query(0, 2)); // 14

segTree.update(0, 9); // 3 -> 9
console.log(segTree.query(0, 2)); // 20

segTree.update(1, 3); // 5 -> 3
console.log(segTree.query(0, 2)); // 18

console.log(segTree.query(3, 3)); // 7
