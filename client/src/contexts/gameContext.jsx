import React, { createContext, useState, useContext } from 'react';

// Create the context
const GameContext = createContext();

// Create a provider component
export function GameProvider({ children }) {
  const [gameState, setGameState] = useState({
    // initial game state
  });

  const [gameLog, setGameLog] = useState([]);

  return (
    <GameContext.Provider value={{ gameState, setGameState, gameLog, setGameLog }}>
      {children}
    </GameContext.Provider>
  );
}

// Custom hook to use the GameContext
export function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
}
