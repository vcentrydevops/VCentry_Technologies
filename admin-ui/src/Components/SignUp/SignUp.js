import React, { createRef, useState, Fragment } from 'react'
import './SignUp.css'
import { Form, Button, Row, Col } from 'react-bootstrap'
import API from '../../API/Service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/Header'
import {useHistory} from 'react-router-dom'

export default function SignUp() {
    const [signupDetail, setsignupDetail] = useState(
        {
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobileNo: ""
        }
    )
    const userRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const confirmRef = createRef()
    const mobileRef = createRef()
    const signupRef = createRef()
    const history = useHistory()

    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const getSignupDetails = (e) => {
        setsignupDetail({ ...signupDetail, [e.target.name]: e.target.value })
    }

    const emptyRef = () => {
        userRef.current.value = ""
        emailRef.current.value = ""
        passwordRef.current.value = ""
        confirmRef.current.value = ""
        mobileRef.current.value = ""
        setsignupDetail({
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            mobileNo: ""
        })
        history.push('/admin/sign-in')
    }

    const signUp = (e) => {
        e.preventDefault()
        signupRef.current.disabled = true
        if (signupDetail.email || signupDetail.userName || signupDetail.mobileNo || signupDetail.password) {
            if (emailRegex.test(signupDetail.email)) {
                if (signupDetail.password === signupDetail.confirmPassword) {
                    if (!passwordRegex.test(signupDetail.password)) {
                        toast.warn("Password must contains one upperCase, one LowerCase, one numeric and one special character", { position: toast.POSITION.TOP_CENTER })
                        signupRef.current.disabled = false
                    }
                    else {
                        API.postApi('/admin/signUp', {
                            userName: signupDetail.userName,
                            email: signupDetail.email,
                            password: signupDetail.password,
                            mobileNo: parseInt(signupDetail.mobileNo),
                        }).then(response => {
                            toast.success(response.data.successMessage, { position: toast.POSITION.TOP_CENTER });
                            emptyRef()
                        }).catch(err => {
                            toast.error(err.response.data.errorMessage, { position: toast.POSITION.TOP_CENTER });
                            signupRef.current.disabled = false
                        })
                    }
                } else {
                    toast.warn("Please confirm password", { position: toast.POSITION.TOP_CENTER });
                    signupRef.current.disabled = false
                }
            } else {
                toast.warn("Enter valid email", { position: toast.POSITION.TOP_CENTER });
                signupRef.current.disabled = false
            }
        } else {
            toast.warn("Enter all fields", { position: toast.POSITION.TOP_CENTER });
            signupRef.current.disabled = false
        }
    }

    return (
        <Fragment>
            <Header id="sign-in"></Header>
            <div>
                <ToastContainer />
                <div id="admin-signup-form">
                    <form onSubmit={signUp}>
                        <Form.Group as={Row} controlId="userName">
                            <Form.Label column sm="2">
                                User Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Enter User Name" name="userName" ref={userRef} onChange={getSignupDetails} required />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a username.
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="email">
                            <Form.Label column sm="2">
                                Email address
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="Enter email" name="email" ref={emailRef} onChange={getSignupDetails} required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="password">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" name="password" ref={passwordRef} onChange={getSignupDetails} required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="confirmPassword">
                            <Form.Label column sm="2">
                                Confirm Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" ref={confirmRef} onChange={getSignupDetails} required />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="mobileNo">
                            <Form.Label column sm="2">
                                Mobile No.
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="number" placeholder="Enter Mobile No." name="mobileNo" ref={mobileRef} onChange={getSignupDetails} required />
                            </Col>
                        </Form.Group>
                        <div id="admin-sign-up-btn">
                            <Button variant="primary" type="submit" ref={signupRef}>
                                SignUp
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
