import React from 'react'
import './Header.css'
import { NavLink, useHistory } from 'react-router-dom'
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaSearch } from 'react-icons/fa'

function Header(props) {
    const { home, allCourse, addCourse, signIn, signOutBtn, signUp, links } = props
    const history = useHistory()
    const signOut = () => {
        sessionStorage.clear()
        window.location.href = "/admin"
    }

    return (
        <div className="admin-main-header">
            <div className="admin-header-div1">
                <div>
                    <div className="admin-header-div1-contact">
                        <div>
                            <p>Chennai :</p>
                            <p><a href="tel:+91-9500434122">9500434122</a></p>
                            <p className="admin-vertical-line-phone"></p>
                            <p><a href="tel:+91-9500434122">9500434122</a></p>
                        </div>
                        <div>
                            <p>Email :</p>
                            <p>tagvcentry@gmail.com</p>
                            <p className="admin-vertical-line-phone"></p>
                            <p>tag@vcentry.com</p>
                        </div>
                    </div>
                    <div className="admin-header-div1-contact1">
                        <div className="admin-header-contact-icon">
                            <a href="https://www.facebook.com/" target="_blank"><i><span><FaFacebookF></FaFacebookF></span></i></a>
                            <a href="/"><i><span><FaTwitter></FaTwitter></span></i></a>
                            <a href="/"><i><span><FaYoutube></FaYoutube></span></i></a>
                            <a href="/"><i><span><FaLinkedinIn></FaLinkedinIn></span></i></a>
                            <a href="/"><i><span><FaInstagram></FaInstagram></span></i></a>
                            <a href="/"><i><span><FaPinterest></FaPinterest></span></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="admin-header-div2">
                <div>
                    <NavLink to="/admin" className="admin-header-div2-ins-details">
                        <img src={require('../../Images/institute_logo.jpg').default}></img>
                        <div className="admin-inst-name">
                            <p><span>V</span>
                                <span>C</span>
                                entry Technologies</p>
                        </div>
                    </NavLink>
                    <div className="admin-width-970-menu ml-auto" id="admin-sign-in-up-btn">
                        {home && <NavLink to="/admin">Home</NavLink>}
                        {allCourse && <NavLink to={allCourse}>All Courses</NavLink>}
                        {addCourse && <NavLink to="/admin/courses">Add Courses</NavLink>}
                        {signUp && <NavLink to="/admin/sign-up">Sign Up</NavLink>}
                        {signIn && <NavLink to="/admin/sign-in">Sign In</NavLink>}
                        {links && links.map((data,index) => {
                            return <NavLink key={index+data.name} to={data.path}>{data.name}</NavLink>
                        })}
                        {signOutBtn && <p onClick={signOut}>SignOut</p>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header
