var Move = require("../models/move");
const sendError = require("../util/sendError");

exports.getMove = async function(move){
    try{
        return await Move.findOne({move});
    }
    catch(err){
        const msg = "Error getting move "+move;
        sendError(res, 409, msg, err);
    }
}
exports.getMoveFromRoundMoves = async (roundMoves, res) => {
    let moves = [];
    for(const move of roundMoves){
        try{
            const result = await exports.getMove(move.move);
            if(!result) 
                throw "The move "+move.move+" doesn't exist";
            moves.push(result);
        }
        catch(err){
            const msg = "Error finding the move "+move.move;
            sendError(res, 409, msg, err);
        }
    }
    return moves;
}
exports.getMoves = async function(req, res) {
    try{
        const moves = await Move.find();
        res.json(moves);
    }
    catch(err){
        const msg = "Error getting moves";
        sendError(res, 409, msg, err);
    }
};