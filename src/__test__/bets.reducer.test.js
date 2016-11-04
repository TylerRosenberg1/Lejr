import betsReducer from '../reducers/bets.reducer.js';
import { FETCH_BETS } from '../actions/types';
import { COMPLETE_BET } from '../actions/types';
import { CREATE_BET } from '../actions/types';
import { BET_PAID } from '../actions/types';

describe("Bets Reducer", () => {

  it("Should add a newly created bet to 'active bets' upon bet creation", () => {
    let bets = [
      {_id: 123, friendName: "Aaron", betName: "Giants vs. Skins", amount: 45, status: "active", outcome: null},
      {_id: 456, friendName: "Suhdude", betName: "Go on the roller coaster", amount: 15, status: "active", outcome: null}
    ];
    let newBet = {_id: 789, friendName: "Andy", betName: "Eli falls asleep by 10pm tonight", amount: 5, status: "active", outcome: null};
    let action = {
      type: CREATE_BET,
      payload: newBet
    };
    expect(betsReducer(bets, action)).toEqual([newBet, ...bets]);
  });

  it("Should return all of user's bets when fetched from API", () => {
    let bets = [
      {_id: 123, friendName: "Aaron", betName: "Giants vs. Skins", amount: 45, status: "active", outcome: null},
      {_id: 456, friendName: "Suhdude", betName: "Go on the roller coaster", amount: 15, status: "active", outcome: null}
    ];
    let action = {
      type: FETCH_BETS,
      payload: bets
    };
    expect(betsReducer(undefined, action)).toEqual(bets);
  });

  it("Should change an active bet's status to 'complete' and 'outcome' to 'won' or 'lost' depending on the payload string", () => {
    let bets = [
      {_id: 123, friendName: "Aaron", betName: "Giants vs. Skins", amount: 45, status: "active", outcome: null},
      {_id: 456, friendName: "Suhdude", betName: "Go on the roller coaster", amount: 15, status: "active", outcome: null}
    ];
    let action = {
      type: COMPLETE_BET,
      payload: {outcome: "won", id: 456}
    };
    expect(betsReducer(bets, action)).toEqual([{...bets[1], status: "complete", outcome: "won"}, bets[0]]);
  });

  it("Should delete a bet upon selection that bet has been paid", () => {
    let bets = [
      {_id: 123, friendName: "Aaron", betName: "Giants vs. Skins", amount: 45, status: "completed", outcome: "won"},
      {_id: 456, friendName: "Suhdude", betName: "Go on the roller coaster", amount: 15, status: "active", outcome: null}
    ];
    let action = {
      type: BET_PAID,
      payload: 123
    };
    expect(betsReducer(bets, action)).toEqual([bets[1]]);
  })


})
