import React, { Component } from 'react';
import { withCurrentScreen } from '../../reducers/hocs';
import NewGame from './NewGame';
import ErrorHolder from '../errors/ErrorHolder';
import MoveSelection from './MoveSelection';
import GameOver from './GameOver';

class Game extends Component{
  render(){
    return (
      <React.Fragment>
        {this.getScreen(this.props.currentScreen)}
        <ErrorHolder />
      </React.Fragment>
    );
  };
  getScreen(screen){
    switch(screen){
      case "NEW_GAME":
        return <NewGame />;
      case "SELECT_MOVE":
        return <MoveSelection />;
      case "GAME_OVER":
        return <GameOver />;
      default:
        return <NewGame />;
    }
  }
}

export default withCurrentScreen(Game)