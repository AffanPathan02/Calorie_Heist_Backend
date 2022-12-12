const userSchema = require("../models/user");

exports.createOrUpdateUser = async (req,res)=> {
    
   

    const {name,email} = req.user;
   
  

    const user = await userSchema.findOneAndUpdate({email},{name,email},{new:true});
    
    if(user) {
       return res.json(user);
    }
    else{
      const newUser = await new userSchema({
          email,name
      }).save();
      return res.json(newUser);
    }
  
};

