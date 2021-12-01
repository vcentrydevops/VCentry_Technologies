import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../ResumeStyleSheets/PersonalDetail.css'
import PhoneInput from 'react-phone-input-2'

function PersonalDetails(props) {
    const { setprogressLevel, setpersonData,setslideShow, personData } = props
    const [personalData, setpersonalData] = useState({ mobileNo: "", email: "", userName: "" })
    const [warning, setwarning] = useState({
        mobileNo: false,
        email: false,
        userName: false,
        numberLen:false
    })
    const history = useHistory()
    useEffect(() => {
        if (personData) {
            setpersonalData(personData)
        }
    }, [props])

    const setPersonalDetails = (e) => {
        e.preventDefault()
        if (!personalData.userName) {
            setwarning({ userName: true })
        } else if (!personalData.email) {
            setwarning({ email: true })
        } else if (!personalData.mobileNo) {
            setwarning({ mobileNo: true })
        } else if (personalData.mobileNo.length !== 12) {
            setwarning({numberLen:true})
        } else {
            setpersonData(personalData)
            setprogressLevel(34.5)
            setslideShow(110)
            // history.push('/resume/education_detail')
        }
    }

    const previousPage = () => {
        setpersonData(personalData)
        setprogressLevel(0)
        setslideShow(0)
        // history.push('/resume')
    }

    const getPersonalData = (e) => {
        setwarning({
            mobileNo: false,
            email: false,
            userName: false,
            numberLen:false
        })
        if (e) {
            setpersonalData({ ...personalData, [e.target.name]: e.target.value })
        }
    }

    const setMobileNo = (e) => {
        setwarning({
            mobileNo: false,
            email: false,
            userName: false
        })
        if (e) {
            setpersonalData({ ...personalData, mobileNo: e })
        }
    }

    return (
        <div>
            <div className="user-form">
                <div className="user-detail-div">
                    <label htmlFor="username">
                        <div className="user-label-name">
                            <p>User Name</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="personal-div-input">
                            <input defaultValue={personData.userName ? personData.userName : ""} className="user-input" id="username" type='text' name="userName" placeholder="Enter the username" onChange={getPersonalData} required></input>
                        </div>
                    </label>
                </div>
                {warning.userName && <div className="warning-div">
                    <p>Please enter user name</p>
                </div>
                }
                <div className="user-detail-div">
                    <label htmlFor="email">
                        <div className="user-label-name">
                            <p>Email</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="personal-div-input">
                            <input defaultValue={personData.email ? personData.email : ""} className="user-input" id="email" type='email' name="email" placeholder="Enter the email" onChange={getPersonalData} required></input>
                        </div>
                    </label>
                </div>
                {warning.email && <div className="warning-div">
                    <p>Please enter email</p>
                </div>
                }
                <div className="user-detail-div">
                    <label htmlFor="mobile">
                        <div className="user-label-name">
                            <p>Mobile No</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="personal-div-input">
                            <PhoneInput value={personalData.mobileNo} onChange={setMobileNo} name="mobileNo" country="in"></PhoneInput>
                        </div>
                    </label>
                </div>
                {warning.mobileNo && <div className="warning-div">
                    <p>Please enter mobile number</p>
                </div>
                }
                {warning.numberLen && <div className="warning-div">
                    <p>Please enter valid mobile number</p>
                </div>
                }
            </div>
            <div className="route-links">
                <button onClick={previousPage} disabled={true}>
                    Back
                </button>
                <button onClick={setPersonalDetails}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default PersonalDetails
