import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ActiveBetListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-group-item">
        <p>{this.props.friendName}</p>
        <span className="tag tag-default tag-pill float-xs-right">${this.props.amount}</span>
        <h6>{this.props.betName}</h6>
        <h5
          onClick={event => this.props.completeBet("won", this.props._id)}
          className="green">I Won</h5>
        <h5
          onClick={event => this.props.completeBet("lost", this.props._id)}
          className="red">I Lost</h5>
      </li>
    )
  }
}

export default connect(null, actions)(ActiveBetListItem);
