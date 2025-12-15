import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Youtube, ArrowRight, Video, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Home = () => {
  const [LogoProfile, Thum1, Thum2, Thum3, Thum4] = assets;
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Daily Dose of Laughter & Fun",
      subtitle: "Welcome to Mauj Masti Reel! Join our community for the best funny skits, family entertainment, and trending shorts.",
      ctaText: "Watch Latest",
      ctaLink: "/videos",
      ctaIcon: <Play className="w-5 h-5 fill-current" />,
      visual: "collage"
    },
    {
      id: 1,
      title: "Trending Viral Videos",
      subtitle: "Don't miss out on our most popular reels hitting millions of views. Comedy, relatable moments, and more.",
      ctaText: "Browse Videos",
      ctaLink: "/videos",
      ctaIcon: <Video className="w-5 h-5" />,
      image: Thum1
    },
    {
      id: 2,
      title: "Meet the Team",
      subtitle: "The creative minds, actors, and producers working hard to bring a smile to your face.",
      ctaText: "Our Team",
      ctaLink: "/team",
      ctaIcon: <Users className="w-5 h-5" />,
      image: Thum3
    },
    {
      id: 3,
      title: "Talk to Us",
      subtitle: "Have a suggestion for a video? Want to collaborate? We'd love to hear from you!",
      ctaText: "Contact Us",
      ctaLink: "/contact",
      ctaIcon: <MessageSquare className="w-5 h-5" />,
      image: Thum2
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative w-full min-h-screen pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          <div key={currentSlide} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 min-h-[600px]">
            <motion.div
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-sm font-medium text-red-400">Mauj Masti Reel</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="https://www.youtube.com/@rahulkumarmmr" target="_blank" rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-red-500/25 flex items-center justify-center gap-2 group"
                >
                  <Youtube className="w-5 h-5" />
                  Subscribe Channel
                </a>
                <Link
                  to={slides[currentSlide].ctaLink}
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  {slides[currentSlide].ctaIcon}
                  {slides[currentSlide].ctaText}
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1 w-full max-w-[500px] lg:max-w-none relative flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              {slides[currentSlide].visual === 'collage' ? (
                <div className="relative z-10 grid grid-cols-2 gap-4 perspective-1000">
                  <div className="space-y-4 pt-12">
                    <img src={Thum1} className="w-full rounded-xl aspect-video object-cover shadow-2xl" />
                    <img src={Thum3} className="w-full rounded-xl aspect-video object-cover shadow-2xl" />
                  </div>
                  <div className="space-y-4">
                    <img src={Thum2} className="w-full rounded-xl aspect-video object-cover shadow-2xl" />
                    <img src={Thum4} className="w-full rounded-xl aspect-video object-cover shadow-2xl" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a1a1a] p-4 rounded-full shadow-2xl border-4 border-[#0f0f0f]">
                    <img src={LogoProfile} className="w-20 h-20 rounded-full border-2 border-red-500" />
                  </div>
                </div>
              ) : (
                <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/10">
                  <img
                    src={slides[currentSlide].image}
                    alt="Feature"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
              )}
            </motion.div>
          </div>
        </AnimatePresence>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-red-600 w-8' : 'bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
