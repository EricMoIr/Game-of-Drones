import {BACKEND_BASE_URI, MOVES_URI, WINNERS_URI} from "../configs";
import {validateStatus} from "../util";

export const getRoundResult = async (roundMoves, gameResults) => {
    let result = null;
    let error = null;
    try{
        const response = await fetch(BACKEND_BASE_URI, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({roundMoves, gameResults})
        });
        if(!validateStatus(response)){
            error = {
                id: "ROUND_STATUS",
                message: response.statusText
            };
        }
        result = await response.json();
    }
    catch(err){
        error = {
            id: "ROUND_RESULT_REQUEST",
            message: "The request to get the round result could not be completed"
        };
        console.error(err);
    }
    return {
        result,
        error
    };
}
export const getMoves = async () => {
    let result = null;
    let error = null;
  try{
    const response = await fetch(MOVES_URI, {
      method: "GET"
    });
    if(!validateStatus(response)) {
        error = {
            id: "MOVES_STATUS",
            message: response.statusText
        };
    }
    const json = await response.json();
    result = [];
    json.forEach(move => {
        result.push(move.move);
    });
  }
  catch(err){
    error = {
        id: "MOVES_REQUEST",
        message: "The request to get the moves could not be completed"
    };
    console.error(err);
  }
  return {
      result,
      error
  };
}
export const addWinner = async (name, time) => {
    let result = null;
    let error = null;
  try{
    const response = await fetch(WINNERS_URI, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, time})
    });
    if(!validateStatus(response)){
        error = {
            id: "WINNER_STATUS",
            message: response.statusText
        };
    }
  }
  catch(err){
    error = {
        id: "WINNER_REQUEST",
        message: "The request to create the winner could not be completed"
    };
    console.error(err);
  }
  return {
      result,
      error
  };
}
export const getWinners = async () => {
    let result = null;
    let error = null;
  try{
    const response = await fetch(WINNERS_URI, {
      method: "GET"
    });
    if(!validateStatus(response)) {
        error = {
            id: "WINNERS_STATUS",
            message: response.status
        };
    }
    result = await response.json();
  }
  catch(err){
    error = {
        id: "WINNERS_REQUEST",
        message: "The request to get the winners could not be completed"
    };
    console.error(err);
  }
  return {
      result,
      error
  };
}