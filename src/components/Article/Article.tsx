import React, {useState} from 'react';
import { Card } from 'baseui/card';
import { Flipper, Flipped } from "react-flip-toolkit";
import { ArticleInterface } from '../../interfaces/article.interface';
import './Article.css';


const Article: React.FC<ArticleInterface> = (props) => {

    const [fullScreen, setFullScreen] = useState(false);
    const toggleFullScreen = () => setFullScreen(prevState => !prevState);

    return (
        <Flipper flipKey={fullScreen} staggerConfig={{
            default: {
                speed: .99 // default is .1, 0 < n < 1
            }}}>
            <Flipped flipId={'article'}>
                <div className={fullScreen ? 'article-full-screen' : 'article-normal'} onClick={toggleFullScreen}>
                    <Card>
                        <div className={fullScreen ? '' : 'container'}>
                            <div className={fullScreen ? '': 'flex-2'}>
                                <h1 className={fullScreen ? 'card-title-big' : 'card-title'}>
                                    {props.title}
                                </h1>
                                <span className={fullScreen ? 'card-summary-big' : 'card-summary'}>
                                    {props.summary}
                                </span>
                            </div>
                            <Flipped flipId={'metaData'}>
                                <div className={fullScreen ? 'metaDataBig' : 'metaData'}>
                                    <div>
                                        Johan Wolfgang von Goethe
                                    </div>
                                    <div>
                                        01.09.1818
                                    </div>
                                </div>
                            </Flipped>
                            <div className={fullScreen ? '' : 'flex1'}>
                                <img src={props.thumbnail} alt={props.title} className={fullScreen ? 'thumbnail-big' : 'thumbnail'}/>
                            </div>
                        </div>
                        <Flipped flipId={'detailText'} delayUntil={'article'}>
                            <div className={fullScreen ? 'show-detail-text' : 'display-none'}>
                                {props.details}
                            </div>
                        </Flipped>
                    </Card>
                </div>
            </Flipped>
        </Flipper>
  );
};

export default Article;
