import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const SinglePost = props => {
  const { classes } = props;

  let post = props.post;
  return (
    <CardContent>
      <Typography className={classes.title} color="textSecondary">
        {post.posterUserName}'s post:{' '}
      </Typography>
      <Typography variant="headline" component="h2">
        {post.postText}
      </Typography>
      <IconButton
        className={classes.button}
        aria-label="Delete"
        onClick={() => props.handleDelete(post.id)}
      >
        <DeleteIcon />
      </IconButton>
    </CardContent>
  );
};

export default withStyles(styles)(SinglePost);
