import axios from 'axios';

const FriendServices = {
  getAllFriends() {
    return axios({
      method: 'GET',
      url: '/api/friends',
    });
  },

  getFriendsById(id) {
    return axios({
      method: 'GET',
      url: `/api/friends/user/${id}`,
    });
  },

  getOneFriend(friendId) {
    return axios({
      method: 'GET',
      url: `/api/friends/${friendId}`,
    });
  },

  getFriendsByStatus(status, id) {
    return axios({
      method: 'GET',
      url: `/api/friends/current/${id}/${status}`,
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

  getCurrentUserFriendsById(id) {
    return axios({
      method: 'GET',
      url: `/api/friends/current/${id}`,
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
      method: 'PATCH',
      url: `/api/friends/${friend.id}`,
      data: friend,
    });
  },

  deleteFriend(friend) {
    return axios({
      method: 'DELETE',
      url: '/api/friends/delete',
      data: friend,
    });
  },
};

export default FriendServices;
