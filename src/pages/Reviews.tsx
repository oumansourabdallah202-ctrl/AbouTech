import React from 'react';
import ReviewCard from '../components/ReviewCard';
import { reviewsData } from '../data/phones'; // reviewsData has phoneImage, phoneName, rating, shortDescription

const Reviews: React.FC = () => {
    return (
        <main className="bg-off-black min-h-screen py-16">
            <div className="max-w-[1200px] mx-auto px-6">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-white">Phone Reviews</h1>
                    <p className="text-text-dim mt-2">Deep architectural analysis and performance telemetry for next-gen mobile systems.</p>
                </header>
                <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-4">
                        <button className="text-text-dim border border-white/20 px-4 py-2 rounded-full text-sm hover:border-primary hover:text-primary transition">Filter: Brands</button>
                        <button className="text-text-dim border border-white/20 px-4 py-2 rounded-full text-sm hover:border-primary hover:text-primary transition">Price Range</button>
                    </div>
                    <button className="text-primary font-bold">Latest Data</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviewsData.map((r) => (
                        <ReviewCard
                            key={r.id}
                            phoneImage={r.phoneImage}
                            phoneName={r.phoneName}
                            rating={r.rating}
                            shortDescription={r.shortDescription}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Reviews;