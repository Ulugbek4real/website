export function dfs(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const stack = [startNode];
  startNode.distance = 0;

  while (stack.length) {
    if (stack.length === 0) return visitedNodesInOrder;
    const node = stack.pop();
    if (node.isVisited) continue;
    if (node.isWall) continue;
    node.isVisited = true;
    visitedNodesInOrder.push(node);
    if (node === finishNode) return visitedNodesInOrder;
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.previousNode = node;
      stack.push(neighbor);
    }
  }
  return visitedNodesInOrder;
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  if (row > 0) neighbors.push(grid[row - 1][col]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}
