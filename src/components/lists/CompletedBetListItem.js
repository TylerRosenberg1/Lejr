import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class CompletedBetListItem extends Component {
  constructor(props) {
    super(props);
  }

  renderWonOrLostTag(outcome) {
    if (outcome === "won") {
      return <span className="tag tag-default tag-pill float-xs-right pill-green">${this.props.amount}</span>
    } else {
      return <span className="tag tag-default tag-pill float-xs-right pill-red">${this.props.amount}</span>
    }
  }

  render() {
    return (
      <li
        onClick={event => this.props.betPaid(this.props._id)}
        className="list-group-item">
        <p>{this.props.friendName}</p>
        {this.renderWonOrLostTag(this.props.outcome)}
        <h6>{this.props.betName}</h6>
        <h5>{this.props.outcome.toUpperCase()}</h5>
      </li>
    )
  }
}

export default connect(null, actions)(CompletedBetListItem);
