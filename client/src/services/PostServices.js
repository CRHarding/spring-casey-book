import axios from 'axios';

const PostServices = {
  getAllPosts() {
    return axios({
      method: 'GET',
      url: '/api/posts',
    });
  },

  getOnePost(postId) {
    return axios({
      method: 'GET',
      url: `/api/posts/${postId}`,
    });
  },

  getPostsByUserId(userId) {
    console.log(userId);
    return axios({
      method: 'GET',
      url: `/api/posts/user/${userId}`,
    });
  },

  addPost(post) {
    return axios({
      method: 'POST',
      url: '/api/posts',
      data: post,
    });
  },

  editPost(post) {
    return axios({
      method: 'PUT',
      url: 'api/posts/edit',
      data: post,
    });
  },

  deletePost(post) {
    return axios({
      method: 'DELETE',
      url: 'api/posts/delete',
      data: post,
    });
  },
};

export default PostServices;
