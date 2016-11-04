import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import NewBetForm from './forms/NewBetForm';
import ActiveBetListItem from './lists/ActiveBetListItem';
import CompletedBetListItem from './lists/CompletedBetListItem';
import Totals from './totals/Totals';

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {friendName: "", betName: "", amount: ""};
    this.props.fetchBets();
  }

  returnBet(bet) {
    switch (bet.status) {
      case "active":
        return (
          <ActiveBetListItem key={bet._id} _id={bet._id} friendName={bet.friendName} betName={bet.betName} amount={bet.amount} />
        );
      case "completed":
      return (
        <CompletedBetListItem key={bet._id} _id={bet._id} friendName={bet.friendName} betName={bet.betName} amount={bet.amount} outcome={bet.outcome} />
      );
    }
  }

  render() {
    return (
      <div className="user-dashboard">
        <Totals />
        <NewBetForm />
        <div className="row">
          <div className="bets col-md-6">
              <h3>Active Bets</h3>
              <h6>Bets for which you have not yet declared an outcome.</h6>
              <ul className="list-group">
                {this.props.bets.filter(bet => bet.status === "active").map(bet => this.returnBet(bet))}
              </ul>
          </div>
          <div className="bets col-md-6">
              <h3>Completed Bets</h3>
              <h6>Unpaid bets that you have declared as won or lost. Clicking a bet will mark it as paid, removing it, and subtracting its amount from your totals above.</h6>
              <ul className="list-group">
                {this.props.bets.filter(bet => bet.status !== "active").map(bet => this.returnBet(bet))}
              </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bets: state.betsReducer
  }
}

export default connect(mapStateToProps, actions)(UserDashboard);
