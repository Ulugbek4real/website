import React, { useState, useEffect } from "react";

import Header from "../../../components/projects/visualizer/Header";
import Node from "../../../components/projects/visualizer/Node";

import {
  dijkstra,
  getNodesInShortestPathOrder,
} from "../../../components/projects/visualizer/dijkstra";
import { dfs } from "../../../components/projects/visualizer/dfs";
import {
  getNewGridWithWallToggled,
  getInitialGrid,
  animateGivenNode,
} from "../../../components/projects/visualizer/gridFunctions";

const PathfindingVisualizer = () => {
  const [grid, setGrid] = useState([]);
  const [startNode, setStartNode] = useState({ row: 10, col: 15 });
  const [finishNode, setFinishNode] = useState({ row: 10, col: 35 });
  const [isRunning, setIsRunning] = useState(false);
  const [mouseIsPressed, setMouseIsPressed] = useState(false);
  const [isChangingStartNode, setIsChangingStartNode] = useState(false);
  const [isChangingFinishNode, setIsChangingFinishNode] = useState(false);

  useEffect(() => {
    setGrid(getInitialGrid(startNode, finishNode));
  }, []);

  // Mouse events
  const handleMouseDown = (row, col) => {
    if (isRunning) return;
    if (row === startNode.row && col === startNode.col) {
      setIsChangingStartNode(true);
      return;
    }
    if (row === finishNode.row && col === finishNode.col) {
      setIsChangingFinishNode(true);
      return;
    }
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };

  const handleMouseEnter = (row, col) => {
    if (isChangingStartNode) {
      setStartNode((prev) => {
        return { row: row, col: col };
      });
      changeNode(row, col, "start");
    } else if (isChangingFinishNode) {
      setFinishNode((prev) => {
        return { row: row, col: col };
      });
      changeNode(row, col, "finish");
    }
    if (!mouseIsPressed) return;
    if (row === startNode.row && col === startNode.col) return;
    if (row === finishNode.row && col === finishNode.col) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = () => {
    setIsChangingStartNode(false);
    setIsChangingFinishNode(false);
    setMouseIsPressed(false);
  };

  const changeNode = (row, col, type) => {
    const newGrid = grid.slice();
    newGrid.forEach((r) => {
      r.forEach((node) => {
        node.className = "node";
        if (type === "start") {
          if (node.isStart) node.isStart = false;
          if (node.row === row && node.col === col) {
            node.isStart = true;
          }
        } else if (type === "finish") {
          if (node.isFinish) node.isFinish = false;
          if (node.row === row && node.col === col) {
            node.isFinish = true;
          }
        }
      });
    });
    setGrid(newGrid);
  };
  const animateAlgorithm = (visitedNodesInOrder, nodesInShortestPathOrder) => {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        animateGivenNode(
          node,
          "node node-visited  animate-visitedNodes ",
          setGrid
        );
      }, 10 * i);
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder) => {
    if (isRunning) return;
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      if (i === nodesInShortestPathOrder.length - 1) {
        setTimeout(() => {
          setIsRunning(false);
        }, 30 * i);
      }
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        animateGivenNode(
          node,
          "node node-shortest-path animate-shortestPath ",
          setGrid
        );
      }, 30 * i);
    }
  };

  const visualize = (algorithm) => {
    if (
      grid[startNode.row][startNode.col].isWall ||
      grid[finishNode.row][finishNode.col].isWall
    ) {
      alert("Start or finish node can't be on a wall");
      return;
    }
    setIsRunning(true);
    const newGrid = grid.map((row) => {
      return row.map((node) => {
        return { ...node, className: "node" };
      });
    });
    setGrid(newGrid);
    const latestStartNode = grid[startNode.row][startNode.col];
    const latestFinishNode = grid[finishNode.row][finishNode.col];
    const visitedNodesInOrder =
      algorithm === "dijkstra"
        ? dijkstra(grid, latestStartNode, latestFinishNode)
        : algorithm === "dfs"
        ? dfs(grid, latestStartNode, latestFinishNode)
        : [];
    const nodesInShortestPathOrder =
      getNodesInShortestPathOrder(latestFinishNode);
    animateAlgorithm(visitedNodesInOrder, nodesInShortestPathOrder);
  };
  return (
    <>
      <div className="hidden lg:inline ">
        <Header
          visualize={visualize}
          isRunning={isRunning}
          setGrid={setGrid}
          grid={grid}
          getInitialGrid={() => getInitialGrid(startNode, finishNode)}
        />
        <div className=" flex flex-col justify-center items-center">
          {grid.map((row, rowIdx) => {
            return (
              <div
                key={rowIdx}
                className=" flex flex-wrap flex-row justify-center items-center"
              >
                {row.map((node, nodeIdx) => {
                  const { row, col, isFinish, isStart, isWall, className } =
                    node;
                  return (
                    <Node
                      className={className}
                      key={nodeIdx}
                      col={col}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      onClick={(row, col) => {
                        setStartNode({ row, col });
                      }}
                      mouseIsPressed={mouseIsPressed}
                      onMouseDown={(row, col) => handleMouseDown(row, col)}
                      onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                      onMouseUp={() => handleMouseUp()}
                      row={row}
                    ></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:hidden flex items-center justify-center flex-col text-center">
        <h1 className="text-2xl">This is a Desktop application.</h1>
        <p>Please open on a larger screen.</p>
        <h3 className="text-xl font-bold">Thank you!</h3>
      </div>
    </>
  );
};

export default PathfindingVisualizer;
