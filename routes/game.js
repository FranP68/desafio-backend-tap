const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

router.get("/game", gameController.getGame);
router.post("/game", gameController.saveGame);


module.exports = router;