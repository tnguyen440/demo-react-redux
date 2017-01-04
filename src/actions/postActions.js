//import postsApi from '../api/postsApi';
import * as types from './actionTypes';
import axios from 'axios';


export function loadPosts() {
    return function(dispatch) {
        //return postsApi.getAllPosts().then(posts => {dispatch(loadPostsSuccess(posts));}).catch(error => {throw error;});
        //const request = axios.get('https://jsonplaceholder.typicode.com/posts');

        return axios.get(`${types.ROOT_URL}/posts`)
            .then(posts => {
                dispatch(loadPostsSuccess(posts.data));
                //console.log(posts.data);
            }).catch(error => {
                return error;
        });
    }
}

export function loadPostsSuccess(posts) {
    return {
        type: types.LOAD_POSTS_SUCCESS,
        posts
    }
}

export function selectPost(post){
    return {
        type: types.POST_SELECTD,
        post: post 
    }
}