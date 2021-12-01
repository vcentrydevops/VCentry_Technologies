import React, { Fragment, useState } from 'react'
import OtpInput from 'react-otp-input';
import { ToastContainer } from 'react-toastify';
import Header from '../Components/Header/Header';
import '../ResumeStyleSheets/OtpVerify.css'

export default function OtpVerify(props) {
    const {otp,signUp,setotp,verifyRef,resendOtp}=props
    return (
        <Fragment>
            <ToastContainer/>
            <Header></Header>
            <p className="otp-head-p">Enter the OTP</p>
            <div className="otp-cont-div">
                <OtpInput
                    className="email-otp"
                    value={otp} 
                    onChange={(value) => {
                        setotp(value)
                        console.log(value);
                    }}
                    numInputs={6}
                />
            </div>
            <div className="btn-cont-div">
            <input className="otp-input" ref={verifyRef} type="button" defaultValue="Verify" onClick={signUp}></input>
            <p className="resend-input" onClick={resendOtp}>Resend OTP</p>
            </div>
        </Fragment>
    )
}
