// dfs using recursion
function dfsRecursive(graph: number[][], visited: boolean[], now: number) {
  const logger: number[] = [];

  // nested function for logging
  function loop(graph: number[][], visited: boolean[], now: number) {
    logger.push(now);
    visited[now] = true;
    graph[now].forEach((next: number) => {
      if (!visited[next]) {
        loop(graph, visited, next);
      }
    });
  }

  loop(graph, visited, now);
  console.log(logger.join(" -> "));
}

// dfs using stack
function dfsStack(graph: number[][], start: number) {
  const logger = [];
  const stack: number[] = [];
  const visited = newVisited(graph.length);
  stack.push(start);

  while (stack.length !== 0) {
    const now = stack.pop()!;
    if (!visited[now]) {
      logger.push(now);
      visited[now] = true;
      for (let i = graph[now].length - 1; i >= 0; i--) {
        const next = graph[now][i];
        if (!visited[next]) stack.push(next);
      }
    }
  }

  console.log(logger.join(" -> "));
}

function newVisited(n: number) {
  return new Array(n).fill(false);
}

export function doDfs(adjList: number[][]) {
  console.log("using recursion");
  dfsRecursive(adjList, newVisited(adjList.length), 1);
  console.log("using stack");
  dfsStack(adjList, 1);
}
