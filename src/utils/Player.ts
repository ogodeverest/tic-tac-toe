export type Mark = "X" | "O";

export default class Player {
  mark: Mark;
  wins: number = 0;
  ties: number = 0;

  constructor(mark: Mark) {
    this.mark = mark;
  }

  reset() {
    this.wins = 0;
    this.ties = 0;
  }

  public toJSON(): string {
    const { toJSON, ...rest } = this;
    return JSON.stringify(rest);
  }
}

export type Players = Map<Mark, Player>;
