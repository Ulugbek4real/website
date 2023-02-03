import { generateRandomMaze } from "../../../components/visualizer/gridFunctions";
import Link from "next/link";
import { ImExit } from "react-icons/im";
const Header = ({
  visualizeDijkstra,
  setGrid,
  grid,
  getInitialGrid,
  isRunning,
}) => {
  return (
    <div className=" text-white p-3 text-center mb-8 border-b dark:border-neutral-600 bg-sky-900 dark:bg-dark1 ">
      <h1 className="text-3xl font-semibold ">Pathfinding Visualizer</h1>
      <div className="flex items-center justify-center">
        <button
          className={`${
            isRunning
              ? "hover:bg-red-900 dark:hover:bg-red-900"
              : " hover:bg-sky-800 dark:hover:bg-neutral-700"
          } bg-sky-700 dark:bg-neutral-800 text-white my-2 mx-2 rounded-md text-base cursor-pointer p-2 px-3 `}
          onClick={() => {
            if (isRunning) return;
            generateRandomMaze(grid, setGrid);
          }}
        >
          Generate Random Walls
        </button>
        <button
          className={`${
            isRunning
              ? "hover:bg-red-900 dark:hover:bg-red-900"
              : " hover:bg-sky-800 dark:hover:bg-neutral-700"
          } bg-sky-700 dark:bg-neutral-800 text-white my-2 mx-2 rounded-md text-base cursor-pointer p-2 px-3 `}
          onClick={() => {
            if (isRunning) return;
            visualizeDijkstra();
          }}
        >
          Visualize Dijkstra's Algorithm
        </button>
        <button
          className={`${
            isRunning
              ? "hover:bg-red-900 dark:hover:bg-red-900"
              : " hover:bg-sky-800 dark:hover:bg-neutral-700"
          } bg-sky-700 dark:bg-neutral-800 text-white my-2 mx-2 rounded-md text-base cursor-pointer p-2 px-3 `}
          onClick={() => {
            if (isRunning) return;
            setGrid(getInitialGrid());
          }}
        >
          Clear Board
        </button>
        <Link
          href="/projects"
          className="
          hover:bg-sky-800 dark:hover:bg-neutral-700
           bg-sky-700 dark:bg-neutral-800 text-white my-2 mx-2 rounded-md text-2xl cursor-pointer p-2 px-3 "
        >
          <ImExit />
        </Link>
      </div>
    </div>
  );
};

export default Header;
