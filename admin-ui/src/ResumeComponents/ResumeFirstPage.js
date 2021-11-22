import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
import ResumeHomePage from './ResumeHomePage';
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function ResumeFirstPage() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/resume/sign-in"><SignIn></SignIn></Route>
                    <Route path="/resume/sign-up"><SignUp></SignUp></Route>
                    <Route path="/resume"><ProtectedRoute component={ResumeHomePage}></ProtectedRoute></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
