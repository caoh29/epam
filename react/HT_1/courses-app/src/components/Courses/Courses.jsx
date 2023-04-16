import styled from "styled-components";
import CourseCard from "./components/CourseCard/CourseCard";

const getDuration = () => {
    return `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} hours`;
};

const getCreation =  () => {
    return `${(Math.floor(Math.random() * 31) + 1).toString().padStart(2, '0')}/${(Math.floor(Math.random() * 12) + 1).toString().padStart(2, '0')}/${Math.floor(Math.random() * 20) + 2000}`;
};

const mockedCoursesList = [
    {
        id: Math.floor(Math.random() * 100),
        title: 'React',
        description: 'Meta\'s library for building user interfaces',
        authors : ['Jordan Walke', 'Dan Abramov', 'Kent C. Dodds'],
        duration: getDuration(),
        creation: getCreation(),
    },
    {
        id: Math.floor(Math.random() * 100),
        title: 'Vue',
        description: 'A Non-organizational JavaScript framework for building user interfaces',
        authors : ['Jordan Walke', 'Dan Abramov', 'Kent C. Dodds'],
        duration: getDuration(),
        creation: getCreation(),
    },
    {
        id: Math.floor(Math.random() * 100),
        title: 'Angular',
        description: 'Google\'s framework for building user interfaces',
        authors : ['Jordan Walke', 'Dan Abramov', 'Kent C. Dodds'],
        duration: getDuration(),
        creation: getCreation(),
    },
];

function Courses (props) {

    const Container = styled.div`
        display: flex;
        flex-direction: column;
        border: 3px solid blue;
        padding: 1rem;
    `;

    return (
        <Container>
            <CourseCard id={mockedCoursesList[0].id} title={mockedCoursesList[0].title} description={mockedCoursesList[0].description} authors={mockedCoursesList[0].authors} duration={mockedCoursesList[0].duration} creation={mockedCoursesList[0].creation}>
            </CourseCard>
            <CourseCard id={mockedCoursesList[1].id} title={mockedCoursesList[1].title} description={mockedCoursesList[1].description} authors={mockedCoursesList[1].authors} duration={mockedCoursesList[1].duration} creation={mockedCoursesList[1].creation}>
            </CourseCard>
            <CourseCard id={mockedCoursesList[2].id} title={mockedCoursesList[2].title} description={mockedCoursesList[2].description} authors={mockedCoursesList[2].authors} duration={mockedCoursesList[2].duration} creation={mockedCoursesList[2].creation}>
            </CourseCard>
        </Container>
    );
}


export default Courses;