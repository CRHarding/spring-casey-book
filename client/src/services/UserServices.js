import axios from 'axios';

const UserServices = {
  getAllUsers() {
    console.log('In get all users');
    return axios({
      method: 'GET',
      url: '/api/users',
    });
  },

  getOneUser(userId) {
    return axios({
      method: 'GET',
      url: `/api/users/${userId}`,
    });
  },

  addUser(user) {
    return axios({
      method: 'POST',
      url: '/api/users',
      data: user,
    });
  },

  editUser(user) {
    console.log('This is services for editUser', user);
    return axios({
      method: 'PUT',
      url: 'api/users/edit',
      data: user,
    });
  },

  deleteUser(user) {
    console.log('This is services for deleteUser', user);
    return axios({
      method: 'DELETE',
      url: 'api/users/delete',
      data: user,
    });
  },
};

export default UserServices;
