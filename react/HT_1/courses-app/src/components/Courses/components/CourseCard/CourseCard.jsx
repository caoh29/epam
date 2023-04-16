import styled from "styled-components";
import Button from "../../../../common/Button/Button";
import constants from "../../../../constants";

function CourseCard (props) {

    const Card = styled.div`
        display: grid;
        grid-template-columns: ${props.gridTemplateColumns ? props.gridTemplateColumns : 'repeat(2, 1fr)'};
        grid-template-rows: ${props.gridTemplateRows ? props.gridTemplateRows : 'repeat(4, 1fr)'};
        grid-gap: ${props.gridGap ? props.gridGap : '0'};
        column-gap: ${props.columnGap ? props.columnGap : '6rem'};
        padding: ${props.padding ? props.padding : '1rem'};
        border: 1px solid ${props.borderColor ? props.borderColor : 'green'};
        width: ${props.width ? props.width : 'auto'};
        height: ${props.height ? props.height : 'auto'};
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

    // const coursesWithAuthors = constants.mockedCoursesList.map((course) => ({
    //     ...course,
    //     authors: course.authors.map((authorId) =>
    //         constants.mockedAuthorsList.find((author) => author.id === authorId)
    //     ),
    // }));

    return (
        <Card id={props.id}>
            <Title>{props.title ? props.title : 'Title'}</Title>
            <Description>{props.description ? props.description : 'Description'}</Description>
            <Authors><b>Authors: </b>{props.authors ?
                props.authors.length > 2 ?
                    `${props.authors[0]}, ${props.authors[1]} ...` :
                    `${props.authors[0]}, ${props.authors[1]}`
                : 'Authors'}
            </Authors>
            <Duration><b>Duration: </b>{props.duration ? props.duration : '00:00'} hours</Duration>
            <Creation><b>Created: </b>{props.creation ? props.creation : 'DD/MM/YYYY'}</Creation>
            <Button gridColumn="2" gridRow="4 " onClick={props.onClick} width="150px">Show course</Button>
        </Card>
    );
}


export default CourseCard;