import styled from "styled-components";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import Button from "../../common/Button/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../store/store.js";


const CoursesContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid blue;
    padding: 1rem;
    margin-top: 2rem;
`;

const CoursesNavContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;


function Courses () {

    const coursesData = useStore((state) => state.courses);
    const updateCourses = useStore((state) => state.updateCourses);
    const updateAuthors = useStore((state) => state.updateAuthors);

    const [courses, setCourses] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            await updateAuthors();
            await updateCourses();
        };
        fetchData();
    }, []);

    useEffect(() => {
        setCourses(coursesData);
    }, [coursesData]);

    return (
        <CoursesContainer>
            <CoursesNavContainer>
                <SearchBar setCourses={setCourses}/>
                <Button width="140px" margin="0 0 0 auto" onClick={() => navigate('/courses/add')}>Add new course</Button>
            </CoursesNavContainer>
            {courses.map((course) => { 
                return <CourseCard key={course.id} id={course.id} title={course.title} description={course.description} authors={course.authors} duration={course.duration} creation={course.creationDate}/>
            })}
        </CoursesContainer>
    );
}


export default Courses;