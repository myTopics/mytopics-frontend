import React, { useState, useEffect, useContext } from 'react';
import './ArticlesFeed.css';
import { ArticleInterface } from '../../interfaces/article.interface';
import Article from '../Article/Article';
import { StateContext } from '../../context/StateContext';

const topicsMock: ArticleInterface[] = [
    {
        title: 'Title Mock Foo',
        summary: 'Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.',
        thumbnail: 'https://source.unsplash.com/user/erondu/300x300'
    },
    {
        title: 'Title Mock Bar',
        summary: 'Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.',
        thumbnail: 'https://source.unsplash.com/user/erondu/300x300',
        details: 'this will be very long text'
    },
];

const ArticlesOverview: React.FC = () => {

    const [topics, setTopics] = useState<ArticleInterface[]>([]);
    const context = useContext(StateContext);

    useEffect(() => {
        setTopics(topicsMock);
        context.dispatch && context.dispatch({ type: 'add_to_further_readings', payload: 'uid_001' });
    }, []);

    useEffect(() => {
        console.log('new state', context.state);
    }, [ context.state ]);

    return (
        <div className="articles-wrapper">
            {topics.map((article, index) => (<Article key={index} title={article.title} summary={article.summary} thumbnail={article.thumbnail} details={article.details} />))}
        </div>
    );
};

export default ArticlesOverview;
