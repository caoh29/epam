import styled from "styled-components";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";

function Header () {

    const PATH = '../../src/assets/logo.jpg';

    const Container = styled.div`
        border: 3px solid red;
        padding: 1rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: 1fr;
    `;

    const Courses = styled.h3`
        grid-column: 1 / span 2;
        z-index: 1;
        color: white;
        background-color: black;
        text-align: end;
        padding-right: 1rem;

        @media (max-width: 1050px) {
            grid-column: 1 / span 3;
        }

        @media (max-width: 790px) {
            grid-column: 1 / span 4;
        }

        @media (max-width: 670px) {
            grid-column: 1 / span 5;
        }

        @media (max-width: 580px) {
            grid-column: 1 / span 6;
        }

        @media (max-width: 540px) {
            grid-column: 1 / span 7;
        }

        @media (max-width: 500px) {
            display: none;
        }
    `;

    return (
        <Container>
            <Logo src={PATH}/>
            <Courses>COURSES</Courses>
            <Button gridColumn="11" borderColor="none">Name</Button>
            <Button gridColumn="12">Logout</Button>
        </Container>
    );
}


export default Header;