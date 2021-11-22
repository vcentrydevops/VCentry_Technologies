import React, { createRef, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../ResumeStyleSheets/CarrerDetails.css'

export default function CarrerDetails(props) {
    const { setprogressLevel, carrierData, setslideShow, setcarrierData } = props
    const technRef = createRef()
    const [techn, settechn] = useState()

    const [carrierDetails, setcarrierDetails] = useState({
        technologies: [],
        experience: "",
        noticePeriod: "",
        workingStatus: "false"
    })

    const [warning, setwarning] = useState({
        company: false,
        domain: false,
        experience: false,
        noticePeriod: false
    })

    useEffect(() => {
        if (carrierData) {
            setcarrierDetails(carrierData)
        }
    }, [carrierData])

    console.log(carrierData);

    const history = useHistory()
    const submitCarrerDetail = (e) => {
        if (!carrierDetails.fresher && !carrierDetails.currentCompany) {
            setwarning({ company: true })
        } else if (!carrierDetails.fresher && !carrierDetails.domain) {
            setwarning({ domain: true })
        }
        else if (!carrierDetails.fresher && !carrierDetails.experience) {
            setwarning({ experience: true })
        }
        else if (!carrierDetails.fresher && carrierDetails.workingStatus === "true" && !carrierDetails.noticePeriod) {
            setwarning({ noticePeriod: true })
        }
        else {
            e.preventDefault()
            setcarrierData(carrierDetails)
            window.scroll({ top: 0 })
            setprogressLevel(100)
            setslideShow(330)
            // history.push('/resume/resume_upload')
        }
    }

    const previousPage = () => {
        setcarrierData(carrierDetails)
        window.scroll({ top: 0 })
        setprogressLevel(34.5)
        setslideShow(110)
        // history.push('/resume/education_detail')
    }

    const getCarrierDetails = (e) => {
        setwarning({})
        if (e.target.name === "fresher") {
            setcarrierDetails({ ...carrierDetails, [e.target.name]: e.target.checked })
        } else if (e.target.name === "experience" && 0 <= e.target.value) {
            setcarrierDetails({ ...carrierDetails, [e.target.name]: e.target.value })
        } else if (e.target.name === "noticePeriod" && 0 <= e.target.value && 6 >= e.target.value) {
            setcarrierDetails({ ...carrierDetails, [e.target.name]: e.target.value })
        }else if (e.target.name !== "experience" && e.target.name !== "noticePeriod") {
            setcarrierDetails({ ...carrierDetails, [e.target.name]: e.target.value })
        } else {
            setcarrierDetails({ ...carrierDetails })
        }
    }

    const addTechnology = (e) => {
        console.log(e.type);
        if (e.type === "dblclick" && techn) {
            carrierDetails.technologies.push(techn)
            technRef.current.value = ""
            setcarrierDetails({ ...carrierDetails })
        } else if (e.key !== "Enter") {
            if (e.target.value) {
                settechn(e.target.value)
            }
        }
        else if (techn) {
            carrierDetails.technologies.push(techn)
            technRef.current.value = ""
            setcarrierDetails({ ...carrierDetails })
        } else {
            setcarrierDetails({ ...carrierDetails })
        }
    }

    const technologyMap = carrierDetails.technologies.map((data, index) => {
        return <div key={index + data} className="techn-list-map">
            <p>{data}</p>
            <p onClick={() => {
                carrierDetails.technologies.splice(index, 1)
                setcarrierDetails({ ...carrierDetails })
            }}>X</p>
        </div>
    })

    return (
        <div>
            <div className="user-form carrier-form">
                <div className="user-detail-div">
                    <label htmlFor="fresher">
                        <div className="user-label-name">
                            <p>Fresher</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="personal-div-input">
                            <label htmlFor="fresherYes" className="working-status-label">
                                <input id="fresherYes"
                                    checked={carrierDetails.fresher?carrierDetails.fresher:false}
                                    className="fresher-checkbox"
                                    type='checkbox' name="fresher" onChange={getCarrierDetails}></input>
                                <div className="custom-switch"></div>
                            </label>
                            {/* <label htmlFor="fresherNo" className="working-status-label">
                                <span>No</span>
                                <input id="fresherNo"
                                    defaultChecked={carrierData.fresher === 'false' ? true : false}
                                    value={false} type='radio' name="fresher" onChange={getCarrierDetails}></input>
                                <div className="custom-radio"></div>
                            </label> */}
                        </div>
                    </label>
                </div>
                <div className="user-detail-div">
                    <label htmlFor="technologies" className="technology-div">
                        <div className="user-label-name">
                            <p>Technologies Known</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="personal-div-input">
                            <input className="user-input"
                                id="technologies" type='text' ref={technRef} name="technologies" placeholder="Enter the technology" onChange={addTechnology} onDoubleClick={addTechnology} onKeyPress={addTechnology}></input>
                        </div>
                        {carrierDetails.technologies.length > 0 && <div className="technology-array">
                            {technologyMap}
                        </div>}
                    </label>
                </div>
                {!carrierDetails.fresher && <div className="user-detail-div">
                    <label htmlFor="currentCompany">
                        <div className="user-label-name">
                            <p>Company</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="personal-div-input">
                            <input className="user-input"
                                defaultValue={carrierDetails.currentCompany}
                                id="username" type='text' name="currentCompany" placeholder="Enter the Comapany name" onChange={getCarrierDetails} required></input>
                        </div>
                    </label>
                </div>}
                {warning.company && <div className="warning-div">
                    <p>Please enter Company name</p>
                </div>
                }
                {!carrierDetails.fresher && <div className="user-detail-div">
                    <label htmlFor="domain">
                        <div className="user-label-name">
                            <p>Domain</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="personal-div-input">
                            <input className="user-input"
                                defaultValue={carrierDetails.domain}
                                id="domain" type='text' name="domain" placeholder="Enter your domain" onChange={getCarrierDetails}></input>
                        </div>
                    </label>
                </div>}
                {warning.domain && <div className="warning-div">
                    <p>Please enter Domain</p>
                </div>
                }
                {!carrierDetails.fresher && <div className="user-detail-div">
                    <label htmlFor="experience">
                        <div className="user-label-name">
                            <p>Experience</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="personal-div-input">
                            <input className="user-input"
                                defaultValue={carrierDetails.experience}
                                id="experience" type='number' name="experience" placeholder="Enter your experience" onChange={getCarrierDetails}></input>
                        </div>
                    </label>
                </div>}
                {warning.experience && <div className="warning-div">
                    <p>Please enter Experience</p>
                </div>
                }
                {!carrierDetails.fresher && <div className="user-detail-div">
                    <label htmlFor="workingStatus">
                        <div className="user-label-name user-label-name-1">
                            <p>Working Or Not</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="personal-div-input">
                            <label htmlFor="workingYes" className="working-status-label">
                                <span>Yes</span>
                                <input id="workingYes"
                                    checked={carrierDetails.workingStatus == "true" ? true : false}
                                    value={true} type='radio' name="workingStatus" onChange={getCarrierDetails}></input>
                                <div className="custom-radio"></div>
                            </label>
                            <label htmlFor="workingNo" className="working-status-label">
                                <span>No</span>
                                <input id="workingNo"
                                    checked={carrierDetails.workingStatus == "false" ? true : false}
                                    value={false} type='radio' name="workingStatus" onChange={getCarrierDetails}></input>
                                <div className="custom-radio"></div>
                            </label>
                        </div>
                    </label>
                </div>}
                {carrierDetails.workingStatus === "true" && !carrierDetails.fresher && <div className="user-detail-div">
                    <label htmlFor="notice-period">
                        <div className="user-label-name user-label-name-1">
                            <p>Notice Period</p>
                            <span className="span-display">:</span>
                        </div>
                        <div className="personal-div-input">
                            <input className="user-input"
                                defaultValue={carrierDetails.noticePeriod}
                                id="notice-period" type='number' name="noticePeriod" placeholder="Enter notice period" onChange={getCarrierDetails}></input>
                        </div>
                    </label>
                </div>}
                {warning.noticePeriod && <div className="warning-div">
                    <p>Please enter Notice Period</p>
                </div>
                }
            </div>
            <div className="route-links">
                <button onClick={previousPage}>Back</button>
                <button onClick={submitCarrerDetail}>Next</button>
            </div>
        </div>
    )
}
