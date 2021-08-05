import axios from 'axios';

//Url for pointing to backend
const url = 'http://localhost:5000/posts';

export const fetchPosts = ()=> axios.get(url);