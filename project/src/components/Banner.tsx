import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Crown } from 'lucide-react';

interface BannerProps {
  onLearnMore: () => void;
}

const Banner: React.FC<BannerProps> = ({ onLearnMore }) => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const title = titleRef.current;

    if (banner && title) {
      gsap.fromTo(banner,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(title,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, delay: 0.5, ease: "back.out" }
      );
    }
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center mb-6">
          <Crown size={64} className="text-yellow-400 animate-pulse" />
        </div>
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-white mb-8"
        >
          Fashion Week 2024
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12">
          Onde a moda encontra o futuro
        </p>
        <button
          onClick={onLearnMore}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full transform transition-all hover:scale-105 active:scale-95"
        >
          Saiba Mais
        </button>
      </div>
    </div>
  );
};

export default Banner;