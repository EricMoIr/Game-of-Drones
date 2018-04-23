var Winner = require("../models/winner");
const sendError = require("../util/sendError");

exports.getWinners = async function(req, res) {
    try{
        const winners = await Winner.find();
        res.json(winners);
    }
    catch(err){
        const msg = "Error getting winners";
        sendError(res, 409, msg);
    }
};
exports.createWinner = async function(req, res) {
    const {name, time} = req.body;
    const winner = new Winner({
        name,
        time
    });
    try{
        await winner.save();
        res.status(201);
        res.send("OK");
    }
    catch(error){
        const msg = "Error saving the winner";
        sendError(res, 409, msg);
    }
};