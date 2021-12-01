import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './MainContent.css'
import { FaPhoneAlt } from 'react-icons/fa'
import FeeTable from '../FeeTable/FeeTable'
import Syllabus from '../Syllabus/Syllabus'
import ReactHtmlParser from 'react-html-parser'


function MainContent(props) {
    const {
        courseHeading,
        courseContent,
        courseVideo,
        skillLevel, duration, learners, support, assignments,
        feeTable } = props.courseDetails
      
    return (
        <div>
            <div className="main-div1">
                <div>
                    <div className="main-div1-content">
                        <div className="main-div1-content-div1">
                            <p>{courseHeading} in Chennai</p>
                            {ReactHtmlParser(courseContent)}
                        </div>
                        <div className="video-btn main-div1-content-btn">
                            <NavLink to="/">Get Free Live Video</NavLink>
                            <NavLink to="/">Free Demo Class</NavLink>
                        </div>
                    </div>
                    <div className="main-div1-video">
                        <div>
                            <iframe width="100%" height="250" id="video-frame"
                                src={courseVideo}>
                            </iframe>
                            <div className="video-btn">
                                <NavLink to="/">Enroll Now</NavLink>
                                <a href="#">View Syllabus</a>
                            </div>
                            <div className="video-query-sec">
                                <p>Have Queries? Ask our Experts</p>
                                <div>
                                    <div>
                                        <i><FaPhoneAlt></FaPhoneAlt></i>
                                    </div>
                                    <div>
                                        <p><a href="tel:+91-9500434122">9500434122</a></p>
                                        <p>Available 24x7 for your queries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-div2">
                <div className="main-div2-course-feature">
                    <div>
                        <div>
                            <p>Skill Level</p>
                            <p>{skillLevel}</p>
                        </div>
                        <div>
                            <p>Total Learners</p>
                            <p>{learners}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Support</p>
                            <p>{support}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Duration</p>
                            <p>{duration}</p>
                        </div>
                        <div>
                            <p>Assignments</p>
                            <p>{assignments}</p>
                        </div>
                    </div>
                </div>
            </div>
            {feeTable && <div className="main-div3">
                <FeeTable feeData={feeTable}></FeeTable>
                <div className="main-div3-cont2">
                    <div className="main-div3-cont2-ques">
                        <div>
                            <p>Answer 3 Simple Questions</p>
                            <p>Get upto 30%* Discount in all courses. Limited Offer. T&C Apply.</p>
                            <NavLink to="/">Take Part</NavLink>
                        </div>
                        <div>
                            <img src={require('../../Images/answer_question.png').default}></img>
                        </div>
                    </div>
                    <div className="main-div3-cont2-ques2">
                        <div>
                            <p>Get 50% hike on your salary</p>
                            <NavLink to="/">Boost Your Career</NavLink>
                        </div>
                    </div>
                </div>
            </div>}
            <div className="main-div4">
                <div>
                    <div className="main-div4-content">
                        <p>Learn at Home with VCentry Technologies</p>
                        <p>Online Courses by Certified Experts</p>
                        <p>Online Course will make you become a certified Expert in Just One Month. Get Hands-On Knowledge with Real Time Projects from this Online Training Courses. We are rated as “Best Online Training Course Provider ” from India with Placement guidance. Enroll for Free Courses & Get Sample Self-Paced Videos on Trending Technologies</p>
                        <NavLink to="/">Get Online Training</NavLink>
                    </div>
                </div>
            </div>
            <div className="main-div5">
                <Syllabus courseData={props.courseDetails}></Syllabus>
            </div>
        </div>
    )
}

export default MainContent
