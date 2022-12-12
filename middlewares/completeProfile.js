const admin = require('../firebase')

exports.completeProfile = async (req,res,next) =>{
    
  try{

  //  console.log(req.headers.authtoken);
      
     const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken)
    
      
      req.details = req.body;
      req.email = firebaseUser.email;
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