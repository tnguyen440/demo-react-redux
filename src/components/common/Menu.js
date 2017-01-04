import React from 'react';
import {Link, IndexLink} from 'react-router';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
//import ActionGrade from 'material-ui/svg-icons/action/grade';
import ViewList from 'material-ui/svg-icons/action/view-list';
import GroupIcon from 'material-ui/svg-icons/social/group';
//import ContentDrafts from 'material-ui/svg-icons/content/drafts';

const Menu = () => {
    return (
        <Paper style={{ flex: '0 0 15em', order: -1 }}>
            <List>
                <ListItem leftIcon={<ContentInbox />}>
                    <IndexLink to="/" activeClassName="active">Home</IndexLink>
                </ListItem>
                <ListItem leftIcon={<ViewList />}>
                    <Link to="/posts" activeClassName="active">Posts</Link>
                </ListItem>
                <ListItem leftIcon={<GroupIcon />}>
                    <Link to="/users" activeClassName="active">Users</Link>
                </ListItem>
            </List>
        </Paper>
    );
}

export default Menu;

