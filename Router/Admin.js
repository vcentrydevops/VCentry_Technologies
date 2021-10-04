const express = require('express')
const router = express.Router()
const Admin = require('../Models/Admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET_KEY } = require('../config/keys')

router.post('/signUp', (request, response) => {
    const { userName, email, password, mobileNo } = request.body
    if (!userName || !email || !password || !mobileNo) {
        response.status(422).json({ errorMessage: "Enter all fields" })
    } else {
        Admin.findOne({ email: email }).then(existEmail => {
            if (existEmail) {
                response.status(422).json({ errorMessage: "You are a existing User" })
            } else {
                Admin.findOne({ userName: userName }).then((existUserName) => {
                    if (existUserName) {
                        response.status(422).json({ errorMessage: "please try another user name" })
                    } else {
                        Admin.findOne({ mobileNo: mobileNo }).then((existMobileNo) => {
                            if (existMobileNo) {
                                response.status(422).json({ errorMessage: "This Mobile No Already Registered" })
                            } else {
                                bcrypt.hash(password, 12).then((hashedPassword) => {
                                    const user = new Admin({
                                        userName: userName,
                                        email: email,
                                        password: hashedPassword,
                                        mobileNo: mobileNo
                                    })
                                    user.save().then((user) => {
                                        response.status(200).json({ successMessage: "Signed Up succesfully" })
                                    }).catch((err) => {
                                        response.status(422).json({ errorMessage: err })
                                    })

                                })
                            }
                        }).catch(err => {
                            response.status(422).json({ errorMessage: err })
                        })
                    }
                }).catch(err => {
                    response.status(422).json({ errorMessage: err })
                })
            }
        }).catch(err => {
            response.status(422).json({ errorMessage: err })
        })
    }
})

router.post('/signIn', (request, response) => {
    const { email, password } = request.body
    Admin.findOne({ email: email }).then((existingUser) => {
        if (!existingUser) {
            response.status(422).json({ errorMessage: "Incorrect UserName" })
        } else {
            bcrypt.compare(password, existingUser.password).then((validUser) => {
                if (validUser) {
                    if (existingUser.approval === true) {
                        const token = jwt.sign({ _id: existingUser._id }, JWT_SECRET_KEY)
                        response.status(200).json({ token: token, admin: existingUser.approval, successMessage: "Signed In Successfully" })
                    } else {
                        response.status(422).json({ errorMessage: "You not approved please contact vcentry admin" })
                    }
                } else {
                    response.status(422).json({ errorMessage: "Incorrect Password" })
                }
            }).catch(err => {
                response.status(422).json({ errorMessage: err })
            })
        }
    })
})

module.exports = router