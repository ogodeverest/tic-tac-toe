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
    this.winner = this.current = players.get("X");
    this.stalled = this.current instanceof CPU;
  }

  public newRound(): GameState {
    return new GameState(this.players, emptyGrid);
  }

  public restart(): GameState {
    this.players.get("X").reset();
    this.players.get("O").reset();
    return this.newRound();
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
    return nextState;
  }

  public writeStats() {
    if (this.winner) {
      this.winner.wins++;
    } else {
      this.players.get("X").ties++;
      this.players.get("O").ties++;
    }
  }

  public toJSON(): string {
    return JSON.stringify({
      ...this,
      grid: this.transform((row, player, y, x) => player && player.toJSON()),
      players: [this.players.get("X").toJSON(), this.players.get("O").toJSON()],
      current: this.current.toJSON(),
    });
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

  // public static fromJSON(data:string): null | GameState {
  //   const saved = JSON.parse(data);

  //   if (saved) {
  //     const { grid, players } = saved;

  //     console.log(grid);
  //     const newGrid = grid.map((row: (Partial<Player> | null)[]) =>
  //       row.map(
  //         (player: Partial<Player> | null) =>
  //           player && Player.fromObject(player)
  //       )
  //     );

  //     const [playerX, playerO]: Array<Player> = players;

  //     const newPlayers: Map<Mark, Player> = new Map();
  //     newPlayers.set("X", playerX.cpu ? new CPU("X") : new Player("X"));
  //     newPlayers.set("O", playerO.cpu ? new CPU("O") : new Player("O"));

  //     console.log(new GameState(newPlayers, newGrid));
  //     return new GameState(newPlayers, newGrid);
  //   }
  //   return null;
  // }
}
