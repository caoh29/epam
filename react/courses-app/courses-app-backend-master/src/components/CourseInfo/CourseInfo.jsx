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
`;

const BackToCoursesContainer = styled.div`
    align-self: start;
    justify-content: center;
    width: auto;
    padding: 1%;
`;

const BodyContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    align-items: center;
    justify-content: start;
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
                        <b>Duration:</b>{location.state.duration}<br/>
                        <b>Created:</b>{location.state.creation}<br/>
                        <b>Authors:</b><br/>
                        {location.state.authors}<br/>
                        {location.state.authors}<br/>
                    </p>
                </BodyContainer>
            </CourseInfoContainer>
        </Fragment>
    );
}