import { twMerge } from "tailwind-merge";
import { 
    END_TILE_STYLE, 
    PATH_TILE_STYLE, 
    START_TILE_STYLE, 
    TILE_STYLE, 
    TRAVERSED_TILE_STYLE, 
    WALL_TILE_STYLE } from "../utils/constants";
import { MAX_ROWS } from "../utils/constants";

interface MouseFunction {
    (row: number, col: number): void;
}

export function Tile({
    row,
    col,
    isStart,
    isEnd,
    isTraversed,
    isWall,
    isPath,
    handleMopuseDown,
    handleMouseUp,
    handleMouseEnter,
}:{
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isTraversed: boolean;
    isWall: boolean;
    isPath: boolean;
    handleMopuseDown: MouseFunction;
    handleMouseUp: MouseFunction;
    handleMouseEnter: MouseFunction;
}) {

    let tileTyleStyle;

    if (isStart) {
        tileTyleStyle = START_TILE_STYLE;
    } else if (isEnd) {
        tileTyleStyle = END_TILE_STYLE;
    } else if (isWall) {
        tileTyleStyle = WALL_TILE_STYLE;
    } else if (isPath) {
        tileTyleStyle = PATH_TILE_STYLE;
    } else if (isTraversed) {
        tileTyleStyle = TRAVERSED_TILE_STYLE;
    } else {
        tileTyleStyle = TILE_STYLE;
    }

    const borderStyle = row === MAX_ROWS-1 ? "border-b" : col === 0 ? "border-l" : "";
    const edgeStyle = row === MAX_ROWS-1 && col === 0 ? "border-l" : "";

    return(
        <div 
        className={twMerge(tileTyleStyle, borderStyle, edgeStyle)} 
        id={`${row}-${col}`} 
        onMouseDown={() => handleMopuseDown(row,col)}
        onMouseUp={() => handleMouseUp(row, col)}
        onMouseEnter={() => handleMouseEnter(row,col)}
        />
    );
}