const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema({
    game:{
        created:{ type: Date, default: Date.now },
        state:{
            code:{
                type: Number,
                enum:{
                    values:[1,2,3],
                    message: "state.code: El valor no es permitido. El valor del campo state.code debe ser 1, 2, 3. ",
                },
                default:1,
                required:true},
            description:{
                type: String,
                enum: {
                    values:['CREATED', 'WON', 'LOST'],
                    message: "state.description: El valor no es permitido. El valor del campo state.description debe ser 'CREATED', 'WON', 'LOST'. "
                },
                default:'CREATED',
                required: true
            }
        }
    },
    cells:[]
})

const Game = mongoose.model('Game',gameSchema);
module.exports = Game;