import React from 'react';
import SinglePost from './SinglePost';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
  },
});

const UserPosts = props => {
  const { classes } = props;
  const userPosts = props.posts;
  return (
    <Card className={classes.card}>
      {userPosts.map((post, key) => {
        if (post) {
          return (
            <SinglePost post={post} key={key} />
          );
        } else {
          return null;
        }
      })}
    </Card>
  );
};

export default withStyles(styles)(UserPosts);
