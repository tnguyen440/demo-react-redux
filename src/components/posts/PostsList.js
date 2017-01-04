import React, {PropTypes} from 'react';
//import PostListRow from './PostListRow';
//import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Table} from 'react-bootstrap';
import Paper from 'material-ui/Paper';
import Subheader from  'material-ui/Subheader';

const PostsList = ({posts}) => {
  return (
    <Paper className="posts-container">
      <Subheader>Posts List</Subheader>
      <Table className="posts-table" responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
      {posts.map(post => 
        <tr key={post.id}>
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>)}
      </tbody>
    </Table>
  </Paper>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsList;
