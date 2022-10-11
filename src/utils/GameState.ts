import type Player from "./Player";
import type { Players } from "./Player";
import type Position from "../models/Position.inferface";
import CPU from "./CPU";

const gridSize = 3;

export type Row = (Player | null)[];
export type Grid = Row[];

const emptyGrid: Grid = Array(3).fill(Array(3).fill(null));

export default class GameState {
  grid: Grid = emptyGrid;
  current: Player = null;
  winner: Player = null;
  players: Players;
  finished: boolean = false;
  stalled: boolean = false;

  constructor(players: Players, grid: Grid = emptyGrid) {
    this.grid = grid;
    this.players = players;
    this.current = this.players.get("X");
    this.stalled = this.current instanceof CPU;
  }

  public nextRound(): GameState {
    return new GameState(this.players, emptyGrid);
  }

  public restart(): GameState {
    this.players.get("X").reset();
    this.players.get("O").reset();
    return new GameState(this.players, emptyGrid);
  }

  private getNextPlayer() {
    if (this.current === this.players.get("O")) {
      return this.players.get("X");
    }
    return this.players.get("O");
  }

  private transform(
    fn: (row: Row, player: Player, y: number, x: number) => any
  ): Array<any> {
    return this.grid.map((row, y) => row.map((col, x) => fn(row, col, y, x)));
  }

  public mark(position: Position): GameState {
    const newGrid: Grid = this.transform((row, player, y, x) => {
      if (y === position.y && x === position.x) return this.current;
      else return player;
    });

    const nextState = new GameState(this.players, newGrid);
    const noMoves = newGrid.every((row) => row.every((tile) => tile));
    nextState.winner = GameState.checkForWinner(newGrid, position);
    nextState.finished = !!nextState.winner || noMoves;
    nextState.current = nextState.winner || this.getNextPlayer();
    nextState.stalled = nextState.current instanceof CPU;
    if (nextState.finished) {
      nextState.writeStats();
    }

    nextState.save();
    return nextState;
  }

  private static checkForWinner(grid: Grid, { x, y }: Position): Player | null {
    const player = grid[y][x];
    for (let i = 0; i < gridSize; i++) {
      if (grid[y][i] !== player) break;
      if (i === gridSize - 1) return player;
    }

    for (let i = 0; i < gridSize; i++) {
      if (grid[i][x] !== player) break;
      if (i === gridSize - 1) return player;
    }

    //check diag
    if (x === y) {
      //we're on a diagonal
      for (let i = 0; i < gridSize; i++) {
        if (grid[i][i] !== player) break;
        if (i === gridSize - 1) return player;
      }
    }

    //check anti diag
    if (x + y === gridSize - 1) {
      for (let i = 0; i < gridSize; i++) {
        if (grid[i][gridSize - 1 - i] !== player) break;
        if (i === gridSize - 1) return player;
      }
    }
  }

  public writeStats() {
    if (this.winner) {
      this.winner.wins++;
    } else {
      this.players.get("X").ties++;
      this.players.get("O").ties++;
    }
  }

  public save() {
    localStorage.setItem("gameState", this.toJSON());
  }

  // public static fromStorage(players:Players): GameState {
  //     const  {grid,players} = JSON.parse(localStorage.getItem("gameState"));
  //     const player = new GameState(players);
  //     player.wins = wins;
  //     player.ties = ties;
  //     player.losess = losess;
  //     return player;
  //   }

  public toJSON(): string {
    return JSON.stringify({
      ...this,
      grid: this.transform((row, player, y, x) => player?.mark || player),
      players: [this.players.get("X").toJSON(), this.players.get("O").toJSON()],
      current: this.current.toJSON(),
    });
  }
}
