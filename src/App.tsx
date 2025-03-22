
import './App.css';
import Board from './Board.tsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <>
      <div className="h1 mb-5 text-bg-warning rounded-5 p-2 bg-gradient shadow-lg">Tic Tac Toe</div>
      <Board/>
    </>
  );
}

export default App;
