const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema({
    userName:{
        type:String,
        required:[true,"Enter the User Name"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Enter the mail id"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Enter the Password"]
    },
    mobileNo:{
        type:Number,
        required:[true,"Enter the Mobile Number"]
    },
    approval:{
        type:Boolean,
        default:false
    }
})

const Admin = mongoose.model('AdminDetails',adminSchema)
module.exports = Admin