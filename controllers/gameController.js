const Game = require('../models/game');
var games = [];
var id=0;
const getGame = async(req,res) =>{
    console.log("GameController => getGame", req.params.id);

    if(!!req.params.id){
        //Buscar partida
        let foundGame = games.find(game => game.game.id==req.params.id);
        if(!!foundGame){
            res.send(foundGame);
        }else{
            res.send({"error":"No se ha encontrado su partida."});
        }
    }
    else{
        //Nueva partida
        let newGame = new Game(id);
        id++;
        games.push(newGame);
        res.send(newGame);
    }
}

const saveGame = async(req,res) =>{
    console.log("GameController => saveGame", req.body);
    res.send("juego guardado")
}

module.exports = {
    getGame,
    saveGame
}