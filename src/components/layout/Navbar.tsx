import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                    <Link to="/">AbduTech</Link>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-gray-600 hover:text-gray-900 transition duration-300">Home</Link>
                    </li>
                    <li>
                        <Link to="/reviews" className="text-gray-600 hover:text-gray-900 transition duration-300">Reviews</Link>
                    </li>
                    <li>
                        <Link to="/comparison" className="text-gray-600 hover:text-gray-900 transition duration-300">Comparison</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-600 hover:text-gray-900 transition duration-300">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;