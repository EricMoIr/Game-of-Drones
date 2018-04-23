const express = require("express");
var router = express.Router();
const hostname = "127.0.0.1";
const port = 8000;

const winnerController = require("../controllers/winnerController");

router.get("/", winnerController.getWinners);
router.post("/", winnerController.createWinner);

module.exports = router;