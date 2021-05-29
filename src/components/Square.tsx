import React from "react";
import { ISquare } from "interface";

interface SquareProps {
  value: ISquare;
  isWinLine: boolean;
  onClick: () => void;
}

export const Square: React.FC<SquareProps> = ({
  value,
  isWinLine,
  onClick,
}) => {
  return (
    <button
      className={`square ${isWinLine ? "win-line" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};
