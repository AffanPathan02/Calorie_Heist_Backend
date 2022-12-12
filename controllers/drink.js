const drinkSchema = require("../models/drink");
const exerciseSchema = require("../models/exercise");

exports.sendAllDrinks = async (req,res)=> {

     const u = await drinkSchema.find({},{_id:0,__v:0,createdAt:0,updatedAt:0}); 
       res.json(u);
    
   
  
};

