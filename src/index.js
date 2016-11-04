import './stylesheets/App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

// IMPORT STORE REDUCER
import rootReducer from './reducers';

// IMPORT COMPONENTS
import RequireAuth from './components/RequireAuth';
import App from './components/App';
import LandingPage from './components/LandingPage';
import UserDashboard from './components/UserDashboard'
import SignIn from './components/forms/SignIn'
import SignUp from './components/forms/SignUp'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
        <Route path="/user/:id/dashboard" component={RequireAuth(UserDashboard)} />
        <Route path="/user/signin" component={SignIn} />
        <Route path="/user/signup" component={SignUp} />
        <Route path="/welcome" component={LandingPage} />
      </Route>
    </Router>
  </Provider>
  ,document.getElementById('root')
);
