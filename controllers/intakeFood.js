const intakeFoodSchema = require("../models/intakeFood");

exports.intakeFood = async (req, res) => {


    const dates = req.intakeFood.date;
    const email = req.email;
    const meal = req.intakeFood.mealid;
    
    console.log(dates);

    const ok = await intakeFoodSchema.findOne({email:email},{upsert:false});
    console.log(ok);
    if(ok)
    {
       const ok2 = await intakeFoodSchema.findOneAndUpdate({email},{$push:{dateNo:[{date:dates,meal:meal}]}},{new:true})
       return res.json(ok2);
    }
    else{
        const ok2 = await intakeFoodSchema.create({email:email,dateNo:[{date:dates,meal:meal}]},function(err,result){
            console.log(err);
            console.log(result);
            return res.json(result);
     
         })
    }

    

}

