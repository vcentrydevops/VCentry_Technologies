import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../ResumeStyleSheets/EducationDetail.css'
// import YearPicker from "react-year-picker";
import Calendar from './Calendar';

export default function EducationDetails(props) {
    const { setprogressLevel, setslideShow, seteduData, eduData } = props
    const [items, setitems] = useState([])
    const [eduDetails, seteduDetails] = useState({
        sslcDetails: {},
        sscDetails: {},
        ugDetails: {},
        pgDetails: {}
    })

    const [warning, setwarning] = useState({
        sslcWarning: false,
        sscWarning: false,
        ugWarning: false,
        pgWarning: false
    })
    const [calendar, setcalendar] = useState({
        sslc: false,
        pg: false,
        ug: false,
        ssc: false
    })

    const history = useHistory()

    const submiteduDetail = (e) => {
        e.preventDefault()
        if (!eduDetails.sslcDetails.percentage || !eduDetails.sslcDetails.passedOut) {
            setwarning({ sslcWarning: true })
        } else if (eduDetails.sscDetails.percentage && !eduDetails.sscDetails.passedOut) {
            setwarning({ sscWarning: true })
        } else if (!eduDetails.sscDetails.percentage && eduDetails.sscDetails.passedOut) {
            setwarning({ sscWarning: true })
        } else if (!eduDetails.ugDetails.percentage || !eduDetails.ugDetails.passedOut) {
            setwarning({ ugWarning: true })
        } else if (eduDetails.pgDetails.percentage && !eduDetails.pgDetails.passedOut) {
            setwarning({ pgWarning: true })
        } else if (!eduDetails.pgDetails.percentage && eduDetails.pgDetails.passedOut) {
            setwarning({ pgWarning: true })
        }
        else {
            seteduData(eduDetails)
            window.scroll({ top: 0 })
            setprogressLevel(68)
            setslideShow(220)
            // history.push('/resume/carrer_detail')
        }
    }

    const previousPage = (e) => {
        seteduData(eduDetails)
        window.scroll({ top: 0 })
        setprogressLevel(0)
        setslideShow(0)
        // history.push('/resume')
    }


    const getsslcDetails = (e) => {
        setwarning({})
        setcalendar({})
        if (e.target.name === "percentage" && e.target.value <= 100 && e.target.value >= 0) {
            seteduDetails({ ...eduDetails, sslcDetails: { ...eduDetails.sslcDetails, [e.target.name]: e.target.value } })
        } else if (e.target.name == "passedOut") {
            seteduDetails({ ...eduDetails, sslcDetails: { ...eduDetails.sslcDetails, passedOut: e.target.value } })
        }
        else {
            seteduDetails({ ...eduDetails })
        }
    }

    const getsscDetails = (e) => {
        setwarning({})
        setcalendar({})
        if (e.target.name === "percentage" && e.target.value <= 100 && e.target.value >= 0) {
            seteduDetails({ ...eduDetails, sscDetails: { ...eduDetails.sscDetails, [e.target.name]: e.target.value } })
        } else if (e.target.name === "passedOut") {
            seteduDetails({ ...eduDetails, sscDetails: { ...eduDetails.sscDetails, passedOut: e.target.value } })
        }
    }

    const getpgDetails = (e) => {
        setwarning({})
        setcalendar({})
        if (e.target.name === "percentage" && e.target.value <= 100 && e.target.value >= 0) {
            seteduDetails({ ...eduDetails, pgDetails: { ...eduDetails.pgDetails, [e.target.name]: e.target.value } })
        } else if (e.target.name === "passedOut") {
            seteduDetails({ ...eduDetails, pgDetails: { ...eduDetails.pgDetails, passedOut: e.target.value } })
        }
    }

    const getugDetails = (e) => {
        setwarning({})
        setcalendar({})
        if (e.target.name === "percentage" && e.target.value <= 100 && e.target.value >= 0) {
            seteduDetails({ ...eduDetails, ugDetails: { ...eduDetails.ugDetails, [e.target.name]: e.target.value } })
        } else if (e.target.name === "passedOut") {
            seteduDetails({ ...eduDetails, ugDetails: { ...eduDetails.ugDetails, passedOut: e.target.value } })
        }
    }
    
    useEffect(() => {
        if (eduData) {
            seteduDetails(eduData)
        }
    }, [eduData])

    useEffect(() => {
        const date = new Date()
        for (let i = date.getFullYear(); i >= 1970; i--) {
            items.push(i)
        }
    }, [])

    return (
        <div onClick={calendar.sslc || calendar.pg || calendar.ssc || calendar.ug ? () => setcalendar({}) : () => { }}>
            <div className="user-form">
                <div className="user-detail-div">
                    <label htmlFor="10th-details">
                        <div className="user-label-name">
                            <p>10<span style={{ fontSize: "11px" }}>th</span> Details</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="education-div">
                            <label>
                                <input
                                    defaultValue={eduData.sslcDetails.percentage ? eduData.sslcDetails.percentage : ""}
                                    className="user-input" type='number' name="percentage"
                                    onChange={getsslcDetails} placeholder="Percentage"
                                    value={eduDetails.sslcDetails.percentage}
                                    required></input>
                            </label>
                            <label onClick={() => setcalendar({ sslc: true })}>
                                <div className="calender-div">
                                    {!eduDetails.sslcDetails.passedOut ? <p className="default-calen">Passed Out Year</p> :
                                        <p className="value-calen">{eduDetails.sslcDetails.passedOut}</p>
                                    }
                                    {eduDetails.sslcDetails.passedOut && <p className="x-design" onClick={() => { seteduDetails({ ...eduDetails, sslcDetails: { ...eduDetails.sslcDetails, passedOut: "" } }) }}>X</p>}
                                </div>
                                {/* <YearPicker onChange={getsslcDetails}></YearPicker> */}
                            </label>
                            {calendar.sslc && <Calendar year1={eduDetails.sscDetails.passedOut || eduDetails.ugDetails.passedOut || eduDetails.pgDetails.passedOut} items={items} value={eduDetails.sslcDetails.passedOut} getValue={getsslcDetails}></Calendar>}
                        </div>
                    </label>
                </div>
                {warning.sslcWarning && <div className="warning-div">
                    <p>Please enter 10<span style={{ fontSize: "11px" }}>th</span> % and passedOut year</p>
                </div>
                }
                <div className="user-detail-div">
                    <label htmlFor="12th-details">
                        <div className="user-label-name">
                            <p>12<span style={{ fontSize: "11px" }}>th</span> Details</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="education-div">
                            <label>
                                <input className="user-input"
                                    value={eduDetails.sscDetails.percentage}
                                    defaultValue={eduData.sscDetails.percentage ? eduData.sscDetails.percentage : ""}
                                    type='number' name="percentage" placeholder="Percentage" onChange={getsscDetails}
                                    required={eduDetails.sscDetails.passedOut ? true : false}
                                ></input>
                            </label>
                            <label onClick={() => setcalendar({ ssc: true })}>
                                <div className="calender-div">
                                    {!eduDetails.sscDetails.passedOut ? <p className="default-calen">Passed Out Year</p> :
                                        <p className="value-calen">{eduDetails.sscDetails.passedOut}</p>
                                    }
                                    {eduDetails.sscDetails.passedOut && <p className="x-design" onClick={() => { seteduDetails({ ...eduDetails, sscDetails: { ...eduDetails.sscDetails, passedOut: "" } }) }}>X</p>}
                                </div>
                                {/* <YearPicker onChange={getsscDetails}></YearPicker> */}
                            </label>
                            {calendar.ssc && <Calendar year1={eduDetails.ugDetails.passedOut || eduDetails.pgDetails.passedOut} year={eduDetails.sslcDetails.passedOut} items={items} value={eduDetails.sscDetails.passedOut} getValue={getsscDetails}></Calendar>}
                        </div>
                    </label>
                </div>
                {warning.sscWarning && <div className="warning-div">
                    <p>Please enter 12<span style={{ fontSize: "11px" }}>th</span> % and passedOut year</p>
                </div>
                }
                <div className="user-detail-div">
                    <label htmlFor="ug-details">
                        <div className="user-label-name">
                            <p>UG Details</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="education-div">
                            <label>
                                <input className="user-input"
                                    value={eduDetails.ugDetails.percentage}
                                    defaultValue={eduData.ugDetails.percentage ? eduData.ugDetails.percentage : ""}
                                    type='number' name="percentage" placeholder="Percentage" onChange={getugDetails} required></input>
                            </label>
                            <label onClick={() => setcalendar({ ug: true })}>
                                <div className="calender-div">
                                    {!eduDetails.ugDetails.passedOut ? <p className="default-calen">Passed Out Year</p> :
                                        <p className="value-calen">{eduDetails.ugDetails.passedOut}</p>
                                    }
                                    {eduDetails.ugDetails.passedOut && <p className="x-design" onClick={() => { seteduDetails({ ...eduDetails, ugDetails: { ...eduDetails.ugDetails, passedOut: "" } }) }}>X</p>}
                                </div>
                                {/* <YearPicker onChange={getugDetails}></YearPicker> */}
                            </label>
                            {calendar.ug && <Calendar year1={eduDetails.pgDetails.passedOut} year={eduDetails.sscDetails.passedOut ? eduDetails.sscDetails.passedOut : eduDetails.sslcDetails.passedOut} styleObj={window.screen.width < 765 ? { top: "-170px" } : { top: "-210px" }} items={items} value={eduDetails.ugDetails.passedOut} getValue={getugDetails}></Calendar>}
                        </div>
                    </label>
                </div>
                {warning.ugWarning && <div className="warning-div">
                    <p>Please enter UG % and passedOut year</p>
                </div>
                }
                <div className="user-detail-div">
                    <label htmlFor="pg-details">
                        <div className="user-label-name">
                            <p>PG Details</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="education-div">
                            <label>
                                <input className="user-input"
                                    value={eduDetails.pgDetails.percentage}
                                    defaultValue={eduData.pgDetails.percentage ? eduData.pgDetails.percentage : ""}
                                    type='number' name="percentage" placeholder="Percentage"
                                    onChange={getpgDetails}
                                    required={eduDetails.pgDetails.passedOut ? true : false}
                                ></input>
                            </label>
                            <label onClick={() => { setcalendar({ pg: true }) }}>
                                <div className="calender-div">
                                    {!eduDetails.pgDetails.passedOut ? <p className="default-calen">Passed Out Year</p> :
                                        <p className="value-calen">{eduDetails.pgDetails.passedOut}</p>
                                    }
                                    {eduDetails.pgDetails.passedOut && <p className="x-design" onClick={() => { seteduDetails({ ...eduDetails, pgDetails: { ...eduDetails.pgDetails, passedOut: "" } }) }}>X</p>}
                                </div>
                                {/* <YearPicker onChange={getpgDetails}></YearPicker> */}
                            </label>
                            {calendar.pg && <Calendar year={eduDetails.ugDetails.passedOut || eduDetails.sscDetails.passedOut || eduDetails.sslcDetails.passedOut} styleObj={window.screen.width < 765 ? { top: "-170px" } : { top: "-210px" }} items={items} value={eduDetails.pgDetails.passedOut} getValue={getpgDetails}></Calendar>}
                        </div>
                    </label>
                </div>
                {warning.pgWarning && <div className="warning-div">
                    <p>Please enter PG % and passedOut year</p>
                </div>
                }
            </div>
            <div className="route-links">
                <button onClick={previousPage}>Back</button>
                <button onClick={submiteduDetail}>Next</button>
            </div>
        </div>
    )
}
