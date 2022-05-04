const mongoose = require('mongoose');
const { Schema } = mongoose;



const gameSchema = new Schema({
    game:{
        created:{ type: Date, default: Date.now },
        state:{
            code:{type: Number,enum:[1,2,3], default:1},
            description:{type:String,enum:["CREATED", "WON", "LOST"], default:"CREATED"}
        }
    },
    cells:[]
})

const Game = mongoose.model('Game',gameSchema);
module.exports = Game;