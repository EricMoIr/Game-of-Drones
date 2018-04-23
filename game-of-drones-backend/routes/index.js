const express = require("express");
var router = express.Router();

const indexController = require("../controllers/indexController");

router.post("/", function(req, res) {
  indexController.getRoundResult(req, res);
});
router.get("/", function(req, res) {
  res.send("Nothing here");
});

module.exports = router;