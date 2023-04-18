import './App.css'
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useState } from 'react';

function App() {

  const [showCreateCourse, setShowCreateCourse] = useState(false);

  const AddNewCourseHandler =() => {
    setShowCreateCourse(true);
  }

  return (
    <div className="App">
      <Header/>
      {showCreateCourse ? (
        <CreateCourse />
      ) : (
        <Courses onAddNewCourseClick={AddNewCourseHandler} />
      )}
    </div>
  )
}

export default App;