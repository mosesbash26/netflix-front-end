import axios from 'axios';

export default axios.create({
    baseURL:'http://13.63.192.65:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
