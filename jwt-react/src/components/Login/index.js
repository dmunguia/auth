import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux';

import { authenticateAction } from '../../store/actions'
import LoginForm from './LoginForm';

const gridStyle = {
  display: 'flex',
  direction: 'row',
  justifyContent: 'center',
  alignItems: 'center'
};

const paperStyle = {
  margin: 20,
  padding: 20,
  maxWidth: 400
};


class Login extends Component {
    onSubmit = (values) => {
      console.log('login form values', values);
      this.props.authenticateAction(values, this.props.history);
    }

    render() {
      return (
        <Grid container style={gridStyle}>
          <Grid item>
            <Paper style={paperStyle}>
              <LoginForm onSubmit={ this.onSubmit } />
            </Paper>
          </Grid>
        </Grid>
      );
    }
}

export default connect(null, {authenticateAction})(Login);
