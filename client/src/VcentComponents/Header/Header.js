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
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Python</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Azure</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Selenium</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Fullstack Developer</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Robotic Process Automation</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Big Data Hadoop</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Sales Force Developer</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>AWS</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>DevOps</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Digital Marketing</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Artificial Intelligence</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Java</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Big Data Analytics</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Power BI</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Data Science</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Data Science with Python</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Machine Learning</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Angular JS</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Android</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Google cloud</NavLink>
                                        <NavLink to="/" onClick={()=>{setMenu(!menu)}}>Tableau</NavLink>
                                    </div>
                                    <div>
                                        <NavLink to="" onClick={()=>{setMenu(!menu)}}>All Courses</NavLink>
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
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Big Data Masters Programs</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Data Science Masters Programs</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Cloud Masters Programs</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>DevOps Masters Programs</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Software Testing Masters Programs</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Business Intelligence Masters Programs</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Full Stack Masters Programs</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Freshers Masters Programs</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Cloud Computing</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>AWS Training</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Workday Training</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Salesforce Admin Training</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Salesforce Developer Training</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>VMware Training</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>OpenStack Training</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>OpenNebula Training</NavLink></li>
                                                <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Citrix Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Software Testing</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/selenium_training">Selenium Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/manual_testing_training">Manual Testing Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/big_data_testing_training">Big Data Testing Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">QTP Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">LoadRunner Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/jmeter_training">JMeter Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">ETL Testing Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Test Complete Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Soap UI Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Coded UI Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Digital Marketing</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">SEO Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Google Analytics Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Google Adwords-PPC Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Web Designing</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">HTML Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">CSS Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">PHP Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">MySQL Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">JavaScript Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Angular JS Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Angular 2 Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Angular 4 Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Angular 7 Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Node.js Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Mobile Application</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Android Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">iOS Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Objective-C Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">PhoneGap Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Java</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Core Java Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">J2EE Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Struts Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Hibernate Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Spring Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Data Warehousing</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Informatica Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Hadoop Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Big Data Analytics Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">R Programming Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Tableau Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Data Science Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Data Science with R Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Data Science with SAS Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Data Science with Python Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Ab Initio Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Datastage Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">OBIEE Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Microstrategy Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Cognos Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Cognos TM1 Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Informatica Data Quality Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Informatica MDM Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Buisness Objects Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Qlikview Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Pentaho Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Machine Learning Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Apache Spark Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Database Developer</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Oracle Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Teradata Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Informix Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Sybase Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">MongoDB Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Apache Cassandra Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>DBA Training</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Oracle DBA Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Advanced Oracle DBA Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Oracle Apps DBA Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Oracle Performance Tuning Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">SQL Server DBA Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">DB2 DBA Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">TeraData DBA Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">MySQL DBA Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">MongoDB Admin Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Robotic Process Automation</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Blue Prism Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Automation Anywhere Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">UI Path Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">OpenSpan Training</NavLink></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to="/"><span>Other Training</span><span><BiChevronRight></BiChevronRight></span></NavLink>
                                            <ul>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">PERL Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Python Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Ruby on Rails Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">UNIX Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Solaris Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">C & C++ Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">AJAX Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">CCNA/CCNP Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Chef Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Embedded System Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Windows PowerShell Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">DevOps Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Ansible Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Jenkins Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">MEAN Stack Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Tally Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">CyberArk Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Puppet Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Docker Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Google go Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Xamarin Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Google Cloud Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">BizTalk Training</NavLink></li>
                                                <li><NavLink onClick={()=>{setMenu(!menu)}} to="/">Cyber Security Training</NavLink></li>
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
                                        <li><NavLink to="/" onClick={()=>{setMenu(!menu)}}><span>Guindy</span></NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="online-training">
                                <div>
                                    <p><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Online Training</NavLink></p>
                                </div>
                            </li>
                            <li className="hire-talent">
                                <div>
                                    <p><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Hire Talent</NavLink></p>
                                </div>
                            </li>
                            <li className="contact-us">
                                <div>
                                    <p><NavLink to="/" onClick={()=>{setMenu(!menu)}}>Contact Us</NavLink></p>
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
