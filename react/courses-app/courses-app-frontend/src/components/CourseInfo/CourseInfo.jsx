import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";

const CourseInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 2%;
    border: 3px solid cyan;
    margin-top: 2%;
`;

const BackToCoursesContainer = styled.div`
    align-self: start;
    justify-content: center;
    width: auto;
    padding: 1%;
`;

const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    column-gap: 150px;
    align-items: center;
    justify-content: center;
    text-align: start;
    width: auto;
    padding: 2%;
`;

function CourseInfo () {

    const location = useLocation();

    const { title, description, id, duration, creation, authors } = location.state;

    return (
        <CourseInfoContainer>
            <BackToCoursesContainer>
                <Link to="/courses">&larr; Back to courses</Link>
            </BackToCoursesContainer>
            <h2>{title}</h2>
            <BodyContainer>
                <p>{description}</p>
                <p>
                    <b>ID:</b>{id}<br/>
                    <b>Duration:</b>{duration.split(' ')[1]}<br/>
                    <b>Created:</b>{creation.split(' ')[1]}<br/>
                    <b>Authors:</b><br/>
                    {authors.match(/Authors:\s*(.*)/)?.[1].split(/\s*,\s*/).map(author => (
                        <Fragment key={Math.floor(Math.random() * 1000)}>
                            {author}
                            <br/>
                        </Fragment>
                    ))}
                </p>
            </BodyContainer>
        </CourseInfoContainer>
    );
}

export default CourseInfo;