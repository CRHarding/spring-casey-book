import React from 'react';

const SinglePost = props => {
  let post = props.post;
  return (
    <div>
      <p>{post.posterUserName}'s post: </p>
      <p>{post.postText}</p>
    </div>
  );
};

export default SinglePost;
