import React, {useState, useContext, useEffect} from 'react';
import './FurtherReadings.css';
import { StateContext } from '../../context/StateContext';
import { ArticleInterface } from '../../interfaces/article.interface';
import SideArticle from '../SideArticle/SideArticle';
import { Button } from 'baseui/button';


const FurtherReadings: React.FC<any> = (props) => {
    const context = useContext(StateContext);
    const [articles, setArticles] = useState<ArticleInterface[]>([]);
    console.log('further readings logged');

    const articleSymbols = context.state.furtherReadings;

    useEffect(() => {
        const _articles = context.state.furtherReadings.map((articleSymbol: any) => {
            return context.state.articles.get(articleSymbol);
        });
        setArticles(_articles);
    }, [articleSymbols]);

    const openHistory = () => {
        context.dispatch && context.dispatch({ type: 'open_history' });
    };

    return (
        <div className={'sidebar-container'}>
            {articles.map((article) => (<SideArticle {...article}></SideArticle>))}
            <div className={'history-btn'}>
                <Button onClick={() => openHistory()}>History</Button>;
            </div>
        </div>
    );
};

export default FurtherReadings;
