import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, ThumbsUp } from 'lucide-react';
import { assets } from '../assets/assets';

const Community = () => {
    const [_, Thum1, Thum2, Thum3, Thum4] = assets;

    const comments = [
        {
            name: "Rahul Kumar (CEO)",
            image: Thum1,
            content: "Producer, Actor, Creator, Editor, and Writer of this channel",
        },
        {
            name: "Shiva Ji",
            image: Thum2,
            content: "Actor of this channel",
        },
        {
            name: "Sarnesh Kumar",
            image: Thum3,
            content: "Actor of this channel",
        },
        {
            name: "Aman Kumar",
            image: Thum4,
            content: "Actor of this channel",
        },
        {
            name: "Prince Kumar",
            image: Thum4,
            content: "Actor of this channel",
        },
        {
            name: "Ramu Kumar",
            image: Thum4,
            content: "Actor of this channel",
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[#0f0f0f] relative pb-12 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                        Fan Love ❤️
                    </h2>
                    <p className="text-xl text-gray-400">
                        Join our amazing community of 10K+ subscribers!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {comments.map((comment, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl relative hover:bg-white/[0.08] transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <img
                                    src={comment.image}
                                    alt={comment.name}
                                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                                />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="text-sm font-bold text-white">{comment.name}</h4>
                                        <span className="text-xs text-gray-500">{comment.date}</span>
                                    </div>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {comment.content}
                                    </p>

                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors cursor-pointer">
                                            <ThumbsUp className="w-4 h-4" />
                                            <span className="text-xs font-medium">{comment.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors cursor-pointer">
                                            <MessageCircle className="w-4 h-4" />
                                            <span className="text-xs font-medium">Reply</span>
                                        </div>
                                        <Heart className="w-4 h-4 text-red-500 fill-current ml-auto" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Community;