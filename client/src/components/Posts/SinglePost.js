import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = {
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
};

const SinglePost = props => {
  const { classes } = props;

  let post = props.post;
  return (
    <div>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {post.posterUserName}'s post:{' '}
        </Typography>
        <Typography variant="headline" component="h2">
          {post.postText}
        </Typography>
      </CardContent>
      <Divider />
    </div>
  );
};

export default withStyles(styles)(SinglePost);
