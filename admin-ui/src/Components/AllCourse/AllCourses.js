import React, { Fragment, useEffect, useState } from 'react'
import './AllCourses.css'
import API from '../../API/Service'
import { Table, Pagination, Button } from 'react-bootstrap'
import {ToastContainer,toast} from 'react-toastify'
import { useHistory } from 'react-router'
import Header from '../Header/Header'

export default function AllCourses() {
    const [allCourses, setallCourses] = useState([])
    const [active, setactive] = useState(0)
    const [loadingImg, setloadingImg] = useState(false)
    const history = useHistory()
    useEffect(() => {
        API.getApi('/course/courses').then(res => {
            res.data.sort((a, b) => {
                if (a.courseHeading > b.courseHeading) {
                    return 1
                } else {
                    return -1
                }
            })
            setallCourses(res.data)
            setloadingImg(true)
        })
    }, [])

    let items = [];
    for (let number = 0; number <= Math.floor(allCourses.length / 10); number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={()=>setactive(number)}>
                {number + 1}
            </Pagination.Item>,
        );
    }

    const deleteCourse = (id) => {
        API.deleteApi(`/course/delete/${id}`).then(res=>{
            toast.success(res.data.successMessage)
            window.location.reload()
        }).catch(err=>{
            toast.error(err.response.data.errorMessage)
        })
    }

    const editCourse =(id)=>{
        history.push(`course/${id}`)
    }

    const courses = allCourses.map((data, index) => {
        if ((active) * 10 <= index && index < (active + 1) * 10) {
            return <tr key={data._id}>
                <td>{index + 1}</td>
                <td>{data.courseHeading}</td>
                <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Button variant="warning" onClick={()=>editCourse(data._id)}>Edit</Button>
                    <Button variant="danger" onClick={()=>deleteCourse(data._id)}>Delete</Button>
                </td>
            </tr>
        }
    })


    return (
        <Fragment>
            <Header id="sign-out"></Header>
            {loadingImg ?
                <div className="admin-all-course-table-div">
                    <ToastContainer/>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Course Name</th>
                                <th style={{ textAlign: "center" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses}
                        </tbody>
                    </Table>
                    <div className="admin-all-courses-pagina">
                        <Pagination>{items}</Pagination>
                    </div>
                </div> :
                <div className="admin-loading-img">
                    <img src={require('../../Images/loading.gif').default} alt="loading"></img>
                </div>}
        </Fragment>
    )
}
