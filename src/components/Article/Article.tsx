import React from 'react';
import {Card, StyledBody, StyledThumbnail} from 'baseui/card';
import { ArticleInterface } from '../../interfaces/article.interface';

const Article: React.FC<ArticleInterface> = (props) => {
  return (
      <Card title={props.title}>
          <StyledBody>
              {props.summary}
              <StyledThumbnail src={props.thumbnail} />
          </StyledBody>
      </Card>
  );
};

export default Article;