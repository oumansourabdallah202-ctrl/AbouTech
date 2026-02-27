import React from 'react';
import ReviewCard from '../components/ReviewCard';
import { reviewsData } from '../data/phones'; // Assuming reviews data is in phones.ts

const Reviews: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Phone Reviews</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviewsData.map((review) => (
                    <ReviewCard
                        key={review.id}
                        image={review.image}
                        name={review.name}
                        rating={review.rating}
                        description={review.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Reviews;