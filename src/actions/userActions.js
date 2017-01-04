import * as types from './actionTypes';
import axios from 'axios';

export function loadUsers() {
    return function(dispatch) {

        return axios.get(`${types.ROOT_URL}/users`)
            .then(users => {
                dispatch(loadUsersSuccess(users.data));
            }).catch(error => {
                return error;
        });
    }
}

export function loadUsersSuccess(users) {
    return {
        type: types.LOAD_USERS_SUCCESS,
        users
    }
}