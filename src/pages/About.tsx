import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div
                className="h-64 bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1512258346451-8ed0c63e5b76?auto=format&fit=crop&w=1350&q=80)',
                }}
            >
                <h1 className="text-5xl text-white font-bold drop-shadow-lg">About AbduTech</h1>
            </div>
            <div className="container mx-auto p-8">
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
        </div>
    );
};

export default About;