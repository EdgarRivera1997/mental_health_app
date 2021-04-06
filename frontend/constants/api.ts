import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/api';

export const getPosts = async () => {
    const response = await axios.get('/posts');
    return response.data;
};

export const createPost = async (data: any) => {
    const response = await axios.post('/createPost', data);
    return response.data;
}

export const createUser = async (data: any) => {
    const response = await axios.post('/signup', data);
    return response.data;
}

export const userLogin = async (data: any) => {
    const response = await axios.post('/login', data);
    return response.data;
}

export const userLogout = async () => {
    const response = await axios.get('/logout');
    return response.data;
}

export const getAuthUser = async () => {
    const response = await axios.get('/user');
    return response.data;
}

export default {
    getPosts,
    createPost,
    createUser,
    userLogin,
    userLogout,
    getAuthUser,
};