import styled from "styled-components";

const Btn = styled.button`
    border-radius: 5%;
    padding: 10px;
    cursor: pointer;
    align-self: center;
    justify-self: center;
    text-align: center;
    width: ${props => props.width ? props.width : "75px"};
    height: ${props => props.height ? props.height : "50px"};
    ${props => props.gridColumn ? `grid-column: ${props.gridColumn};` : ""}
    ${props => props.gridRow ? `grid-row: ${props.gridRow};` : ""}
    border: 1px solid ${props => props.borderColor ? props.borderColor : "purple"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
    color: ${props => props.color ? props.color : "black"};
`;

function Button (props) {
    return (<Btn gridColumn={props.gridColumn} gridRow={props.gridRow} width={props.width} height={props.height} borderColor={props.borderColor} backgroundColor={props.backgroundColor} color={props.color} onClick={props.onClick}>{props.children}</Btn >);
}


export default Button;