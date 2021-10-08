import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:7000'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const getMatches = () => API.get('/');
export const watchMatch = (id) => API.get(`/watch/${id}`);
export const getMatchToBuy = (id) => API.get(`/match/${id}`);
export const buyMatch = (id) => API.patch(`/match/${id}/buyMatch`);


export const register = (inputValue) => API.post('/auth/register',inputValue);
export const login = (inputValue) => API.post('/auth/login',inputValue);

export const registerError = (inputValue) => API.post('/auth/register',inputValue)
