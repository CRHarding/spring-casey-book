import axios from 'axios';

const UserServices = {
  getAllUsers() {
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
    return axios({
      method: 'PUT',
      url: 'api/users/edit',
      data: user,
    });
  },

  deleteUser(user) {
    return axios({
      method: 'DELETE',
      url: 'api/users/delete',
      data: user,
    });
  },
};

export default UserServices;
