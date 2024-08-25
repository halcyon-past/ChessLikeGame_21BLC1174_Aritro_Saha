const express = require('express');
const http = require('http');
const { setupWebSocketServer } = require('./websocket/websocketServer');
const gameRoutes = require('./routes/gameRoutes');

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use('/api/game', gameRoutes);

setupWebSocketServer(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
