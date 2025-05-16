import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetails {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Aqui você pode carregar os detalhes do projeto baseado no ID
  // Por enquanto, vamos usar dados mockados
  const project: ProjectDetails = {
    id: id || '1',
    title: 'Nome do Projeto',
    description: 'Descrição curta do projeto',
    longDescription: 'Descrição detalhada do projeto...',
    imageUrl: '/pam.jpeg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/seu-usuario/projeto',
    liveUrl: 'https://projeto-demo.com'
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white p-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-8 hover:text-gray-300 transition-colors"
      >
        <ArrowLeft size={20} />
        Voltar
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>

        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Sobre o Projeto</h2>
          <p className="text-gray-300">{project.longDescription}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Tecnologias Utilizadas</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[#1a1a1a] px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              Ver no GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] text-white px-6 py-2 rounded-md hover:bg-[#2a2a2a] transition-colors"
            >
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 