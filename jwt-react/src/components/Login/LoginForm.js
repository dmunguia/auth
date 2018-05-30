import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { InputAdornment, Button } from '@material-ui/core';
import { AccountCircle, VpnKey, Send } from '@material-ui/icons';
import { TextField } from 'redux-form-material-ui'


const formStyle = {
  display: 'flex',
  flexDirection: 'column'
};

const buttonStyle = {
  margin: 20
};

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form style={formStyle} onSubmit={ handleSubmit }>
        <Field
          name="username"
          component={ TextField }
          margin="normal"
          error={this.props.error}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <Field
          name="password"
          component={TextField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          error={this.props.error}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKey />
              </InputAdornment>
            ),
          }}
        />
        <Button
          type='submit'
          variant="raised"
          color="primary"
          style={buttonStyle}>
          <Send />
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error
  };
};

const reduxFormLogin = reduxForm({
  form: 'login'
})(LoginForm);

export default connect(mapStateToProps)(reduxFormLogin);
