import React, {useState, useContext} from 'react';
import { Card } from 'baseui/card';
import { Button } from "baseui/button";
import { Flipper, Flipped } from "react-flip-toolkit";
import './SideArticle.css';
import { StateContext } from '../../context/StateContext';
import { Plus } from 'baseui/icon';


const SideArticle: React.FC<any> = (props) => {

    const [fullScreen, setFullScreen] = useState(false);
    const context = useContext(StateContext);
    const toggleFullScreen = () => setFullScreen(prevState => {
        if(!prevState) context.dispatch && context.dispatch({ type: 'push_to_history', payload: props.symbol});
        return !prevState;
    });

    const saveToReadingsList = (e: any) => {
        e.stopPropagation();
        context.dispatch && context.dispatch({ type: 'add_to_further_readings', payload: props.symbol });
    }

    return (
        <Flipper flipKey={fullScreen} staggerConfig={{
            default: {
                speed: .99 // default is .1, 0 < n < 1
            }}}>
            <Flipped flipId={'side-article'}>
                <div className={fullScreen ? 'side-article-full-screen' : 'side-article-normal side-article'} onClick={toggleFullScreen}>
                <Card headerImage={props.image}>
                        <div className={fullScreen ? 'side-container-fullscreen' : 'side-container-sider'}>
                            <div className={fullScreen ? '': ''}>
                                <h1 className={fullScreen ? 'side-card-title-big' : 'side-card-title'}>
                                    {props.title}
                                </h1>
                                <span className={fullScreen ? 'side-card-summary-big' : 'side-card-summary'}>
                                    {props.summary}
                                </span>
                            </div>
                        </div>
                        <Flipped flipId={'side-detailText'} delayUntil={'side-article'}>
                            <div className={fullScreen ? 'side-show-detail-text' : 'side-display-none'}>
                                {props.text}
                            </div>
                        </Flipped>
                    </Card>
                </div>
            </Flipped>
        </Flipper>
  );
};

export default SideArticle;
