const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserInfoSchema = new Schema({
    mobileNo:{
        type:Number,
        required:[true,"Please enter the mobileno"]
    },
    sslcDetails:{
        percentage:{
            type:String,
            required:[true,"enter the 10th percentage"]
        },
        passedOut:{
            type:String,
            required:[true,"enter the 10th passout year"]
        }
    },
    sscDetails:{
        percentage:{
            type:String
        },
        passedOut:{
            type:String
        }
    },
    ugDetails:{
        percentage:{
            type:String,
            required:[true,"enter the UG percentage"]
        },
        passedOut:{
            type:String,
            required:[true,"enter the UG passout year"]
        }
    },
    pgDetails:{
        percentage:{
            type:String
        },
        passedOut:{
            type:String
        }
    },
    currentCompany:{
        type:String
    },
    technologies:[{
        type:String
    }],
    domain:{
        type:String
    },
    experience:{
        type:String
    },
    workingStatus:{
        type:String
    },
    noticePeriod:{
        type:String
    },
    resume:{
        type:String
    },
    fresher:{
        type:Boolean
    }
})

const UserInfo = mongoose.model('userinfos',UserInfoSchema)
module.exports = UserInfo