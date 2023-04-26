import styled from "styled-components";
import Button from "../../../../common/Button/Button";
import constants from "../../../../constants";
import { useNavigate } from "react-router-dom";

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

function CourseCard (props) {

    const navigate = useNavigate();

    const showCourseHandler = (e) => {

        const courseData = {
            title: e.target.parentNode.firstChild.textContent,
            description: e.target.parentNode.childNodes[1].textContent,
            authors:  e.target.parentNode.childNodes[2].textContent,
            duration: e.target.parentNode.childNodes[3].textContent,
            creation: e.target.parentNode.childNodes[4].textContent,
            id: e.target.parentNode.id,
        };

        navigate(`/courses/${e.target.parentNode.id}`, {state: courseData});
    }

    const coursesWithAuthors = constants.mockedCoursesList.map((course) => ({
        ...course,
        authors: course.authors.map((authorId) =>
            constants.mockedAuthorsList.find((author) => author.id === authorId)
        ),
    }));

    const filteredCourses = coursesWithAuthors.filter((course) => course.title === props.title)[0];

    return (
        <Card id={props.id}>
            <Title>{props.title ? props.title : 'Title'}</Title>
            <Description>{props.description ? props.description : 'Description'}</Description>
            <Authors><b>Authors: </b>{props.authors ?
                props.authors.length > 2 ?
                    `${filteredCourses.authors[0] ? filteredCourses.authors[0].name : 'Unknown'}, ${filteredCourses.authors[1] ? filteredCourses.authors[1].name : 'Unknown'} ...` :
                    `${filteredCourses.authors[0] ? filteredCourses.authors[0].name : 'Unknown'}, ${filteredCourses.authors[1] ? filteredCourses.authors[1].name : 'Unknown'}`
                : props.authors.length === 1  ? `${filteredCourses.authors[0].name}` : 'Unknown'}
            </Authors>
            <Duration><b>Duration: </b>{props.duration ? props.duration : '00:00'} hours</Duration>
            <Creation><b>Created: </b>{props.creation ? props.creation : 'DD/MM/YYYY'}</Creation>
            <Button gridColumn="2" gridRow="4 " onClick={showCourseHandler} width="150px">Show course</Button>
        </Card>
    );
}


export default CourseCard;