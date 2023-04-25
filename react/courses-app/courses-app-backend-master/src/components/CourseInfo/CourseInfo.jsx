import styled from "styled-components";
import Header from "../../../../courses-app-frontend/src/components/Header/Header";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";




const CourseInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    padding: 2%;
    border: 3px solid blue;
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

export function CourseInfo () {

    const location = useLocation();

    return (
        <Fragment>
            <Header/>
            <CourseInfoContainer>
                <BackToCoursesContainer>
                    <Link to="/courses">&larr; Back to courses</Link>
                </BackToCoursesContainer>
                <h2>{location.state.title}</h2>
                <BodyContainer>
                    <p>{location.state.description}</p>
                    <p>
                        <b>ID:</b>{location.state.id}<br/>
                        <b>Duration:</b>{location.state.duration.split(' ')[1]}<br/>
                        <b>Created:</b>{location.state.creation.split(' ')[1]}<br/>
                        <b>Authors:</b><br/>
                        {location.state.authors.match(/Authors:\s*(.*)/)?.[1].split(/\s*,\s*/).map(author => (
                            <Fragment>
                                {author}
                                <br/>
                            </Fragment>
                        ))}
                    </p>
                </BodyContainer>
            </CourseInfoContainer>
        </Fragment>
    );
}