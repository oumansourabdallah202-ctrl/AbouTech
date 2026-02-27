import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-off-black text-text-dim py-10">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <span>© {new Date().getFullYear()} AbduTech. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition">Privacy</a>
                        <a href="#" className="hover:text-white transition">Terms</a>
                        <a href="#" className="hover:text-white transition">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;