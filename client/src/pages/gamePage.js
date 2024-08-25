import React from 'react';
import Board from '../components/Board';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import GameLog from '../components/GameLog';
import useWebSocket from '../hooks/useWebSocket';

function GamePage() {
  const { sendMove } = useWebSocket('ws://localhost:3000'); // Adjust to your server URL

  return (
    <div className="game-page flex h-screen bg-gray-900 text-gray-200">
      <Sidebar />
      <div className="main-content flex flex-col flex-grow">
        <Header />
        <Board sendMove={sendMove} />
        <GameLog />
      </div>
    </div>
  );
}

export default GamePage;
