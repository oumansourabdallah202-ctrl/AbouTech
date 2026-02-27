import React from 'react';

interface ReviewCardProps {
    phoneImage: string;
    phoneName: string;
    rating: number;
    shortDescription: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ phoneImage, phoneName, rating, shortDescription }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <img src={phoneImage} alt={phoneName} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-2">{phoneName}</h3>
            <p className="text-gray-500">Rating: {rating} / 5</p>
            <p className="text-gray-700 mt-2">{shortDescription}</p>
            <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                Read More
            </button>
        </div>
    );
};

export default ReviewCard;