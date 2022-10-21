import Player, { type Mark } from "./Player";
import type { Players } from "./Player";
import type Position from "@models/Position.inferface";
import CPU from "./CPU";

const gridSize = 3;

export type Row = Player[];
export type Grid = Row[];

const emptyGrid: Grid = Array(3).fill(Array(3).fill(null));

export default class GameState {
  grid: Grid = emptyGrid;
  current: Player;
  winner: Player;
  players: Players;
  finished: boolean = false;
  stalled: boolean = false;
  winTrio: number[][];

  constructor(players: Players, grid: Grid = emptyGrid) {
    this.grid = grid;
    this.players = players;
    this.current = players.get("X");
    this.stalled = this.current instanceof CPU;
  }

  public newRound(): GameState {
    const nextState = new GameState(this.players, emptyGrid);
    nextState.winner = null;
    return nextState;
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

  private static transformMatrix(
    grid: any[][],
    fn: (row: any[], cell: any, y: number, x: number) => any
  ): Array<any> {
    return grid.map((row, y) => row.map((cell, x) => fn(row, cell, y, x)));
  }

  public mark(position: Position): GameState {
    const newGrid: Grid = GameState.transformMatrix(
      this.grid,
      (row, player, y, x) => {
        if (y === position.y && x === position.x) return this.current;
        else return player;
      }
    );
    const nextState = new GameState(this.players, newGrid);
    const noMoves = newGrid.every((row) => row.every((tile) => tile));
    const { winner, winTrio } = GameState.checkForWinner(newGrid, position);
    nextState.winner = winner;
    nextState.winTrio = winTrio;

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
      grid: GameState.transformMatrix(
        this.grid,
        (row, player, y, x) => player && player.mark
      ),
      players: [this.players.get("X"), this.players.get("O")],
      current: this.current.mark,
      winner: this.winner?.mark,
    });
  }

  private static checkForWinner(
    grid: Grid,
    { x, y }: Position
  ): { winner: Player; winTrio: number[][] } {
    const current = grid[y][x];
    let winTrio: number[][] = [];

    for (let i = 0; i < gridSize; i++) {
      winTrio.push([y, i]);
      if (grid[y][i] !== current) {
        winTrio = [];
        break;
      }
      if (i === gridSize - 1) return { winner: current, winTrio };
    }

    for (let i = 0; i < gridSize; i++) {
      winTrio.push([i, x]);
      if (grid[i][x] !== current) {
        winTrio = [];
        break;
      }
      if (i === gridSize - 1) return { winner: current, winTrio };
    }

    //check diag
    if (x === y) {
      //we're on a diagonal
      for (let i = 0; i < gridSize; i++) {
        winTrio.push([i, i]);
        if (grid[i][i] !== current) {
          winTrio = [];
          break;
        }
        if (i === gridSize - 1) return { winner: current, winTrio };
      }
    }

    //check anti diag
    if (x + y === gridSize - 1) {
      for (let i = 0; i < gridSize; i++) {
        winTrio.push([i, gridSize - 1 - i]);
        if (grid[i][gridSize - 1 - i] !== current) {
          winTrio = [];
          break;
        }
        if (i === gridSize - 1) return { winner: current, winTrio };
      }
    }

    return { winner: null, winTrio };
  }

  public static fromStorage({
    grid: savedGrid,
    players: savedPlayers,
    current: savedCurrent,
    stalled,
    finished,
    winner,
  }: {
    grid: Mark[][];
    players: Partial<Player>[];
    current: Mark;
    stalled: boolean;
    finished: boolean;
    winner: Mark;
  }): GameState {
    function loadPlayer(player: Partial<Player>) {
      if (!player) return null;
      else if (player.cpu) return CPU.fromStorage(player);
      else return Player.fromStorage(player);
    }

    const players: Players = new Map();

    savedPlayers.forEach((player: Partial<Player>) =>
      players.set(player.mark, loadPlayer(player))
    );

    const grid = GameState.transformMatrix(
      savedGrid,
      (row, mark, y, x) => mark && players.get(mark)
    );

    const current = players.get(savedCurrent);

    const gameState = new GameState(players, grid);
    gameState.current = current;
    gameState.finished = finished;
    gameState.stalled = stalled;
    gameState.winner = winner && players.get(winner);

    return gameState;
  }
}
