const mongoose = require('mongoose');
const validator = require('validator');

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
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
        required:true,
        unique:true
    },
    product:{
        type:String,
        required:true

    },
    price:{
        type:Number,
        required:true

    },
    description:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true,
        unique:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})

const Admin = new mongoose.model('Customer',AdminSchema, "admins");

module.exports=Admin;