import type Position from "../models/Position.inferface";
import type { Grid } from "./GameState";
import Player from "./Player";

export default class CPU extends Player {
  cpu: boolean = true;
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

  static fromStorage(data: Partial<CPU>): CPU {
    const { mark, ties, wins }: Partial<CPU> = data;
    const player: CPU = new CPU(mark);
    player.ties = ties;
    player.wins = wins;
    return player;
  }
}
