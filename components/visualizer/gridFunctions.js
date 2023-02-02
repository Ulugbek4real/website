export const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    className: node.isWall ? "node" : "node node-wall",
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

export const getInitialGrid = (startNode, finishNode) => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createNode(col, row, startNode, finishNode));
    }
    grid.push(currentRow);
  }
  return grid;
};

export const createNode = (col, row, startNode, finishNode) => {
  return {
    className: "node",
    col,
    row,
    isStart: row === startNode.row && col === startNode.col,
    isFinish: row === finishNode.row && col === finishNode.col,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

export const animateGivenNode = (node, className, setGrid) => {
  setGrid((prevGrid) =>
    prevGrid.map((r, rowIdx) => {
      if (rowIdx === node.row) {
        return r.map((n, nodeIdx) => {
          if (nodeIdx === node.col) {
            return {
              ...n,
              className: className,
            };
          }
          return n;
        });
      }
      return r;
    })
  );
};

export const generateRandomMaze = (grid, setGrid) => {
  const newGrid = grid.slice();
  for (let i = 0; i < 20; i++) {
    for (let i = 0; i < 20; i++) {
      let randomCol = Math.floor(Math.random() * 50);
      const node = newGrid[i][randomCol];
      if (node.isStart || node.isFinish) return;
      const newNode = {
        ...node,
        className: "node",
        isWall: !node.isWall,
      };
      newGrid[i][randomCol] = newNode;
      setGrid(newGrid);
    }
  }
};
