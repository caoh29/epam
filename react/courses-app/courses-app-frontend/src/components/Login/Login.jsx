import styled from "styled-components";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { Link,  useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../api/loginUser.api";
import { checkEmail, checkPassword } from "../../common/utils/check.js";
import useStore from "../../store/store";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10%;
`;

function Login () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const saveLoginInfo = useStore(state => state.saveLoginInfo);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        
        if( checkEmail(email)  && checkPassword(password) ){ 
            (async () => {
                const response = await loginUser(email, password);
                if (response.status === 201){
                    const token = response.data.result.split(' ')[1];
                    const name = response.data.user.name;
                    localStorage.setItem('token', token);
                    saveLoginInfo(name, email, token);
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

export default Login;