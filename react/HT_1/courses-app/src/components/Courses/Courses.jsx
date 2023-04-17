import styled from "styled-components";
import CourseCard from "./components/CourseCard/CourseCard";
import constants from "../../constants";
import SearchBar from "./components/SearchBar/SearchBar";


const CoursesContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid blue;
    padding: 1rem;
`;
function Courses (props) {

    return (
        <CoursesContainer>
            <SearchBar></SearchBar>
            <CourseCard key={constants.mockedCoursesList[0].id} id={constants.mockedCoursesList[0].id} title={constants.mockedCoursesList[0].title} description={constants.mockedCoursesList[0].description} authors={constants.mockedCoursesList[0].authors} duration={constants.mockedCoursesList[0].duration} creation={constants.mockedCoursesList[0].creationDate}>
            </CourseCard>
            <CourseCard key={constants.mockedCoursesList[1].id} id={constants.mockedCoursesList[1].id} title={constants.mockedCoursesList[1].title} description={constants.mockedCoursesList[1].description} authors={constants.mockedCoursesList[1].authors} duration={constants.mockedCoursesList[1].duration} creation={constants.mockedCoursesList[1].creationDate}>
            </CourseCard>
        </CoursesContainer>
    );
}


export default Courses;