const intakeFoodSchema = require("../models/intakeFood");

exports.getIntakeFood = async (req, res) => {


  
    const email = req.email;
    
   

    const ok = await intakeFoodSchema.findOne({email:email},{_id:0},{upsert:false});
    console.log(ok);
    res.json(ok);

    

}

