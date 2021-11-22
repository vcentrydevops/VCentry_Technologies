const express = require('express')
const RequiredLogin = require('../Middleware/ResumeLogin')
const AdminLogin = require('../Middleware/RequiredLogin')
const router = express.Router()
const UserInfo = require('../Models/UserInfo')
const UserProfile = require('../Models/UserProfile')


router.post('/user/addUserInfo', RequiredLogin, (request, response) => {
    const { _id, userInfo } = request.user
    const { mobileNo, sslcDetails, ugDetails } = request.body
    if (mobileNo && sslcDetails && ugDetails) {
        if (!userInfo) {
            UserInfo.create(request.body).then(res => {
                UserProfile.findByIdAndUpdate({ _id: _id }, { userInfo: res._id }).then(res => {
                    response.status(200).json({ successMessage: "Successfully info added" })
                })
            }).catch(err => {
                response.status(422).json({ errorMessage: "Something went wrong" })
            })
        } else {
            UserInfo.findByIdAndUpdate({ _id: userInfo }, request.body).then(res => {
                response.status(200).json({ successMessage: "Successfully info updated" })
            }).catch(err => {
                response.status(422).json({ err })
                response.status(422).json({ errorMessage: "Something went wrong" })
            })
        }
    } else {
        response.status(422).json({ errorMessage: "enter all fields" })
    }
})

router.put('/admin/editUserInfo', AdminLogin, (request, response) => {
    const { _id, userInfo, email, userName } = request.body
    if (userInfo._id && _id) {
        UserProfile.findByIdAndUpdate({ _id: _id }, { email: email, userName: userName }).then(res => {
            UserInfo.findByIdAndUpdate({ _id: userInfo._id }, userInfo).then(res => {
                response.status(200).json({ successMessage: "Successfully info updated",res })
            }).catch(err => {
                response.status(422).json({ errorMessage: "Something went wrong", err })
            })
        }).catch(err => {
            response.status(422).json({ errorMessage: "Something went wrong", err })
        })
    } else {
        response.status(422).json({ errorMessage: "enter all fields" })
    }
})


module.exports = router