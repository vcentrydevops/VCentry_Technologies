import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Accordion, Card } from 'react-bootstrap'
import './Syllabus.css'
import { Carousel } from 'react-bootstrap'
import {
    FaCloudDownloadAlt, FaPhoneAlt, FaUsers, FaStar,
    FaFileAlt, FaBook, FaUser, FaCertificate, FaCogs, FaPenSquare, FaComments
} from 'react-icons/fa'
import ReactHtmlParser from 'react-html-parser'


function Syllabus(props) {
    const { courseHeading, syllabus, aboutCourse, trainerProfile,
        skillLevel, duration, learners, assignments, courseFaq
    } = props.courseData

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const faqData = courseFaq.map((data, index) => {
        return <Card key={data.heading+index}>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                <p>{data.heading}</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    {ReactHtmlParser(data.content)}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    })


    return (
        <div className="syllabus-cont">
            <div className="nav-cont-div">
                <div>
                    {syllabus && <a href="#courseSyllabus"><i><FaFileAlt></FaFileAlt></i>Course Syllabus</a>}
                    {aboutCourse && <a href="#about-course"><i><FaBook></FaBook></i>About Course</a>}
                    {trainerProfile && <a href="#trainer-profile"><i><FaUser></FaUser></i>Trainer Profile</a>}
                    <a href="#certification"><i><FaCertificate></FaCertificate></i>Certification</a>
                    <a href="#key-features"><i><FaCogs></FaCogs></i>Key Features</a>
                    <a href="#reviews"><i><FaPenSquare></FaPenSquare></i>Reviews</a>
                    {courseFaq.length > 0 && <a href="#faq"><i><FaComments></FaComments></i>FAQ</a>}
                </div>
            </div>
            <div className="syllabus-cont-div">
                {syllabus && <div id="courseSyllabus">
                    <div>
                        <p>{syllabus.heading}</p>
                        <NavLink to="/"><i><FaCloudDownloadAlt></FaCloudDownloadAlt></i>Download syllabus</NavLink>
                    </div>
                    <div>
                        {ReactHtmlParser(syllabus.content)}
                    </div>
                </div>}
                <div className="syl-query-div">
                    <div>
                        <p>Have An Queries? Ask our Experts</p>
                        <p>Help me to Choose a Course.</p>
                        <a href="tel:+91-9500434122"><i><FaPhoneAlt></FaPhoneAlt></i>9500434122</a>
                    </div>
                    <div>
                        <NavLink to="/"><i><FaUsers></FaUsers></i>Avial Demo Class</NavLink>
                    </div>
                </div>
                <div id="about-course">
                    <div>
                        <p>About {courseHeading}</p>
                        {ReactHtmlParser(aboutCourse)}
                    </div>
                </div>
                <div className="course-offer">
                    <p>Looking for Master your Skills? Enroll Now on Triple Course Offer & Start Learning at <span>24,999!</span></p>
                    <NavLink to="/">Explore Now</NavLink>
                </div>
                {trainerProfile && <div id="trainer-profile">
                    <div>
                        <p>{trainerProfile.heading}</p>
                        <div>
                            {ReactHtmlParser(trainerProfile.content)}
                        </div>
                    </div>
                </div>}
                <div className="syl-query-div corporate-training">
                    <div>
                        <p>Corporate Training</p>
                        <p>If you want to give the Trending technology experience to your esteemed employees, we are here to help you!</p>
                        <NavLink to="/">Contact Corporate Co-Ordinator</NavLink>
                    </div>
                    <div>
                        <img src={require('../../Images/corporate-training.png').default}></img>
                    </div>
                </div>
                <div id="certification" className="box-shadow-padd">
                    <div>
                        <p>{courseHeading} Exams & Certification</p>
                        <p>VCentry Technologies Certification is Accredited by all major Global Companies around the world. We provide after completion of the theoretical and practical sessions to fresher’s as well as corporate trainees.</p>
                        <p>Our certification at VCentry Technologies is accredited worldwide. It increases the value of your resume and you can attain leading job posts with the help of this certification in leading MNC’s of the world. The certification is only provided after successful completion of our training and practical based projects.</p>
                    </div>
                    <div className="course-certific-div1">
                        <div>
                            <p>Complete Your Course</p>
                            <p></p>
                            <p>a downloadable Certificate in PDF format, immediately available to you when you complete your Course</p>
                        </div>
                        <div>
                            <p>Get Certified</p>
                            <p></p>
                            <p>a physical version of your officially branded and security-marked Certificate.</p>
                        </div>
                        <div>
                            <NavLink to="/">Get Certificate</NavLink>
                        </div>
                        <p>At the end of this Course and Project work Completion you will get a valid Certificate from VCentry technologies to boost your Career. Clear the HP AIS – Functional Testing v11 (HP0-M47) and HP ASE- Functional Testing v11 (HP0-M98) exams from this Online Software Testing Courses in Chennai.</p>
                    </div>
                </div>
                <div className="box-shadow-padd build-recruitment">
                    <div>
                        <div>
                            <p>Build your resume to the latest trend, and get a chance to know our Tie-Up Companies</p>
                            <NavLink to="/">Placed Student's list</NavLink>
                        </div>
                        <div>
                            <img src={require('../../Images/recruitment.svg').default}></img>
                        </div>
                    </div>
                </div>
                <div className="box-shadow-padd" id="key-features">
                    <div>
                        <p>Key Features of Software Testing</p>
                        <div className="key-feature-div">
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
                                    <p>Key Features</p>
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
                </div>
                <div className="syl-query-div corporate-training">
                    <div>
                        <p>Group Discount</p>
                        <p>If you have Three or more people in your training we will be delighted to offer you a group discount.</p>
                        <NavLink to="/">Get Discount</NavLink>
                    </div>
                    <div>
                        <img src={require('../../Images/corporate-training.png').default}></img>
                    </div>
                </div>
                <div className="box-shadow-padd" id="reviews">
                    <div>
                        <p>Training Courses Reviews</p>
                        <div className="review-carousel">
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <div className="review-comment">
                                        <div>
                                            <p>When I joined VCentry Technologies, I didn’t really expect a lot from it, to be extremely honest. But as time went by, I realised I got from VCentry Technologies exactly what I wanted- a healthy environment for learning. Cordial teachers and their valuable lectures make understanding things so much easy. I thank VCentry for having been so supportive throughout the course.</p>
                                        </div>
                                        <div>
                                            <p>s</p>
                                            <p><span>Siva Kumar</span>
                                                <span>
                                                    <i><FaStar></FaStar></i>
                                                    <i><FaStar></FaStar></i>
                                                    <i><FaStar></FaStar></i>
                                                    <i><FaStar></FaStar></i>
                                                    <i><FaStar></FaStar></i>
                                                </span></p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="review-comment">
                                        <div>
                                            <p>When I joined VCentry Technologies, I didn’t really expect a lot from it, to be extremely honest. But as time went by, I realised I got from VCentry Technologies exactly what I wanted- a healthy environment for learning. Cordial teachers and their valuable lectures make understanding things so much easy. I thank VCentry for having been so supportive throughout the course.</p>
                                        </div>
                                        <div>
                                            <p>s</p>
                                            <p><span>Siva Kumar</span>
                                                <span>
                                                    <i><FaStar></FaStar></i>
                                                    <i><FaStar></FaStar></i>
                                                    <i><FaStar></FaStar></i>
                                                    <i><FaStar></FaStar></i>
                                                    <i><FaStar></FaStar></i>
                                                </span></p>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="syl-query-div corporate-training placed-detail">
                    <div>
                        <p>Get Placed Student's List</p>
                        <NavLink to="/">Placed Student's</NavLink>
                    </div>
                    <div>
                        <p>Get sample resume & tie-up companies Details</p>
                        <NavLink to="/">One Step ahead!</NavLink>
                    </div>
                </div>
                <div className="social-media-reviews">
                    <div>
                        <img src={require('../../Images/youtube.svg').default}></img>
                        <p style={{ color: "#f44336" }}>VIDEO SHARING REVIEW</p>
                        <p>Watch the direct review of our students from Institute.</p>
                        <a href="#" style={{ backgroundColor: "#f44336" }}>View Reviews</a>
                    </div>
                    <div>
                        <img src={require('../../Images/google_reviews.svg').default}></img>
                        <p style={{ color: "#4c8bf5" }}>REVIEWS ON GOOGLE</p>
                        <p>Know the valuable information about our business.</p>
                        <a href="#" style={{ backgroundColor: "#4c8bf5" }}>View Reviews</a>
                    </div>
                    <div>
                        <img src={require('../../Images/facebook_reviews.svg').default}></img>
                        <p style={{ color: "#006edb" }}>SOCIAL MEDIA REVIEW</p>
                        <p>Get to know what your connect friends think about us</p>
                        <a href="#" style={{ backgroundColor: "#006edb" }}>View Reviews</a>
                    </div>
                </div>
                {courseFaq.length > 0 && <div className="box-shadow-padd" id="faq">
                    <div>
                        <p>Frequently Asked Questions</p>
                        <div>
                            <Accordion defaultActiveKey="0" className="faq-accor">
                                {faqData}
                            </Accordion>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Syllabus


