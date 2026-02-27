import React from 'react';

const Hero: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
            style={{
                backgroundImage:
                    'url(https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1350&q=80)',
            }}
        >
            <h1 className="text-5xl font-bold text-white text-center drop-shadow-lg">
                Your Ultimate Phone Technology Magazine
            </h1>
            <p className="mt-4 text-xl text-white drop-shadow-md">
                Latest reviews, comparisons and news in mobile tech
            </p>
        </div>
    );
};

export default Hero;