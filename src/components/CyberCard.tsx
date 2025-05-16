import React from 'react';
import { Link } from 'react-router-dom';

interface CyberCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const CyberCard: React.FC<CyberCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link 
            to={projectUrl}
            className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            Ver projeto
          </Link>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default CyberCard; 