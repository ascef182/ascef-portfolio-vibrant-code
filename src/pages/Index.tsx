
import CustomButton from "@/components/CustomButton";
import { useEffect, useState } from "react";
import { Github, Code, Award, Instagram, Twitter, Facebook, Smartphone as WhatsApp, PersonCircle, UserPlus as PersonAdd } from "lucide-react";

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
      
      {/* Profile Card */}
      <div className="profile-container mb-12 fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="profile-card">
          <div className="front">
            <div className="card-top">
              <p className="card-top-para">Profile</p>
            </div>
            
            <PersonCircle size={100} color="currentColor" />
            <p className="heading">Front Card</p>
            <p className="follow">Follow me for more...</p>
          </div>
          <div className="back">
            <p className="heading">Follow Me</p>
            
            <PersonAdd size={100} color="currentColor" />
            
            <div className="icons">
              <Instagram size={32} color="currentColor" />
              <Twitter size={32} color="currentColor" />
              <WhatsApp size={32} color="currentColor" />
              <Facebook size={32} color="currentColor" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Glass Cards */}
      <div className="glass-container mb-8 fade-in" style={{ animationDelay: "0.3s" }}>
        <div data-text="Github" style={{ transform: "rotate(-15deg)" }} className="glass-card">
          <Github className="text-white" size={40} />
        </div>
        <div data-text="Code" style={{ transform: "rotate(5deg)" }} className="glass-card">
          <Code className="text-white" size={40} />
        </div>
        <div data-text="Earn" style={{ transform: "rotate(25deg)" }} className="glass-card">
          <Award className="text-white" size={40} />
        </div>
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
