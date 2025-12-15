import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Team = () => {
    // Order: [LogoProfile, Thum1, Thum2, rahulProfile, sarnesh, shivaji, gyanuAp, chunavi1, chunavi2, aug15]
    const [
        LogoProfile,
        Thum1,
        Thum2,
        rahulProfile,
        sarnesh,
        shivaji,
        gyanuAp,
        chunavi1,
        chunavi2,
        aug15
    ] = assets;

    const teamMembers = [
        {
            name: "Rahul Kumar (CEO)",
            image: rahulProfile,
            role: "Producer, Director, Actor, Editor, Writer"
        },
        {
            name: "Shiva Ji",
            image: shivaji,
            role: "Actor"
        },
        {
            name: "Sarnesh Kumar",
            image: sarnesh,
            role: "Actor"
        },
        {
            name: "Aman Kumar",
            image: Thum2, // Placeholder
            role: "Actor"
        },
        {
            name: "Prince Kumar",
            image: Thum2, // Placeholder
            role: "Actor"
        },
        {
            name: "Ramu Kumar",
            image: Thum2, // Placeholder
            role: "Actor"
        }
    ];

    // Need to import Thum4 or define it if it's not in the destructured list yet.
    // Looking at assets.js, Thum4 was removed/not exported?
    // Let's re-read assets.js content to be sure about indices.
    // assets.js:
    // [LogoProfile, Thum1, Thum2, rahulProfile, sarnesh, shivaji, gyanuAp, chunavi1, chunavi2, aug15]
    // Thum3 and Thum4 were removed. I will use Thum2 as a fallback for now.

    return (
        <div className="pt-24 min-h-screen bg-[#0f0f0f] relative pb-12 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
                        Meet The Team
                    </h2>
                    <p className="text-xl text-gray-400">
                        The creative minds behind Mauj Masti Reel
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl relative hover:bg-white/[0.08] transition-colors group text-center"
                        >
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-red-500/50 transition-colors">
                                <img
                                    src={member.image || Thum2}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                            <p className="text-gray-400 text-sm font-medium uppercase tracking-wide">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;