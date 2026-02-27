import React from 'react';
import Hero from '../components/Hero';
import FeaturedPhones from '../components/FeaturedPhones';
import ArticleContent from '../components/ArticleContent';
import CategoryList from '../components/CategoryList';
import NewsletterForm from '../components/NewsletterForm';
import { phones } from '../data/phones';

// sample article data for the homepage
const sampleArticle = {
    title: 'Welcome to AbduTech!',
    author: 'AbduTech Team',
    date: 'February 27, 2026',
    featuredImage: '/images/phone-a.jpg',
    content: '<p>Stay up to date with the latest phone technology news and reviews.</p>',
};

const Home: React.FC = () => {
    return (
        <div className="home">
            <Hero />
            <FeaturedPhones phones={phones} />
            <ArticleContent
                title={sampleArticle.title}
                author={sampleArticle.author}
                date={sampleArticle.date}
                featuredImage={sampleArticle.featuredImage}
                content={sampleArticle.content}
            />
            <CategoryList />
            <NewsletterForm />
        </div>
    );
};

export default Home;