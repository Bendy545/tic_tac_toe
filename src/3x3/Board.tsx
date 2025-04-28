import Square from '../Square.tsx';
import {useEffect, useState} from 'react';
import calculateWinner from './CalculateWinner.tsx';
import ChangeBackground from '../ChangeBackground.tsx';
import * as React from 'react';
import Restart from '../Restart.tsx';
import Statistics from "../Statistics.tsx";

interface BoardProps {
  isDarkMode: boolean,
  toggleBoard: () => void
}

const Board: React.FC<BoardProps> =({toggleBoard, isDarkMode}) => {
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null))
  const [isNext, setIsNext] = useState(true);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [totalGames, setTotalGames] = useState(0);

  const winner = calculateWinner({squares});
  const draw = squares.every(square => square!== null) && !winner;

  useEffect(() =>{
      if (winner) {
          if (winner === 'X') setXWins((prev) => prev + 1);
          if (winner === 'O') setOWins((prev) => prev + 1);
          setTotalGames((prev) => prev + 1);
      } else if(draw) {
          setTotalGames((prev) => prev + 1);
      }
  }, [winner, draw]);

  function handleClick(i: number) {
    if (calculateWinner({squares}) || squares[i]) return;

    const nextSquare = squares.slice();
    nextSquare[i] = isNext ? 'X' : 'O';

    setSquares(nextSquare);
    setIsNext(!isNext);

  }

  let status;
  if (winner) {
    status = "Winner " + winner;
  } else if(draw){
    status = "Draw"
  } else {
    status = "Next player " + (isNext ? 'X' : 'O')
  }

  function handleRestart() {
    setSquares(Array(9).fill(null));
    setIsNext(true);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="mb-3 h5 w-75 bg-dark text-light p-3 rounded-5 bg-gradient">{status}</div>
      </div>

      <ChangeBackground winner={winner} draw={draw} isDarkMode={isDarkMode}/>
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
        <Statistics xWins={xWins} oWins={oWins} totalGames={totalGames} />
      <div className="d-flex justify-content-around">
        <Restart OnClick={handleRestart} />
        <button onClick={toggleBoard} className="btn p-3 text-black mt-3 btn-lg bg-warning shadow-lg rounded-5 btn-sm">
          Switch to 4x4 Board
        </button>
      </div>
    </>
  )
}

export default Board