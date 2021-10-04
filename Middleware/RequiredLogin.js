const jwt = require('jsonwebtoken')
const { JWT_SECRET_KEY } = require('../config/keys')
const mongoose = require('mongoose')
const Admin = mongoose.model('AdminDetails')

module.exports = (request, response, next) => {
    const { authorization } = request.headers
    if (!authorization) {
        response.status(401).json({ errorMessage: "Please Login" })
    }
    else {
        const token = authorization.replace("Bearer ", "")
        jwt.verify(token, JWT_SECRET_KEY, (err, payload) => {
            if (err) {
                response.status(401).json({ errorMessage: "Please Login" })
            }
            else {
                const { _id } = payload
                Admin.findById(_id).then(userData => {
                    request.user = userData
                    next()
                })
            }
        })
    }
}