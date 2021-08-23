import * as api from "../api";

//action creates , are function that return functions
//we use redux-thunk
export const getPosts = () => async (dispatch) => {
  try {
    //fetch all the data from api
    //GET response from the api
    const { data } = await api.fetchPosts();
    //
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//*create new post
export const createPost = (post) => async (dispatch) => {
  try {
    //POST from the api
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(`Post does not work: ${error.message}`);
  }
};

//*Update
export const updatePost = (id, post) => async (dispatch) => {
  try {
    console.log(id);
    console.log(post);
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
