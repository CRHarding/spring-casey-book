import axios from 'axios';

const FriendServices = {
  getAllFriends() {
    return axios({
      method: 'GET',
      url: '/api/friends',
    });
  },

  getOneFriend(friendId) {
    return axios({
      method: 'GET',
      url: `/api/friends/${friendId}`,
    });
  },

  getFriendsByStatus(status) {
    return axios({
      method: 'GET',
      url: `/api/friends/status/${status}`,
    });
  },

  getFriendsBySentRequest(id) {
    return axios({
      method: 'GET',
      url: `/api/friends/sent/${id}`,
    });
  },

  getFriendsByReceivedRequest(id) {
    return axios({
      method: 'GET',
      url: `/api/friends/received/${id}`,
    });
  },

  addFriend(friend) {
    return axios({
      method: 'POST',
      url: '/api/friends',
      data: friend,
    });
  },

  editFriend(friend) {
    return axios({
      method: 'PUT',
      url: 'api/friends/edit',
      data: friend,
    });
  },

  deleteFriend(friend) {
    return axios({
      method: 'DELETE',
      url: 'api/friends/delete',
      data: friend,
    });
  },
};

export default FriendServices;
