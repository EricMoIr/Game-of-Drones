var mongoose = require('mongoose');

var mongoDB = "mongodb+srv://ericmoir:DO89IXYljj1MpAfp@clustereric-wwlkm.mongodb.net/game-of-drones";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

require("./util/seed")();

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const hostname = "127.0.0.1";
const port = 8000;
var cors = require('cors')

var index = require("./routes/index");
var moves = require("./routes/moves");
var winners = require("./routes/winners");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use('/', index);
app.use('/moves', moves);
app.use('/winners', winners);

app.listen(port, () => console.log("Listening..."));