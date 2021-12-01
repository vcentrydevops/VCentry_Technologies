import React, { createRef, Fragment, useState } from 'react'
import { useTable } from 'react-table'
import { FaEye, FaTrash } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { toast, ToastContainer } from 'react-toastify'
import PhoneInput from 'react-phone-input-2'
import API from '../API/Service'

export default function ResumeTable(props) {
    const { setrefresh, columns, data } = props
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })
    const technRef = createRef()
    const [techn, settechn] = useState()
    const [warning, setwarning] = useState({
        phone: false,
        phoneMsg: ""
    })
    const submitBtnRef = createRef()

    const admintoken = sessionStorage.getItem('vcentry_admin')
    const [modal, setmodal] = useState(false)
    const [specificResume, setspecificResume] = useState({
        userInfo: {
            technologies: []
        }
    })
    const { userInfo } = specificResume
    const [editOpt, seteditOpt] = useState(true)

    const getModalResume = (index) => {
        setmodal(true)
        setspecificResume(data[index])
        console.log(data[index]);
    }

    const closeModalResume = () => {
        seteditOpt(true)
        setmodal(false)
        setspecificResume({
            userInfo: {
                technologies: []
            }
        })
    }

    const updateUserInfo = (e) => {
        const { mobileNo } = specificResume.userInfo
        e.preventDefault()
        seteditOpt(true)
        if (!mobileNo || mobileNo.length < 12) {
            setwarning({
                phone: true,
                phoneMsg: "enter valid mobile number"
            })
            seteditOpt(false)
        } else if (!userInfo.fresher && !userInfo.workingStatus) {
            setwarning({
                work: true,
                workMsg: "enter working status"
            })
            seteditOpt(false)
        } else {
            setwarning({})
            API.putApi('/resume/admin/editUserInfo', specificResume, { headers: { authorization: `Bearer ${admintoken}` } }).then((res) => {
                toast.success(res.data.successMessage)
                setmodal(false)
                setrefresh()
            }).catch(err => {
                console.log(err.response);
                seteditOpt(false)
            })
        }
    }

    const updateData = (e) => {
        setwarning({})
        if (specificResume) {
            setspecificResume({ ...specificResume, [e.target.name]: e.target.value })
        }
    }

    const updateUserInfoData = (e) => {
        setwarning({})
        if (specificResume) {
            if (e.target.name == "fresher") {
                setspecificResume({ ...specificResume, userInfo: { ...specificResume.userInfo, [e.target.name]: e.target.checked } })
            } else {
                setspecificResume({ ...specificResume, userInfo: { ...specificResume.userInfo, [e.target.name]: e.target.value } })
            }
        }
    }

    const updateEduDetail = (e, course) => {
        setwarning({})
        if (course === "sslcDetails") {
            setspecificResume({ ...specificResume, userInfo: { ...specificResume.userInfo, [course]: { ...specificResume.userInfo.sslcDetails, [e.target.name]: e.target.value } } })
        } else if (course === "sscDetails") {
            setspecificResume({ ...specificResume, userInfo: { ...specificResume.userInfo, [course]: { ...specificResume.userInfo.sscDetails, [e.target.name]: e.target.value } } })
        } else if (course === "ugDetails") {
            setspecificResume({ ...specificResume, userInfo: { ...specificResume.userInfo, [course]: { ...specificResume.userInfo.ugDetails, [e.target.name]: e.target.value } } })
        } else if (course === "pgDetails") {
            setspecificResume({ ...specificResume, userInfo: { ...specificResume.userInfo, [course]: { ...specificResume.userInfo.pgDetails, [e.target.name]: e.target.value } } })
        } else {
            setspecificResume({ ...specificResume })
        }
    }

    const updateMobileNo = (e) => {
        setwarning({})
        if (specificResume) {
            setspecificResume({ ...specificResume, userInfo: { ...specificResume.userInfo, mobileNo: e } })
        }
    }

    const addTechnology = (e) => {
        if (e.type === "dblclick" && techn) {
            specificResume.userInfo.technologies.push(techn)
            setspecificResume({ ...specificResume })
            technRef.current.value = ""
            settechn()
        } else if (e.key !== "Enter") {
            if (e.target.value) {
                settechn(e.target.value)
            }
        }
        else {
            if (techn) {
                specificResume.userInfo.technologies.push(techn)
                setspecificResume({ ...specificResume })
                technRef.current.value = ""
                settechn()
            }
        }
    }

    const deleteResume = (_id) => {
        const deleteOpt = window.confirm("You want to delete this resume")
        if (deleteOpt) {
            API.deleteApi(`/resume/admin/user-del/${_id}`).then(res => {
                setrefresh(Date.now())
            }).catch(err => {
                console.log(err.response);
            })
        }
    }

    const technologyMap = specificResume.userInfo.technologies.map((data, index) => {
        return <div key={index + data} className="techn-list-map">
            <p>{data}</p>
            {!editOpt && <p onClick={() => {
                specificResume.userInfo.technologies.splice(index, 1)
                setspecificResume({ ...specificResume })
            }}>X</p>}
        </div>
    })

    return (
        <Fragment>
            <ToastContainer />
            {modal && <div className="resume-detail-modal">
                <form className="resume-modal-content" onSubmit={updateUserInfo}>
                    <div className="resume-modal-header">
                        <p>User Details</p>
                        <i onClick={closeModalResume}><ImCross /></i>
                    </div>
                    <div className="resume-modal-body">
                        <div className="resume-modal-input">
                            <label>
                                <p>User Name<span>:</span></p>
                                <input defaultValue={specificResume.userName} disabled={editOpt ? true : false} name="userName" onChange={updateData} required></input>
                            </label>
                        </div>
                        <div className="resume-modal-input">
                            <label>
                                <p>Email<span>:</span></p>
                                <input defaultValue={specificResume.email} disabled={editOpt ? true : false} name="email" type="email" onChange={updateData} required></input>
                            </label>
                        </div>
                        <div className="resume-modal-input">
                            <label>
                                <p>Mobile Number<span>:</span></p>
                                <div className="personal-div-input">
                                    <PhoneInput value={`${specificResume.userInfo.mobileNo}`} name="mobileNo" country="in" disabled={editOpt ? true : false} onChange={updateMobileNo}></PhoneInput>
                                </div>
                            </label>
                        </div>
                        {warning.phone && <div style={{ color: "red", marginLeft: "32%" }}>
                            <p>{warning.phoneMsg}</p>
                        </div>}
                        {specificResume.userInfo.sslcDetails && <div className="resume-modal-input">
                            <label>
                                <p>SSLC<span>:</span></p>
                                <div className="resume-modal-edu">
                                    <input defaultValue={specificResume.userInfo.sslcDetails.percentage} disabled={editOpt ? true : false} name="percentage" onChange={(e) => updateEduDetail(e, "sslcDetails")}></input>
                                    <input defaultValue={specificResume.userInfo.sslcDetails.passedOut} disabled={editOpt ? true : false} name="passedout" onChange={(e) => updateEduDetail(e, "sslcDetails")}></input>
                                </div>
                            </label>
                        </div>}
                        {specificResume.userInfo.sscDetails && <div className="resume-modal-input">
                            <label>
                                <p>SSC<span>:</span></p>
                                <div className="resume-modal-edu">
                                    <input defaultValue={specificResume.userInfo.sscDetails.percentage} disabled={editOpt ? true : false} name="percentage" onChange={(e) => updateEduDetail(e, "sscDetails")}></input>
                                    <input defaultValue={specificResume.userInfo.sscDetails.passedOut} disabled={editOpt ? true : false} name="passedout" onChange={(e) => updateEduDetail(e, "sscDetails")}></input>
                                </div>
                            </label>
                        </div>}
                        {specificResume.userInfo.ugDetails && <div className="resume-modal-input">
                            <label>
                                <p>UG<span>:</span></p>
                                <div className="resume-modal-edu">
                                    <input defaultValue={specificResume.userInfo.ugDetails.percentage} disabled={editOpt ? true : false} name="percentage" onChange={(e) => updateEduDetail(e, "ugDetails")}></input>
                                    <input defaultValue={specificResume.userInfo.ugDetails.passedOut} disabled={editOpt ? true : false} name="passedout" onChange={(e) => updateEduDetail(e, "ugDetails")}></input>
                                </div>
                            </label>
                        </div>}
                        {specificResume.userInfo.pgDetails && <div className="resume-modal-input">
                            <label>
                                <p>PG<span>:</span></p>
                                <div className="resume-modal-edu">
                                    <input defaultValue={specificResume.userInfo.pgDetails.percentage} disabled={editOpt ? true : false} name="percentage" onChange={(e) => updateEduDetail(e, "pgDetails")}></input>
                                    <input defaultValue={specificResume.userInfo.pgDetails.passedOut} disabled={editOpt ? true : false} name="passedout" onChange={(e) => updateEduDetail(e, "pgDetails")}></input>
                                </div>
                            </label>
                        </div>}
                        <div className="user-detail-div resume-modal-input">
                            <label htmlFor="fresher">
                                <div className="user-label-name">
                                    <p>Fresher</p>
                                    <span className="span-display">:</span>
                                </div>
                                <div className="personal-div-input">
                                    <label htmlFor="fresherYes" className="working-status-label">
                                        <input id="fresherYes"
                                            checked={specificResume.userInfo.fresher}
                                            className="fresher-checkbox"
                                            disabled={editOpt ? true : false}
                                            type='checkbox' name="fresher" onChange={updateUserInfoData}></input>
                                        <div className="custom-switch"></div>
                                    </label>
                                </div>
                            </label>
                        </div>
                        <div className="user-detail-div resume-modal-input resume-modal-array">
                            <label htmlFor="technologies" className="technology-div">
                                <div className="user-label-name">
                                    <p>Technologies Known</p>
                                    <span className="span-display">:</span>
                                </div>
                                {!editOpt && <div className="personal-div-input">
                                    <input className="user-input modal-disabled-input"
                                        disabled={editOpt ? true : false}
                                        ref={technRef}
                                        id="technologies" type='text' name="technologies" placeholder="Enter the technology"
                                        onChange={addTechnology} onDoubleClick={addTechnology} onKeyPress={addTechnology}
                                    ></input>
                                </div>}
                                {specificResume.userInfo.technologies.length > 0 && <div className="technology-array">
                                    {technologyMap}
                                </div>}
                            </label>
                        </div>
                        {!userInfo.fresher && <div className="user-detail-div resume-modal-input">
                            <label htmlFor="currentCompany">
                                <div className="user-label-name">
                                    <p>Company</p>
                                    <span className="span-display">:</span>
                                </div>
                                <div className="personal-div-input">
                                    <input className="user-input modal-disabled-input"
                                        disabled={editOpt ? true : false}
                                        defaultValue={userInfo.currentCompany}
                                        id="username" type='text' name="currentCompany" placeholder="Enter the Comapany name" onChange={updateUserInfoData} required={!userInfo.fresher}></input>
                                </div>
                            </label>
                        </div>}
                        {!userInfo.fresher && <div className="user-detail-div resume-modal-input">
                            <label htmlFor="domain">
                                <div className="user-label-name">
                                    <p>Domain</p>
                                    <span className="span-display">:</span>
                                </div>
                                <div className="personal-div-input">
                                    <input className="user-input modal-disabled-input"
                                        disabled={editOpt ? true : false}
                                        defaultValue={userInfo.domain}
                                        id="domain" type='text' name="domain" placeholder="Enter your domain" onChange={updateUserInfoData} required={!userInfo.fresher}></input>
                                </div>
                            </label>
                        </div>}
                        {!userInfo.fresher && <div className="user-detail-div resume-modal-input">
                            <label htmlFor="experience">
                                <div className="user-label-name">
                                    <p>Experience</p>
                                    <span className="span-display">:</span>
                                </div>
                                <div className="personal-div-input">
                                    <input className="user-input modal-disabled-input"
                                        defaultValue={userInfo.experience}
                                        disabled={editOpt ? true : false}
                                        id="experience" type='number' name="experience" placeholder="Enter your experience" onChange={updateUserInfoData} required={!userInfo.fresher}></input>
                                </div>
                            </label>
                        </div>}
                        {!userInfo.fresher && <div className="user-detail-div resume-modal-input">
                            <label htmlFor="workingStatus">
                                <div className="user-label-name user-label-name-1">
                                    <p>Working Or Not</p>
                                    <span className="span-display">:</span>
                                </div>
                                <div className="personal-div-input">
                                    <label htmlFor="workingYes" className="working-status-label">
                                        <span>Yes</span>
                                        <input id="workingYes"
                                            disabled={editOpt ? true : false}
                                            checked={userInfo.workingStatus == "true" ? true : false}
                                            value={true} type='radio' name="workingStatus" onChange={updateUserInfoData}></input>
                                        <div className="custom-radio"></div>
                                    </label>
                                    <label htmlFor="workingNo" className="working-status-label">
                                        <span>No</span>
                                        <input id="workingNo"
                                            disabled={editOpt ? true : false}
                                            checked={userInfo.workingStatus == "false" ? true : false}
                                            value={false} type='radio' name="workingStatus" onChange={updateUserInfoData}></input>
                                        <div className="custom-radio"></div>
                                    </label>
                                </div>
                            </label>
                        </div>}
                        {warning.work && <div style={{ color: "red", marginLeft: "32%" }}>
                            <p>{warning.workMsg}</p>
                        </div>}
                        {userInfo.workingStatus === "true" && !userInfo.fresher && <div className="user-detail-div resume-modal-input">
                            <label htmlFor="notice-period">
                                <div className="user-label-name user-label-name-1">
                                    <p>Notice Period</p>
                                    <span className="span-display">:</span>
                                </div>
                                <div className="personal-div-input">
                                    <input className="user-input modal-disabled-input"
                                        disabled={editOpt ? true : false}
                                        defaultValue={userInfo.noticePeriod}
                                        id="notice-period" type='number' name="noticePeriod" placeholder="Enter notice period" onChange={updateUserInfoData} required={userInfo.workingStatus === "true" ? true : false}></input>
                                </div>
                            </label>
                        </div>}
                    </div>
                    <div className="resume-modal-footer">
                        <button onClick={() => { seteditOpt(false) }} disabled={editOpt ? false : true}>Edit</button>
                        <button type="submit" disabled={editOpt ? true : false} ref={submitBtnRef}>Save</button>
                    </div>
                </form>
            </div>}
            <div className="resume-table-cont">
                <table {...getTableProps()} className="resume-table" id="table-to-xl">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))}
                                <th>#</th>
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                    <td className="action-div-resume">
                                        <i onClick={() => getModalResume(i)}><FaEye /></i>
                                        <i onClick={() => deleteResume(data[i]._id)}><FaTrash /></i>
                                        {/* <ReactHTMLTableToExcel
                                            id="test-table-xls-button"
                                            className="download-table-xls-button"
                                            table="table-to-xl"
                                            filename="tablexls"
                                            sheet="tablexls"
                                            button="download"
                                        /> */}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
