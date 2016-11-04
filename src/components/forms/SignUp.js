import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
  }
  render() {
    return (
      <div>
          <h2>Sign Up For Lejr Below.</h2>
          <form className="form-group">
            <fieldset>
              <input
              onChange={event => this.setState({username: event.target.value})}
              className="form-control" type="text" placeholder="Enter A Username" />
            </fieldset>
            <fieldset>
              <input
              onChange={event => this.setState({password: event.target.value})}
              className="form-control" type="password" placeholder="Enter A Password" />
            </fieldset>
            <button
            onClick={event => {
              event.preventDefault();
              this.props.userSignup(this.state);
            }
          }
            className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
    )
  }
};

export default connect(null, actions)(SignUpForm);
