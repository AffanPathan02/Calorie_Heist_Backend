const admin = require('../firebase')

exports.authCheckFood = async (req,res,next) =>{
    
  try{
       req.details = req.body;
     
       next();
  }catch(err)
  {
      console.log(err);
      res.status(401).json({
          err:"Invalud or expired Token",
      })
      res.end();
  }
}