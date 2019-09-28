import React, { useState, useEffect } from 'react';
import './ArticlesFeed.css';
import { ArticleInterface } from '../../interfaces/article.interface';
import Article from '../Article/Article';

const topicsMock: ArticleInterface[] = [
    {
        title: 'Title Mock Foo',
        summary: 'Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.',
        thumbnail: 'https://source.unsplash.com/user/erondu/300x300'
    },
    {
        title: 'Title Mock Bar',
        summary: 'Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.',
        thumbnail: 'https://source.unsplash.com/user/erondu/300x300'
    },
];

const TopicsOverview: React.FC = () => {

    const [topics, setTopics] = useState<ArticleInterface[]>([]);

    useEffect(() => {
        setTopics(topicsMock);
    }, []);

    return (
        <div>
            {topics.map((article, index) => (<Article key={index} title={article.title} summary={article.summary} thumbnail={article.thumbnail} />))}
        </div>
    )
};

export default TopicsOverview;
