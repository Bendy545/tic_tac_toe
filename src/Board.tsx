import Square from './Square.tsx';
import { useState } from 'react';

function Board() {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null))
  const [isNext, setIsNext] = useState(true);

  function handleClick(i: number) {
    if (squares[i]) return;

    const nextSquare = squares.slice();
    nextSquare[i] = isNext ? 'X' : 'O';

    setSquares(nextSquare);
    setIsNext(!isNext);
  }
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} OnClick={() => handleClick(0)}/>
        <Square value={squares[1]} OnClick={() => handleClick(1)}/>
        <Square value={squares[2]} OnClick={() => handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} OnClick={() => handleClick(3)}/>
        <Square value={squares[4]} OnClick={() => handleClick(4)}/>
        <Square value={squares[5]} OnClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} OnClick={() => handleClick(6)}/>
        <Square value={squares[7]} OnClick={() => handleClick(7)}/>
        <Square value={squares[8]} OnClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

export default Board