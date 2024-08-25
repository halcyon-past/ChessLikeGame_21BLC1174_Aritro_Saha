const WebSocket = require('ws');
const { handlePlayerMove, initializeGame } = require('../services/gameService');

let clients = [];

function setupWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    const clientId = clients.length;
    clients.push(ws);
    
    ws.on('message', (message) => {
      const { type, payload } = JSON.parse(message);

      switch (type) {
        case 'initialize':
          initializeGame(clientId);
          break;
        case 'move':
          handlePlayerMove(clientId, payload);
          break;
        default:
          break;
      }
    });

    ws.on('close', () => {
      clients = clients.filter(client => client !== ws);
    });
  });
}

function broadcastGameState(gameState) {
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type: 'gameState', payload: gameState }));
    }
  });
}

module.exports = { setupWebSocketServer, broadcastGameState };
