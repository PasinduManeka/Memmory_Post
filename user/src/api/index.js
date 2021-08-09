import axios from 'axios';

//Url for pointing to backend
const url = 'http://localhost:5000/posts';

//GET
export const fetchPosts = ()=> axios.get(url);

//POST
export const createPost = (newPost) => axios.post(url, newPost);
