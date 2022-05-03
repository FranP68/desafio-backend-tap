const { response } = require('express');
const { updateOne } = require('../models/game');
const Game = require('../models/game');

const getGame = async(req,res) =>{
    console.log("GameController => getGame", req.params.id);
    try {
        if(!!req.params.id){
            //Buscar partida
            const foundGame= await Game.findById(req.params.id);
            if(!!foundGame){
                //Encontrado
                res.status(200).json(foundGame);
            }else{
                throw("No se ha encontrado la partida solicitada");
            }
        }
        else{
            //Nueva partida
            let newGame = await new Game();
            console.log("newGame", newGame);
            await newGame.save();
            //CREATED
            res.status(201).json(newGame);
        }    
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
    
}

const saveGame = async(req,res) =>{
    console.log("GameController => saveGame", req.body);
    const foundGame =await Game.findByIdAndUpdate(req.body.id, req.body);
    if(!!foundGame){
        response.status(200).send(foundGame);
    }else{
        res.status(500).send({"error":"Su partida no existe. No pudo ser guardada."});
    }
}

module.exports = {
    getGame,
    saveGame
}