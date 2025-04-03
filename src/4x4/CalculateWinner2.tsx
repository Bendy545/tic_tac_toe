function CalculateWinner2({squares}:{squares: Array<string|null>}) {
  const winPattern = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],[0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],[0, 5, 10, 15], [3, 6, 9, 12]]

  for (let i = 0; i < winPattern.length; i++) {
    const [a, b, c, d] = winPattern[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}

export default CalculateWinner2