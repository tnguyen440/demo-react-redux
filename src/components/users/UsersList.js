import React, {PropTypes} from 'react';
//import PostListRow from './PostListRow';
//import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Table} from 'react-bootstrap';
import Subheader from  'material-ui/Subheader';

const UsersList = ({users}) => {
  return (
    <div className="posts-container">
      <Subheader>Users List</Subheader>
      <Table className="posts-table" responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user => 
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
        </tr>)}
      </tbody>
    </Table>
  </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsersList;
