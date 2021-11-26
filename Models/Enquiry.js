const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EnquirySchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    passout:{
        type:Number,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    course:{
        type:[{
            label:{
                type:String
            },
            value:{
                type:String
            }
        }],
        required:true
    },
    joinDate:{
        type:String,
        required:true
    },
    timing:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('enquiry_form',EnquirySchema)