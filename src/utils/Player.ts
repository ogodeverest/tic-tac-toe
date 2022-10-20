export type Mark = "X" | "O";

export default class Player {
  mark: Mark;
  wins: number = 0;
  ties: number = 0;
  theme: "warm" | "cold";
  cpu: boolean = false;

  constructor(mark: Mark) {
    this.mark = mark;
    this.theme = mark === "X" ? "cold" : "warm";
  }

  reset() {
    this.wins = 0;
    this.ties = 0;
  }

  static fromStorage(data: Partial<Player>): Player {
    const { mark, ties, wins }: Partial<Player> = data;
    const player: Player = new Player(mark);
    player.ties = ties;
    player.wins = wins;
    return player;
  }
}

export type Players = Map<Mark, Player>;
