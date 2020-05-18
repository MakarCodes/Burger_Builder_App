import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-ce2e9.firebaseio.com/'
});

export default instance;