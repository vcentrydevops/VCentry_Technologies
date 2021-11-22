const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { JWT_SECRET_KEY } = require('../config/keys')
const UserProfile = require('../Models/UserProfile')
const UserInfo = require('../Models/UserInfo')

router.get('/user/all', (request, response) => {
    UserProfile.find().populate('userInfo').then(res => {
        response.status(200).json({ users: res })
    }).catch(err => {
        response.status(422).json({ errorMessage: "something went wrong" })
    })
})

router.post('/user/sign-in', (request, response) => {
    const { email, password } = request.body
    UserProfile.findOne({ email: email }).then((existingUser) => {
        if (!existingUser) {
            response.status(422).json({ errorMessage: "Incorrect Email" })
        } else {
            bcrypt.compare(password, existingUser.password).then((validUser) => {
                if (validUser) {
                    const token = jwt.sign({ _id: existingUser._id }, JWT_SECRET_KEY)
                    response.status(200).json({ token: token, successMessage: "Logged in Successfully", id: existingUser._id })
                } else {
                    response.status(422).json({ errorMessage: "Invalid Password" })
                }
            }).catch((err) => {
                response.json({ errorMessage: err })
            })
        }
    })
})

router.get('/user/:id', (request, response) => {
    const { id } = request.params
    UserProfile.findById({ _id: id }).then(result => {
        if (result.userInfo) {
            UserInfo.findById({ _id: result.userInfo }).then(res => {
                response.status(200).json({ result: result, info: res })
            })
        } else {
            response.status(200).json({ result })
        }
    }).catch(err => {
        response.status(422).json({ errorMessage: "something went wrong" })
        console.log(err);
    })
})

router.post('/user/sign-up', (request, response) => {
    const { userName, email, password } = request.body
    if (!userName || !email || !password) {
        response.status(422).json({ warnMessage: "enter all fields" })
    } else {
        bcrypt.hash(password, 12).then((hashedPassword) => {
            const user = new UserProfile({
                userName: userName,
                email: email,
                password: hashedPassword,
            })
            user.save().then((user) => {
                response.status(200).json({ successMessage: "Signed Up succesfully" })
            }).catch(err => {
                if (err.keyPattern.email) {
                    response.status(422).json({ warnMessage: "email already exist" })
                }
                if (err.keyPattern.userName) {
                    response.status(422).json({ warnMessage: "userName already exist" })
                }
            })
        }).catch(err => {
            response.status(422).json({ errorMessage: "oops something went wrong" })
        })
    }
})


router.delete('/admin/user-del/:_id', (request, response) => {
    const { _id } = request.params
    UserProfile.findOne({ _id: _id }).then(res => {
        UserInfo.findByIdAndDelete({ _id: res.userInfo }).then(res => {
            UserProfile.findByIdAndDelete({ _id: _id }).then(res => {
                response.status(200).json({ successMessage: "successfully deleted" })
            }).catch(err => {
                response.status(422).json({ errorMessage: "user profile not deleted" })
            })
        }).catch(err => {
            response.status(422).json({ errorMessage: "user info not deleted" })
        })
    }).catch(err => {
        response.status(422).json({ errorMessage: "Something went Wrong" })
    })
})

module.exports = router