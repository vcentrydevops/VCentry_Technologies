const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const { JWT_SECRET_KEY } = require('../config/keys')
const UserProfile = require('../Models/UserProfile')
const UserInfo = require('../Models/UserInfo')
const Otp = require('../Models/Otp')

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

router.post('/user/send-verify', (request, response) => {
    const { email } = request.body
    let otp = ''
    for (i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10)
    }
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vcentrytechnologiesresume@gmail.com',
            pass: 'Vcent!#ry5&Techn@$ol^*'
        }
    });

    var mailOptions = {
        from: 'vcentrytechnologiesresume@gmail.com',
        to: email,
        subject: 'VCentry resume verification',
        text: `Your OTP is ${otp}. This OTP valid for 2 minutes`
    };

    Otp.findOne({ email: email }).then(res => {
        if (res) {
            Otp.deleteMany({ email: res.email }).then(res => {
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        response.status(422).json({ errorMessage: 'email not sended' })
                    } else {
                        Otp.create({ email: email, otp: otp }).then(res => {
                            response.status(200).json({ successMessage: "otp generated" })
                        }).catch(err => {
                            response.status(422).json({ errorMessage: "Otp not generated" })
                        })
                    }
                });
            }).catch(err => {
                console.log(err);
            })
        } else {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    response.status(422).json({ errorMessage: 'email not sended' })
                } else {
                    Otp.create({ email: email, otp: otp }).then(res => {
                        response.status(200).json({ successMessage: "otp generated" })
                    }).catch(err => {
                        response.status(422).json({ errorMessage: "Otp not generated" })
                    })
                }
            });

        }
    }).catch(err => {
        console.log(err.response);
    })
})

router.post('/user/verify', (request, response) => {
    console.log(request.body);
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
    })
})

router.post('/user/sign-up', (request, response) => {
    const { userName, email, password, otp } = request.body
    if (otp) {
        Otp.findOne({ email: email }).then(res => {
            if (res) {
                if (res.otp == otp) {
                    if (!userName || !email || !password) {
                        response.status(422).json({ warnMessage: "enter all fields" })
                    } else {
                        bcrypt.hash(password, 12).then((hashedPassword) => {
                            const user = new UserProfile({
                                userName: userName,
                                email: email,
                                password: hashedPassword
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
                } else {
                    response.status(422).json({ errorMessage: "Please enter valid OTP" })
                }
            } else {
                response.status(422).json({ errorMessage: "Please enter valid OTP" })
            }
        }).catch(err => {
            console.log(err);
            response.status(422).json({ errorMessage: "oops something went wrong" })
        })
    } else {
        response.status(422).json({ errorMessage: "Please enter OTP" })
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