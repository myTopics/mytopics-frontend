import React from "react";

interface StateContextInterface {
  state: React.ReducerState<React.Reducer<any, any>>
  dispatch?: React.Dispatch<any>
};

export const StateContext: React.Context<StateContextInterface> = React.createContext({
  state: {
    articles: new Map(),
    furtherReadings: []
  }
});