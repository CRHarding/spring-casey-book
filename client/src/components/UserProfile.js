import React, { Component } from 'react';
import userServices from '../services/UserServices';
import friendServices from '../services/FriendServices';
import postServices from '../services/PostServices';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      friendsData: null,
      friends: null,
      posts: null,
      userDataLoaded: false,
      friendDataLoaded: false,
      postDataLoaded: false,
    };

    this.renderUsers = this.renderUsers.bind(this);
    this.renderFriends = this.renderFriends.bind(this);
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    userServices
      .getAllUsers()
      .then(responseUsers => {
        console.log(responseUsers.data);
        this.setState({
          users: responseUsers.data,
          userDataLoaded: true,
        });
      })
      .catch(err => {
        console.log('Error in component did mount userprofile users--->', err);
      });

    friendServices
      .getAllFriends()
      .then(responseFriends => {
        console.log(responseFriends.data);
        this.setState({
          friends: responseFriends.data,
          friendDataLoaded: true,
        });
      })
      .catch(err => {
        console.log(
          'Error in componenet did mount userprofile friends--->',
          err,
        );
      });

    postServices.getAllPosts().then(responsePosts => {
      console.log(responsePosts.data);
      this.setState({
        posts: responsePosts.data,
        postDataLoaded: true,
      });
    });
  }

  renderUsers() {
    const users = this.state.users;
    return (
      <div>
        {users.map((user, key) => {
          return (
            <div>
              <p>User Name: </p>
              <p>{user.userName}</p>
            </div>
          );
        })}
      </div>
    );
  }

  renderFriends() {
    const friends = this.state.friends;
    return (
      <div>
        {friends.map(friend => {
          console.log(friend);
          return (
            <div>
              <p>Your friend request to: </p>
              <p>{friend.receivedRequestUserName}</p>
            </div>
          );
        })}
      </div>
    );
  }

  renderPosts() {
    const posts = this.state.posts;
    return (
      <div>
        {posts.map(post => {
          console.log(post);
          return (
            <div>
              <p>{post.userName}`'s post: `</p>
              <p>{post.post}</p>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>{this.state.userDataLoaded ? this.renderUsers() : ''}</div>
        <div>{this.state.friendDataLoaded ? this.renderFriends() : ''}</div>
        <div>{this.state.postDataLoaded ? this.renderPosts() : ''}</div>
      </div>
    );
  }
}
