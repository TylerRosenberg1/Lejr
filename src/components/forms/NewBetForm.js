import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class NewBetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {friendName: "", betName: "", amount: ""}
  }
  render() {
    return (
        <form className="form-group">
          <fieldset>
            <input
            onChange={event => this.setState({friendName: event.target.value})}
            className="form-control" type="text" placeholder="Friend Name" value={this.state.friendName} />
          </fieldset>
          <fieldset>
            <input
            onChange={event => this.setState({betName: event.target.value})}
            className="form-control" type="text" placeholder="Bet Name" value={this.state.betName} />
          </fieldset>
          <fieldset>
            <input
            onChange={event => this.setState({amount: event.target.value})}
            className="form-control" type="text" placeholder="Amount"  value={this.state.amount}/>
          </fieldset>
          <button
          onClick={event => {
            event.preventDefault();
            this.props.createBet(this.state);
            this.setState({friendName: "", betName: "", amount: ""})
          }}
          className="btn btn-primary">
          Create Bet
          </button>
        </form>
    )
  }
}

export default connect(null, actions)(NewBetForm);
