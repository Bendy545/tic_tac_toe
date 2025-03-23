import * as React from 'react';

interface ChangeBackgroundProps {
  winner: string|null,
  draw: boolean
}

const ChangeBackground :React.FC<ChangeBackgroundProps> = ({ winner, draw }:ChangeBackgroundProps) =>  {
  React.useEffect(() => {
  if(winner === 'O') {
    document.body.style.backgroundColor = '#28a745';
  } else if (winner === 'X'){
    document.body.style.backgroundColor = '#dc3545';
  } else if(draw){
    document.body.style.backgroundColor = 'rgba(255,205,68,0.85)';
  } else {
    document.body.style.backgroundColor = '#d8d8d8';
  }
  }, [winner, draw])

  return null;
}


export default ChangeBackground