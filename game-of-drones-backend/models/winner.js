var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var winnerSchema = new Schema({
    name: String,
    time: Date
});
winnerSchema.virtual('url')
.get(function () {
    return '/' + this._id;
});
module.exports = mongoose.model("Winner", winnerSchema);