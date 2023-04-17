import styled from "styled-components";
import { useState } from "react";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

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

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(inputValue);
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