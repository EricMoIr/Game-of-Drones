var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moveSchema = new Schema({
    move: String,
    beats: String
});
moveSchema.virtual('url')
.get(function () {
    return '/' + this._id;
});
module.exports = mongoose.model("Move", moveSchema);