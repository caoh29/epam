import styled from "styled-components";
import Button from "../../../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import CourseAuthors from "./components/CourseAuthors/CourseAuthors";
import useStore from "../../../../store/store.js";
import { Fragment } from "react";

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
    const authorsList = useStore((state) => state.authors);
    const deleteCourse = useStore((state) => state.deleteCourse);
    const role = useStore((state) => state.user.role);

    const navigate = useNavigate();

    const sendEventData = (event, url) => {
        const eventPath = event.target.parentNode.parentNode;
        const data = {
            title: eventPath.firstChild.textContent,
            description: eventPath.childNodes[1].textContent,
            authorsData:  eventPath.childNodes[2].textContent,
            duration: eventPath.childNodes[3].textContent,
            creation: eventPath.childNodes[4].textContent,
            id: eventPath.id,
        };
        navigate(url, {state: data});
    }

    const showCourseHandler = (e) => {
        const url = `/courses/${e.target.parentNode.parentNode.id}`;
        sendEventData(e, url);
    }

    const editCourseHandler = (e) => {
        const url = `/courses/update/${e.target.parentNode.parentNode.id}`;
        sendEventData(e, url);
    }

    const coursesWithAuthors = courses.map((course) => ({
        ...course,
        authors: course.authors.map((authorId) =>
            authorsList.find((author) => author.id === authorId)
        ),
    }));


    return (
        <Card id={props.id}>
            <Title>{props.title ? props.title : 'Title'}</Title>
            <Description>{props.description ? props.description : 'Description'}</Description>
            <Authors><b>Authors: </b>
                {/* {coursesWithAuthors && coursesWithAuthors.length > 0 ? (
                    <CourseAuthors authors={coursesWithAuthors.find((course) => course.id === props.id).authors} />
                    ) : (
                    <span>Unknown</span>
                )} */}
                {/* {coursesWithAuthors && coursesWithAuthors.length > 0 ? (
                    <CourseAuthors authors={coursesWithAuthors.find((course) => course.id === props.id).authors} />
                    ) : (
                    <span>Unknown</span>
                )} */}
            </Authors>
            <Duration><b>Duration: </b>{props.duration ? props.duration : '00:00'} hours</Duration>
            <Creation><b>Created: </b>{props.creation ? props.creation : 'DD/MM/YYYY'}</Creation>
            <ButtonsContainer>
                <Button onClick={showCourseHandler} width="150px">Show course</Button>
                {role === 'admin' && (
                    <Fragment>
                        <Button onClick={editCourseHandler} width="auto">Edit</Button>
                        <Button onClick={() => { deleteCourse(props.id) }} width="auto">Delete</Button>
                    </Fragment>
                )}
            </ButtonsContainer>
        </Card>
    );
}


export default CourseCard;