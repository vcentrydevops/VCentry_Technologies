import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'


function Footer() {
    const windowTop=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }
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
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Hire Talent</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Careers</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Internship</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Tutorials</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Video Review</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Corporate Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Interview question</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Online Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Placed Students List</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Become an Instructor</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Franchise Oppertunities</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <p>Top Courses</p>
                        <ul>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>AWS Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>DevOps Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Python Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Selenium Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Data Science Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Data Science with Python Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Machine Learning Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Power BI Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Azure Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Full Stack Training</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Artificial Intelligence Training</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <p>Company</p>
                        <ul>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>About Us</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Services</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Blog</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Reviews</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Branches</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Privacy Policy</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Cookie Policy</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Terms of Use</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Terms & Condition</NavLink></li>
                            <li><NavLink to="/" onClick={windowTop}><span>-</span>Refund/Cancellation Policy</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-sec-div">
                    <p>Copyright 2019 © <NavLink to="/" onClick={windowTop}>Vcentry Technologies</NavLink>. Designed by <NavLink to="/">Vcentry Technologies</NavLink></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
