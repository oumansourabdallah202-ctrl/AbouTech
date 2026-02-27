import React from 'react';

interface PhoneCardProps {
    image: string;
    name: string;
    rating: number;
    description: string;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ image, name, rating, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600">Rating: {rating} / 5</p>
                <p className="text-gray-500 mt-2">{description}</p>
                <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default PhoneCard;