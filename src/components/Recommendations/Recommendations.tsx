import React, { useContext } from 'react';
import {Button} from 'baseui/button';
import {ButtonGroup} from 'baseui/button-group';
import './Recommendations.css';
import { StateContext } from '../../context/StateContext';
export default (props:any) => {

  const context = useContext(StateContext);
  const setArticleActive = (articleId: string) => {
    const symbol: any = Array.from<any>(context.state.articles.values()).find((article: any) => article.id === articleId).symbol;
    context.dispatch && context.dispatch({ type: 'set_article_active', payload: symbol });
  }

  return (
  <div className={'recommendations-container'}>
    <ButtonGroup>
      {props.decisions.map((decision:any, index:number) => (<Button onClick={() => {setArticleActive(decision.link)}} key={index}>{decision.title}</Button>))}
    </ButtonGroup>
  </div>
  );
};