import React, { useReducer } from 'react';
import './App.css';
import ArticlesFeed from './components/ArticlesFeed/ArticlesFeed';
import { StateReducer } from './context/StateReducer';
import { StateContext } from './context/StateContext';
import FurtherReadings from './components/FurtherReadings/FurtherReadings';

const App: React.FC = () => {
  const [ state, dispatch ] = useReducer(StateReducer, {
    articles: new Map(),
    furtherReadings: []
  });
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <ArticlesFeed />
        <FurtherReadings />
      </div>
    </StateContext.Provider>
  );
};

export default App;
