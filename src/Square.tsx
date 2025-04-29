import * as React from 'react';
import './App.css';

interface SquareProps {
  value: string|null,
  OnClick: () => void,
  isDarkMode: boolean
}

const Square: React.FC<SquareProps> = ({value, OnClick, isDarkMode} : SquareProps) => {
  const buttonClass =
    isDarkMode ? value === 'X'
        ? 'square-dark-x'
        : value === 'O'
          ? 'square-dark-o'
          : 'square-dark-empty'
      : value === 'X'
        ? 'square-light-x'
        : value === 'O'
          ? 'square-light-o'
          : 'btn-light';
  return (
    <button
      type="button"
      className={`btn border-3 border-black ${buttonClass} btn-lg squareButton`}
      onClick={OnClick}
    >
      {value}
    </button>
  );
}

export default Square