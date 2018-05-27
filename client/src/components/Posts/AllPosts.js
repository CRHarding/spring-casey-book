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
    console.log(this.state.user.id);
    postServices.getPostsByUserId(this.state.user.id).then(responsePosts => {
      this.setState({
        posts: responsePosts.data,
        postDataLoaded: true,
      });
    });
  }

  renderUserPosts() {
    const posts = this.state.posts;
    return (
      <Grid item xs>
          <UserPosts posts={posts} user={this.state.user}/>
      </Grid>
    );
  }

  render() {
    return <div>{this.state.postDataLoaded ? this.renderUserPosts() : ''}</div>;
  }
}

export default AllPosts;
