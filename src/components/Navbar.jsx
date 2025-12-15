import React, { useState, useEffect } from "react";
import { Menu, X, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
    const [LogoProfile] = assets;
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Videos", path: "/videos" },
        { name: "About", path: "/about" },
        { name: "Community", path: "/community" },
        { name: "Contact", path: "/contact" },
    ];

    const channelUrl = "https://www.youtube.com/@rahulkumarmmr";

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-black/60 backdrop-blur-md shadow-lg border-b border-white/10"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href={channelUrl} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <img src={LogoProfile} alt="Logo" className="w-10 h-10 rounded-full object-cover border-2 border-red-600" />
                        <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
                            Mauj Masti Reel
                        </span>
                        <span className="text-white font-bold text-xl tracking-tight sm:hidden">
                            MMR
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out ${isActive(link.path)
                                        ? "text-white bg-white/10"
                                        : "text-gray-300 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <div className="hidden md:block">
                        <a
                            href={channelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-red-500/30 transition-all transform hover:scale-105 flex items-center gap-2"
                        >
                            <Youtube className="w-4 h-4" />
                            Subscribe
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block w-6 h-6" /> : <Menu className="block w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(link.path)
                                        ? "text-white bg-white/10"
                                        : "text-gray-300 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-4 px-3">
                                <a
                                    href={channelUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-base font-semibold shadow-lg shadow-red-500/30 flex items-center justify-center gap-2"
                                >
                                    <Youtube className="w-5 h-5" />
                                    Subscribe Now
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
