import styled from "styled-components";
import { useState } from "react";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import useStore from "../../../../store/store.js";

const SearchBarContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

function SearchBar (props) {

    const courses = useStore((state) => state.courses);

    const [inputValue, setInputValue] = useState("");

    const  inputChangeHandler = (e) => {
        setInputValue(e.target.value);
    };

    const checkValues = (x, y) => {
        if (!x && !y) {
            return false;
        } else {
            return x && y ? x : x || y;
        }
    }

    const search = (value) => {
        const filteredCoursesByTitle = courses.filter(course => course.title.toLowerCase().includes(value.toLowerCase())).length > 0 && courses.filter(course => course.title.toLowerCase().includes(value.toLowerCase()));
        const filteredCoursesById = courses.filter(course => course.id.toLowerCase().includes(value.toLowerCase())).length > 0 && courses.filter(course => course.id.toLowerCase().includes(value.toLowerCase()));

        const filteredCourses = checkValues(filteredCoursesByTitle, filteredCoursesById);
        if (filteredCourses) {
            props.setCourses(filteredCourses);
        }
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