import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section className="pt-24 pb-12 min-h-screen bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-red-500 font-semibold tracking-wide uppercase text-sm mb-4 block">
                            Get in Touch
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Let's explode your channel growth.
                        </h2>
                        <p className="text-gray-400 text-lg mb-12">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Email Us</h4>
                                    <p className="text-gray-400">rk9470@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-lg">Visit Us</h4>
                                    <p className="text-gray-400">Farrukhabad</p>
                                    <p className="text-gray-400">209625 Uttar Pradesh</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-sm"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Rahul" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Kumar" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="rk@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows="4" className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none" placeholder="Tell us about your channel..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-red-500/25 flex items-center justify-center gap-2">
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-24 border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    © 2024 YT Promo. All rights reserved.
                </div>
            </div>
        </section>
    );
};

export default Contact;
