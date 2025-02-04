//small functions used throughout the application

import { MAX_COLS, MAX_ROWS } from "./constants";
import { GridType, TileType } from "./types";

const createRow = (row: number, startTile: TileType, endTile: TileType) => {
    const currentRow = [];
    for (let col = 0; col < MAX_COLS; col++) {
        currentRow.push({
            row,
            col,
            isEnd: row === endTile.row && col === endTile.col, 
            isWall: false, //since were initializing it we know some things are false
            isPath: false,
            distance: Infinity,
            isStart: row === startTile.row && col === startTile.col,
            isTraversed: false, 
            parent: null,
        });
    }
    return currentRow;
};

export const createGrid = (startTile: TileType, endTile: TileType) => {
    const grid: GridType = [];
    for (let row = 0; row < MAX_ROWS; row++) {
        grid.push(createRow(row, startTile, endTile));
    }
    return grid;
};

//We create our grid by mapping over all of the rows 
//and with each row push the row which containes the columns
//which have the tiles in their initial state