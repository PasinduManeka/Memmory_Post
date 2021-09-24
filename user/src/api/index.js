import axios from "axios";

//* Url for pointing to backend
const url = "http://localhost:5000/posts";

//* GET
export const fetchPosts = () => axios.get(url);

//* POST
export const createPost = (newPost) => axios.post(url, newPost);

//* UPDATE
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

//* DELETE
export const deletePost = (id) => axios.delete(`${url}/${id}`);

//*like account
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
