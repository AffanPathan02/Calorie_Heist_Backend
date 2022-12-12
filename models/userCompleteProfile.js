const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const userCompleteProfileSchema = new mongoose.Schema({
    
    name:{
        type:String,
        
       
    },
    email:{
        type:String,
        required: true,
        index: true,
        unique:true,
    },
    about:{
        type:String,
    },
    bio:{
        type:String,
    },
    dob:{
        type:String,
    },
    weight:{
        type:Number,
        
    },
    height:{
        type:Number,
       
    },
    goal:{
        type:String,
        
    }
 

},{timestamps: true});

module.exports = mongoose.model("userCompleteProfile",userCompleteProfileSchema);

