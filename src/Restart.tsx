import * as React from 'react';

interface RestartProps {
  OnClick: () => void
  isDarkMode: boolean
}

const Restart: React.FC<RestartProps> = ({OnClick, isDarkMode}: RestartProps) => {
const restartBtn = isDarkMode ? 'square-dark-o' : 'square-light-o';
const borderBtn = isDarkMode ? 'borderDark' : 'border-dark-subtle';
  return (
    <button  className={` ${restartBtn} ${borderBtn} stat-text btn p-3 mt-3 btn-lg shadow-lg rounded-5 border-3` } onClick={OnClick}>Restart</button>
  )
}

export default Restart