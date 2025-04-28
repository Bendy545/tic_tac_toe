import * as React from 'react';

interface ChangeBackgroundProps {
  winner: string|null,
  draw: boolean,
  isDarkMode: boolean
}

const ChangeBackground :React.FC<ChangeBackgroundProps> = ({ winner, draw, isDarkMode }:ChangeBackgroundProps) =>  {
  React.useEffect(() => {
    if (winner === 'O') {
      document.body.style.backgroundColor = '#28a745'; // O wins
    } else if (winner === 'X') {
      document.body.style.backgroundColor = '#dc3545'; // X wins
    } else if (draw) {
      document.body.style.backgroundColor = 'rgba(255,205,68,0.85)'; // Draw
    } else {
      document.body.style.backgroundColor = isDarkMode ? '#121212' : '#d8d8d8'; // Default dark or light
    }
  }, [winner, draw, isDarkMode]);

  return null;
}


export default ChangeBackground