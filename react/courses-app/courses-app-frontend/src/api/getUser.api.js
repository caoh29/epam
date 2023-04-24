import axios from 'axios';

const apiUrl = 'http://localhost:4000/users/me';
const headers = {
    'accept': '*/*',
};
export const getUser = () => {
    return axios.get(apiUrl, { headers });
};