import './App.css';
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import MainContent from './Components/MainContent/MainContent';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp'
import ProtectedRoute from './Components/ProtectedRoute'
import AllCourses from './Components/AllCourse/AllCourses';
import EditCourse from './Components/EditCourse/EditCourse';
import MainHomePage from './VcentComponents/MainHomePage';
import ResumeFirstPage from './ResumeComponents/ResumeFirstPage'
import AdminHomePage from './Components/AdminHomePage';
import EnquiryForm from './EnquiryForm/EnquiryForm';

function App() {
  const [id, setid] = useState("sign-in")

  useEffect(() => {
    const id = sessionStorage.getItem('vcentry_admin')
    if (id) {
      setid(true)
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/enquiry-form"><EnquiryForm></EnquiryForm></Route>
          <Route path="/resume"><ResumeFirstPage></ResumeFirstPage></Route>
          <Route path="/admin/sign-in"><SignIn></SignIn></Route>
          <Route path="/admin/sign-up"><SignUp></SignUp></Route>
          <ProtectedRoute path="/admin" component={AdminHomePage}></ProtectedRoute>
          <Route path="/"><MainHomePage></MainHomePage></Route>
        </Switch>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
