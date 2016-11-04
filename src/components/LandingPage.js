import React from 'react';
import { Link } from 'react-router';

const LandingPage = () => {
  return (
      <div className="jumbotron">
        <h3 className="display-3">Welcome To LEJR</h3>
        <p className="lead">LEJR lets you keep track of all of your personal bets with friends in a simple, organized, and easy to use way.</p>
        <Link to="/user/signup">
          <button className="btn btn-primary">
            Sign Up Today
          </button>
        </Link>
      </div>
  )
}

export default LandingPage;
