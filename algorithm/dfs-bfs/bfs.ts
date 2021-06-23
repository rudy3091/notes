// bfs using queue
function bfsQueue(graph: number[][], start: number) {
  const logger = [start];
  const visited = newVisited(graph.length);
  const queue: number[] = [];
  queue.push(start);
  visited[start] = true;

  while (queue.length !== 0) {
    const now = queue.shift()!;

    for (let i = 0; i < graph[now].length; i++) {
      const next = graph[now][i];
      if (!visited[next]) {
        logger.push(next);
        queue.push(next);
        visited[next] = true;
      }
    }
  }

  console.log(logger.join(" -> "));
}

// // no advantages for recursive bfs
// function bfsRecursive(graph: number[][]) {}

function newVisited(n: number) {
  return new Array(n).fill(false);
}

export function doBfs(adjList: number[][]) {
  bfsQueue(adjList, 1);
}
