import axios from 'axios';

const FriendServices = {
  getAllFriends() {
    console.log('In get all friends');
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

  addFriend(friend) {
    return axios({
      method: 'POST',
      url: '/api/friends',
      data: friend,
    });
  },

  editFriend(friend) {
    console.log('This is services for editFriend', friend);
    return axios({
      method: 'PUT',
      url: 'api/friends/edit',
      data: friend,
    });
  },

  deleteFriend(friend) {
    console.log('This is services for deleteFriend', friend);
    return axios({
      method: 'DELETE',
      url: 'api/friends/delete',
      data: friend,
    });
  },
};

export default FriendServices;
