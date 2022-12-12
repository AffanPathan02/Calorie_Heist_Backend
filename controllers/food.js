const foodSchema = require("../models/food");

exports.completeFoodController= async (req,res)=> {

const data = req.details;
console.log(JSON.parse(data.name));
 foodSchema.insertMany(JSON.parse(data.name));



};

