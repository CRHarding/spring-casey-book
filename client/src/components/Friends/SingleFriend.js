import React from 'react';

const SingleFriend = props => {
  const friend = props.friend;
  const user = props.user;

  return (
    <div>
      <p>Your friend request {user.id === friend.sentRequest ? 'to' : 'from' }</p>
      <p>{friend.receivedRequestUserName}</p>
    </div>
  );
};

export default SingleFriend;
