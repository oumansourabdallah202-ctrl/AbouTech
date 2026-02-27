import React from 'react';
import Hero from '../components/Hero';
import FeaturedPhones from '../components/FeaturedPhones';
import ArticleContent from '../components/ArticleContent';
import CategoryList from '../components/CategoryList';
import NewsletterForm from '../components/NewsletterForm';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Hero />
            <FeaturedPhones />
            <ArticleContent />
            <CategoryList />
            <NewsletterForm />
        </div>
    );
};

export default Home;