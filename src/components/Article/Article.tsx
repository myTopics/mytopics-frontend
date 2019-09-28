import React, {useState, useContext} from 'react';
import { Card } from 'baseui/card';
import { Button } from "baseui/button";
import { Flipper, Flipped } from "react-flip-toolkit";
import { ArticleInterface } from '../../interfaces/article.interface';
import './Article.css';
import { StateContext } from '../../context/StateContext';
import { Plus, Delete } from 'baseui/icon';


const Article: React.FC<ArticleInterface> = (props) => {

    const [fullScreen, setFullScreen] = useState(false);
    const context = useContext(StateContext);
    const openFullScreen = () => {
        if(!fullScreen) {
            setFullScreen(true);
        }
    };
    const closeFullScreen = () => setFullScreen(false);

    const saveToReadingsList = (e: any) => {
        e.stopPropagation();
        context.dispatch && context.dispatch({ type: 'add_to_further_readings', payload: props.symbol });
    };

    return (
        <Flipper flipKey={fullScreen} staggerConfig={{
            default: {
                speed: .99 // default is .1, 0 < n < 1
            }}}>
            <Flipped flipId={'article'}>
                <div className={fullScreen ? 'article-full-screen' : 'article-normal'} onClick={openFullScreen}>
                    <Card>
                        <div className={fullScreen ? '' : 'container'}>
                            <div className={fullScreen ? '': 'flex-2'}>
                                <h1 className={fullScreen ? 'card-title-big' : 'card-title'}>
                                    {props.title}
                                </h1>
                                <div onClick={closeFullScreen} className={fullScreen ? 'close-button' : 'display-none'}  ><Delete size={50}/></div>
                                <span className={fullScreen ? 'card-summary-big' : 'card-summary'}>
                                    {props.summary}
                                </span>
                            </div>
                            <Flipped flipId={'metaData'}>
                                <div className={fullScreen ? 'meta-data-big' : 'meta-data'}>
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
                                <Button onClick={saveToReadingsList}><Plus /></Button>
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
