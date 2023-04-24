import axios from 'axios';

const apiUrl = 'http://localhost:4000/register';
const headers = {
    'accept': '*/*',
    'Content-Type': 'application/json'
};
export const registerUser = (name, email, password) => {

    const data = {
        name: name,
        email: email,
        password: password
    };

    const response = axios.post(apiUrl, data, { headers })
        .then(function (response) {
            return response;
        }).catch(function (error) {
            console.log(error);
            return error;
        }
    );

    return response;
};