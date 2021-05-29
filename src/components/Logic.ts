import { ISquare, WinInfo } from "interface";

export const calculateWinInfo = (squares: Array<ISquare>): WinInfo => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    const isWin =
      squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    const isBoardFill = squares.filter((v) => v).length === squares.length;
    if (isWin) {
      return { winner: squares[a], winLine: lines[i], isDraw: false };
    } else if (isBoardFill) {
      return { winner: null, winLine: null, isDraw: true };
    }
  }
  return null;
};
