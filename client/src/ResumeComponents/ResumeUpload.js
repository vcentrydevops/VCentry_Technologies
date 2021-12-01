import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import '../ResumeStyleSheets/ResumeUpload.css'

export default function ResumeUpload(props) {
    const { setprogressLevel, resumeData, setresumeData,setslideShow, setProgressBar } = props
    const history = useHistory()
    const [resumeNot, setresumeNot] = useState(false)
    const [fileDetails, setfileDetails] = useState()
    const [resumeWarning, setresumeWarning] = useState(false)
    const getResume = (e) => {
        setresumeNot(false)
        setresumeWarning(false)
        if (e.target.files.length > 0) {
            const file = e.target.files[0].name
            if (file.includes('.pdf') || file.includes('.doc')) {
                setfileDetails(e.target.files[0].name)
            } else {
                setresumeWarning(true)
            }
        }
    }

    useEffect(() => {
        if (resumeData) {
            setfileDetails(resumeData)
        }
    }, [resumeData])

    const submitResumeDetail = (e) => {
        e.preventDefault()
        if (fileDetails) {
            setresumeData(fileDetails)
            setprogressLevel(100)
            setslideShow(330)
            setProgressBar(true)
            history.push('/resume/preview_resume')
        } else {
            setresumeNot(true)
        }
    }

    const previousPage = (e) => {
            e.preventDefault()
            setresumeData(fileDetails)
            setprogressLevel(68)
            setslideShow(220)
            // history.push('/resume/carrer_detail')
    }
    return (
        <div>
            <div className="user-form">
                <div className="resume-upload-div">
                    <label htmlFor="resume-file">
                        <input style={{ display: "none" }} id="resume-file" type="file" onChange={getResume}></input>
                        <div className="customize-choosefile">
                            <span>Choose File</span>
                            {fileDetails ? <p>{fileDetails}</p> : <p className="no-file-p">No file Choosen</p>}
                        </div>
                    </label>
                </div>
                {resumeWarning && <div className="resume-warning-div">
                    <p>.docx and .pdf file only accepted</p>
                </div>}
                {resumeNot && <div className="resume-warning-div">
                    <p>Please choose your resume</p>
                </div>
                }
            </div>
            <div className="route-links">
                <button onClick={previousPage}>Back</button>
                <button onClick={submitResumeDetail}>Preview</button>
            </div>
        </div>
    )
}
