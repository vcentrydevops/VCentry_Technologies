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
          <Route path="/admin/sign-in"><SignIn></SignIn></Route>
          <Route path="/admin/sign-up"><SignUp></SignUp></Route>
          <Route path="/admin/course/:id"><EditCourse></EditCourse></Route>
          <ProtectedRoute path="/admin/all-courses" component={AllCourses}></ProtectedRoute>
          <ProtectedRoute path="/admin" component={MainContent}></ProtectedRoute>
          <Route path="/"><MainHomePage></MainHomePage></Route>
        </Switch>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;