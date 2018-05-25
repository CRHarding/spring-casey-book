import React from 'react';

const SingleUser = props => {
  const user = props.user;
  return (
    <div>
      <p>User Name: </p>
      <p>{user.userName}</p>
    </div>
  );
};

export default SingleUser;
