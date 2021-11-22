import React, { useState,createRef } from 'react'
import Header from '../Components/Header/Header'
import { Form, Button } from 'react-bootstrap'
import '../ResumeStyleSheets/SignIn.css'
import API from '../API/Service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router";

export default function SignIn() {
    const [loginDetail, setloginDetail] = useState({ email: "", password: "", localStore: false })
    const history = useHistory()
    const signInRef = createRef()
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const getLoginDetail = (e) => {
        if (e.target.name === 'localStore') {
            setloginDetail({ ...loginDetail, [e.target.name]: e.target.checked })
        } else {
            setloginDetail({ ...loginDetail, [e.target.name]: e.target.value })
        }
    }

    const signIn = (e) => {
        e.preventDefault()
        signInRef.current.disabled=true
        if (!loginDetail.email || !loginDetail.password) {
            toast.warn("please enter all fields");
            signInRef.current.disabled=false
        }else if(!emailRegex.test(loginDetail.email))
        {
            toast.warn("Please enter the valid email",{position: toast.POSITION.TOP_CENTER});
            signInRef.current.disabled=false
        } else {
            API.postApi("/resume/user/sign-in", loginDetail).then((res) => {
                sessionStorage.setItem('vcentry_token',res.data.token)
                sessionStorage.setItem('userId',res.data.id)
                signInRef.current.disabled=false
                history.push('/resume')
            }).catch(err => {
                toast.error(err.response.data.errorMessage);
                signInRef.current.disabled=false
            })
        }
    }

    const links = [{name:"Sign Up",path:"/resume/sign-up"}]

    return (
        <div>
            <Header header="VCentry Technologies" links={links}/>
            <ToastContainer autoClose={3000}/>
            <div id="sign-in-form">
                <form onSubmit={signIn}>
                    <Form.Group controlId="emailId">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={getLoginDetail} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="passwordSignin">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={getLoginDetail} />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="localStore" onChange={getLoginDetail} label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit" ref={signInRef}>
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    )
}
