import axios from 'axios';

const PostServices = {
  getAllPosts() {
    console.log('In get all posts');
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

  addPost(post) {
    return axios({
      method: 'POST',
      url: '/api/posts',
      data: post,
    });
  },

  editPost(post) {
    console.log('This is services for editPost', post);
    return axios({
      method: 'PUT',
      url: 'api/posts/edit',
      data: post,
    });
  },

  deletePost(post) {
    console.log('This is services for deletePost', post);
    return axios({
      method: 'DELETE',
      url: 'api/posts/delete',
      data: post,
    });
  },
};

export default PostServices;
