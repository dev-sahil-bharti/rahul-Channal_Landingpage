import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Eye, Heart } from 'lucide-react';
import { assets } from "../assets/assets";

const Videos = () => {
    const [_, Thum1, Thum2, Thum3, Thum4] = assets;

    const videos = [
        {
            title: "Gabbar Ki Diwali | Sholay | Jai Veeru Basanti | #SholayStyle #diwalispecial",
            thumbnail: Thum1,
            views: "1.2M",
            likes: "45K",
            category: "Comedy",
            link: "https://www.youtube.com/watch?v=Ygb8S3mZPA8"
        },
        {
            title: "15 अगस्त स्पेशल देसी कॉमेडी | Independence Day Funny Video 2025 | Village School Comedy",
            thumbnail: assets.aug15,
            views: "890K",
            likes: "32K",
            category: "Comedy",
            link: "https://www.youtube.com/watch?v=Xf3W5vQOAhU&t=76s"
        },
        {
            title: "ज्ञानू का अपहरण 😂 | Ramu | Gyanu | Pappu | #MMR #Comedy #funnyvideo",
            thumbnail: assets.gyanuAp,
            views: "2.5M",
            likes: "120K",
            category: "School Life",
            link: "https://www.youtube.com/watch?v=evlB-_Cm7Ew&t=5s"
        },
        {
            title: "Bhola Mantri Ka Chunavi Jhatka || Part 1|| #Funyvideo #Pradhang",
            thumbnail: assets.chunavi1,
            views: "2.5M",
            likes: "120K",
            category: "School Life",
            link: "https://www.youtube.com/watch?v=P-GSRFqpaqc&t=40s"
        },
        {
            title: "Chunavi Jhatka | Part2 | भोला मंत्री | #Pradhanag #ComedyVideo",
            thumbnail: assets.chunavi2,
            views: "500K",
            likes: "15K",
            category: "Travel",
            link: "https://www.youtube.com/watch?v=Hg8Pq3n5Qik&t=67s"
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[#0f0f0f] relative pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-5xl font-bold text-white mb-4"
                    >
                        Latest Viral Videos
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Check out our most popular reels and funny moments. Warning: Uncontrollable laughter ahead!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {videos.map((video, index) => (
                        <motion.a
                            key={index}
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 hover:border-red-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer block"
                        >
                            {/* Thumbnail Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                        <Play className="w-6 h-6 text-white fill-current ml-1" />
                                    </div>
                                </div>

                                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium text-white flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {video.duration}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="text-xs font-medium text-red-500 mb-2 uppercase tracking-wide">
                                    {video.category}
                                </div>
                                <h3 className="text-white font-bold text-lg leading-tight mb-3 line-clamp-2">
                                    {video.title}
                                </h3>

                                <div className="flex items-center justify-between text-gray-400 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Eye className="w-4 h-4" />
                                        <span>{video.views}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Heart className="w-4 h-4" />
                                        <span>{video.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Videos;