import React, { useContext } from 'react';
import { useGameContext } from '../contexts/GameContext';
import Cell from './Cell';
import { calculateValidMoves } from '../utils/gameHelpers';

function Board({ sendMove }) {
  const { gameState } = useContext(useGameContext);

  const handleMove = (from, to) => {
    const move = { from, to };
    sendMove(move);
  };

  return (
    <div className="board grid grid-cols-5 gap-2 p-4">
      {gameState?.board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            piece={cell}
            onMove={(to) => handleMove({ row: rowIndex, col: colIndex }, to)}
          />
        ))
      )}
    </div>
  );
}

export default Board;
