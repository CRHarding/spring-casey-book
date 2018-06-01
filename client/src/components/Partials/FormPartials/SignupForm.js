import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { RenderTextField, RenderMultilineTextField, RenderPassword } from './RenderFormFields';
import Validate from '../../Authenticate/Validate';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      aboutMe: '',
      password: '',
      repeatPassword: '',
      pristine: true,
      submitting: false,
    };
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      aboutMe: '',
      password: '',
      repeatPassword: '',
      pristine: true,
      submitting: false,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <RenderTextField name="userName" label="User Name" />
        </div>
        <div>
          <RenderTextField name="firstName" label="First Name" />
        </div>
        <div>
          <RenderTextField name="lastName" label="Last Name" />
        </div>
        <div>
          <RenderTextField name="email" label="Email" />
        </div>
        <div>
          <RenderMultilineTextField name="aboutMe" label="About Me" />
        </div>
        <div>
          <RenderPassword name="password" label="Password" />
        </div>
        <div>
          <RenderPassword name="repeatPassword" label="Repeat Password" />
        </div>
        <div>
          <button type="submit" disabled={this.state.pristine || this.state.submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={this.state.pristine || this.state.submitting}
            onClick={this.reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
