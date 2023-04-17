import styled from "styled-components";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

function SearchBar (props) {

    const Container = styled.div`
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        padding-top: 2%;
        padding-bottom: 2%;
    `;

    return (
        <Container>
            <Input key={Math.floor(Math.random() * 1000)} margin="0 20px 0 0" name="courseName" id="courseName" type="text" placeHolder="Enter course name..." height="30px" width="300px" onChange={props.onChange} value={props.value}></Input>
            <Button key={Math.floor(Math.random() * 1000)} width="100px">Search</Button>
        </Container>
        );
}

export default SearchBar;