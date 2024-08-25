import React from 'react';

function Cell({ piece, onMove }) {
  const handleClick = () => {
    // Calculate valid moves based on piece and board state
    const validMoves = calculateValidMoves(); // Replace with actual logic
    if (validMoves.length > 0) {
      onMove(validMoves[0]); // Example, choose the first valid move
    }
  };

  return (
    <div
      className={`cell w-16 h-16 flex items-center justify-center ${
        piece ? 'text-white' : 'text-gray-400'
      }`}
      onClick={handleClick}
    >
      {piece || ''}
    </div>
  );
}

export default Cell;
