import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white text-gray-800 py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">Follow us on social media:</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <p className="mt-4 text-sm">© {new Date().getFullYear()} AbduTech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;