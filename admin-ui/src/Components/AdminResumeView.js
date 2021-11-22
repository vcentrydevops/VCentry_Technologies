import React, { Fragment, useEffect, useMemo, useState } from 'react'
import Header from './Header/Header'
import '../StyleSheets/AdminResume.css'
import API from '../API/Service'
import { BsCaretUpFill, BsFilter } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import ResumeTable from './ResumeTable'


export default function AdminResumeView() {
    const [resumes, setresumes] = useState([])
    const [allResume, setallResume] = useState([])
    const [refresh, setrefresh] = useState()
    const [filterData, setfilterData] = useState({
        userName: "",
        email: "",
        mobileNo: ""
    })

    useEffect(() => {
        API.getApi('/resume/user/all').then(res => {
            console.log(res.data.users);
            setresumes(res.data.users)
            setallResume(res.data.users)
        }).catch(err => {
            console.log(err.response);
        })
    }, [refresh])

    const setFilteredData = (e) => {
        setfilterData({ ...filterData, [e.target.name]: e.target.value })
        let data
        if (e.target.name === "userName") {
            if (filterData.mobileNo || filterData.email) {
                data = allResume.filter(data => data.userName.includes(e.target.value) && data.userInfo.mobileNo.toString().includes(filterData.mobileNo) && data.email.includes(filterData.email))
            } else {
                data = allResume.filter(data => data.userName.includes(e.target.value))
            }
        } else if (e.target.name === "mobileNo") {
            if (filterData.userName || filterData.email) {
                data = allResume.filter(data => data.userInfo.mobileNo.toString().includes(e.target.value) && data.userName.includes(filterData.userName) && data.email.includes(filterData.email))
            } else {
                data = allResume.filter(data => data.userInfo.mobileNo.toString().includes(e.target.value))
            }
        } else if (e.target.name === "email") {
            if (filterData.userName || filterData.mobileNo) {
                data = allResume.filter(data => data.userInfo.mobileNo.toString().includes(filterData.mobileNo) && data.userName.includes(filterData.userName) && data.email.includes(e.target.value))
            } else {
                data = allResume.filter(data => data.email.includes(e.target.value))
            }
        } else {
            data = allResume
        }
        setresumes(data)
    }


    const columns = useMemo(() => [
        { Header: "User Name", accessor: "userName" },
        { Header: "Email", accessor: "email" },
        { Header: "Mobile No", accessor: "userInfo.mobileNo" }
    ], [])

    const data = useMemo(() => resumes, [resumes])
    const headerLink = [{ name: "Home", path: "/admin" }]

    const refreshPage=()=>{
        setrefresh(Date.now())
    }

    return (
        <Fragment>
            <Header links={headerLink} signOutBtn={true}></Header>
            <div className="resume-search-cont">
                <div>
                    <input onChange={setFilteredData} name="userName" placeholder="Search by User Name"></input>
                    <input onChange={setFilteredData} name="email" placeholder="Search by Email"></input>
                    <input onChange={setFilteredData} name="mobileNo" placeholder="Search by Mobile No"></input>
                </div>
            </div>
            <ResumeTable columns={columns} data={data} setrefresh={refreshPage}></ResumeTable>
        </Fragment>
    )
}
