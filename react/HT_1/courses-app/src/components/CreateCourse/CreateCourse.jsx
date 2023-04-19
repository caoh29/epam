import styled from "styled-components";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import constants from "../../constants";
import { useState } from "react";

const CreateCourseContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid salmon;
    padding: 1rem;
    margin-top: 2rem;
`;

const GridContainer2x2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;

const Label = styled.label`
    padding: 0;
    margin: ${props => props.margin ? props.margin : "0"};
    width: ${props => props.width ? props.width : "200px"};
    height: ${props => props.height ? props.height : "25px"};
    border: 3px solid ${props => props.borderColor ? props.borderColor : "white"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
    color: ${props => props.color ? props.color : "black"};
    font-size: ${props => props.fontSize ? props.fontSize : "1em"};
    text-align: ${props => props.textAlign ? props.textAlign : "start"};
    ${props => props.gridColumn ? `grid-column: ${props.gridColumn};` : ""}
    ${props => props.gridRow ? `grid-row: ${props.gridRow};` : ""}
    ${props => props.alignSelf ? `align-self: ${props.alignSelf};` : ""}
`;

const TextArea = styled.textarea`
    padding: 15px;
    margin: ${props => props.margin ? props.margin : "0"};
    width: ${props => props.width ? props.width : "auto"};
    height: ${props => props.height ? props.height : "150px"};
    border: 3px solid ${props => props.borderColor ? props.borderColor : "yellow"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};
    color: ${props => props.color ? props.color : "gray"};
    font-size: ${props => props.fontSize ? props.fontSize : "1rem"};
    text-align: ${props => props.textAlign ? props.textAlign : "start"};
    ${props => props.gridColumn ? `grid-column: ${props.gridColumn};` : ""}
    ${props => props.gridRow ? `grid-row: ${props.gridRow};` : ""}
    ${props => props.alignSelf ? `align-self: ${props.alignSelf};` : ""}
`;

function CreateCourse (props) {

    return (
        <CreateCourseContainer>
            <GridContainer2x2>
                <Input 
                    labelText="Title" 
                    gridColumnLabel="1" 
                    gridRowLabel="1"
                    alignSelfLabel="end"
                    gridColumnInput="1" 
                    gridRowInput="2" 
                    placeHolder="Enter title..." 
                    borderColor="brown">
                </Input>
                <Button
                    gridColumn="2"
                    gridRow="2"
                    width="150px"
                    justifySelf="end"
                    onClick={() => {}}>
                        Create course
                </Button>
            </GridContainer2x2>
            <Label htmlFor="TextArea" margin="20px 0 0 0">Description</Label>
            <TextArea id="TextArea" defaultValue="Enter description"/>
        </CreateCourseContainer>
    );
}


export default CreateCourse;