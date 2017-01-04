import React, {PropTypes, Component} from 'react';
import PotstList from './PostsList';
import {connect} from 'react-redux';
import {loadPosts} from '../../actions/postActions';
import {bindActionCreators} from 'redux';

class PostsPage extends Component {
    componentWillMount() {
        this.props.actions.loadPosts();
    }

    render() {
        const {posts} = this.props;
        return (
            <PotstList posts={posts} />
        );
    }
}

PostsPage.propTypes = {
    posts: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        posts: state.postsReducer
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({loadPosts}, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsPage);