
import './App.css';
import Board from './3x3/Board.tsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react';
import { useState } from 'react';
import Board2 from './4x4/Board2.tsx';

const App: React.FC = () => {
  const [isBoard2, setIsBoard2] = useState(false);

  return (
    <div className="container text-center">
      {isBoard2 ? (
        <Board2 toggleBoard={() => setIsBoard2(false)} />
      ) : (
        <Board toggleBoard={() => setIsBoard2(true)} />
      )}
    </div>
  );
}

export default App;
