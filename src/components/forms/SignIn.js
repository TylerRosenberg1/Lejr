import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
  }
  render() {
    return (
      <div>
          <h2>Welcome Back. Sign In.</h2>
          <form className="form-group">
            <fieldset>
              <input
              onChange={event => this.setState({username: event.target.value})}
              className="form-control" type="text" placeholder="Username" />
            </fieldset>
            <fieldset>
              <input
              onChange={event => this.setState({password: event.target.value})}
              className="form-control" type="password" placeholder="Password" />
            </fieldset>
            <button
            onClick={event => {
              event.preventDefault();
              this.props.userSignin(this.state)
            }}
            className="btn btn-primary">
              Sign In
            </button>
          </form>
        </div>
    )
  }
};

export default connect(null, actions)(SignInForm);
