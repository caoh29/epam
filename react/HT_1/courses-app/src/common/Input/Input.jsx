import styled from "styled-components";
import Button from "../Button/Button";
import { Fragment } from "react";

function Input (props) {

    const InputField = styled.input`
        padding: 10px;
        width: ${props.width ? props.width : "200px"};
        height: ${props.height ? props.height : "25px"};
        ${props.gridColumn ? `grid-column: ${props.gridColumn};` : ""}
        ${props.gridRow ? `grid-row: ${props.gridRow};` : ""}
        border: 3px solid ${props.borderColor ? props.borderColor : "yellow"};
        background-color: ${props.backgroundColor ? props.backgroundColor : "white"};
        color: ${props.color ? props.color : "black"};
        font-size: ${props.fontSize ? props.fontSize : "1em"};
        margin: ${props.margin ? props.margin : "0"};
    `;

    const InputLabel = styled.label`
        padding: 10px;
        width: ${props.width ? props.width : ""};
        height: ${props.height ? props.height : ""};
        ${props.gridColumn ? `grid-column: ${props.gridColumn};` : ""}
        ${props.gridRow ? `grid-row: ${props.gridRow};` : ""}
        border: 1px solid ${props.borderColor ? props.borderColor : "white"};
        background-color: ${props.backgroundColor ? props.backgroundColor : "white"};
        color: ${props.color ? props.color : "black"};
        font-size: ${props.fontSize ? props.fontSize : "1em"};
    `;

    return (
        <Fragment>
            {props.labelText && <InputLabel for={props.id}>{props.labelText ? props.labelText : ''}</InputLabel>}
            <InputField placeholder={props.placeHolder} name={props.name} id={props.id} type={props.type} value={props.value} onChange={props.onChange} key={props.key}></InputField>
        </Fragment>
    );
}


export default Input;