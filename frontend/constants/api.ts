import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000/api';

export const getPosts = async () => {
    const response = await axios.get('/posts');
    return response.data;
};

export default {
    getPosts,
};