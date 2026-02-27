import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the subscription logic, e.g., sending the email to your server
        setIsSubscribed(true);
        setEmail('');
    };

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
            {isSubscribed ? (
                <p className="text-green-600">Thank you for subscribing!</p>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            )}
        </div>
    );
};

export default NewsletterForm;