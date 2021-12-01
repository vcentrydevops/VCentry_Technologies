const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Admin = require('./Router/Admin')
const Course = require('./Router/Course')
const UserInfoRoute = require('./Router/ResumeUserInfoRoute')
const UserProfileRoute = require('./Router/ResumeUserProfileRoute')
const PORT = process.env.PORT || 5000
const { MONGO_URL } = require('./config/keys')
mongoose.set('useCreateIndex', true);


const app = express()
app.use(cors())
app.use(express.json())
app.use('/admin', Admin)
app.use('/course', Course)
app.use('/resume', UserInfoRoute)
app.use('/resume', UserProfileRoute)
app.use('/enquiry',require('./Router/EnquiryRoute'))

mongoose.connect(MONGO_URL, { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true }).then(() => { console.log("Db connected") }).catch((err) => { console.log("db not connected", err); })
mongoose.Promise = global.Promise

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})