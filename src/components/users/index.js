import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {loadUsers} from '../../actions/userActions';
import {bindActionCreators} from 'redux';
import UsersList from './UsersList';

class UsersPage extends Component {
    componentWillMount() {
        this.props.actions.loadUsers();
    }

    render() {
        const {users} = this.props;
        return (
            <UsersList users={users}/>
        );
    }
}

UsersPage.propTypes = {
    users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        users: state.usersReducer
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({loadUsers}, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersPage);