import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'


function Footer() {
    return (
        <div className="footer-main-div">
            <div>
                <div className="footer-first-div">
                    <div>
                        <p>For More Queries</p>
                        <a href="tel:+91-9500434122"><i><FaPhoneAlt></FaPhoneAlt></i>9500434122</a>
                        <a href="mailto:tagvcentry@gmail.com"><i><FaEnvelope></FaEnvelope></i>tagvcentry@gmail.com</a>
                    </div>
                    <div>
                        <p>Students Zone</p>
                        <ul>
                            <li><NavLink to="/"><span>-</span>Hire Talent</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Careers</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Internship</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Tutorials</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Video Review</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Corporate Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Interview question</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Online Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Placed Students List</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Become an Instructor</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Franchise Oppertunities</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <p>Top Courses</p>
                        <ul>
                            <li><NavLink to="/"><span>-</span>AWS Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>DevOps Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Python Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Selenium Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Data Science Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Data Science with Python Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Machine Learning Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Power BI Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Azure Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Full Stack Training</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Artificial Intelligence Training</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <p>Company</p>
                        <ul>
                            <li><NavLink to="/"><span>-</span>About Us</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Services</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Blog</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Reviews</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Branches</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Privacy Policy</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Cookie Policy</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Terms of Use</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Terms & Condition</NavLink></li>
                            <li><NavLink to="/"><span>-</span>Refund/Cancellation Policy</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-sec-div">
                    <p>Copyright 2019 © <NavLink to="/">Vcentry Technologies</NavLink>. Designed by <NavLink to="/">Vcentry Technologies</NavLink></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
