import type Position from "@types/Position.inferface";
import type { Grid } from "./GameState";

export type Mark = "X" | "O";

export default class Player {
  mark: Mark;
  wins: number = 0;
  ties: number = 0;
  theme: "warm" | "cold";
  cpu: boolean;

  constructor(mark: Mark, cpu: boolean = false) {
    this.mark = mark;
    this.theme = mark === "X" ? "cold" : "warm";
    this.cpu = cpu;
  }

  reset() {
    this.wins = 0;
    this.ties = 0;
  }

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

  static fromStorage(data: Partial<Player>): Player {
    const { mark, ties, wins, cpu }: Partial<Player> = data;
    const player: Player = new Player(mark);
    player.ties = ties;
    player.wins = wins;
    player.cpu = cpu;
    return player;
  }
}

export type Players = Map<Mark, Player>;
