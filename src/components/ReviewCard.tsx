import React from 'react';

interface ReviewCardProps {
    phoneImage: string;
    phoneName: string;
    rating: number;
    shortDescription: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ phoneImage, phoneName, rating, shortDescription }) => {
    return (
        <div className="card-dark rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <img src={phoneImage} alt={phoneName} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2 text-white">{phoneName}</h3>
            <p className="text-text-dim">Rating: {rating} / 5</p>
            <p className="text-text-dim mt-2">{shortDescription}</p>
            <button className="mt-4 border border-primary text-primary py-2 px-4 rounded hover:bg-primary/10 transition-colors">
                Read More
            </button>
        </div>
    );
};

export default ReviewCard;