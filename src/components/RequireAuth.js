import React, { Component } from 'react';
import { connect } from 'react-redux';

function RequireAuth(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!localStorage.getItem("token")) {
        this.context.router.push("/welcome");
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }

  return connect(null)(Authentication);
}

export default RequireAuth;
