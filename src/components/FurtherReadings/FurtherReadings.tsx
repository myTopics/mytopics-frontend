import React, {useState, useContext, useEffect} from 'react';
import './FurtherReadings.css';
import { StateContext } from '../../context/StateContext';
import { ArticleInterface } from '../../interfaces/article.interface';


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

    return (
        <div>
            {articles.map((article) => (<div>{article.title}</div>))}
        </div>
    );
};

export default FurtherReadings;
