import React from 'react';
import { motion } from 'framer-motion';

interface ParticipantCardProps {
  name: string;
  image: string;
  voteUrl: string;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ name, image, voteUrl }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <a href={voteUrl} target="_blank" rel="noopener noreferrer">
        <div className="aspect-w-1 aspect-h-1 relative">
          <img
            src={image}
            alt={name}
            className="w-full h-96 object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-sm text-gray-200 mt-2">Clique para votar</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ParticipantCard;