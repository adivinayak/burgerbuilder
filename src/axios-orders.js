import axios from 'axios';

const instance = axios.create({

    baseURL : 'https://reacy-burger-app.firebaseio.com/'
});

export default instance;
