import React from 'react';
import SinglePost from './SinglePost';

const UserPosts = props => {
  let posts = props.posts;
  let user = props.user;
  let userPosts = posts.map(post => {
    if (post.posterUserName === user.userName) {
      return post;
    }
  });

  userPosts = userPosts.filter(post => {
    if (post) {
      return post;
    }
  });

  return (
    <div>
      {userPosts.map((post, key) => {
        return <SinglePost post={post} key={key} />;
      })}
    </div>
  );
};

export default UserPosts;
