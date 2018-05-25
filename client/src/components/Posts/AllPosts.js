import React, { Component } from 'react';
import UserPosts from './UserPosts';
import postServices from '../../services/PostServices';

export default class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      postDataLoaded: false,
      user: this.props.user,
    };
  }

  componentDidMount() {
    postServices.getAllPosts().then(responsePosts => {
      this.setState({
        posts: responsePosts.data,
        postDataLoaded: true,
      });
    });
  }

  renderUserPosts() {
    const posts = this.state.posts;
    return <UserPosts posts={posts} user={this.state.user}/>;
  }

  render() {
    return <div>{this.state.postDataLoaded ? this.renderUserPosts() : ''}</div>;
  }
}
