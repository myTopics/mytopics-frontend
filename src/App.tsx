import React, { useReducer } from 'react';
import './App.css';
import ArticlesFeed from './components/ArticlesFeed/ArticlesFeed';
import { StateReducer } from './context/StateReducer';
import { StateContext } from './context/StateContext';
import FurtherReadings from './components/FurtherReadings/FurtherReadings';
import HistoryDrawer from './components/HistoryDrawer/HistoryDrawer';
import FetchLoader from './components/FetchLoader/FetchLoader';

const App: React.FC = () => {
  const [ state, dispatch ] = useReducer(StateReducer, {
    articles: new Map(),
    furtherReadings: [],
    historyOpen: false,
    history: [],
    showFetchLoader: false,
    activeArticle: null,
  });
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <ArticlesFeed />
        <FurtherReadings />
      </div>
      <HistoryDrawer />
      <FetchLoader></FetchLoader>
      <div className="infobox">
        Powered by NewsAPI.org
      </div>
    </StateContext.Provider>
  );
};

export default App;
