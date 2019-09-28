import React from 'react';
import './App.css';
import ArticlesFeed from './components/ArticlesFeed/ArticlesFeed';

const App: React.FC = () => {
  return (
    <div className="App">
      <ArticlesFeed />
      <div>Sider</div>
    </div>
  );
};

export default App;
