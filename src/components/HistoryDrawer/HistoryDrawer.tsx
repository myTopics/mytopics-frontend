import * as React from 'react';
import {Drawer} from 'baseui/drawer';
import { StateContext } from '../../context/StateContext';
import { useContext } from 'react';
import HistoryFilter from '../HistoryFilter/HistoryFilter';

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
      Proin ut dui sed metus pharetra hend rerit vel non mi.
      Nulla ornare faucibus ex, non facilisis nisl. Maecenas
      aliquet mauris ut tempus.
      <HistoryFilter></HistoryFilter>
    </Drawer>
  );
};