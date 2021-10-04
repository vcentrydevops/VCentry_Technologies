import React, { createRef, useState, Fragment } from 'react'
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header';
import API from '../../API/Service'

function MainContent(props) {
    const [courseDetail, setcourseDetail] = useState({
        courseContent: "",
        feeTable: [],
        syllabus: {
            heading: "",
            content: "",
        },
        aboutCourse: "",
        trainerProfile: {
            heading: "",
            content: ""
        },
        courseFaq: []
    })

    const [batchEdit, setbatchEdit] = useState(-1)

    const [batches, setbatches] = useState({ date: "", day: "default", time: "", batch: "default" })
    const [editbatches, setEditbatches] = useState()
    const batchDate = createRef()
    const batchDay = createRef()
    const batchTime = createRef()
    const batchSession = createRef()
    const [courseFaq, setcourseFaq] = useState({ heading: "", content: "" })
    const [editFaq, seteditFaq] = useState("")
    const faqHeadRef = createRef()


    const setData = (event) => {
        setcourseDetail({ ...courseDetail, [event.target.name]: event.target.value })
    }

    const setBatchList = (event) => {
        setbatches({ ...batches, [event.target.name]: event.target.value })
        console.log(batches);
    }
    const addBatches = () => {
        if (batches.date !== "" && batches.day !== "default" && batches.time !== "" && batches.batch !== "default") {
            setcourseDetail({ ...courseDetail, feeTable: [...courseDetail.feeTable, batches] })
            batchDate.current.value = ""
            batchDay.current.value = "default"
            batchTime.current.value = ""
            batchSession.current.value = "default"
            setbatches({ date: "", day: "default", time: "", batch: "default" })
        } else {
            alert("enter all batches fields")
        }
    }
    const setCourseContent = (event, editor) => {
        setcourseDetail({ ...courseDetail, courseContent: editor.getData() })
    }

    const editFeeTable = (index) => {
        setbatchEdit(index)
        setEditbatches(courseDetail.feeTable[index])
    }

    const changeEditFeeTable = (event) => {
        setEditbatches({ ...editbatches, [event.target.name]: event.target.value })
    }

    const deleteFeetable = (index1) => {
        const feeArray = courseDetail.feeTable.filter((data, index) => index !== index1)
        setcourseDetail({ ...courseDetail, feeTable: feeArray })
    }

    const saveFeeTable = (index1) => {
        if (editbatches.date !== "" && editbatches.day !== "default" && editbatches.time !== "" && editbatches.batch !== "default") {
            setbatchEdit(-1)
            courseDetail.feeTable.splice(index1, 1)
            courseDetail.feeTable.splice(index1, 0, editbatches)
        }
    }

    const setSyllabus = (event) => {
        setcourseDetail({ ...courseDetail, syllabus: { ...courseDetail.syllabus, [event.target.name]: event.target.value } })
    }

    const setSyllabusContent = (event, editor) => {
        const data = editor.getData()
        setcourseDetail({ ...courseDetail, syllabus: { ...courseDetail.syllabus, content: data } })
    }

    const setAboutDetail = (event, editor) => {
        const data = editor.getData()
        setcourseDetail({ ...courseDetail, aboutCourse: data })
    }


    const setTrainerProfile = (event) => {
        setcourseDetail({ ...courseDetail, trainerProfile: { ...courseDetail.trainerProfile, [event.target.name]: event.target.value } })
    }

    const setTrainerContent = (event, editor) => {
        const data = editor.getData()
        setcourseDetail({ ...courseDetail, trainerProfile: { ...courseDetail.trainerProfile, content: data } })
    }

    const setCourseFaqHead = (event) => {
        setcourseFaq({ ...courseFaq, [event.target.name]: event.target.value })
    }

    const setCourseFaqContent = (event, editor) => {
        const data = editor.getData()
        setcourseFaq({ ...courseFaq, content: data })
    }

    const addFaq = () => {
        if (courseFaq.heading && courseFaq.content) {
            courseDetail.courseFaq.push(courseFaq)
            setcourseFaq({ heading: "", content: "" })
            faqHeadRef.current.value = ""
        }
    }

    const updateFaq = (index1) => {
        if (courseFaq.heading && courseFaq.content) {
            courseDetail.courseFaq.splice(index1, 1)
            courseDetail.courseFaq.splice(index1, 0, courseFaq)
            setcourseFaq({ heading: "", content: "" })
            seteditFaq("")
        }
    }


    const submit = (e) => {
        e.preventDefault()
        API.postApi("/course/courses", courseDetail, {
            headers: { authorization: `Bearer ${sessionStorage.getItem('vcentry_admin')}` }
        }).then((res) => {
            toast.success(res.data.successMessage, { position: toast.POSITION.TOP_RIGHT })
            window.location.reload()
        }).catch(err => {
            toast.warn(err.response.data.errorMessage, { position: toast.POSITION.TOP_RIGHT })
        })
    }


    const batchDetail = courseDetail.feeTable.map((data, index) => {
        return <div key={index + data.date}>
            <input defaultValue={data.date} type="date" disabled={batchEdit === index ? false : true} onChange={(event) => changeEditFeeTable(event)}></input>
            <select name="day" defaultValue={data.day} disabled={batchEdit === index ? false : true} onChange={(event) => changeEditFeeTable(event)}>
                <option value="default" disabled>Select Day</option>
                <option value="Mon-Fri" >Mon-Fri</option>
                <option value="Sat-Sun">Sat-Sun</option>
            </select>
            <input type="time" name="time" defaultValue={data.time} disabled={batchEdit === index ? false : true} onChange={(event) => changeEditFeeTable(event)}></input>
            <select name="batch" defaultValue={data.batch} disabled={batchEdit === index ? false : true} onChange={(event) => changeEditFeeTable(event)}>
                <option value="default" disabled>Select Batch</option>
                <option value="Normal">Normal</option>
                <option value="Fast Track">Fast Track</option>
            </select>
            <div className="admin-crud-div"><i onClick={() => editFeeTable(index)}><FaEdit></FaEdit></i><i onClick={() => saveFeeTable(index)} style={batchEdit === index ? { display: "unset" } : { display: "none" }}><FaSave></FaSave></i><i onClick={() => deleteFeetable(index)}><FaTrash></FaTrash></i></div>
        </div>
    })

    const showFaq = courseDetail.courseFaq.map((data, index) => {
        return <div key={index + data.heading} id="admin-course-faq-show" className="admin-course-sat">
            <div>
                <input type="text" name="heading" placeholder="Enter question" defaultValue={data.heading} onChange={(event) => setCourseFaqHead(event)} disabled={index === editFaq ? false : true}></input>
            </div>
            <div>
                <div className="admin-ck-editor-height">
                    <CKEditor
                        data={data.content}
                        editor={ClassicEditor}
                        onChange={(event, editor) => setCourseFaqContent(event, editor)}
                        disabled={index === editFaq ? false : true}
                    ></CKEditor>
                </div>
            </div>
            <div className="admin-show-faq-div">
                <i onClick={() => { seteditFaq(index); setcourseFaq({ heading: "", content: "" }) }}><FaEdit></FaEdit></i>
                <i onClick={() => updateFaq(index)}><FaSave></FaSave></i>
                <i onClick={() => { courseDetail.courseFaq.splice(index, 1); setcourseDetail({ ...courseDetail }) }}><FaTrash></FaTrash></i>
            </div>
        </div>
    })

    return (
        <Fragment>
            <Header id="sign-out"></Header>
            <form onSubmit={submit} className="admin-main-content-div">
                <ToastContainer />
                <div>
                    <div>
                        <label>Course Path<span>:</span></label>
                        <input type="text" name="path" onChange={(event) => setData(event)}></input>
                    </div>
                    <div>
                        <label>Course Name<span>:</span></label>
                        <input type="text" name="courseHeading" onChange={(event) => setData(event)}></input>
                    </div>
                    <div id="admin-course-content-div">
                        <label>Course Content</label>
                        <div className="admin-syllabus-ck-editor">
                            <CKEditor
                                editor={ClassicEditor}
                                onChange={(event, editor) => setCourseContent(event, editor)}
                            ></CKEditor>
                        </div>
                    </div>
                    <div>
                        <label>Course Video Link<span>:</span></label>
                        <input type="url" name="courseVideo" onChange={(event) => setData(event)}></input>
                    </div>
                    <div>
                        <label>Skill Level<span>:</span></label>
                        <input type="text" name="skillLevel" onChange={(event) => setData(event)}></input>
                    </div>
                    <div>
                        <label>Duration<span>:</span></label>
                        <input type="text" name="duration" onChange={(event) => setData(event)}></input>
                    </div>
                    <div>
                        <label>Total Leanears<span>:</span></label>
                        <input type="number" name="learners" onChange={(event) => setData(event)}></input>
                    </div>
                    <div>
                        <label>Support Time<span>:</span></label>
                        <input type="text" name="support" onChange={(event) => setData(event)}></input>
                    </div>
                    <div>
                        <label>Assignments<span>:</span></label>
                        <input type="text" name="assignments" onChange={(event) => setData(event)}></input>
                    </div>
                    <div id="admin-batch-details">
                        <p>Batches</p>
                        <div>
                            <p>Date</p>
                            <p>Day</p>
                            <p>Time</p>
                            <p>Session</p>
                            <p></p>
                        </div>
                        <div>
                            <input type="date" name="date" ref={batchDate} onChange={(event) => setBatchList(event)}></input>
                            <select name="day" defaultValue="default" ref={batchDay} onChange={(event) => setBatchList(event)}>
                                <option value="default" disabled>Select Day</option>
                                <option value="Mon-Fri" disabled={batches.batch === "FastTrack" ? true : false} onChange={(event) => setBatchList(event)}>Mon-Fri</option>
                                <option value="Sat-Sun" onChange={(event) => setBatchList(event)}>Sat-Sun</option>
                            </select>
                            <input type="time" name="time" ref={batchTime} onChange={(event) => setBatchList(event)}></input>
                            <select name="batch" defaultValue="default" ref={batchSession} onChange={(event) => setBatchList(event)}>
                                <option value="default" disabled>Select Batch</option>
                                <option value="Normal">Normal</option>
                                <option value="FastTrack" disabled={batches.day === "Mon-Fri" ? true : false}>Fast Track</option>
                            </select>
                            <input onClick={addBatches} type="button" value="ADD"></input>
                        </div>
                        {courseDetail.feeTable.length > 0 && <div>
                            {batchDetail}
                        </div>}
                    </div>
                    <div id="admin-syllabus" className="admin-course-sat">
                        <p>Syllabus</p>
                        <div>
                            <label>Enter Syllabus Heading<span>:</span></label>
                            <input type="text" onChange={(event) => setSyllabus(event)} name="heading"></input>
                        </div>
                        <div id="admin-syllabus-navlink">
                            <p>Syllabus Content<span>:</span></p>
                            <div className="admin-syllabus-ck-editor">
                                <CKEditor
                                    editor={ClassicEditor}
                                    onChange={(event, editor) => setSyllabusContent(event, editor)}
                                ></CKEditor>
                            </div>
                        </div>
                    </div>
                    <div id="admin-about-course" className="admin-course-sat">
                        <p>About Course</p>
                        <div>
                            <label>Enter About Content</label>
                            <div className="admin-ck-editor-height">
                                <CKEditor
                                    editor={ClassicEditor}
                                    onChange={(event, editor) => setAboutDetail(event, editor)}
                                ></CKEditor>
                            </div>
                        </div>
                    </div>
                    <div id="admin-trainer-Profile" className="admin-course-sat">
                        <p>Trainer Profile</p>
                        <div>
                            <label>Enter Heading<span>:</span></label>
                            <input type="text" name="heading" onChange={(event) => setTrainerProfile(event)}></input>
                        </div>
                        <div>
                            <div>
                                <p>Enter Content</p>
                            </div>
                            <div className="admin-ck-editor-height">
                                <CKEditor
                                    editor={ClassicEditor}
                                    onChange={(event, editor) => setTrainerContent(event, editor)}
                                ></CKEditor>
                            </div>
                        </div>
                    </div>
                    <div id="admin-course-faq" className="admin-course-sat">
                        <p>Course FAQ</p>
                        <div>
                            <input type="text" ref={faqHeadRef} name="heading" placeholder="Enter question" onChange={(event) => setCourseFaqHead(event)}></input>
                        </div>
                        <div>
                            <div className="admin-ck-editor-height">
                                <CKEditor
                                    data={editFaq == "" && courseFaq.content}
                                    editor={ClassicEditor}
                                    onChange={(event, editor) => setCourseFaqContent(event, editor)}
                                ></CKEditor>
                            </div>
                        </div>
                        <div>
                            <Button variant="success" onClick={addFaq}>Add</Button>
                        </div>
                    </div>
                    {courseDetail.courseFaq.length > 0 && <div className="admin-faq-show-div">
                        {showFaq}
                    </div>}
                </div>
                <Button className="admin-submit-btn" variant="success" type="submit">submit</Button>
            </form>
        </Fragment>
    )
}

export default MainContent
