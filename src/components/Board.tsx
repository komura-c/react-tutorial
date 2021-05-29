import { ISquare, WinInfo } from "interface";
import { Square } from "./Square";

interface BoardProps {
  squares: ISquare[];
  winInfo: WinInfo;
  onClick: (i: number) => void;
}

export const Board: React.FC<BoardProps> = ({ squares, winInfo, onClick }) => {
  return (
    <div className="board">
      {squares.map((value, index) => {
        const isWinLine = winInfo?.winLine?.find((num) => num === index);

        return (
          <Square
            value={value}
            isWinLine={isWinLine ? true : false}
            onClick={() => onClick(index)}
            key={index}
          ></Square>
        );
      })}
    </div>
  );
};
