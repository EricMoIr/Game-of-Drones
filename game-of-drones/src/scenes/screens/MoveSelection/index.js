import React, { Component } from 'react';
import MoveList from "./MoveList";
import GameHistory from "./GameHistory";
import {movesContainerStyle, titleStyle} from "./styles";
import {withGameHandlersAndState} from '../../../reducers/hocs';
import { getRoundResult, getMoves, addWinner } from "../../../services";

class MoveSelection extends Component{
    constructor(props){
      super(props);
      this.props.resetGame();
      this.state = {
        moves: [],
        selectedMove: "",
        defaultMove: ""
      };
    }
    async componentDidMount(){
      const {result, error} = await getMoves();
      if(error) {
        this.props.addError(error.id, error.message);
        return;
      };
      this.setState({
        moves: result,
        defaultMove: result[0],
        selectedMove: result[0]
      });
    }
    roundNumber = () =>{
      return 1 + Math.floor(this.props.playersMoves.length / this.props.players.length);
    }
    playerName = () => {
      return this.props.players[this.props.turn-1].name;
    }
    handleAddMoveClick = async () => {
      const move = this.state.selectedMove;
      console.log(move);
      if(move === "" || move === undefined){
        this.props.addError("INVALID_MOVE", "The move is not valid");
        return;
      }
      this.setState({selectedMove: this.state.defaultMove});
      this.props.addPlayerMove(move, this.props.turn-1);
      //+1 because the props don't seem to get updated right after the dispatch is done
      if((this.props.playersMoves.length+1) % this.props.players.length === 0){
        const max = this.props.playersMoves.length;
        const min = max - this.props.players.length;
        //This player move is created for the same reason as the +1 above, same with min+1
        const playerMove = {move: move, player:this.props.turn-1};
        const {result, error} = await getRoundResult(
          [...this.props.playersMoves.slice(min+1, max), playerMove], 
          this.props.gameResults
        );
        if(error){
          this.props.addError(error.id, error.message);
          return;
        } 
        const {hasEnded, winner } = result;
        this.props.addResult(winner);
        if(hasEnded){
          await addWinner(this.props.players[winner].name, new Date());
          this.props.navigate("GAME_OVER");
          return;
        }
      }
    }
    render(){
      return (
        <div className="row justify-content-md-center">
          <div className="col">
            <h2 style={titleStyle}>Round {this.roundNumber()}</h2>
            <h3 style={titleStyle}>{this.playerName()}'s Turn</h3>
            <div style={movesContainerStyle}>
              <MoveList value={this.state.selectedMove} moves={this.state.moves} handleChangeMove={this.handleChangeMove}/>
              <button onClick={async () => await this.handleAddMoveClick()}>Choose Move</button>
            </div>
          </div>
          <GameHistory gameResults={this.props.gameResults} players={this.props.players} />
        </div>
      );
    }
    handleChangeMove = (selectedMove) => {
      this.setState({
        selectedMove
      });
    }
  }
export default withGameHandlersAndState(MoveSelection);