import { doDfs } from "./dfs";
import { doBfs } from "./bfs";

//    1
//  / |  \
// 2  3 - 4 - 5
//   /  \ |
//  6     7
const graph: number[][] = [
  [] /* 1-base index */,
  [2, 3, 4],
  [1],
  [1, 4, 6, 7],
  [1, 3, 5, 7],
  [4],
  [3],
  [3, 4],
];

//      1
//    /   \
//   2     3
//  / \   / \
// 4   5 6   7
const tree: number[][] = [
  [],
  [2, 3],
  [4, 5],
  [6, 7],
  [],
  [],
  [],
  [],
]

console.log("dfs in graph");
doDfs(graph); // 1 2 3 4 5 7 6

console.log("dfs in tree");
doDfs(tree); // 1 2 4 5 3 6 7

console.log("bfs in graph");
doBfs(graph); // 1 2 3 4 6 7 5

console.log("bfs in tree");
doBfs(tree); // 1 2 3 4 5 6 7
