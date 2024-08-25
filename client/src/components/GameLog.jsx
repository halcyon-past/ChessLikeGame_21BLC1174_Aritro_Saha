import React, { useContext } from 'react';
import { useGameContext } from '../contexts/GameContext';

function GameLog() {
  const { gameLog } = useContext(useGameContext);

  return (
    <div className="game-log p-4 overflow-y-auto h-48">
      <h2 className="text-lg mb-2">Game Log</h2>
      <ul>
        {gameLog.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameLog;
