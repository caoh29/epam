import styled from "styled-components";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";
import useStore from "../../store/store";


const PATH = '../../src/assets/logo.jpg';

const RedContainer = styled.div`
    border: 3px solid red;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
`;

const Title = styled.h3`
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

function Header () {

    const removeLoginInfo = useStore(state => state.removeLoginInfo);
    const userName = useStore(state => state.user.name);

    return (
        <RedContainer>
            <Logo src={PATH}/>
            <Title>COURSES</Title>
            <Button gridColumn="11" borderColor="none" width="100px">{userName}</Button>
            <Link to="/login">
                <Button gridColumn="12" width="100px" onClick={() => {removeLoginInfo(); localStorage.clear()}}>Logout</Button>
            </Link>
        </RedContainer>
    );
}


export default Header;