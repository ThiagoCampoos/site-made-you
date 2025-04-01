import React from 'react';
import { motion } from 'framer-motion';
import ParticipantCard from './ParticipantCard';

const participants = [
  {
    id: 1,
    name: "Ana Silva",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    voteUrl: "#"
  },
  {
    id: 2,
    name: "Carlos Santos",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80",
    voteUrl: "#"
  },
  {
    id: 3,
    name: "Julia Lima",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
    voteUrl: "#"
  },
  {
    id: 4,
    name: "Marco Oliveira",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
    voteUrl: "#"
  },
  {
    id: 5,
    name: "Patricia Costa",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80",
    voteUrl: "#"
  },
  {
    id: 6,
    name: "Roberto Dias",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    voteUrl: "#"
  }
];

const Gallery = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nossos Participantes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {participants.map((participant, index) => (
            <motion.div
              key={participant.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ParticipantCard {...participant} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;