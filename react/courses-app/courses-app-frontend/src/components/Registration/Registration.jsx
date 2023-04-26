import styled from "styled-components";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { Link,  useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../api/registerUser.api";
import { checkEmail, checkName, checkPassword } from "../../common/utils/check.js";

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10%;
`;

function Registration () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        
        if( checkName(name) && checkEmail(email) && checkPassword(password) ){ 
            (async () => {
                const response = await registerUser(name, email, password);
                if (response.status === 201){
                    navigate('/login');
                } else {
                    alert(`There was a problem with registration, status code ${response.status}`);
                }
            })();
        } else {
            alert('Fill all fields');
        }
    }

    return (
        <RegisterContainer>
            <h2>Registration</h2>
            <form onSubmit={submitHandler}>
                <RegisterContainer>
                    <Input 
                        labelText="Name" 
                        type="text" 
                        id="name" 
                        width="auto" 
                        placeHolder="Enter name" 
                        margin="10px 0 20px 0"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input 
                        labelText="Email" 
                        type="email" 
                        id="email" 
                        width="auto" 
                        placeHolder="Enter email" 
                        margin="10px 0 20px 0"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input 
                        labelText="Password" 
                        type="password" 
                        id="password" 
                        width="auto" 
                        placeHolder="Enter password" 
                        margin="10px 0 20px 0"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                    <Button width="150px">Registration</Button>
                    <p>if you have an account you can <Link to="/login">Login</Link></p>
                </RegisterContainer>
            </form>
        </RegisterContainer>
    );
}

export default Registration;