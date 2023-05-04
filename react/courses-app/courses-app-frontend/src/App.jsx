import './App.css'
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { Fragment } from 'react';
import { BrowserRouter, Routes,  Route, Navigate } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import useStore from './store/store';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {

  const isAuth = useStore(state => state.user.isAuth);
  const role = useStore(state => state.user.role);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/registration" />} />
        <Route path="/registration" element={<Registration to="/login" />} />
        <Route path="/login" element={<Login to="/courses" />} />
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path="/courses" element={<Fragment><Header/><Courses /></Fragment>} />
          <Route path="/courses/:courseId" element={<Fragment><Header/><CourseInfo /></Fragment>} />
        </Route>
        <Route element={<PrivateRoute isAuth={isAuth && role === 'admin'} />}>
          <Route path="/courses/add" element={<Fragment><Header/><CreateCourse /></Fragment>} />
          <Route path="/courses/update/:courseId" element={<Fragment><Header/><CreateCourse /></Fragment>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;