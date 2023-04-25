import './App.css'
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useState, Fragment } from 'react';
import { BrowserRouter, Routes,  Route, Navigate, useParams } from 'react-router-dom';
import { Registration } from '../../courses-app-backend-master/src/components/Registration/Registration';
import { Login } from '../../courses-app-backend-master/src/components/Login/Login';
import { CourseInfo } from '../../courses-app-backend-master/src/components/CourseInfo/CourseInfo';




function App() {

  const [showCreateCourse, setShowCreateCourse] = useState(false);

  const AddNewCourseClickHandler = () => {
    setShowCreateCourse(true);
  };

  const CreateCourseClickHandler = () => {
    setShowCreateCourse(false);
  };

  // const { courseId } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/registration" />} />
        <Route path="/registration" element={<Registration to="/login" />} />
        <Route path="/login" element={<Login to="/courses" />} />
        <Route path="/courses" element={showCreateCourse ? (<Fragment><Header/><CreateCourse onCreateCourseClick={CreateCourseClickHandler}/></Fragment>) : (<Fragment><Header/><Courses onAddNewCourseClick={AddNewCourseClickHandler} /></Fragment>)} />
        <Route path="/courses/:courseId" element={<CourseInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;