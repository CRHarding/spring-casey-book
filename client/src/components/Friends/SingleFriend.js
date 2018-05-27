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

const SingleFriend = props => {
  const friend = props.friend;
  const user = props.user;
  const { classes } = props;

  return (
    <div>
      <CardContent>
      <Typography className={classes.title} color="textSecondary">
          Pending friend requests {user.id === friend.sentRequest ? 'to' : 'from' }
        </Typography>
        <Typography>
          {friend.receivedRequestUserName}
        </Typography>
      </CardContent>
      <Divider />
    </div>
  );
};

export default withStyles(styles)(SingleFriend);
