const admin = require('../firebase')

exports.intakeAuthCheck = async (req,res,next) =>{
    
  try{
      
      

       const firebaseUser = await admin.auth().verifyIdToken(req.headers.authtoken)
      
      
       req.intakeFood= req.body;
       req.email = firebaseUser.email;
       next();
  }catch(err)
  {
      console.log(err);
      res.status(401).json({
          err:"Invalid or expired Token",
      })
      res.end();
  }
}