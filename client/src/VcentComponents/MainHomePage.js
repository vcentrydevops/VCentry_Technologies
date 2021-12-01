import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import API from '../API/Service' 
import Footer from './Footer/Footer';
import Home from './Home/Home'; 

function MainHomePage() {
  const [courses, setcourses] = useState([]) 
  const [listCourse, setlistCourse] = useState([])

  useEffect(() => {
    API.getApi("course/courses").then((response) => {
      setcourses(response.data)
      console.log(response.data);
    })
  }, [])


  const allCourse = courses.map((data) => {
    return <Route path={data.path} key={data._id}><MainContent courseDetails={data}></MainContent></Route>
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          {allCourse}
          <Route path="/"><Home courses={courses} listCourse={listCourse} setlistCourse={setlistCourse}></Home></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default MainHomePage;
