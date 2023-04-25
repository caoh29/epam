import styled from "styled-components";
import Input from "../../../../courses-app-frontend/src/common/Input/Input";
import Button from "../../../../courses-app-frontend/src/common/Button/Button";
import { Link,  useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../../../courses-app-frontend/src/api/loginUser.api";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10%;
`;

export function Login () {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(password !== '' && password.length >= 6 && password.length <= 20 && email !== '' && email.includes('@') && email.includes('.com') && email.length >= 5 && email.length <= 30 ){ 
            (async () => {
                const response = await loginUser(email, password);
                console.log(response);
                if (response.status === 201){
                    const token = response.data.result.split(' ')[1];
                    localStorage.setItem('token', token);
                    navigate('/courses');
                } else {
                    alert(`There was a problem with login, status code ${response.status}`);
                }
            })();
        } else {
            alert('Fill all fields');
        }
    }

    return (
        <LoginContainer>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <LoginContainer>
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
                    <Button width="150px">Login</Button>
                    <p>if you don't have an account yet, you can <Link to="/">Register</Link></p>
                </LoginContainer>
            </form>
        </LoginContainer>
    );
}