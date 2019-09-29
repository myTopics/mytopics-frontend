import * as React from 'react';
import {Drawer} from 'baseui/drawer';
import { StateContext } from '../../context/StateContext';
import { useContext } from 'react';
import HistoryFilter from '../HistoryFilter/HistoryFilter';
import ArticleHistory from '../ArticleHistory/ArticleHistory';

export default () => {
  const context = useContext(StateContext)
  function close() {
    context.dispatch && context.dispatch({ type: 'close_history' });
  }
  return (
    <Drawer
      onClose={() => close()}
      isOpen={context.state.historyOpen}
    >
      <ArticleHistory />
    </Drawer>
  );
};