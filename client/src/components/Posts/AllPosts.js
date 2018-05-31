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
      friend: this.props.friend,
    };
  }

  componentDidMount() {
    PostServices.getPostsByUserId(this.state.user.id).then(responsePosts => {
      this.setState({
        posts: responsePosts.data,
        postDataLoaded: true,
      });
    });
  }

  renderUserPosts() {
    const isUser = this.state.user.id === this.state.friend.id;
    const posts = this.state.posts;

    return (
      <UserPosts
        posts={posts}
        user={this.state.user}
        friend={this.state.friend}
        isUser={isUser}
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
