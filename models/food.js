const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const foodSchema = new mongoose.Schema({
    sugar_g:{
        type:Number,
        required: true,
        
    },
    fiber_g:{
        type:Number,
        required: true,
        
    },
    serving_size_g:{
        type:Number,
        required: true,
        
    },
    sodium_mg:{
        type:Number,
        required: true,
        
    },
    name:{
        type:String,
        required: true,
        
    },
    potassium_mg:{
        type:Number,
        required: true,
        
    },
    fat_saturated_g:{
        type:Number,
        required: true,
        
    },
    fat_total_g:{
        type:Number,
        required: true,
        
    },
    calories:{
        type:Number,
        required: true,
        
    },
    cholesterol_mg:{
        type:Number,
        required: true,
        
    },
    protein_g:{
        type:Number,
        required: true,
        
    },
    carbohydrates_total_g:{
        type:Number,
        required: true,
        
    },

 
 

},{timestamps: true});

module.exports = mongoose.model("foodSchema",foodSchema);

