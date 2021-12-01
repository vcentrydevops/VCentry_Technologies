const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    path: {
        type: String,
        required: [true, "enter path"]
    },
    courseHeading: {
        type: String,
        required: [true, "enter courseHeading"]
    },
    courseContent: {
        type: String,
        required: [true, 'enter courseContent']
    },
    courseVideo: {
        type: String,
        required: [true, 'enter courseVideo']
    },
    skillLevel: {
        type: String,
        required: [true, 'enter skillLevel']
    },
    duration: {
        type: String,
        required: [true, 'enter duration']
    },
    support: {
        type: String,
        required: [true, 'enter support']
    },
    assignments: {
        type: String,
        required: [true, 'enter assignments']
    },
    learners: {
        type: Number,
        required: [true, 'enter learners']
    },
    feeTable: {
        type: [
            {
                date: {
                    type: String,
                    required: [true, 'enter date']
                },
                day: {
                    type: String,
                    required: [true, 'enter day']
                },
                batch: {
                    type: String,
                    required: [true, 'enter batch']
                },
                time: {
                    type: String,
                    required: [true, 'enter time']
                }
            }
        ]
    },
    syllabus: {
        type: {
            heading: {
                type: String,
                required: [true, 'enter heading']
            },
            content: {
                type: String,
                required: [true, 'enter syllabus content']
            }
        }
    },
    aboutCourse: {
        type: String,
        required: [true, 'enter about course content']
    },
    trainerProfile: {
        type: {
            heading: {
                type: String,
                required: [true, 'enter heading']
            },
            content: {
                type: String,
                required: [true, 'enter heading']
            }
        }
    },
    courseFaq: {
        type: [
            {
                heading: {
                    type: String,
                    required: [true, 'enter heading']
                },
                content: {
                    type: String,
                    required: [true, 'enter heading']
                }
            }
        ]
    }
})

const Courses = mongoose.model('CourseDetails', courseSchema)
module.exports = Courses