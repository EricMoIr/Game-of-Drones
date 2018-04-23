//import { combineReducers } from 'redux'

export function screen(state=[], action) {
  switch (action.type) {
  case 'NAVIGATE':
    return {
      ...state,
      currentScreen: action.currentScreen,
      errors: []
    };
  case 'POST_PLAYER':
    return {
      ...state,
      players: [...state.players, {name:action.name, id:action.id}]
    }
  case 'DELETE_PLAYER':
    return {
      ...state,
      players: state.players.slice(0, state.players.length-1)
    }
  case 'PUT_PLAYER':
    return {
      ...state,
      players: state.players.map(
        (player, id) => id === action.id? {id, name: action.name}
                              : player
      )
    }
  case 'RESET_GAME':
    return {
      ...state,
      turn: 1,
      gameResults: [],
      playersMoves: []
  }
  case 'POST_RESULT':
    return {
      ...state,
      gameResults: [...state.gameResults, action.winner]
  }
  case 'POST_PLAYER_MOVE':
    return {
      ...state,
      turn: state.turn === state.players.length? 1 : state.turn+1,
      playersMoves: [...state.playersMoves, {player: action.player, move: action.move}]
  }
  case 'POST_WINNER':
    return {
      ...state,
      winners: [...state.winners, {name: action.name, time: action.time}]
  }
  case 'POST_ERROR':
  console.log({
    ...state,
    errors: state.errors.length === 0? [{id: action.id, message: action.message}] : state.errors.map(
      (error) => error.id === action.id? {id: error.id, message: action.message}
                            : {id: action.id, message: action.message}
    )
  });
    return {
      ...state,
      errors: state.errors.length === 0? [{id: action.id, message: action.message}] : state.errors.map(
        (error) => error.id === action.id? {id: error.id, message: action.message}
                              : {id: action.id, message: action.message}
      )
    }
  case 'DELETE_ERROR':
    let errors = [];
    for(const error of state.errors) if(error.id !== action.id) errors.push(error);
    return {
      ...state,
      errors: errors
    }
  default:
    return state;
  }
}
export const defaultStore = {
  currentScreen: "NEW_GAME",
  players: [{
    name: "",
    id:0
  },{
    name: "",
    id:1
  }],
  gameResults: [],
  roundResults: [],
  playersMoves: [],
  turn: 1,
  winners: [],
  errors: []
};
export default screen;