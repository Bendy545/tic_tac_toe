function CalculateWinner({squares} : {squares: Array<string|null>}) {
  const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[0,4,8],[2,4,6],[1,4,7]];

  for (let i = 0; i < winPattern.length; i++) {
    const [a, b, c] = winPattern[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default CalculateWinner