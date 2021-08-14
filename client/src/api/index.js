import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:7000'});

export const getMatches = () => API.get('/');
export const getMatch = (id) => API.get(`/match/${id}`);
export const buyMatch = (id) => API.get(`/buyMatch/${id}`);

export const signup = (inputValue) => API.post('/users/signup',inputValue);
export const signin = (inputValue) => API.post('/users/signin',inputValue);