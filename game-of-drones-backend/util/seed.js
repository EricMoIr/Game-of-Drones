var Move = require("../models/move");

module.exports = async () => {
    const moves = [
        new Move({
            move: "rock",
            beats: "scissor"
        }),
        new Move({
            move: "paper",
            beats: "rock"
        }),
        new Move({
            move: "scissor",
            beats: "paper"
        }),
    ];
    moves.forEach(async move => {
        const exists = await Move.findOne({"move": move.move});
        if(!exists){
            try{
                await move.save();
            }
            catch(error){
                console.error("There was an error while seeding");
                console.error(error);
            }
        }
    });
}