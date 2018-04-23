const express = require("express")
var router = express.Router();
const hostname = "127.0.0.1";
const port = 8000;

const moveController = require("../controllers/moveController");

router.get("/", moveController.getMoves);

module.exports = router;