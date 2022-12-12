const exerciseSchema = require("../models/exercise");

exports.sendAllExercises = async (req,res)=> {

     const u = await exerciseSchema.find({},{_id:0,__v:0,createdAt:0,updatedAt:0}); 
       res.json(u);
    
   
  
};

