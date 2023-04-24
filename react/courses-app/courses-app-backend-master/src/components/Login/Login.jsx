import styled from "styled-components";
import Input from "../../../../courses-app-frontend/src/common/Input/Input";
import Button from "../../../../courses-app-frontend/src/common/Button/Button";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10%;
`;

export function Login () {
    return (
        <LoginContainer>
            <h2>Login</h2>
            <form>
                <LoginContainer>
                    <Input 
                        labelText="Email" 
                        type="email" 
                        id="email" 
                        width="auto" 
                        placeHolder="Enter email" 
                        margin="10px 0 20px 0" 
                        required
                    />
                    <Input 
                        labelText="Password" 
                        type="password" 
                        id="password" 
                        width="auto" 
                        placeHolder="Enter password" 
                        margin="10px 0 20px 0" 
                        required
                    />
                    <Button width="150px">Login</Button>
                    <p>if you don't have an account yet, you can <Link to="/">Register</Link></p>
                </LoginContainer>
            </form>
        </LoginContainer>
    );
}