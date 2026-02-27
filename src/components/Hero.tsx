import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-gray-100">
            <img src="/path/to/logo.png" alt="AbduTech Logo" className="mb-4" />
            <h1 className="text-4xl font-bold text-gray-800">Your Ultimate Phone Technology Magazine</h1>
        </div>
    );
};

export default Hero;