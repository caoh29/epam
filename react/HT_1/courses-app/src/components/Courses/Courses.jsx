import styled from "styled-components";
import CourseCard from "./components/CourseCard/CourseCard";
import constants from "../../constants";

function Courses (props) {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        border: 3px solid blue;
        padding: 1rem;
    `;

    return (
        <Container>
            <CourseCard id={constants.mockedCoursesList[0].id} title={constants.mockedCoursesList[0].title} description={constants.mockedCoursesList[0].description} authors={constants.mockedCoursesList[0].authors} duration={constants.mockedCoursesList[0].duration} creation={constants.mockedCoursesList[0].creationDate}>
            </CourseCard>
            <CourseCard id={constants.mockedCoursesList[1].id} title={constants.mockedCoursesList[1].title} description={constants.mockedCoursesList[1].description} authors={constants.mockedCoursesList[1].authors} duration={constants.mockedCoursesList[1].duration} creation={constants.mockedCoursesList[1].creationDate}>
            </CourseCard>
        </Container>
    );
}


export default Courses;