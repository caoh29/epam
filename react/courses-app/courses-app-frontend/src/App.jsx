import './App.css'
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { Fragment } from 'react';
import { BrowserRouter, Routes,  Route, Navigate, useParams } from 'react-router-dom';
import { Registration } from '../../courses-app-backend-master/src/components/Registration/Registration';
import { Login } from '../../courses-app-backend-master/src/components/Login/Login';
import { CourseInfo } from '../../courses-app-backend-master/src/components/CourseInfo/CourseInfo';




function App() {

  // const { courseId } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/registration" />} />
        <Route path="/registration" element={<Registration to="/login" />} />
        <Route path="/login" element={<Login to="/courses" />} />
        <Route path="/courses" element={<Fragment><Header/><Courses /></Fragment>} />
        <Route path="/courses/add" element={<Fragment><Header/><CreateCourse /></Fragment>} />
        <Route path="/courses/:courseId" element={<Fragment><Header/><CourseInfo /></Fragment>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;