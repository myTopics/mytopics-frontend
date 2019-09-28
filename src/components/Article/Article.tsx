import React from 'react';
import {Card, StyledBody, StyledThumbnail} from 'baseui/card';
import { ArticleInterface } from '../../interfaces/article.interface';
import './Article.css';

const Article: React.FC<ArticleInterface> = (props) => {
  return (
      <Card>
          <div className={'container'}>
              <div className={'flex-2'}>
                  <h1 className={'card-title'}>
                      {props.title}
                  </h1>
                <span className={'card-summary'}>
                    {props.summary}
                </span>
              </div>
              <div className={'flex1'}>
                  <img src={props.thumbnail}/>
              </div>
          </div>
      </Card>
  );
};

export default Article;
