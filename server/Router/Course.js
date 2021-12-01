const express = require('express')
const router = express.Router()
const requiredLogin = require('../Middleware/RequiredLogin')
const Courses = require('../Models/Course')

router.get('/courses', (request, response) => {
    Courses.find().then((result) => {
        response.send(result)
    }).catch((err) => {
        console.log(err);
    })
})

router.get('/find/:id', (request, response) => {
    const { id } = request.params
    Courses.find({ _id: id }).then((result) => {
        response.send(result)
    }).catch((err) => {
        console.log(err);
    })
})

router.post('/courses', requiredLogin, (request, response) => {
    Courses.create(request.body).then((res) => {
        response.status(200).json({ successMessage: "created successfully" })
    }).catch((err) => {
        response.status(422).json({ errorMessage: "Enter all fields" })
    })
})

router.delete('/delete/:id', (request, response) => {
    const { id } = request.params
    Courses.findByIdAndDelete({_id:id}).then(res => {
        if (res) {
            response.status(200).json({ successMessage: "Deleted Successfully" })
        } else {
            response.status(422).json({ errorMessage: "No such course" })
        }
    }).catch(err => {
        response.status(422).json({ errorMessage: "something went wrong" })
    })
})

router.put('/update',requiredLogin,(request, response) => {
    const { id } = request.body
    Courses.findByIdAndUpdate({ _id: id }, request.body.courseDetail).then(res => {
        response.status(200).json({ successMessage: "successfully updated",res })
    }).catch(err => {
        response.status(422).json({ errorMessage: "not changed" })
    })
})


module.exports = router