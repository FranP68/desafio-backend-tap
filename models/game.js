class State{
    code;
    description;
    constructor(){
        this.code=1;
        this.description="CREATED";
    }
}

const moment = require('moment')
var Game = class Game{
    game={ id:1, created:moment(), state:new State};
    cells=[];
    constructor(id){
        this.game.id=id;
    }
}

module.exports = Game;