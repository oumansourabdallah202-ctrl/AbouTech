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
    featuredImage: 'https://via.placeholder.com/800x400?text=Featured+Article',
    content: '<p>Stay up to date with the latest phone technology news and reviews.</p>',
};

const Home: React.FC = () => {
    return (
        <main className="bg-off-black">
            {/* hero */}
            <section className="relative bg-gradient-to-r from-primary/20 to-transparent pb-32">
                <div className="max-w-[1200px] mx-auto px-6 pt-24 flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <p className="uppercase text-xs font-bold tracking-widest text-primary mb-4">Issue 042 • 2024</p>
                        <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-white mb-6">
                            Your Ultimate <br /> Phone Technology Magazine.
                        </h1>
                        <p className="text-lg text-text-dim mb-8 max-w-md mx-auto lg:mx-0">
                            The definitive source for mobile innovation, design philosophy, and the future of hardware. Minimalist insights for the tech enthusiast.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-8 py-3 bg-primary text-black rounded-full font-semibold hover:opacity-90 transition">
                                Explore Issues
                            </button>
                            <button className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition">
                                Latest Reviews
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <img src="https://via.placeholder.com/500x700?text=Phone" alt="Hero phone" className="mx-auto lg:mx-0 w-80 lg:w-auto" />
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-off-black" />
                    </div>
                </div>
            </section>

            {/* featured phones */}
            <section className="max-w-[1200px] mx-auto px-6 py-16">
                <h2 className="text-white text-3xl font-bold mb-8">Featured Phones</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {phones.map((phone) => (
                        <div key={phone.id} className="card-dark rounded-xl p-6">
                            <img src={phone.image} alt={phone.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                            <h3 className="text-xl font-semibold text-white mb-2">{phone.name}</h3>
                            <p className="text-text-dim text-sm mb-4">{phone.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-primary font-bold">${phone.specs.Price.replace('$','')}</span>
                                <span className="text-text-dim text-sm">{phone.rating.toFixed(1)} ★</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* newsletter callout */}
            <section className="bg-gradient-to-r from-primary/30 to-secondary/10 py-20">
                <div className="max-w-[800px] mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Curve.</h2>
                    <p className="text-text-dim mb-8">Get the latest reviews, news, and exclusive tech insights delivered directly to your inbox every Sunday morning.</p>
                    <div className="flex justify-center gap-4">
                        <input type="email" placeholder="Your email address" className="px-6 py-3 rounded-full bg-transparent border border-white/30 placeholder-text-dim text-white focus:outline-none" />
                        <button className="px-6 py-3 rounded-full bg-primary text-black font-semibold">Join AbduTech</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;