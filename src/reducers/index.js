import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    postsReducer,
    usersReducer
});

export default rootReducer;