const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: [true, "Email is already Present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        unique:true
    }

})

const User = new mongoose.model('User',UserSchema, 'users');

module.exports=User;