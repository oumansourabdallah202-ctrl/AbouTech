import React from 'react';

interface ArticleContentProps {
    title: string;
    author: string;
    date: string;
    featuredImage: string;
    content: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ title, author, date, featuredImage, content }) => {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
            <div className="flex items-center mb-4 text-gray-600">
                <span className="mr-2">By {author}</span>
                <span>•</span>
                <span className="ml-2">{date}</span>
            </div>
            <img src={featuredImage} alt={title} className="w-full h-auto rounded-lg mb-4" />
            <div className="text-gray-800" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default ArticleContent;