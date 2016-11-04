import { FETCH_BETS } from '../actions/types';
import { COMPLETE_BET } from '../actions/types';
import { CREATE_BET } from '../actions/types';
import { BET_PAID } from '../actions/types';

export default function betsReducer(state=[], action) {
  switch (action.type) {
    case FETCH_BETS:
      return action.payload;
    case CREATE_BET:
      return [action.payload, ...state];
    case COMPLETE_BET:
      let selectedBet;
      state.map(bet => {
        if (bet._id === action.payload.id) {
          selectedBet = bet;
        }
      })
      return [{...selectedBet, status: "completed", outcome: action.payload.outcome }, ...state.filter(bet => bet._id !== action.payload.id)];
    case BET_PAID:
      return state.filter(bet => bet._id !== action.payload);
    default:
      return state;
  }
}
