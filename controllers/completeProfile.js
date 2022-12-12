const userCompleteProfileSchema = require("../models/userCompleteProfile");

exports.completeProfileController = async (req,res)=> {

// console.log(req.email);
// console.log(req.details);


const update = req.details;
const email =  req.email;
console.log(update);

 const user = await userCompleteProfileSchema.findOneAndUpdate({email},update,{new:true});
    
if(user) {
   return res.json(user);
}
else{
 await userCompleteProfileSchema.create({email},function(err,small){
  console.log(err);
 }).save();

 const user = await userCompleteProfileSchema.findOneAndUpdate({email},update,{new:true});
  return res.json(user);
}
};

