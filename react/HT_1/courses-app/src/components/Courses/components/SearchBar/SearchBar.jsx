import styled from "styled-components";
import { useState } from "react";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import constants from "../../../../constants.js";

const SearchBarContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding-top: 1%;
    padding-bottom: 1%;
`;

function SearchBar (props) {

    const [inputValue, setInputValue] = useState("");

    const  inputChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    const search = (value) => {
        const filteredCourses = constants.mockedCoursesList.filter(course => course.title.toLowerCase().includes(value.toLowerCase())).length > 0 && constants.mockedCoursesList.filter(course => course.title.toLowerCase().includes(value.toLowerCase()));
        console.log(filteredCourses);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        search(inputValue);
    };

    return (
        <SearchBarContainer>
            <form onSubmit={submitHandler}>
                <Input margin="0 20px 0 0" name="courseName" id="courseName" type="text" placeHolder="Enter course name..." height="30px" width="300px" onChange={inputChangeHandler} value={inputValue}/>
                <Button width="100px" type="submit">Search</Button>
            </form>
        </SearchBarContainer>
    );
}

export default SearchBar;