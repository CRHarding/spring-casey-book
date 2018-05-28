import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

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
      <CardContent>
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
          <DeleteIcon />
        </IconButton>
        {this.state.showEditForm ? (
          <EditPost
            post={this.state.post}
            user={this.state.user}
          />
        ) : (
          ''
        )}
      </CardContent>
    );
  }
}

export default withStyles(styles)(SinglePost);
