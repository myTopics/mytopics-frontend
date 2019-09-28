import React, {useState} from 'react';
import { ArticleInterface } from '../../interfaces/article.interface';
import './Article.css';
import {Card} from "baseui/card";
import {Flipper, Flipped} from "react-flip-toolkit";

const Article: React.FC<ArticleInterface> = (props) => {

    const [fullScreen, setFullScreen] = useState(false);
    const toggleFullScreen = () => setFullScreen(prevState => !prevState);

    return (
        <Flipper flipKey={fullScreen}>
            <Flipped flipId={'article'}>
                <div className={fullScreen ? 'full-screen' : 'normal'} onClick={toggleFullScreen}>
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
                                <img src={props.thumbnail} alt={props.title}/>
                            </div>
                        </div>
                    </Card>
                </div>
            </Flipped>
        </Flipper>
  );
};

export default Article;
