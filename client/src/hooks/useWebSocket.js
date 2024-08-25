import { useEffect, useRef, useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const useWebSocket = (url) => {
  const { setGameState, setPlayerTurn, addLog } = useContext(GameContext);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data);

      switch (message.type) {
        case 'gameState':
          setGameState(message.payload);
          setPlayerTurn(message.payload.currentTurn);
          break;
        case 'log':
          addLog(message.payload);
          break;
        default:
          break;
      }
    };

    ws.current.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.current.close();
    };
  }, [setGameState, setPlayerTurn, addLog]);

  const sendMove = (move) => {
    ws.current.send(JSON.stringify({ type: 'move', payload: move }));
  };

  return { sendMove };
};

export default useWebSocket;
