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
    ${props => props.gridColumn ? `grid-column: ${props.gridColumn};` : ""}
    ${props => props.gridRow ? `grid-row: ${props.gridRow};` : ""}
`;

const InputLabel = styled.label`
    padding: 0;
    width: ${props => props.width ? props.width : "200px"};
    height: ${props => props.height ? props.height : "25px"};
    border: 3px solid ${props => props.borderColor ? props.borderColor : "white"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
    color: ${props => props.color ? props.color : "black"};
    font-size: ${props => props.fontSize ? props.fontSize : "1em"};
    margin: ${props => props.margin ? props.margin : "0"};
    text-align: ${props => props.textAlign ? props.textAlign : "left"};
    ${props => props.gridColumn ? `grid-column: ${props.gridColumn};` : ""}
    ${props => props.gridRow ? `grid-row: ${props.gridRow};` : ""}
    ${props => props.alignSelf ? `align-self: ${props.alignSelf};` : ""}
`;

function Input (props) {
    return (
        <Fragment>
            {props.labelText && <InputLabel 
                htmlFor={props.id} 
                textAlign={props.textAlign} 
                gridColumn={props.gridColumnLabel} 
                gridRow={props.gridRowLabel}
                alignSelf={props.alignSelfLabel}>
                    {props.labelText ? props.labelText : ''}
                </InputLabel>}
            <InputField 
                margin={props.margin} 
                width={props.width} 
                height={props.height} 
                backgroundColor={props.backgroundColor} 
                borderColor={props.borderColor} 
                color={props.color} 
                fontSize={props.fontSize}
                gridColumn={props.gridColumnInput} 
                gridRow={props.gridRowInput}
                placeholder={props.placeHolder} 
                name={props.name} 
                id={props.id} 
                type={props.type} 
                value={props.value} 
                onChange={props.onChange}>
            </InputField>
        </Fragment>
    );
}


export default Input;