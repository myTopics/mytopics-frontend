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
    const toggleFullScreen = () => setFullScreen(prevState => !prevState);

    const saveToReadingsList = (e: any) => {
        e.stopPropagation();
        context.dispatch && context.dispatch({ type: 'add_to_further_readings', payload: props.symbol });
    }

    return (
        <Flipper flipKey={fullScreen} staggerConfig={{
            default: {
                speed: .99 // default is .1, 0 < n < 1
            }}}>
            <Flipped flipId={'article'}>
                <div className={fullScreen ? 'article-full-screen' : 'article-normal side-article'} onClick={toggleFullScreen}>
                <Card>
                        <div className={fullScreen ? '' : 'container-sider'}>
                            <div className={fullScreen ? '': ''}>
                                <h1 className={fullScreen ? 'card-title-big' : 'card-title-sider'}>
                                    {props.title}
                                </h1>
                                <span className={fullScreen ? 'card-summary-big' : 'card-summary-sider'}>
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
                            <div className={fullScreen ? '' : ''}>
                                <img src={props.image} alt={props.title} className={fullScreen ? 'thumbnail-big' : 'thumbnail'}/>
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

export default SideArticle;
