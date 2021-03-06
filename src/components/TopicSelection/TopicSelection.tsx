import * as React from 'react';
import {Input} from 'baseui/input';
import { StateContext } from '../../context/StateContext';
import { useContext } from 'react';

export default () => {
  const [value, setValue] = React.useState('Trump');
  const context = useContext(StateContext);

  const sendQuery = (e:any) => {
    const url = `http://localhost:3003/articles/${e.target.value}`;
    context.dispatch && context.dispatch({ type: 'clear_articles' });
    context.dispatch && context.dispatch({ type: 'show_fetch_loader' });
    fetch(url).then(res => res.json()).then(data => {
      const articles = data.map((article: any) => {
          return { ...article, date: new Date(article.date) };
      }); 
      context.dispatch && context.dispatch({ type: 'add_to_articles_batch', payload: articles });
      context.dispatch && context.dispatch({ type: 'hide_fetch_loader' });
    }).catch(err => console.error(err));
  }
  return (
    <Input
      onBlur={sendQuery}
      value={value}
      onChange={event => setValue(event.currentTarget.value)}
      placeholder="Controlled Input"
    />
  );
};