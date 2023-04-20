import styled from "styled-components";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import constants from "../../constants";
import { v4 as uuidv4 } from 'uuid';
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
    ${props => props.gridGap ? `grid-gap: ${props.gridGap};` : ""}
    ${props => props.rowGap ? `row-gap: ${props.rowGap};` : ""}
    ${props => props.columnGap ? `column-gap: ${props.columnGap};` : ""}
    padding: ${props => props.padding ? props.padding : "0"};
    margin: ${props => props.margin ? props.margin : "0"};
    ${props => props.borderColor ? `border: 3px solid ${props.borderColor};` : ""}
`;

const CellContainer = styled.div`
    padding: ${props => props.padding ? props.padding : "0"};
    margin: ${props => props.margin ? props.margin : "0"};
    ${props => props.display ? `display: ${props.display};` : ""}
    ${props => props.flexDirection ? `flex-direction: ${props.flexDirection};` : ""}
    ${props => props.gridColumn ? `grid-column: ${props.gridColumn};` : ""}
    ${props => props.gridRow ? `grid-row: ${props.gridRow};` : ""}
    ${props => props.gridTemplateColumns ? `grid-template-columns: ${props.gridTemplateColumns};` : ""}
    ${props => props.gridTemplateRows ? `grid-template-rows: ${props.gridTemplateRows};` : ""}
    ${props => props.rowGap ? `row-gap: ${props.rowGap};` : ""}
    ${props => props.columnGap ? `column-gap: ${props.columnGap};` : ""}
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

    let authorsList;
    let courseAuthorsList;

    const [authors, setAuthors] = useState(constants.mockedAuthorsList);
    const [authorsInputValue, setAuthorsInputValue] = useState("");
    const [courseAuthors, setCourseAuthors] = useState("Authors list is empty");

    const  inputChangeHandler = (e) => {
        setAuthorsInputValue(e.target.value);
    };

    const createAuthorHandler = () => {
        if (authorsInputValue.length >= 2) {
            constants.mockedAuthorsList.push({
                id: uuidv4(),
                name: authorsInputValue.toString()
            })
            setAuthorsInputValue('');
        }
    };

    const addAuthorHandler = (e) => {
        e.preventDefault();
        console.log(constants.mockedAuthorsList.filter(el => el.name === e.target.firstChild.firstChild.textContent)[0].id);
        console.log(authorsList);
        setCourseAuthors([{
            id: constants.mockedAuthorsList.filter(el => el.name === e.target.firstChild.firstChild.textContent)[0].id,
            name: e.target.firstChild.firstChild.textContent
        }]);
        // console.log(courseAuthors);
        // const index = authorsList.findIndex(el =>  el.name === e.target.firstChild.firstChild.textContent)
        // authorsList.splice(index, index);
        // setAuthors(authorsList);
    };

    const deleteAuthorHandler = (e) => {
        e.preventDefault();
        console.log(courseAuthorsList);
        setAuthors(e.target)
    };

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
            <GridContainer2x2 padding="1rem" borderColor="black" margin="2rem 0" rowGap="3rem" columnGap="8rem">
                <CellContainer display="flex" flexDirection="column" gridColumn="1" gridRow="1">
                    <h3>Add author</h3>
                    <Input
                        labelText="Author name"
                        borderColor="brown"
                        width="90%"
                        placeHolder="Enter author name..."
                        onChange={inputChangeHandler} 
                        value={authorsInputValue}
                    />
                    <Button
                        width="150px"
                        margin="1rem 0 0 0"
                        onClick={createAuthorHandler}>
                            Create author
                    </Button>
                </CellContainer>
                <CellContainer display="flex" flexDirection="column" gridColumn="1" gridRow="2">
                    <h3>Duration</h3>
                    <Input
                        labelText="Duration"
                        borderColor="brown"
                        width="90%"
                        placeHolder="Enter duration in minutes..."
                    />
                    <Label fontSize="1.5em" margin="1rem 0 0 0">
                        Duration: <span><b>00:00</b></span> hours
                    </Label>
                </CellContainer>
                <CellContainer display="flex" flexDirection="column" gridColumn="2" gridRow="1">
                    <h3>Authors</h3>
                    {authorsList = authors.map(author => {
                        return (
                            <form key={author.id} onSubmit={addAuthorHandler}>
                                <CellContainer display="flex" margin="1rem 0">
                                    <Label margin="0 auto 0 0" alignSelf="center" width="auto">
                                        {author.name}
                                    </Label>
                                    <Button
                                        width="150px"
                                        height="30px"
                                        padding="0"
                                        justifySelf="end">
                                            Add author
                                    </Button>
                                </CellContainer>
                            </form>
                        );
                    })}

                </CellContainer>
                <CellContainer display="flex" flexDirection="column" gridColumn="2" gridRow="2">
                    <h3>Course authors</h3>
                    {typeof courseAuthors === "string" ? <Label textAlign="center" width="auto">{courseAuthors}</Label> : courseAuthorsList = courseAuthors.map(author => {
                        return (
                            <form key={author.id} onSubmit={deleteAuthorHandler}>
                                <CellContainer display="flex" margin="1rem 0">
                                    <Label margin="0 auto 0 0" alignSelf="center" width="auto">
                                        {author.name}
                                    </Label>
                                    <Button
                                        width="150px"
                                        height="30px"
                                        padding="0"
                                        justifySelf="end">
                                            Delete author
                                    </Button>
                                </CellContainer>
                            </form>
                        );
                    })}
                    {/* <CellContainer display="flex">
                        <Label margin="0 100px 0 0" alignSelf="center">
                            Author
                        </Label>
                        <Button
                            width="150px"
                            height="30px"
                            padding="0"
                            onClick={() => {}}>
                                Delete author
                        </Button>
                    </CellContainer> */}
                </CellContainer>
            </GridContainer2x2>
        </CreateCourseContainer>
    );
}


export default CreateCourse;