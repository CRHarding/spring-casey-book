import React, { Component } from 'react';
import UserPosts from './UserPosts';
import postServices from '../../services/PostServices';
import Grid from '@material-ui/core/Grid';

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      postDataLoaded: false,
      user: this.props.user,
    };
  }

  componentDidMount() {
    postServices.getPostsByUserId(this.state.user.id).then(responsePosts => {
      this.setState({
        posts: responsePosts.data,
        postDataLoaded: true,
      });
    });
  }

  manageDelete(postId) {
    console.log(postId);
    postServices
      .deletePost(postId)
      .then(deletedPost => {
        console.log('post deleted successfully--->', deletedPost);
      })
      .catch(err => {
        console.log('post delete failed--->', err);
      });
  }

  renderUserPosts() {
    const posts = this.state.posts;
    return (
      <UserPosts
        posts={posts}
        user={this.state.user}
        manageDelete={this.manageDelete}
      />
    );
  }

  render() {
    return (
      <Grid item xs>
        {this.state.postDataLoaded ? this.renderUserPosts() : ''}
      </Grid>
    );
  }
}

export default AllPosts;
