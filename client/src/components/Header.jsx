import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

function Header() {
  const { playerTurn } = useContext(GameContext);

  return (
    <header className="header bg-gray-800 p-4 text-center">
      <h1 className="text-2xl">Chess-like Game</h1>
      <p>Current Turn: {playerTurn}</p>
    </header>
  );
}

export default Header;
