import * as React from 'react';
import { useEffect, useState } from 'react';
import calculateWinner2 from './CalculateWinner2.tsx';
import ChangeBackground from '../ChangeBackground.tsx';
import Square from '../Square.tsx';
import Statistics from '../Statistics.tsx';
import Restart from '../Restart.tsx';

interface Board2Props {
  toggleBoard: () => void,
  isDarkMode: boolean
}

const Board2: React.FC<Board2Props> = ({toggleBoard, isDarkMode}) => {
  const [squares, setSquares] = useState<Array<string | null>>(Array(16).fill(null)); // 4x4 grid
  const [isNext, setIsNext] = useState(true);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [totalGames, setTotalGames] = useState(0);

  const winner = calculateWinner2({squares});
  const draw = squares.every(square => square!== null) && !winner;
  const switchBtnClass = isDarkMode ? 'square-dark-o' : 'square-light-o';

  useEffect(() => {
    if (winner) {
      if (winner === 'X') setXWins(prev => prev + 1);
      if (winner === 'O') setOWins(prev => prev + 1);
      setTotalGames(prev => prev + 1);
    } else if (draw) {
      setTotalGames(prev => prev + 1);
    }
  }, [winner, draw]);

  function handleClick(i: number) {
    if (winner || squares[i]) return;

    const nextSquare = squares.slice();
    nextSquare[i] = isNext ? 'X' : 'O';

    setSquares(nextSquare);
    setIsNext(!isNext);
  }

  let status;
  if (winner) {
    status = "Winner " + winner;
  } else if (draw) {
    status = "Draw";
  } else {
    status = "Next player " + (isNext ? 'X' : 'O');
  }

  function handleRestart() {
    setSquares(Array(16).fill(null));
    setIsNext(true);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="mb-3 h5 w-75 bg-dark text-light p-3 rounded-5 bg-gradient">{status}</div>
      </div>

      <ChangeBackground winner={winner} draw={draw} isDarkMode={isDarkMode}/>

        <div className="board-row">
          <Square value={squares[0]} OnClick={() => handleClick(0)} isDarkMode={isDarkMode} />
          <Square value={squares[1]} OnClick={() => handleClick(1)} isDarkMode={isDarkMode}/>
          <Square value={squares[2]} OnClick={() => handleClick(2)} isDarkMode={isDarkMode}/>
          <Square value={squares[3]} OnClick={() => handleClick(3)} isDarkMode={isDarkMode}/>
        </div>
        <div className="board-row">
          <Square value={squares[4]} OnClick={() => handleClick(4)} isDarkMode={isDarkMode}/>
          <Square value={squares[5]} OnClick={() => handleClick(5)} isDarkMode={isDarkMode}/>
          <Square value={squares[6]} OnClick={() => handleClick(6)} isDarkMode={isDarkMode}/>
          <Square value={squares[7]} OnClick={() => handleClick(7)} isDarkMode={isDarkMode}/>
        </div>
        <div className="board-row">
          <Square value={squares[8]} OnClick={() => handleClick(8)} isDarkMode={isDarkMode}/>
          <Square value={squares[9]} OnClick={() => handleClick(9)} isDarkMode={isDarkMode}/>
          <Square value={squares[10]} OnClick={() => handleClick(10)} isDarkMode={isDarkMode}/>
          <Square value={squares[11]} OnClick={() => handleClick(11)} isDarkMode={isDarkMode}/>
        </div>
        <div className="board-row">
          <Square value={squares[12]} OnClick={() => handleClick(12)} isDarkMode={isDarkMode}/>
          <Square value={squares[13]} OnClick={() => handleClick(13)} isDarkMode={isDarkMode}/>
          <Square value={squares[14]} OnClick={() => handleClick(14)} isDarkMode={isDarkMode}/>
          <Square value={squares[15]} OnClick={() => handleClick(15)} isDarkMode={isDarkMode}/>
        </div>


      <Statistics xWins={xWins} oWins={oWins} totalGames={totalGames} isDarkMode={isDarkMode}/>
      <div className="d-flex justify-content-around">
        <Restart OnClick={handleRestart} isDarkMode={isDarkMode}/>
        <button onClick={toggleBoard}
                className={`btn p-3 mt-3 btn-lg shadow-lg rounded-5 border-3 btn-sm ${switchBtnClass} stat-text `}>
          Switch to 3x3 Board
        </button>
      </div>
    </>
  );
}

export default Board2