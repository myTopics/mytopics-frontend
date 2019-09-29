import React, { useEffect, useContext } from 'react';
import './ArticlesFeed.css';
import { ArticleInterface } from '../../interfaces/article.interface';
import Article from '../Article/Article';
import TopicsSelection from '../TopicSelection/TopicSelection';
import { StateContext } from '../../context/StateContext';

const ArticlesOverview: React.FC = () => {
    const context = useContext(StateContext);

    useEffect(() => {
        context.dispatch && context.dispatch({ type: 'show_fetch_loader' });
        fetch('http://localhost:3003/articles').then(res => res.json()).then((articles) => {
            articles = articles.map((article: any) => {
                return { ...article, date: new Date(article.date) };
            }); 
            context.dispatch && context.dispatch({ type: 'add_to_articles_batch', payload: articles });
            context.dispatch && context.dispatch({ type: 'hide_fetch_loader' });
        });
    }, []);

    useEffect(() => {
        console.log('new state', context.state);
    }, [ context.state ]);

    return (
        <div className="articles-wrapper">
            <TopicsSelection />
            {[...context.state.articles.values()].map((article: ArticleInterface, index: number) => (<Article key={index} {...article} />))}
        </div>
    );
};

export default ArticlesOverview;
