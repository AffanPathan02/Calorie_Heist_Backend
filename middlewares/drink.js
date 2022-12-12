const admin = require('../firebase')

exports.authCheck = async (req,res,next) =>{
    
  try{
       
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