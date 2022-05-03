const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
    game:{
        created:{ type: Date, default: Date.now },
        state:{
            code:{type: Number, default:1},
            description:{type:String, default:"CREATED"}
        }
    },
    cells:[]
})

const Game = mongoose.model('Game',gameSchema);
module.exports = Game;