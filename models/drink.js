const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const drinkSchema = new mongoose.Schema({
    drinkName:{
        type:String,
        required: true,
        
    },
    calories:{
        type: String,
        required:true,
    },
 
 

},{timestamps: true});

module.exports = mongoose.model("drink",drinkSchema);

