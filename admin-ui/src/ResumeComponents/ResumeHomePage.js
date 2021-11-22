import React, { Fragment, useEffect, useState } from 'react'
import ProgressBarComp from './ProgressBarComp';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import CarrerDetails from './CarrerDetails';
import ResumeUpload from './ResumeUpload';
import '../ResumeStyleSheets/ResumeHome.css'
import Preview from './Preview';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Components/Header/Header';

export default function ResumeHomePage() {
  const [progressLevel, setprogressLevel] = useState()
  const [slideShow, setslideShow] = useState(0)
  const [progressBar, setProgressBar] = useState(true)
  const [personData, setPersonData] = useState({
    userName: "",
    email: "",
    mobileNo: ""
  })

  const [eduData, seteduData] = useState({
    sslcDetails: {},
    sscDetails: {},
    ugDetails: {},
    pgDetails: {}
  })

  const [carrierData, setcarrierData] = useState({
    currentCompany: "",
    fresher: false,
    technologies: [],
    domain: "",
    experience: "",
    workingStatus: "false",
    noticePeriod: ""
  })

  const [resumeData, setresumeData] = useState()
  const [homeLoading, sethomeLoading] = useState(true)

  useEffect(() => {
    const href = window.location.href
    const id = sessionStorage.getItem('userId')
    axios.get(`/resume/user/${id}`).then(res => {
      if (res.data.info) {
        const data = res.data.info
        setPersonData({
          userName: res.data.result.userName,
          email: res.data.result.email,
          mobileNo: `${data.mobileNo}`
        })
        seteduData({
          sslcDetails: data.sslcDetails ? data.sslcDetails : {},
          sscDetails: data.sscDetails ? data.sscDetails : {},
          ugDetails: data.ugDetails ? data.ugDetails : {},
          pgDetails: data.pgDetails ? data.pgDetails : {}
        })
        setcarrierData({
          currentCompany: data.currentCompany ? data.currentCompany : "",
          fresher: data.fresher ? data.fresher : false,
          technologies: data.technologies ? data.technologies : [],
          domain: data.domain ? data.domain : "",
          experience: data.experience ? data.experience : "",
          workingStatus: data.workingStatus ? data.workingStatus : "false",
          noticePeriod: data.noticePeriod ? data.noticePeriod : ""
        })
        setresumeData(data.resume ? data.resume : "")
        sethomeLoading(false)
      } else {
        setPersonData({
          userName: res.data.result.userName,
          email: res.data.result.email,
          mobileNo: ""
        })
        sethomeLoading(false)
      }
    }).catch(err => {
      console.log(err.response);
    })
    if (href.includes("/resume/education_detail")) {
      setProgressBar(false)
      setprogressLevel(34.5)
    } else if (href.includes("/resume/carrer_detail")) {
      setProgressBar(false)
      setprogressLevel(68)
    } else if (href.includes("/resume/resume_upload")) {
      setProgressBar(false)
      setprogressLevel(100)
    } else if (href.includes("/resume/preview_resume")) {
      setProgressBar(true)
    } else {
      setProgressBar(false)
      setprogressLevel(0)
    }
  }, [])


  return (
    <Fragment>
      <Header></Header>
    <div className="App" style={homeLoading ? { opacity: "0.5" } : { opacity: "1" }}>
      <BrowserRouter>
        <div className="routing-container">
          <Switch>
            <Route path="/resume/preview_resume"><Preview resumeData={resumeData} carrierData={carrierData} eduData={eduData} setslideShow={setslideShow} personData={personData} setprogressLevel={setprogressLevel} setProgressBar={setProgressBar}></Preview></Route>
            {/* <Route path="/resume/resume_upload"><ResumeUpload resumeData={resumeData} setresumeData={setresumeData} setprogressLevel={setprogressLevel} setProgressBar={setProgressBar}></ResumeUpload></Route>
            <Route path="/resume/education_detail"><EducationDetails eduData={eduData} seteduData={seteduData} setprogressLevel={setprogressLevel}></EducationDetails></Route>
            <Route path="/resume/carrer_detail"><CarrerDetails carrierData={carrierData} setcarrierData={setcarrierData} setprogressLevel={setprogressLevel}></CarrerDetails></Route> */}
            <Route path="/resume">
              {!progressBar && <ProgressBarComp progressLevel={progressLevel} setprogressLevel={setprogressLevel}></ProgressBarComp>}
              <div className="resume-slide-cont">
                <div className="resume-slide-div" style={{ left: `-${slideShow}%`, transition: "1s" }} >
                  <PersonalDetails setprogressLevel={setprogressLevel} personData={personData} setpersonData={setPersonData} setslideShow={setslideShow}></PersonalDetails>
                  <EducationDetails eduData={eduData} seteduData={seteduData} setprogressLevel={setprogressLevel} setslideShow={setslideShow}></EducationDetails>
                  <CarrerDetails carrierData={carrierData} setcarrierData={setcarrierData} setprogressLevel={setprogressLevel} setslideShow={setslideShow}></CarrerDetails>
                  <ResumeUpload resumeData={resumeData} setresumeData={setresumeData} setprogressLevel={setprogressLevel} setslideShow={setslideShow} setProgressBar={setProgressBar}></ResumeUpload>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    </Fragment>
  );
}
