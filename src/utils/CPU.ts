import type Position from "../models/Position.inferface";
import type { Grid } from "./GameState";
import Player, { type Mark } from "./Player";

export default class CPU extends Player {
  move(grid: Grid): Promise<Position> {
    function choose(): Position {
      const { x, y }: Position = {
        x: Math.floor(Math.random() * 3),
        y: Math.floor(Math.random() * 3),
      };
      if (grid[y][x]) return choose();
      else return { x, y };
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(choose());
      }, 1000);
    });
  }
}
