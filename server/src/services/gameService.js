const { GameState } = require('../models/gameState');
const { validateMove } = require('../utils/validation');
const { broadcastGameState } = require('../websocket/websocketServer');

let gameState = new GameState();

function initializeGame(clientId) {
  // Initialize game state for a new game
  if (clientId === 0) {
    gameState.reset();
  }
  broadcastGameState(gameState);
}

function handlePlayerMove(clientId, move) {
  if (!validateMove(clientId, move, gameState)) {
    return;
  }

  gameState.processMove(clientId, move);
  broadcastGameState(gameState);

  if (gameState.isGameOver()) {
    broadcastGameState({ ...gameState, winner: gameState.getWinner() });
    gameState.reset();
  }
}

module.exports = { handlePlayerMove, initializeGame };
