import axios from 'axios';

const apiUrl = 'http://localhost:4000/login';
const headers = {
    'accept': '*/*',
    'Content-Type': 'application/json'
};
export const loginUser = (email, password) => {

    const data = {
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