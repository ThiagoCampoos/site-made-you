import React, { useEffect, useRef } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Description = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        }
      );
    }
  }, [inView]);

  return (
    <div ref={ref} className="bg-white py-20 px-4">
      <div ref={textRef} className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre o Evento</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Data</h3>
            <p>15-20 Junho 2024</p>
          </div>
          
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Local</h3>
            <p>Centro de Convenções</p>
          </div>
          
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold mb-2">Participantes</h3>
            <p>50+ Designers</p>
          </div>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Prepare-se para uma experiência única onde a criatividade encontra a inovação. 
          Nossa Fashion Week 2024 reúne os mais talentosos designers do país em uma 
          celebração da moda contemporânea.
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          Com desfiles exclusivos, workshops inspiradores e networking de alto nível, 
          este evento promete ser um marco na história da moda brasileira.
        </p>
      </div>
    </div>
  );
};

export default Description;