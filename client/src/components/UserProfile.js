import React from 'react';

import AllPosts from './Posts/AllPosts';
import AllFriends from './Friends/AllFriends';
import AllUsers from './Users/AllUsers';

const UserProfile = (props) => {
  const user = {
    userName: 'CRHarding',
    id: 1,
  };

  return (
    <div>
      <AllFriends user={user}/>
      <AllPosts user={user}/>
    </div>
  );
};

export default UserProfile;
