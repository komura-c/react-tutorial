export type ISquare = "X" | "O" | null;

export interface History {
  squares: ISquare[];
}

export type WinInfo = {
  winner: ISquare;
  winLine: number[] | null;
  isDraw: boolean;
} | null;
