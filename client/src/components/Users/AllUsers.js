import React, { Component } from 'react';
import SingleUser from './SingleUser';
import userServices from '../../services/UserServices';

export default class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
      userDataLoaded: false,
    };
  }

  componentDidMount() {
    userServices
      .getAllUsers()
      .then(responseUsers => {
        this.setState({
          users: responseUsers.data,
          userDataLoaded: true,
        });
      })
      .catch(err => {
        console.log('Error in component did mount userprofile users--->', err);
      });
  }

  renderUsers() {
    const users = this.state.users;
    return (
      <div>
        {users.map((user, key) => {
          return (
            <SingleUser user={user} key={key}/>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.userDataLoaded ? this.renderUsers() : ''}
      </div>
    );
  };
}
