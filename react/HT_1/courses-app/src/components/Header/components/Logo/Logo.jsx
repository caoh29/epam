import styled from "styled-components";

function Logo (props) {

    const Logotype = styled.img`
        position: absolute;
        grid-column: 1;
        z-index: 2;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid blue;
        cursor: pointer;
        align-self: center;
    `;

    return (<Logotype src={props.src} alt="Logo" />);
}


export default Logo;