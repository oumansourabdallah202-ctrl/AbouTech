import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from '../components/ArticleContent';

const Article = () => {
    const { id } = useParams();

    // Fetch article data based on the id (this could be from an API or local data)
    // For now, we'll use a placeholder
    const article = {
        title: "Sample Article Title",
        author: "Author Name",
        date: "October 1, 2023",
        featuredImage: "path/to/featured-image.jpg",
        content: "This is a sample article content. It provides insights into the latest phone technologies and trends."
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
            <p className="text-gray-600 mb-4">
                By {article.author} | {article.date}
            </p>
            <img src={article.featuredImage} alt={article.title} className="w-full h-auto mb-4 rounded shadow-lg" />
            <ArticleContent content={article.content} />
        </div>
    );
};

export default Article;