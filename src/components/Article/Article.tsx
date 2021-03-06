import React, {useState, useContext, useEffect} from 'react';
import { Card } from 'baseui/card';
import { Button } from "baseui/button";
import { Flipper, Flipped } from "react-flip-toolkit";
import { Plus, Delete } from 'baseui/icon';
import { ArticleInterface } from '../../interfaces/article.interface';
import './Article.css';
import { StateContext } from '../../context/StateContext';
import Recommendations from '../Recommendations/Recommendations';


const Article: React.FC<ArticleInterface> = (props) => {

    const [fullScreen, setFullScreen] = useState(false);
    const context = useContext(StateContext);

    useEffect(() => {
        context.dispatch && context.dispatch({ type: 'set_fullscreen_handle', payload: props.symbol, handle: setFullScreen});
    }, []);

    const openFullScreen = () => {
        if(!fullScreen) {
            context.dispatch && context.dispatch({ type: 'push_to_history', payload: props.symbol});
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
                    <Card headerImage={props.image}>
                        <div className={fullScreen ? 'container-fullscreen' : 'container'}>
                            <div className={fullScreen ? '': 'flex-2'}>
                                <h1 className={fullScreen ? 'card-title-big' : 'card-title'}>
                                    {props.title}
                                </h1>
                                <div onClick={closeFullScreen} className={fullScreen ? 'close-button' : 'display-none'}  ><Delete size={50}/></div>
                                <div className={fullScreen ? 'card-summary-big' : 'card-summary'}>
                                    {props.summary}
                                </div>
                            </div>
                            <div className={fullScreen ? 'meta-data-big' : 'meta-data'}>
                                <div>
                                    {props.author}
                                </div>
                                <div>
                                    {props.date.toLocaleString('de-ch', {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "numeric"
                                    })}
                                </div>
                            </div>
                            <div className={fullScreen ? 'flex-1-fullscreen' : 'flex-1'}>
                                <img src={props.image} alt={props.title} className={fullScreen ? 'thumbnail-big' : 'thumbnail'}/>
                                <Button onClick={saveToReadingsList}><Plus /></Button>
                            </div>
                        </div>
                        <Flipped flipId={'detailText'} delayUntil={'article'}>
                            <div className={fullScreen ? 'show-detail-text' : 'display-none'}>
                                {props.text}
                                {props.decisions && props.decisions.length > 0 && (<Recommendations decisions={props.decisions} />)}
                            </div>
                        </Flipped>
                    </Card>
                </div>
            </Flipped>
        </Flipper>
  );
};

export default Article;
