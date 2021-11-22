import React from 'react'
import ProtectedRoute from './ProtectedRoute'
import AllCourses from './AllCourse/AllCourses';
import MainContent from './MainContent/MainContent';
import EditCourse from './EditCourse/EditCourse';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Header from './Header/Header';
import '../StyleSheets/AdminHome.css'
import AdminResumeView from './AdminResumeView';

export default function AdminHomePage() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin/all-courses" component={AllCourses}></Route>
                <Route path="/admin/course/:id" component={EditCourse}></Route>
                <Route path="/admin/courses" component={MainContent}></Route>
                <Route path="/admin/resume" component={AdminResumeView}></Route>
                <Route path="/admin">
                    <Header signOutBtn={true}></Header>
                    <div className="admin-home">
                            <NavLink to="/admin/all-courses">Add Courses</NavLink>
                            <NavLink to="/admin/resume">Resume</NavLink>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
