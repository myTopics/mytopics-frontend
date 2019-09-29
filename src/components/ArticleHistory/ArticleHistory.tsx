import * as React from 'react';
import {Button} from 'baseui/button';
import {ListItem, ListItemLabel} from 'baseui/list';
import { StateContext } from '../../context/StateContext';
import { useContext } from 'react';

export default () => {
  const context = useContext(StateContext);
  const ListItems = context.state.history.map((entry:any, index: number) => {
    const article = context.state.articles.get(entry.article);
    return (
    <ListItem
      key={index}
      endEnhancer={() => (
        <Button size="compact" kind="secondary" shape="pill">
          View
        </Button>
      )}
    >
      <ListItemLabel>{article.title}</ListItemLabel>
    </ListItem>
    );
  });

  return (
    <ul>
      {ListItems}
    </ul>
  );
};