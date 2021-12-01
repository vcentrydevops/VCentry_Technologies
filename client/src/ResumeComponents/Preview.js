import React, { Fragment, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../ResumeStyleSheets/PreviewResume.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

export default function Preview(props) {
    const { personData, eduData, carrierData,setslideShow, resumeData, setprogressLevel, setProgressBar } = props
    const [submitBtn, setsubmitBtn] = useState(false)
    const token = sessionStorage.getItem('vcentry_token')
    const history = useHistory()
    useEffect(() => {
        if (!personData.mobileNo) {
            history.push('/resume')
        }
    }, [])

    const editPage = () => {
        setsubmitBtn(false)
        setprogressLevel(0)
        setslideShow(0)
        setProgressBar(false)
        history.push("/resume")
    }

    const submitData = () => {
        console.log(props);
        setsubmitBtn(true)
        let data1;
        const data = new FormData()
        data.append('file', resumeData)
        data.append('upload_preset', 'user-resume')
        data.append('cloud_name', 'vcentrytechnology')
        // axios.post('https://api.cloudinary.com/v1_1/vcentrytechnology/image/upload',data).then((res) => {
        if (carrierData.fresher === true) {
            data1 = {
                mobileNo: personData.mobileNo,
                sslcDetails: eduData.sslcDetails,
                sscDetails: eduData.sscDetails,
                ugDetails: eduData.ugDetails,
                pgDetails: eduData.pgDetails,
                fresher: true,
                technologies: carrierData.technologies,
                resume: resumeData
            }
        } else {
            data1 = {
                mobileNo: personData.mobileNo,
                sslcDetails: eduData.sslcDetails,
                sscDetails: eduData.sscDetails,
                ugDetails: eduData.ugDetails,
                pgDetails: eduData.pgDetails,
                currentCompany: carrierData.currentCompany,
                domain: carrierData.domain,
                experience: carrierData.experience,
                workingStatus: carrierData.workingStatus,
                noticePeriod: carrierData.noticePeriod,
                technologies: carrierData.technologies,
                resume: resumeData,
                fresher: false
            }
        }
        axios.post('/resume/user/addUserInfo', data1, {
            headers: { authorization: token }
        }).then(res => {
            toast.success(res.data.successMessage)
            setTimeout(() => {
                sessionStorage.clear()
                window.location.reload()
            }, 1000);
        }).catch(err => {
            if (err.response.data.warnMessage) {
                toast.warn(err.response.data.warnMessage)
            } else if (err.response.data.errorMessage) {
                toast.error(err.response.data.errorMessage)
            } else {
                toast.error("Something went wrong")
            }
            setsubmitBtn(false)
        })
        // }).catch(err => {
        //     setsubmitBtn(false)
        // })

    }

    return (
        <Fragment>
            <ToastContainer />
            <div className="preview-form">
                {submitBtn && <div className="animation-div">
                    <div className="animation-content"></div>
                </div>}
                <div className="preview-form-content" style={submitBtn ? { opacity: "0.5" } : { opacity: "1" }}>
                    <div>
                        <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>User Name</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                <p>{personData.userName}</p>
                            </div>
                        </div>
                        <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>Email</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                <p>{personData.email}</p>
                            </div>
                        </div>
                        <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>Mobile Num</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                <p>{personData.mobileNo.slice(2, personData.mobileNo.length)}</p>
                            </div>
                        </div>
                        <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>SSLC Details</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                {eduData.sslcDetails.percentage ? <p>{eduData.sslcDetails.percentage} - {eduData.sslcDetails.passedOut}</p> : <p>NAN</p>}
                            </div>
                        </div>
                        <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>SSC Details</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                {eduData.sscDetails.percentage ? <p>{eduData.sscDetails.percentage} - {eduData.sscDetails.passedOut}</p> : <p>NAN</p>}
                            </div>
                        </div>
                        <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>UG Details</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                {eduData.ugDetails.percentage ? <p>{eduData.ugDetails.percentage} - {eduData.ugDetails.passedOut}</p> : <p>NAN</p>}
                            </div>
                        </div>
                        <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>PG Details</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                {eduData.pgDetails.percentage ? <p>{eduData.pgDetails.percentage} - {eduData.pgDetails.passedOut}</p> : <p>NAN</p>}
                            </div>
                        </div>
                        {carrierData.currentCompany && !carrierData.fresher && <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>Current Company</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                <p>{carrierData.currentCompany}</p>
                            </div>
                        </div>}
                        {carrierData.domain && !carrierData.fresher && <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>Domain</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                <p>{carrierData.domain}</p>
                            </div>
                        </div>}
                        {carrierData.experience && !carrierData.fresher && <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>Experience</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                <p>{carrierData.experience}</p>
                            </div>
                        </div>}
                        {carrierData.workingStatus && !carrierData.fresher && <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>workingStatus</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                {carrierData.workingStatus === 'true' && <p>Working</p>}
                                {carrierData.workingStatus === 'false' && <p>Not Working</p>}
                            </div>
                        </div>}
                        {carrierData.workingStatus === "true" &&carrierData.noticePeriod && !carrierData.fresher && <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>Notice Period</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                <p>{carrierData.noticePeriod}</p>
                            </div>
                        </div>}
                        {resumeData && <div className="prev-cont-div">
                            <div className="prev-label-name">
                                <p>Resume</p>
                                <span className="span-display">:</span>
                            </div>
                            <div className="prev-div-input">
                                <p>{resumeData}</p>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="route-links">
                <button className="edit-prev-btn" onClick={editPage} disabled={submitBtn}>Edit</button>
                <button className="edit-prev-btn" onClick={submitData} disabled={submitBtn}>Submit</button>
            </div>
        </Fragment>
    )
}
