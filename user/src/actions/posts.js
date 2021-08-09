import * as api from '../api';

//action creates , are function that return functions
//we use redux-thunk
export const getPosts = ()=> async (dispatch) => {

    try {
        //fetch all the data from api
        //get the response from the api
        const { data } = await api.fetchPosts();
        //
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}
