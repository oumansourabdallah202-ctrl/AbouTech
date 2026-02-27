import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-off-black shadow-lg sticky top-0 z-50">
            <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-2 text-primary">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fillRule="evenodd" />
                        </svg>
                        <span className="text-white text-xl font-bold tracking-tight">AbduTech</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link className="text-text-dim hover:text-white text-sm" to="/reviews">Reviews</Link>
                        <Link className="text-text-dim hover:text-white text-sm" to="/comparison">Comparison</Link>
                        <Link className="text-text-dim hover:text-white text-sm" to="/about">About</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden sm:block bg-transparent border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus:border-primary transition"
                    />
                    <Link to="/subscribe" className="px-5 py-2 border border-primary text-primary rounded-full text-sm font-semibold hover:bg-primary/10 transition">
                        Subscribe
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;