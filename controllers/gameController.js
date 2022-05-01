const getGame = async(req,res) =>{
    console.log("GameController => getGame");
    res.send("juego obtenido")
}

const saveGame = async(req,res) =>{
    console.log("GameController => saveGame");
    res.send("juego guardado")
}

module.exports = {
    getGame,
    saveGame
}