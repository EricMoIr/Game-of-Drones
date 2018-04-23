const VICTORIES_CONDITION = 3;

const moveController = require("./moveController");
const getMove = moveController.getMove;
const getMoves = moveController.getMoveFromRoundMoves;

const getWinner = (moves) => {
    let winner = -1;
    moves.forEach((move, i) => {
        if(canBeatAllOthers(moves, i)){
            winner = i;
        }
    });
    return winner;
}
const canBeatAllOthers = (moves, id) => {
    for(var i=0; i<moves.length; i++){
        if(i === id) continue;
        if(moves[i].move !== moves[id].beats)
            return false;
    }
    return true;
}
exports.getRoundResult = async function(req, res) {
    let {roundMoves, gameResults} = req.body;
    let ret = {};
    const moves = await getMoves(roundMoves, res);
    ret.winner = await getWinner(moves);
    if(ret.winner === -1)
        ret.hasEnded = false;
    else if(hasWon(ret.winner, gameResults)){
        ret.hasEnded = true;
    }
    else
        ret.hasEnded = false;
    res.json(ret);
};
const hasWon = (winnerId, gameResults) => {
    let wins = 1;
    for(const id of gameResults){
        if(id === winnerId)
            wins++;
    }
    return wins >= VICTORIES_CONDITION;
}