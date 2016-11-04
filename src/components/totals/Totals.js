import React, { Component } from 'react';
import { connect } from 'react-redux';

class Totals extends Component {

  calculateTotals(type) {
    switch (type) {
      case "gain":
        let gainTotal = 0;
        this.props.bets.filter(bet => bet.outcome === "won").map(bet => gainTotal += bet.amount);
        return gainTotal;
      case "debt":
        let debtTotal = 0;
        this.props.bets.filter(bet => bet.outcome === "lost").map(bet => debtTotal += bet.amount);
        return debtTotal;
    }
  }
  render() {
    return (
      <div className="card card-block">
        <h4 className="card-title">Totals</h4>
        <h6>Calculated total gain and debt amounts from Completed Bets below. </h6>
        <span className="tag tag-default tag-pill pill-green">${this.calculateTotals("gain")}</span>
        <span className="tag tag-default tag-pill pill-red">${this.calculateTotals("debt")}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    bets: state.betsReducer
  }
}

export default connect(mapStateToProps)(Totals);
