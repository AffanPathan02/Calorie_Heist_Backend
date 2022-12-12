const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const pizzaSchema = new mongoose.Schema({
    restaurant:{
        type:String,
        required: true,
        
    },
    pizzaSelections:{
        type: Array,
        required:true,
        name:{
        type:String,
        required:true,
        },
        sizes:{
            type: Array,
            required:true,
            size:{
                type:String,
                required:true,
            },
            diameter:{
                type:Number,
                required:true,
            },
            slicesPerPizza:{
                type:Number,
                required:true,
            },
            sliceCalories:{
                type:Number,
                required:true,
            }

        }
    },
 
 

},{timestamps: true});

module.exports = mongoose.model("pizza",pizzaSchema);

