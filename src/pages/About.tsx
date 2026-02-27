import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About AbduTech</h1>
            <p className="text-lg text-gray-600 mb-6">
                AbduTech is your ultimate phone technology magazine, dedicated to providing the latest news, reviews, and comparisons in the world of mobile technology. Our mission is to empower consumers with the knowledge they need to make informed decisions about their phone purchases.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
                To deliver high-quality, unbiased information about the latest smartphones and technology trends, ensuring our readers stay ahead in the fast-paced world of mobile devices.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-lg text-gray-600">
                To be the leading source of phone technology insights, fostering a community of informed consumers who are passionate about mobile technology.
            </p>
        </div>
    );
};

export default About;