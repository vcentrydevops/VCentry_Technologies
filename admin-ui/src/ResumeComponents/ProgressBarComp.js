import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../ResumeStyleSheets/ProgressBar.css'

function ProgressBarComp(props) {
    const { progressLevel, setprogressLevel } = props
    return (
        <div className="registration-comp">
            <div className="progress-bar-div">
                <ProgressBar now={progressLevel} label={`${progressLevel}%`} srOnly />
                <div id="progress-zero" className={progressLevel >= 0 ? "progress-active active-color" : "progress-active"}></div>
                <div id="progress-one" className={progressLevel >= 34.5 ? "progress-active active-color" : "progress-active"}></div>
                <div id="progress-three" className={progressLevel >= 68 ? "progress-active active-color" : "progress-active"}></div>
                <div id="progress-four" className={progressLevel === 100 ? "progress-active active-color" : "progress-active"}></div>
            </div>
        </div>)
}

export default ProgressBarComp
