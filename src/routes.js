import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import HomePage from './components/home/HomePage';
import PostsPage from './components/posts/PostsPage';
import UsersPage from './components/users/index';
//import PostDetails from './components/posts/PostDetails';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="posts" component={PostsPage} />
        <Route path="posts/:Id" component={PostsPage} />
        <Route path="users" component={UsersPage} />
    </Route>
);