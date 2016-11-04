import axios from 'axios';
import { browserHistory } from 'react-router';
import { CREATE_BET } from './types';
import { FETCH_BETS } from './types';
import { COMPLETE_BET } from './types';
import { BET_PAID } from './types';

const ROOT_URL = "https://lejr-server.herokuapp.com";


// USER SIGN UP
export function userSignup({username, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/user/signup`, {username, password}).then(function(response) {
      if (!response.data.error) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user._id);
        browserHistory.push(`/user/${response.data.user._id}/dashboard`);
      }
    }).catch(function(error) {
      localStorage.clear();
    })
  }
}

// USER SIGN IN
export function userSignin({username, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/user/signin`, {username, password}).then(function(response) {
      if (!response.data.error) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user._id);
        browserHistory.push(`/user/${response.data.user._id}/dashboard`);
      }
    }).catch(function(error) {
      localStorage.clear();
    })
  }
}


// FETCH ALL BETS
export function fetchBets() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/api/user/${localStorage.getItem("user")}`).then(function(response) {
      if (!response.data.error) {
        dispatch({type: FETCH_BETS, payload: response.data.bets});
      }
    });
  }
}

// CREATE BET
export function createBet({friendName, betName, amount}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/user/${localStorage.getItem("user")}/bet/create`, {friendName, betName, amount}).then(function(response) {
      if (!response.data.error) {
        dispatch({type: CREATE_BET, payload: response.data});
      }
    });
  }
}

// COMPLETE BET
export function completeBet(outcome, id) {
  return function(dispatch) {
    axios.put(`${ROOT_URL}/api/user/${localStorage.getItem("user")}/bet/${id}/update/${outcome}`).then(function(response) {
      if (!response.data.error) {
        dispatch({type: COMPLETE_BET, payload: {outcome, id}})
      }
    })
  }
}


// BET PAID
export function betPaid(id) {
  return function(dispatch) {
    axios.delete(`${ROOT_URL}/api/user/${localStorage.getItem("user")}/bet/${id}/destroy`).then(function(response) {
      if (!response.data.error) {
        dispatch({type: BET_PAID, payload: id});
      }
    })
  }
}
