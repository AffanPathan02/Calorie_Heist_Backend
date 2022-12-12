const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const intakeFoodSchema = new mongoose.Schema({
  email:{
      type:String,
      required:true,
      unique:true,
      index:true,
  },
  dateNo:{
          type:Array,
          required:true,
          meal:{
               type:Object,
          date:{
              type:String,
              required:true,
          },
          meal:{
                  type:String,
                  required:true,
              }
            }
        }
          }

,{timestamps: true});

module.exports = mongoose.model("intakeFood",intakeFoodSchema);

