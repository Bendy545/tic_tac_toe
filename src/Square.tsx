import * as React from 'react';

interface SquareProps {
  value: string|null,
  OnClick: () => void
}

const Square: React.FC<SquareProps> = ({value, OnClick} : SquareProps) => {
  const buttonClass = value === 'X' ? 'btn-danger' : value === 'O' ? 'btn-success' : 'btn-light';
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