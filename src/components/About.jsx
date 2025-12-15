import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Smile, Users, Star, Video, Music } from 'lucide-react';

const features = [
    {
        icon: <Smile className="w-6 h-6 text-yellow-500" />,
        title: "Comedy Skits",
        description: "Hilarious sketches about daily life, relatable situations, and Indian family dynamics."
    },
    {
        icon: <Video className="w-6 h-6 text-red-500" />,
        title: "Trending Reels",
        description: "Short, snappy, and viral content that keeps you entertained in under 60 seconds."
    },
    {
        icon: <Users className="w-6 h-6 text-blue-500" />,
        title: "Family Fun",
        description: "Clean, wholesome entertainment that you can watch with your entire family."
    },
    {
        icon: <Camera className="w-6 h-6 text-purple-500" />,
        title: "Behind The Scenes",
        description: "Exclusive looks at how we make our videos and the bloopers you don't see."
    },
    {
        icon: <Star className="w-6 h-6 text-orange-500" />,
        title: "Fan Challenges",
        description: "Interactive videos where we take on challenges suggested by our subscribers."
    },
    {
        icon: <Music className="w-6 h-6 text-pink-500" />,
        title: "Music & Dance",
        description: "Grooving to the latest beats with our unique twist and energy."
    }
];

const About = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#0f0f0f] relative pb-12 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 font-semibold tracking-wide uppercase text-sm"
                    >
                        About The Channel
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-3 text-3xl sm:text-4xl font-bold text-white"
                    >
                        Entertainment for Everyone
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-400 text-lg"
                    >
                        From belly laughs to heartwarming moments, we cover it all.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 hover:bg-white/[0.07] transition-all group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;