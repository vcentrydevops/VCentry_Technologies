const express = require('express')
const router = express.Router()
const Enquiry = require('../Models/Enquiry')

router.post('/', (request, response) => {
    Enquiry.create(request.body).then(res => {
        response.status(200).json({ successMessage: "Our team will contact you soon" })
    }).catch(err => {
        response.status(422).json({ errorMessage: "Please try again",MediaError })
    })
})

router.get("/all", (request, response) => {
    Enquiry.find().then(res => {
        response.status(200).json(res )
    }).catch(err=>{
        response.status(422).json({errorMessage:"Please try again",err})
    })
})

module.exports = router