import React, { createRef, Fragment, useMemo, useRef, useState } from 'react'
import './EnquiryForm.css'
import Select from 'react-select';
import Header from '../Components/Header/Header'
import PhoneInput from 'react-phone-input-2'
import API from '../API/Service'
import { Overlay, Popover } from 'react-bootstrap'
import { AiFillWarning } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'

export default function EnquiryForm() {
    const batchTime = ["07:00 AM - 09:00 AM", "08:00 AM - 10:00 AM", "09:00 AM - 11:00 AM", "10:00 AM - 12:00 PM"]
    const coursesList = [{ value: "selenium", label: "Selenium" }, { value: "MERN Stack", label: "MERN Stack" }, { value: "python", label: "Python" }]
    const [enqData, setenqData] = useState({
        userName: "",
        mobileNo: "",
        email: "",
        gender: "",
        dob: "",
        qualification: "",
        passout: "",
        company: "",
        domain: "",
        address: "",
        courses: [],
        joinDate: "",
        timing: ""
    })

    const getPassout = (e) => {
        if (show === true) {
            setShow(false)
        }
        if (/^[0-9]{0,4}$/.test(e.target.value) || e.target.value == "") {
            setenqData({ ...enqData, passout: e.target.value })
        }
    }

    const getMobileNo = (e) => {
        if (show === true) {
            setShow(false)
        }
        setenqData({ ...enqData, mobileNo: e })
    }

    const getFormData = (e) => {
        submitBtnRef.current.disabled = false
        if (show === true) {
            setShow(false)
        }
        setenqData({ ...enqData, [e.target.name]: e.target.value })
    }

    const getCourseData = (e) => {
        setenqData({ ...enqData, courses: e })
    }

    const batchTimeMap = useMemo(() => {
        return batchTime.map((data, index) => {
            return <option value={data} key={data + index}>{data}</option>
        })
    }, [batchTime])

    const submitEnqData = (e) => {
        submitBtnRef.current.disabled = true
        e.preventDefault()
        if (!enqData.mobileNo || enqData.mobileNo.length != 12) {
            document.getElementById('phone-id').scrollIntoView()
            submitBtnRef.current.disabled = false
            setShow(true)
        } else {
            API.postApi('/enquiry', enqData).then(res => {
                console.log(res);
                toast.success(res.data.successMessage)
                setTimeout(() => {
                    window.location.reload()
                }, 3000);
            }).catch(err => {
                console.log(err.response); 
                toast.error(err.response.data.errorMessage)
                submitBtnRef.current.disabled = false
            })
        }
    }
    const submitBtnRef = createRef()

    const [show, setShow] = useState(false);
    const ref = useRef(null);

    return (
        <Fragment>
            <ToastContainer />
            <Header></Header>
            <div className="enquiry-form-cont">
                <div className="enquiry-form-modal">
                    <div className="enquiry-form-head">
                        <p className="get-in-p">Get in Touch</p>
                    </div>
                    <form className="vcent-enq-form" onSubmit={submitEnqData}>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>User Name <span>*</span></p>
                            </div>
                            <div className="enquiry-form-l-div2">
                                <input type="text" name="userName" placeholder="Enter user name" onChange={getFormData} required></input>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Phone Number <span>*</span></p>
                            </div>
                            <div className="enquiry-form-l-div2" id="phone-id" ref={ref}>
                                <PhoneInput
                                    country={'in'}
                                    placeholder="Enter Phone Number"
                                    name="mobileNo"
                                    value={enqData.mobileNo}
                                    onChange={getMobileNo}
                                />
                                <Overlay
                                    show={show}
                                    target={ref.current}
                                    placement="bottom"
                                    containerPadding={20}
                                >
                                    <Popover id="popover-contained">
                                        <Popover.Content>
                                            <i id="phone-warning-div"><AiFillWarning /></i>Please enter <strong>mobile number</strong>
                                        </Popover.Content>
                                    </Popover>
                                </Overlay>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Email Address <span>*</span></p>
                            </div>
                            <div className="enquiry-form-l-div2">
                                <input type="email" name="email" placeholder="Enter email address" onChange={getFormData} required></input>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Gender <span>*</span></p>
                            </div>
                            <div className="enquiry-form-l-div2 gender-div-enq">
                                <label>
                                    <input value="male" type="radio" name="gender" onChange={getFormData} required></input>
                                    Male
                                </label>
                                <label>
                                    <input value="female" type="radio" name="gender" onChange={getFormData} required></input>
                                    Female
                                </label>
                                <label>
                                    <input value="others" type="radio" name="gender" onChange={getFormData} required></input>
                                    Other
                                </label>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Date of Birth <span>*</span></p>
                            </div>
                            <div className="enquiry-form-l-div2">
                                <input type="date" name="dob" placeholder="Enter date of birth" onChange={getFormData} required></input>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Qualification <span>*</span></p>
                            </div>
                            <div className="enquiry-form-l-div2">
                                <input type="text" name="qualification" onChange={getFormData} placeholder="Enter higher qualification" required></input>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Passedout Year <span>*</span></p>
                            </div>
                            <div className="enquiry-form-l-div2">
                                <input type="text" name="passout" value={enqData.passout} onChange={getPassout} placeholder="Enter Passedout Year (yyyy)" required></input>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Current Company</p>
                            </div>
                            <div className="enquiry-form-l-div2">
                                <input type="text" name="company" onChange={getFormData} placeholder="Enter Current Company"></input>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Domain</p>
                            </div>
                            <div className="enquiry-form-l-div2">
                                <input type="text" name="domain" onChange={getFormData} placeholder="Enter Domain"></input>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1 addres-enq-div1">
                                <p>Address</p>
                            </div>
                            <div className="enquiry-form-l-div2">
                                <textarea rows="3" name="address" onChange={getFormData} placeholder="Enter Your Current Address"></textarea>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Course</p>
                            </div>
                            <div className="enquiry-form-l-div2 enq-multi-course">
                                <Select
                                    onChange={getCourseData}
                                    isMulti
                                    name="colors"
                                    options={coursesList}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Joining Date</p>
                            </div>
                            <div className="enquiry-form-l-div2">
                                <input type="date" name="joinDate" placeholder="Enter Joining Date" onChange={getFormData}></input>
                            </div>
                        </div>
                        <div className="enquiry-form-label">
                            <div className="enquiry-form-l-div1">
                                <p>Batch Timing</p>
                            </div>
                            <div className="enquiry-form-l-div2">
                                <select defaultValue="default" name="timing" onChange={getFormData} >
                                    <option value="default">Select Batch Time</option>
                                    {batchTimeMap}
                                </select>
                            </div>
                        </div>
                        <div className="enq-submit-div">
                            <button type="submit" ref={submitBtnRef}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
