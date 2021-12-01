import React, { useState, createRef, Fragment } from 'react'
import './SignIn.css'
import { Form, Button, Row, InputGroup } from 'react-bootstrap'
import API from '../../API/Service'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import Header from '../Header/Header'

function SignIn(props) {
    const [loginDetail, setloginDetail] = useState({ email: "", password: "" })
    const signBtnRef = createRef()
    const history = useHistory()
    const setLoginDetail = (event) => {
        setloginDetail({ ...loginDetail, [event.target.name]: event.target.value })
    }

    const signIn = (e) => {
        signBtnRef.current.disabled = true
        e.preventDefault()
        API.postApi('/admin/signIn', loginDetail).then(res => {
            toast.error(res.data.successMessage)
            sessionStorage.setItem('vcentry_admin', res.data.token)
            history.push("/admin")
        }).catch(err => {
            toast.error(err.response.data.errorMessage)
            signBtnRef.current.disabled = false
        })
    }

    const headerLink = [{ name: "Sign Up", path: "/admin/sign-up" }]

    return (
        <Fragment>
            <Header links={headerLink}></Header>
            <div className="admin-signin-main-div">
                <ToastContainer />
                <form onSubmit={signIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" onChange={setLoginDetail} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={setLoginDetail} placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                    <Button variant="primary" ref={signBtnRef} type="submit">
                        SignIn
                    </Button>
                </form>
            </div>
        </Fragment>
    )
}

export default SignIn
