import { connect } from "react-redux";
import {navigate, addPlayer, removePlayer, 
    updatePlayer, addError, removeError, 
    resetGame, addResult, addPlayerMove,
    addWinner
} from '../actions';

export const withErrors = connect(state => ({
    errors: state.errors
}));

export const withCurrentScreen = connect(state => ({
    currentScreen: state.currentScreen
}));

export const withPlayersErrorsAndNavigation = connect(state => ({
    players: state.players
}), dispatch => ({
    updatePlayer: (id, name) => dispatch(updatePlayer(id, name)),
    addPlayer: (name) => dispatch(addPlayer(name)),
    removePlayer: () => dispatch(removePlayer()),
    navigate: (screen) => dispatch(navigate(screen)),
    addError: (id, error) => dispatch(addError(id, error)),
    removeError: (id) => dispatch(removeError(id))
}));

export const withErrorsResetAndNavigation = connect(null, dispatch => ({
    resetGame: () => dispatch(resetGame()),
    navigate: (screen) => dispatch(navigate(screen)),
    addError: (id, error) => dispatch(addError(id, error)),
    removeError: (id) => dispatch(removeError(id))
}));

export const withGameHandlersAndState = connect(state => ({
    players: state.players,
    gameResults: state.gameResults,
    turn: state.turn,
    playersMoves: state.playersMoves
}), dispatch => ({
    resetGame: () => dispatch(resetGame()),
    addResult: winner => dispatch(addResult(winner)),
    navigate: (screen) => dispatch(navigate(screen)),
    addPlayerMove: (move, player) => dispatch(addPlayerMove(move, player)),
    addWinner: (name, time) => dispatch(addWinner(name, time)),
    addError: (id, error) => dispatch(addError(id, error)),
    removeError: (id) => dispatch(removeError(id))
}));