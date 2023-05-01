import styled from "styled-components";
import Button from "../../../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import useStore from "../../../../store/store.js";

const Card = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns ? props.gridTemplateColumns : 'repeat(2, 1fr)'};
    grid-template-rows: ${props => props.gridTemplateRows ? props.gridTemplateRows : 'repeat(4, 1fr)'};
    grid-gap: ${props => props.gridGap ? props.gridGap : '0'};
    column-gap: ${props => props.columnGap ? props.columnGap : '200px'};
    padding: ${props => props.padding ? props.padding : '1rem'};
    border: 3px solid ${props => props.borderColor ? props.borderColor : 'green'};
    width: ${props => props.width ? props.width : 'auto'};
    height: ${props => props.height ? props.height : 'auto'};
    margin: ${props => props.margin ? props.margin : '20px 0'};

    @media (min-width: 1280px) { 
        justify-items: center;
    }

    @media (max-width: 1000px) { 
        column-gap: 100px;
    }

    @media (max-width: 800px) { 
        column-gap: 50px;
    }
`;

const Title = styled.h2`
    grid-column: 1;
    grid-row: 1;
    text-align: start;
`;

const Paragraph = styled.p`
    text-align: start;
    margin: 0;
`;

const Description = styled(Paragraph)`
    grid-column: 1;
    grid-row: 2 / span 3;
`;

const Authors = styled(Paragraph)`
    grid-column: 2;
    grid-row: 1;
`;

const Duration = styled(Paragraph)`
    grid-column: 2;
    grid-row: 2;
`;


const Creation = styled(Paragraph)`
    grid-column: 2;
    grid-row: 3;
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    grid-column: 2;
    grid-row: 4;
`;

function CourseCard (props) {

    const courses = useStore((state) => state.courses);
    const authorsData = useStore((state) => state.authors);
    const deleteCourse = useStore((state) => state.deleteCourse);

    const navigate = useNavigate();

    const showCourseHandler = (e) => {

        const courseData = {
            title: e.target.parentNode.parentNode.firstChild.textContent,
            description: e.target.parentNode.parentNode.childNodes[1].textContent,
            authors:  e.target.parentNode.parentNode.childNodes[2].textContent,
            duration: e.target.parentNode.parentNode.childNodes[3].textContent,
            creation: e.target.parentNode.parentNode.childNodes[4].textContent,
            id: e.target.parentNode.parentNode.id,
        };

        navigate(`/courses/${e.target.parentNode.parentNode.id}`, {state: courseData});
    }

    const coursesWithAuthors = courses.map((course) => ({
        ...course,

        authors: course.authors.map((authorId) =>
            authorsData.find((author) => author.id === authorId)
        ),
    }));


    const displayAuthors = () => {
        if (coursesWithAuthors !== undefined && coursesWithAuthors.length > 0) {
            const filteredCourses = coursesWithAuthors.filter((course) => course.title === props.title)[0];
            if (props.authors) {
                if (props.authors.length == 1) {
                    return `${filteredCourses.authors[0].name}`;
                } else if (props.authors.length == 2) {
                    return `${filteredCourses.authors[0] ? filteredCourses.authors[0].name : 'Unknown'}, ${filteredCourses.authors[1] ? filteredCourses.authors[1].name : 'Unknown'}`
                } else if (props.authors.length > 2) {
                    return `${filteredCourses.authors[0] ? filteredCourses.authors[0].name : 'Unknown'}, ${filteredCourses.authors[1] ? filteredCourses.authors[1].name : 'Unknown'} ...`
                } else {
                    return 'Unknown';
                }
            } else {
                return;
            }
        }
    }

    return (
        <Card id={props.id}>
            <Title>{props.title ? props.title : 'Title'}</Title>
            <Description>{props.description ? props.description : 'Description'}</Description>
            <Authors><b>Authors: </b>
                {displayAuthors()}
            </Authors>
            <Duration><b>Duration: </b>{props.duration ? props.duration : '00:00'} hours</Duration>
            <Creation><b>Created: </b>{props.creation ? props.creation : 'DD/MM/YYYY'}</Creation>
            <ButtonsContainer>
                <Button onClick={showCourseHandler} width="150px">Show course</Button>
                <Button onClick={() => {}} width="auto">Edit</Button>
                <Button onClick={() => { deleteCourse(props.id) }} width="auto">Delete</Button>
            </ButtonsContainer>
        </Card>
    );
}


export default CourseCard;