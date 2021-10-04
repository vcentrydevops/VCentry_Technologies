import React, { useEffect, useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { Accordion, Card } from 'react-bootstrap'
import './Home.css'
import Countup from 'react-countup'
import ReactHtmlParser from 'react-html-parser'
import { FaPlus, FaUser, FaClock, FaLaptop, FaMoneyBill, FaDesktop, FaBook, FaChevronRight, FaChevronLeft } from 'react-icons/fa'

function Home(props) {
    const courseDetails = props.courses
    const [listCourse, setlistCourse] = useState([])
    const [permenSearch, setpermenSearch] = useState([])
    const [requestCourse, setrequestCourse] = useState({ type: "ClassRoom", name: "" })
    const history = useHistory()

    useEffect(() => {
        courseDetails.sort((a,b)=>{
            if(a.courseHeading>b.courseHeading){
                return 1
            }else{
                return -1
            }
        })
        setlistCourse(courseDetails)
        setpermenSearch(courseDetails)
    }, [courseDetails.length])

    const setListNav = (event) => {
        if (event.target.value === "") {
            setlistCourse(permenSearch)
        }
        else {
            const array = listCourse.filter((data) => data.courseHeading.toLowerCase().includes(event.target.value.toLowerCase()))
            setlistCourse(array)
        }
    }

    const searchResult = (event) => {
        if (event.key === "Enter") {
            history.push("/selenium_training")
        }
    }

    const setRequestDetail = (event) => {
        setrequestCourse({ ...requestCourse, [event.target.name]: event.target.value })
    }

    const reqOpt = permenSearch.map((data, index) => {
        return <option key={data.courseHeading + index} value={data.courseHeading}>{data.courseHeading}</option>
    })


    const searchList = listCourse.map((data, index) => {
        return <NavLink to={data.path} key={data.courseHeading + index}>{data.courseHeading}</NavLink>
    })

    const listCourseMap = courseDetails.map((data) => {
        return <div key={data.courseHeading}>
            <NavLink to="/">{data.courseHeading}</NavLink>
            {ReactHtmlParser(data.courseContent.slice(0, 150))}
            <NavLink to={data.path}>View Details</NavLink>
        </div>
    })

    return (
        <div>
            <div className="home-search-div">
                <h1>VCentry Technologies</h1>
                <p>Hands on Training Institute</p>
                <div>
                    <input type="text" placeholder="enter the keyword" onChange={(event => setListNav(event))} onKeyPress={(event) => searchResult(event)}></input>
                    <div className={listCourse.length > 10 ? "searchListHeight" : ""}>
                        {searchList}
                    </div>
                </div>
            </div>
            <div className="home-div2">
                <div>
                    <p>VCentry Technologies, No.1 Software (IT) Training Institute in India</p>
                    <div>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Introduction about Vcentry Technologies
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className="accordion-aboutus">
                                        <p>Being the leader in IT Software Training sector Vcentry Technologies holds the best and inevitable place in short time. To manage a company is a social process that processes consist of planning, control, co-ordination and motivation. Based on this our Besant Technologies Chennai & Vcentry Technologies Bangalore is a well-planned one. We are having the co-ordinators in dealing with all the subjects, lectures, problems and conclusions...</p>
                                        <NavLink to="/"><span>See More...</span></NavLink>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Why we are No.1 ?
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <ul>
                                            <li>Experienced MNC Professionals</li>
                                            <li>Corporate Style Training</li>
                                            <li>Syllabus Based on Companies</li>
                                            <li>Placement Oriented Courses</li>
                                            <li>Projects for Every Course</li>
                                            <li>Own Prepared Materials</li>
                                        </ul>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                    <div className="request-for-class">
                        <p>Request for Class Room & Online Training Quotation</p>
                        <div className={requestCourse.type === "ClassRoom" ? "set-classroom" : "set-online"}>
                            <p onClick={() => setrequestCourse({ ...requestCourse, type: "ClassRoom" })}>Class Room</p>
                            <p onClick={() => setrequestCourse({ ...requestCourse, type: "Online" })}>Online</p>
                        </div>
                        <input name="name" onChange={(event) => setRequestDetail(event)} type="text" placeholder="Enter your Name"></input>
                        <input name="email" onChange={(event) => setRequestDetail(event)} type="mail" placeholder="Enter your Email"></input>
                        <input name="mobileNo" onChange={(event) => setRequestDetail(event)} type="number" placeholder="Enter your Mobile No."></input>
                        <select name="courseName" defaultValue="default" onChange={(event) => setRequestDetail(event)}>
                            <option value="default" disabled>Select Course</option>
                            {reqOpt}
                        </select >
                        <input type="button" value="Get Quotes"></input>
                    </div>
                </div>
            </div>
            <div className="home-div3">
                <div>
                    <p>You Always Get the Best Guidance</p>
                    <div>
                        <div>
                            <p><Countup start={100} end={125} duration={2} suffix="K"></Countup></p>
                            <div> </div>
                            <p>Students Enrolled</p>
                        </div>
                        <div>
                            <p><Countup start={5} end={20} duration={2}></Countup><i><FaPlus></FaPlus></i></p>
                            <div> </div>
                            <p>Overall Branches</p>
                        </div>
                        <div>
                            <p><Countup start={2400} end={2500} duration={2}></Countup><i><FaPlus></FaPlus></i></p>
                            <div> </div>
                            <p>Last Year Placed Students</p>
                        </div>
                        <div>
                            <p><Countup start={5} end={10} duration={2} ></Countup><i><FaPlus></FaPlus></i></p>
                            <div> </div>
                            <p>Years Of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-div4">
                <div>
                    <div>
                        <h2>Why to <span>Choose Us?</span></h2>
                        <p>A Choice that makes a big difference in your career. Besant Technologies is committed to helping its students to reach their goals and their training experiences, by providing the innovative surroundings and faculties.</p>
                    </div>
                    <div>
                        <div>
                            <i><FaUser></FaUser></i>
                            <p>IT Experts as Trainers</p>
                            <p>Learning a technology with a professional who is well expertise in that solve 60% of your needs.</p>
                        </div>
                        <div>
                            <i><FaLaptop></FaLaptop></i>
                            <p>Fully Hands-on Training</p>
                            <p>We support any training with more practical classes. So, we always prefers to give hands-on training.</p>
                        </div>
                        <div>
                            <i><FaClock></FaClock></i>
                            <p>Flexible Timings</p>
                            <p>We started with 2 trainers, now we are 100+ and it’s still increasing. So we can give the students flexibility timings.</p>
                        </div>
                        <div>
                            <i><FaMoneyBill></FaMoneyBill></i>
                            <p>Affordable Fees</p>
                            <p>We are dead cheap in fees. Quality training with less price is only at Besant Technologies.</p>
                        </div>
                        <div>
                            <i><FaDesktop></FaDesktop></i>
                            <p>Lab Support</p>
                            <p>If you need software assistance we are here to back you up. Bring your laptop and load the required software and learn.</p>
                        </div>
                        <div>
                            <i><FaBook></FaBook></i>
                            <p>Interview Preparation</p>
                            <p>Every course in covered with interview point questions and real-time scenarios of what the company may look after from you.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-div5">
                <div className="advert-div">
                    <h2>Learning Today For A Better Tomorrow</h2>
                    <NavLink to="/">View Courses</NavLink>
                </div>
            </div>
            <div className="home-div6">
                <div>
                    <h2>Trending <span>Courses</span></h2>
                    <p>Courses are designed for continuing career development and are offered by a number of leading technical domain experts around the world. Have a look at all of the most popular courses here!</p>
                    <div className="home-div-all-course">
                        {listCourseMap}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
