import styled from "styled-components";
import { Fragment } from "react";

const InputField = styled.input`
    padding: 10px;
    width: ${props => props.width ? props.width : "200px"};
    height: ${props => props.height ? props.height : "25px"};
    border: 3px solid ${props => props.borderColor ? props.borderColor : "yellow"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
    color: ${props => props.color ? props.color : "black"};
    font-size: ${props => props.fontSize ? props.fontSize : "1em"};
    margin: ${props => props.margin ? props.margin : "0"};
`;

const InputLabel = styled.label`
    padding: 10px;
    width: ${props => props.width ? props.width : ""};
    height: ${props => props.height ? props.height : ""};
    border: 1px solid ${props => props.borderColor ? props.borderColor : "white"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
    color: ${props => props.color ? props.color : "black"};
    font-size: ${props => props.fontSize ? props.fontSize : "1em"};
`;

function Input (props) {
    return (
        <Fragment>
            {props.labelText && <InputLabel for={props.id}>{props.labelText ? props.labelText : ''}</InputLabel>}
            <InputField margin={props.margin} width={props.width} height={props.height} placeholder={props.placeHolder} name={props.name} id={props.id} type={props.type} value={props.value} onChange={props.onChange}></InputField>
        </Fragment>
    );
}


export default Input;