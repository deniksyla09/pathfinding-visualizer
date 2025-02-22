
//removes a wall to the right or left of specificed cell in a grid
//update the cell style and pause briefly to animate the process based on the specified speed
import { sleep } from "./helpers";
import { SPEEDS, TILE_STYLE } from "./constants";
import { GridType, SpeedType } from "./types";

export const destoryWall = async (
    grid: GridType,
    row: number,
    col: number,
    isRight: number,
    speed: SpeedType,
) => {
    if (isRight && grid[row][col+1]) {
        grid[row][col+1].isWall = false;
        document.getElementById(`${row}-${col+1}`)!.className = TILE_STYLE;
        await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5); 
    } else if (grid[row+1]) {
        grid[row+1][col].isWall = false;
        document.getElementById(`${row+1}-${col}`)!.className = TILE_STYLE;
        await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5); 
    } else {
        grid[row][col].isWall = false;
        document.getElementById(`${row}-${col}`)!.className = TILE_STYLE;
        await sleep(20 * SPEEDS.find((s) => s.value === speed)!.value - 5); 
    }
};