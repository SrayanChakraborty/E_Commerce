import axios from 'axios';

const BASE_URL='http://localhost:5000/api';
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTY5ZWQwZGQ3YWFlMjRmNDkwYWM1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDAxNDUyOCwiZXhwIjoxNjgwMjczNzI4fQ.5GxHrJdHefGAAgUbsJJDki_PkB7qa9X0yCHSvklzBEg";

export const publicrequest=axios.create({
    baseURL:BASE_URL,
});

export const userrequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`} 
    
});

