let nextPlayerId = 3
export const navigate = currentScreen => ({
  type: 'NAVIGATE',
  currentScreen
});

export const getPlayers = () => ({
  type: 'GET_PLAYERS'
});

export const addPlayer = (name) => ({
  type: 'POST_PLAYER',
  id: nextPlayerId++,
  name
});

export const removePlayer = (name) => ({
  type: 'DELETE_PLAYER',
  id: nextPlayerId--
});

export const updatePlayer = (id, name) => ({
  type: 'PUT_PLAYER',
  id,
  name,
});

export const resetGame = () => ({
  type: 'RESET_GAME'
});

export const addResult = winner => ({
  type: 'POST_RESULT',
  winner
});

export const addPlayerMove = (move, player) => ({
  type: 'POST_PLAYER_MOVE',
  move,
  player
});

export const addWinner = (name, time) => ({
  type: 'POST_WINNER',
  name,
  time
});

export const addError = (id, message) => ({
  type: 'POST_ERROR',
  message,
  id,
});

export const removeError = (id) => ({
  type: 'DELETE_ERROR',
  id,
});