import React from 'react';
import Board from './components/Board';
import Sidebar from './components/Sidebar';
import GameLog from './components/GameLog';

function App() {
  return (
    <div className="game-page flex">
      <Sidebar />
      <Board />
      <GameLog />
    </div>
  );
}

export default App;
