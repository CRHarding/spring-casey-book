import React, { Component } from 'react';
import UserPosts from './UserPosts';
import Grid from '@material-ui/core/Grid';

import PostServices from '../../services/PostServices';

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
    console.log(this.state.user);
    PostServices.getPostsByUserId(this.state.user.id).then(responsePosts => {
      this.setState({
        posts: responsePosts.data,
        postDataLoaded: true,
      });
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
