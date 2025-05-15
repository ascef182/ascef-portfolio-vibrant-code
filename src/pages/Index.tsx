
import CustomButton from "@/components/CustomButton";
import { useEffect, useState } from "react";

const Index = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);
  
  // Criação das partículas de fundo
  useEffect(() => {
    const particlesArray = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      particlesArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 1 + 0.2
      });
    }
    
    setParticles(particlesArray);
    
    const moveParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y + particle.speed,
        x: particle.x + Math.sin(particle.y * 0.01) * 0.5,
        ...(particle.y > window.innerHeight ? { y: -10 } : {})
      })));
    };
    
    const interval = setInterval(moveParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#080808] overflow-hidden">
      {/* Partículas de fundo */}
      <div className="particles">
        {particles.map(particle => (
          <div 
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.size / 3
            }}
          />
        ))}
      </div>
      
      {/* Conteúdo principal */}
      <div className="text-center mb-12 fade-in" style={{ animationDelay: "0.2s" }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">Meu Portfólio</h1>
        <p className="text-lg md:text-xl text-gray-300">Escolha uma área para explorar</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-3xl px-6">
        <div className="w-full fade-in" style={{ animationDelay: "0.4s" }}>
          <CustomButton to="/frontend" label="Front-End Portfolio" />
        </div>
        <div className="w-full fade-in" style={{ animationDelay: "0.6s" }}>
          <CustomButton to="/cloud-security" label="Cloud/Security Portfolio" />
        </div>
      </div>
    </div>
  );
};

export default Index;
