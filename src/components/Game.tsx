import React, { useState } from "react";
import { History, ISquare } from "interface";
import { Board } from "./Board";
import { Moves } from "./Moves";
import { calculateWinInfo } from "./Logic";

export const Game: React.FC = () => {
  const [history, setHistory] = useState<History[]>([
    { squares: Array(9).fill(null) },
  ]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const historyFunc = (history: History[]): ISquare[] => {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinInfo(squares)?.winner) {
      return squares;
    }
    setHistory(_history.concat([{ squares }]));
    setStepNumber(_history.length);
    return squares;
  };

  const handleClick = (i: number) => {
    const squares = historyFunc(history);
    squares[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winInfo = calculateWinInfo(current.squares);
  const status = winInfo?.winner
    ? `Winner: ${winInfo.winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          winInfo={winInfo}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{winInfo?.isDraw ? "Draw" : status}</div>
        <Moves history={history} jumpTo={jumpTo}></Moves>
      </div>
    </div>
  );
};
