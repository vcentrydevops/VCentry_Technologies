const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types

const UserProfileShema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: [true, "enter the username"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "enter the email"]
    },
    password: {
        type: String,
        required: [true, "enter the password"]
    },
    userInfo:{
        type:ObjectId,
        ref:"userinfos"
    }
})

const UserProfile = mongoose.model('UserProfiles', UserProfileShema)
module.exports = UserProfile