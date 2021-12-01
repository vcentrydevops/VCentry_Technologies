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
        type:String
    },
    domain:{
        type:String
    },
    address:{
        type:String
    },
    course:{
        type:[{
            label:{
                type:String
            },
            value:{
                type:String
            }
        }]
    },
    joinDate:{
        type:String
    },
    timing:{
        type:String
    }
})

module.exports = mongoose.model('enquiry_form',EnquirySchema)