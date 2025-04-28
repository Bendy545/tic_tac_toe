
import './App.css';
import Board from './3x3/Board.tsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react';
import { useEffect, useState } from 'react';
import Board2 from './4x4/Board2.tsx';

const App: React.FC = () => {
  const [isBoard2, setIsBoard2] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {

    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  return (
    <div className="container text-center">
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="btn btn-secondary my-3 rounded-5 shadow-sm"
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      {isBoard2 ? (
        <Board2 toggleBoard={() => setIsBoard2(false) } isDarkMode={isDarkMode} />
      ) : (
        <Board toggleBoard={() => setIsBoard2(true)} isDarkMode={isDarkMode} />
      )}
    </div>
  );
}

export default App;
