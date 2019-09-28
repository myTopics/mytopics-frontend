import React, { useEffect, useContext } from 'react';
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
        title: 'Erlkönig',
        summary: 'So ein Junge und sein Vater reiten durch den Wald, what happens next will shock you!',
        thumbnail: 'https://source.unsplash.com/user/erondu/300x300',
        details: 'Wer reitet so spät durch Nacht und Wind?\n' +
            'Es ist der Vater mit seinem Kind;\n' +
            'Er hat den Knaben wohl in dem Arm,\n' +
            'Er fasst ihn sicher, er hält ihn warm.\n' +
            '\n' +
            'Mein Sohn, was birgst du so bang dein Gesicht? –\n' +
            'Siehst, Vater, du den Erlkönig nicht?\n' +
            'Den Erlenkönig mit Kron’ und Schweif? –\n' +
            'Mein Sohn, es ist ein Nebelstreif. –\n' +
            '\n' +
            '„Du liebes Kind, komm, geh mit mir!\n' +
            'Gar schöne Spiele spiel’ ich mit dir;\n' +
            'Manch’ bunte Blumen sind an dem Strand,\n' +
            'Meine Mutter hat manch gülden Gewand.“ –\n' +
            '\n' +
            'Mein Vater, mein Vater, und hörest du nicht,\n' +
            'Was Erlenkönig mir leise verspricht? –\n' +
            'Sei ruhig, bleibe ruhig, mein Kind;\n' +
            'In dürren Blättern säuselt der Wind. –\n' +
            '\n' +
            '„Willst, feiner Knabe, du mit mir gehn?\n' +
            'Meine Töchter sollen dich warten schön;\n' +
            'Meine Töchter führen den nächtlichen Reihn\n' +
            'Und wiegen und tanzen und singen dich ein.“ –\n' +
            '\n' +
            'Mein Vater, mein Vater, und siehst du nicht dort\n' +
            'Erlkönigs Töchter am düstern Ort? –\n' +
            'Mein Sohn, mein Sohn, ich seh’ es genau:\n' +
            'Es scheinen die alten Weiden so grau. –\n' +
            '\n' +
            '„Ich liebe dich, mich reizt deine schöne Gestalt;\n' +
            'Und bist du nicht willig, so brauch’ ich Gewalt.“ –\n' +
            'Mein Vater, mein Vater, jetzt fasst er mich an!\n' +
            'Erlkönig hat mir ein Leids getan! –\n' +
            '\n' +
            'Dem Vater grauset’s; er reitet geschwind,\n' +
            'Er hält in Armen das ächzende Kind,\n' +
            'Erreicht den Hof mit Mühe und Not;\n' +
            'In seinen Armen das Kind war tot.'
    },
];

const ArticlesOverview: React.FC = () => {
    const context = useContext(StateContext);

    useEffect(() => {
        context.dispatch && context.dispatch({ type: 'add_to_articles_batch', payload: topicsMock });
    }, []);

    useEffect(() => {
        console.log('new state', context.state);
    }, [ context.state ]);

    return (
        <div className="articles-wrapper">
            {[...context.state.articles.values()].map((article: ArticleInterface, index: number) => (<Article key={index} title={article.title} summary={article.summary} thumbnail={article.thumbnail} details={article.details} />))}
        </div>
    );
};

export default ArticlesOverview;
