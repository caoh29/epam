import styled from "styled-components";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useStore from "../../store/store";

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

function CreateCourse () {

    const addAuthor = useStore(state => state.addAuthor);
    const addCourse = useStore(state => state.addCourse);
    const authorsList = useStore(state => state.authors);

    const [titleInputValue, setTitleInputValue] = useState("");
    const [textAreaValue, setTextAreaValue] = useState("");
    const [authorsInputValue, setAuthorsInputValue] = useState("");
    const [authors, setAuthors] = useState(authorsList);
    const [courseAuthors, setCourseAuthors] = useState([]);
    const [durationInputValue, setDurationInputValue] = useState(0);
    const [durationMinutesHours, setDurationMinutesHours] = useState("00:00");

    const navigate = useNavigate();

    const titleChangeHandler = (e) =>  {
        setTitleInputValue(e.target.value);
    };

    const textAreaChangeHandler = (e) =>  {
        setTextAreaValue(e.target.value);
    };

    const  inputChangeHandler = (e) => {
        setAuthorsInputValue(e.target.value);
    };

    const createAuthorHandler = async () => {
        if (authorsInputValue.length >= 2) {
            const newAuthor = await addAuthor({
                name: authorsInputValue.toString()
            })
            setAuthors([...authors, newAuthor]);
            setAuthorsInputValue('');
        }
    };

    const addAuthorHandler = (e) => {
        e.preventDefault();
        setCourseAuthors([...authors.filter(el => el.name === e.target.firstChild.firstChild.textContent), ...courseAuthors]);
        setAuthors(
            authors.filter(el => el.name !== e.target.firstChild.firstChild.textContent)
        );
    };

    const deleteAuthorHandler = (e) => {
        e.preventDefault();
        setAuthors(
            [...courseAuthors.filter(el => el.name === e.target.firstChild.firstChild.textContent), ...authors]
        );
        setCourseAuthors(
            courseAuthors.filter(el => el.name !== e.target.firstChild.firstChild.textContent)
        );
    };

    const durationChangeHandler = (e) => {
        if (e.target.value > 0){
            setDurationInputValue(e.target.value);
            const hours = Math.floor(e.target.value / 60);
            const minutes = e.target.value % 60;
            setDurationMinutesHours(("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2));
        }
    };


    const updateCourseClickHandler = () => {

        const check = titleInputValue.length > 0 && textAreaValue.length >= 2 && courseAuthors.length > 0 && durationInputValue >= 1;

        if (check) {
            const newCourse = {
                title: titleInputValue,
                description: textAreaValue,
                creationDate: `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
                duration: Number(durationInputValue),
                authors: courseAuthors.map(el => el.id)
            };

            addCourse(newCourse);
            navigate("/courses");
        } else {
            alert("Please, fill all fields");
        }
    };

    return (
        <CreateCourseContainer>
            <Link to="/courses">Back to courses</Link>
            <GridContainer2x2>
                <Input 
                    labelText="Title" 
                    gridColumnLabel="1" 
                    gridRowLabel="1"
                    alignSelfLabel="end"
                    gridColumnInput="1" 
                    gridRowInput="2" 
                    placeHolder="Enter title..." 
                    borderColor="brown"
                    type="text"
                    onChange={titleChangeHandler} 
                    value={titleInputValue}>
                </Input>
                <Button
                    gridColumn="2"
                    gridRow="2"
                    width="150px"
                    justifySelf="end"
                    onClick={updateCourseClickHandler}>
                        Update course
                </Button>
            </GridContainer2x2>
            <Label htmlFor="TextArea" margin="20px 0 0 0">Description</Label>
            <TextArea 
                id="TextArea" 
                placeholder="Enter description"
                onChange={textAreaChangeHandler} 
                value={textAreaValue}/>
            <GridContainer2x2 padding="1rem" borderColor="black" margin="2rem 0" rowGap="3rem" columnGap="8rem">
                <CellContainer display="flex" flexDirection="column" gridColumn="1" gridRow="1">
                    <h3>Add author</h3>
                    <Input
                        labelText="Author name"
                        borderColor="brown"
                        width="90%"
                        placeHolder="Enter author name..."
                        type="text"
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
                        type="number"
                        onChange={durationChangeHandler} 
                        value={durationInputValue}
                    />
                    <Label fontSize="1.5em" margin="1rem 0 0 0" width="auto">
                        Duration: <span><b>{durationMinutesHours}</b></span> hours
                    </Label>
                </CellContainer>
                <CellContainer display="flex" flexDirection="column" gridColumn="2" gridRow="1">
                    <h3>Authors</h3>
                    {authors.length === 0 ? <Label textAlign="center" width="auto">Authors list is empty</Label> : authors.map(author => {
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
                    {courseAuthors.length === 0 ? <Label textAlign="center" width="auto">Course authors list is empty</Label> : courseAuthors.map(author => {
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
                </CellContainer>
            </GridContainer2x2>
        </CreateCourseContainer>
    );
}


export default CreateCourse;