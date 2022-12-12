const foodSchema = require("../models/food");

exports.sendAllFood = async (req,res)=> {

     const u = await foodSchema.find({},{__v:0,createdAt:0,updatedAt:0}); 
       res.json(u); 
};

