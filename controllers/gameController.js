const { response } = require('express');
const { updateOne, off } = require('../models/game');
const Game = require('../models/game');

const getGame = async(req,res) =>{
    // console.log("GameController => getGame", req.params.id);
    try {
        if(req.params.id){
            //Buscar partida
            const foundGame= await Game.findById(req.params.id);
            if(foundGame){
                //Encontrado
                res.status(200).json(foundGame);
            }else{
                throw("No se ha encontrado la partida solicitada");
            }
        }
        else{
            //Nueva partida
            let newGame = await new Game();
            // console.log("newGame", newGame);
            await newGame.save();
            //CREATED
            res.status(201).json(newGame);
        }    
    } catch (error) {
        // console.log(error);
        res.status(500).json(error);
    }
    
}

const saveGame = async(req,res) =>{
    try{
        // console.log("GameController => saveGame", req.body.id);
        let body = await new Game(req.body);
        const foundGame = await Game.findByIdAndUpdate(req.body.id, req.body, {returnDocument:'after'});
        const err = body.validateSync();
        if(err){
            let error = new Error();
            if(err.errors['game.state.code']){
                error.message = err.errors['game.state.code'].message;
            }
            if(err.errors['game.state.description']){
                error.message += err.errors['game.state.description'].message;
            }
            error.status = 400;
            throw error;
        }
        if (foundGame){
            res.status(200).json(foundGame);
        }
        else{
            // throw "Error. No se ha encontrado la partida a guardar.";
            let error=new Error();
            error.message = "No se ha encontrado la partida a guardar.";
            error.status = 404;
            throw error;
        }
    }catch(error){
        // console.log("error",error);
        res.status(error.status).json(error);
    }
    
}

module.exports = {
    getGame,
    saveGame
}