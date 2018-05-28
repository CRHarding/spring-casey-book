import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

import PostServices from '../../services/PostServices';
import EditPost from './EditPost';

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
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
      post: this.props.post,
      user: this.props.user,
    };

    this.showEditForm = this.showEditForm.bind(this);
  }

  showEditForm() {
    this.setState({
      showEditForm: !this.state.showEditForm,
    });
  }

  handleDelete(postId) {
    PostServices.deletePost(postId)
      .then(deletedPost => {
        console.log('post deleted successfully--->', deletedPost);
      })
      .catch(err => {
        console.log('post delete failed--->', err);
      });
  }

  render() {
    const { classes } = this.props;
    let post = this.state.post;

    return (
      <Paper className={classes.root} elevation={4}>
        <Typography className={classes.title} color="textSecondary">
          {post.posterUserName}'s post:{' '}
        </Typography>
        <Typography variant="headline" component="h2">
          {post.title}
        </Typography>
        <Divider />
        <br />
        <Typography component="p">{post.postText}</Typography>
        <IconButton
          className={classes.button}
          aria-label="Delete"
          onClick={() => this.handleDelete(post.id)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          className={classes.button}
          aria-label="edit"
          onClick={this.showEditForm}
        >
          <EditIcon />
        </IconButton>
        {this.state.showEditForm ? (
          <EditPost
            post={this.state.post}
            user={this.state.user}
          />
        ) : (
          ''
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(SinglePost);
