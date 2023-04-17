import styled from "styled-components";

function Button (props) {

    const Button = styled.button`
        border-radius: 5%;
        padding: 10px;
        cursor: pointer;
        align-self: center;
        justify-self: center;
        text-align: center;
        width: ${props.width ? props.width : "75px"};
        height: ${props.height ? props.height : "50px"};
        ${props.gridColumn ? `grid-column: ${props.gridColumn};` : ""}
        ${props.gridRow ? `grid-row: ${props.gridRow};` : ""}
        border: 1px solid ${props.borderColor ? props.borderColor : "purple"};
        background-color: ${props.backgroundColor ? props.backgroundColor : "white"};
        color: ${props.color ? props.color : "black"};
    `;

    return (<Button key={props.key} onClick={props.onClick}>{props.children}</Button>);
}


export default Button;