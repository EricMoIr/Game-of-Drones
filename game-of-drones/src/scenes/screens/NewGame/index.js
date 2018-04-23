import React, { Component } from 'react';
import removeIcon from '../../../images/remove-icon.png';
import addIcon from '../../../images/add-icon.png';
import PlayerInput from "./PlayerInput";
import {withPlayersErrorsAndNavigation} from '../../../reducers/hocs';

const iconStyle = {
  width: "40px",
  height: "40px"
}

class NewGame extends Component {
  handleStartGame = () => {
    if(this.validateFields() && this.validatePlayersAmount())
      this.props.navigate("SELECT_MOVE");
  };
  handleAddPlayer = () => {
    this.props.addPlayer("");
  }
  handleRemovePlayer = () => {
    if(!this.validatePlayersAmount()) return;
    this.props.removePlayer();
  }
  validatePlayersAmount = () => {
    if(this.props.players.length < 2){
      this.props.addError("PLAYERS_AMOUNT", "There has to be more players");
      return false;
    }
    this.props.removeError("EMPTY_NAMES");
    return true;
  }
  validateFields = () => {
    for(const player of this.props.players){
      if(player.name.trim() === ""){
        this.props.addError("EMPTY_NAMES", "The names of the players can't be empty");
        return false;
      }
    }
    this.props.removeError("EMPTY_NAMES");
    return true;
  }

  render() {
    return (
      <div>
        {this.props.players.map((player, i) =>
          <PlayerInput key={i} number={i+1} defaultName={player.name} onChange={this.props.updatePlayer}/>
        )}
        <img style={iconStyle} alt="Add player" src={removeIcon} onClick={() => this.handleRemovePlayer()}/>
        <img style={iconStyle} alt="Remove player" src={addIcon} onClick={() => this.handleAddPlayer()}/>
        <br/>
        <button onClick={() => this.handleStartGame()}>Start Game</button>
      </div>
    );
  }
}

export default withPlayersErrorsAndNavigation(NewGame);