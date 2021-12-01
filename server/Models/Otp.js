const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OtpSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    otp: {
        type: Number,
        require: true
    }
}, { timestamps: true })

OtpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 120 })
const Otp = mongoose.model('otp', OtpSchema)
module.exports = Otp