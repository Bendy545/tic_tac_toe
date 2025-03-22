function ChangeBackground({ winner }:{winner: string|null})  {
  if(winner === 'O') {
    document.body.style.backgroundColor = '#28a745';
  } else if (winner === 'X'){
    document.body.style.backgroundColor = '#dc3545';
  } else {
    document.body.style.backgroundColor = '';
  }
}


export default ChangeBackground