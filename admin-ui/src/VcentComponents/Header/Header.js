import React,{useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaPinterest, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaSearch } from 'react-icons/fa'
import { BiChevronRight } from 'react-icons/bi'
import {GiHamburgerMenu} from 'react-icons/gi'
function Header() {
    const [menu, setMenu] = useState(false)
    const [navbarVisible, setnavbarVisible] = useState(true)

    const setVisible=()=>{
        setnavbarVisible(false)
        setTimeout(() => {
            setnavbarVisible(true)
        }, 100);
    }

    return (
        <div className="main-header">
            <div className="header-div1">
                <div>
                    <div className="header-div1-contact">
                        <div>
                            <p>Chennai :</p>
                            <p><a href="tel:+91-9500434122">9500434122</a></p>
                            <p className="vertical-line-phone"></p>
                            <p><a href="tel:+91-9500434122">9500434122</a></p>
                        </div>
                        <div>
                            <p>Email :</p>
                            <p><a href="#">tagvcentry@gmail.com</a></p>
                            <p className="vertical-line-phone"></p>
                            <p><a href="#">tag@vcentry.com</a></p>
                        </div>
                    </div>
                    <div className="header-div1-contact1">
                        <div className="header-contact-icon">
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
            <div className="header-div2">
                <div>
                    <NavLink to="/" className="header-div2-ins-details">
                        <img src={require('../../Images/institute_logo.jpg').default}></img>
                        <div className="inst-name">
                            <p><span>V</span>
                                <span>C</span>
                                entry Technologies</p>
                        </div>
                        <div className="width-970-menu ml-auto">
                            <i onClick={()=>{setMenu(!menu)}}><GiHamburgerMenu></GiHamburgerMenu></i>
                        </div>
                    </NavLink>
                    <div className="header-div2-ins-details1" id={ menu ? "width-970-menu-view":"none"} >
                        <ul>
                            <li className="recommended-courses">
                                <div>
                                    <p><NavLink to="/">Recommended Courses</NavLink></p>
                                </div>
                                <div className={navbarVisible ?"hover-nav":"hover-nav-visi"} onClick={setVisible}>
                                    <div>
                                        <NavLink to="/">Python</NavLink>
                                        <NavLink to="/">Azure</NavLink>
                                        <NavLink to="/">Selenium</NavLink>
                                        <NavLink to="/">Fullstack Developer</NavLink>
                                        <NavLink to="/">Robotic Process Automation</NavLink>
                                        <NavLink to="/">Big Data Hadoop</NavLink>
                                        <NavLink to="/">Sales Force Developer</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/">AWS</NavLink>
                                        <NavLink to="/">DevOps</NavLink>
                                        <NavLink to="/">Digital Marketing</NavLink>
                                        <NavLink to="/">Artificial Intelligence</NavLink>
                                        <NavLink to="/">Java</NavLink>
                                        <NavLink to="/">Big Data Analytics</NavLink>
                                        <NavLink to="/">Power BI</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/">Data Science</NavLink>
                                        <NavLink to="/">Data Science with Python</NavLink>
                                        <NavLink to="/">Machine Learning</NavLink>
                                        <NavLink to="/">Angular JS</NavLink>
                                        <NavLink to="/">Android</NavLink>
                                        <NavLink to="/">Google cloud</NavLink>
                                        <NavLink to="/">Tableau</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="">All Courses</NavLink>
                                    </div>
                                </div>
                            </li>
                            <li className="training-courses">
                                <div>
                                    <p><NavLink to="/">Training Courses</NavLink></p>
                                </div>
                                <div className={navbarVisible ? "hover-nav1":"hover-nav-visi"} onClick={setVisible}>
                                    <ul>
                                        <li>
                                            <NavLink to="/"><span>Master Program</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">Big Data Masters Programs</NavLink></li>
                                                <li><NavLink to="/">Data Science Masters Programs</NavLink></li>
                                                <li><NavLink to="/">Cloud Masters Programs</NavLink></li>
                                                <li><NavLink to="/">DevOps Masters Programs</NavLink></li>
                                                <li><NavLink to="/">Software Testing Masters Programs</NavLink></li>
                                                <li><NavLink to="/">Business Intelligence Masters Programs</NavLink></li>
                                                <li><NavLink to="/">Full Stack Masters Programs</NavLink></li>
                                                <li><NavLink to="/">Freshers Masters Programs</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Cloud Computing</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">AWS Training</NavLink></li>
                                                <li><NavLink to="/">Workday Training</NavLink></li>
                                                <li><NavLink to="/">Salesforce Admin Training</NavLink></li>
                                                <li><NavLink to="/">Salesforce Developer Training</NavLink></li>
                                                <li><NavLink to="/">VMware Training</NavLink></li>
                                                <li><NavLink to="/">OpenStack Training</NavLink></li>
                                                <li><NavLink to="/">OpenNebula Training</NavLink></li>
                                                <li><NavLink to="/">Citrix Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Software Testing</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/selenium_training">Selenium Training</NavLink></li>
                                                <li><NavLink to="/manual_testing_training">Manual Testing Training</NavLink></li>
                                                <li><NavLink to="/big_data_testing_training">Big Data Testing Training</NavLink></li>
                                                <li><NavLink to="/">QTP Training</NavLink></li>
                                                <li><NavLink to="/">LoadRunner Training</NavLink></li>
                                                <li><NavLink to="/jmeter_training">JMeter Training</NavLink></li>
                                                <li><NavLink to="/">ETL Testing Training</NavLink></li>
                                                <li><NavLink to="/">Test Complete Training</NavLink></li>
                                                <li><NavLink to="/">Soap UI Training</NavLink></li>
                                                <li><NavLink to="/">Coded UI Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Digital Marketing</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">SEO Training</NavLink></li>
                                                <li><NavLink to="/">Google Analytics Training</NavLink></li>
                                                <li><NavLink to="/">Google Adwords-PPC Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Web Designing</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">HTML Training</NavLink></li>
                                                <li><NavLink to="/">CSS Training</NavLink></li>
                                                <li><NavLink to="/">PHP Training</NavLink></li>
                                                <li><NavLink to="/">MySQL Training</NavLink></li>
                                                <li><NavLink to="/">JavaScript Training</NavLink></li>
                                                <li><NavLink to="/">Angular JS Training</NavLink></li>
                                                <li><NavLink to="/">Angular 2 Training</NavLink></li>
                                                <li><NavLink to="/">Angular 4 Training</NavLink></li>
                                                <li><NavLink to="/">Angular 7 Training</NavLink></li>
                                                <li><NavLink to="/">Node.js Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Mobile Application</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">Android Training</NavLink></li>
                                                <li><NavLink to="/">iOS Training</NavLink></li>
                                                <li><NavLink to="/">Objective-C Training</NavLink></li>
                                                <li><NavLink to="/">PhoneGap Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Java</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">Core Java Training</NavLink></li>
                                                <li><NavLink to="/">J2EE Training</NavLink></li>
                                                <li><NavLink to="/">Struts Training</NavLink></li>
                                                <li><NavLink to="/">Hibernate Training</NavLink></li>
                                                <li><NavLink to="/">Spring Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Data Warehousing</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">Informatica Training</NavLink></li>
                                                <li><NavLink to="/">Hadoop Training</NavLink></li>
                                                <li><NavLink to="/">Big Data Analytics Training</NavLink></li>
                                                <li><NavLink to="/">R Programming Training</NavLink></li>
                                                <li><NavLink to="/">Tableau Training</NavLink></li>
                                                <li><NavLink to="/">Data Science Training</NavLink></li>
                                                <li><NavLink to="/">Data Science with R Training</NavLink></li>
                                                <li><NavLink to="/">Data Science with SAS Training</NavLink></li>
                                                <li><NavLink to="/">Data Science with Python Training</NavLink></li>
                                                <li><NavLink to="/">Ab Initio Training</NavLink></li>
                                                <li><NavLink to="/">Datastage Training</NavLink></li>
                                                <li><NavLink to="/">OBIEE Training</NavLink></li>
                                                <li><NavLink to="/">Microstrategy Training</NavLink></li>
                                                <li><NavLink to="/">Cognos Training</NavLink></li>
                                                <li><NavLink to="/">Cognos TM1 Training</NavLink></li>
                                                <li><NavLink to="/">Informatica Data Quality Training</NavLink></li>
                                                <li><NavLink to="/">Informatica MDM Training</NavLink></li>
                                                <li><NavLink to="/">Buisness Objects Training</NavLink></li>
                                                <li><NavLink to="/">Qlikview Training</NavLink></li>
                                                <li><NavLink to="/">Pentaho Training</NavLink></li>
                                                <li><NavLink to="/">Machine Learning Training</NavLink></li>
                                                <li><NavLink to="/">Apache Spark Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Database Developer</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">Oracle Training</NavLink></li>
                                                <li><NavLink to="/">Teradata Training</NavLink></li>
                                                <li><NavLink to="/">Informix Training</NavLink></li>
                                                <li><NavLink to="/">Sybase Training</NavLink></li>
                                                <li><NavLink to="/">MongoDB Training</NavLink></li>
                                                <li><NavLink to="/">Apache Cassandra Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>DBA Training</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">Oracle DBA Training</NavLink></li>
                                                <li><NavLink to="/">Advanced Oracle DBA Training</NavLink></li>
                                                <li><NavLink to="/">Oracle Apps DBA Training</NavLink></li>
                                                <li><NavLink to="/">Oracle Performance Tuning Training</NavLink></li>
                                                <li><NavLink to="/">SQL Server DBA Training</NavLink></li>
                                                <li><NavLink to="/">DB2 DBA Training</NavLink></li>
                                                <li><NavLink to="/">TeraData DBA Training</NavLink></li>
                                                <li><NavLink to="/">MySQL DBA Training</NavLink></li>
                                                <li><NavLink to="/">MongoDB Admin Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Robotic Process Automation</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">Blue Prism Training</NavLink></li>
                                                <li><NavLink to="/">Automation Anywhere Training</NavLink></li>
                                                <li><NavLink to="/">UI Path Training</NavLink></li>
                                                <li><NavLink to="/">OpenSpan Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Other Training</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/">PERL Training</NavLink></li>
                                                <li><NavLink to="/">Python Training</NavLink></li>
                                                <li><NavLink to="/">Ruby on Rails Training</NavLink></li>
                                                <li><NavLink to="/">UNIX Training</NavLink></li>
                                                <li><NavLink to="/">Solaris Training</NavLink></li>
                                                <li><NavLink to="/">C & C++ Training</NavLink></li>
                                                <li><NavLink to="/">AJAX Training</NavLink></li>
                                                <li><NavLink to="/">CCNA/CCNP Training</NavLink></li>
                                                <li><NavLink to="/">Chef Training</NavLink></li>
                                                <li><NavLink to="/">Embedded System Training</NavLink></li>
                                                <li><NavLink to="/">Windows PowerShell Training</NavLink></li>
                                                <li><NavLink to="/">DevOps Training</NavLink></li>
                                                <li><NavLink to="/">Ansible Training</NavLink></li>
                                                <li><NavLink to="/">Jenkins Training</NavLink></li>
                                                <li><NavLink to="/">MEAN Stack Training</NavLink></li>
                                                <li><NavLink to="/">Tally Training</NavLink></li>
                                                <li><NavLink to="/">CyberArk Training</NavLink></li>
                                                <li><NavLink to="/">Puppet Training</NavLink></li>
                                                <li><NavLink to="/">Docker Training</NavLink></li>
                                                <li><NavLink to="/">Google go Training</NavLink></li>
                                                <li><NavLink to="/">Xamarin Training</NavLink></li>
                                                <li><NavLink to="/">Google Cloud Training</NavLink></li>
                                                <li><NavLink to="/">BizTalk Training</NavLink></li>
                                                <li><NavLink to="/">Cyber Security Training</NavLink></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="branches">
                                <div>
                                    <p>Branches</p>
                                </div>
                                <div className={navbarVisible ? "hover-nav1":"hover-nav-visi"} onClick={setVisible}>
                                    <ul>
                                        <li><NavLink to="/"><span>Guindy</span></NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="online-training">
                                <div>
                                    <p><NavLink to="/">Online Training</NavLink></p>
                                </div>
                            </li>
                            <li className="hire-talent">
                                <div>
                                    <p><NavLink to="/">Hire Talent</NavLink></p>
                                </div>
                            </li>
                            <li className="contact-us">
                                <div>
                                    <p><NavLink to="/">Contact Us</NavLink></p>
                                </div>
                            </li>
                            <li className="search-bar">
                                <div>
                                    <i><span><FaSearch></FaSearch></span></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
