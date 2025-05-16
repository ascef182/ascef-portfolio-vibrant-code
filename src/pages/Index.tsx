import CustomButton from "@/components/CustomButton";
import { useEffect, useState } from "react";
import { Github, Code, Award, Instagram, Linkedin, Smartphone as WhatsApp, UserCircle, UserPlus as PersonAdd, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);
  const { language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const flags = [
    { code: 'pt', emoji: '🇧🇷', label: 'Português' },
    { code: 'en', emoji: '🇺🇸', label: 'English' },
    { code: 'es', emoji: '🇪🇸', label: 'Español' },
    { code: 'it', emoji: '🇮🇹', label: 'Italiano' },
    { code: 'fr', emoji: '🇫🇷', label: 'Français' },
  ];
  
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
      
      {/* Seletor de idioma em card dropdown */}
      <div className="flex justify-center mb-4 mt-4">
        <div className="relative">
          <button
            className="flex items-center gap-2 px-3 py-1 bg-white rounded shadow text-black font-semibold min-w-[70px]"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-label="Selecionar idioma"
          >
            <span className="text-xl">{flags.find(f => f.code === language)?.emoji}</span>
            <span className="text-sm">{flags.find(f => f.code === language)?.label}</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-white rounded shadow z-10">
              {flags.map(flag => (
                <button
                  key={flag.code}
                  onClick={() => { setLanguage(flag.code as any); setDropdownOpen(false); }}
                  className={`flex items-center gap-2 w-full px-3 py-2 text-black hover:bg-gray-100 text-sm ${language === flag.code ? 'font-bold bg-gray-200' : ''}`}
                >
                  <span className="text-xl">{flag.emoji}</span>
                  <span>{flag.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Profile Card */}
      <div className="profile-container mb-12 fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="profile-card">
          <div className="front">
            <div className="card-top">
              <p className="card-top-para">Profile</p>
            </div>
            
            <UserCircle size={100} color="currentColor" />
            <p className="heading">Pâm Ascef</p>
            <p className="follow">Follow me for more...</p>
          </div>
          <div className="back">
            <p className="heading">Follow Me</p>
            
            <PersonAdd size={100} color="currentColor" />
            
            <div className="icons">
              <a href="https://github.com/ascef182?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Github size={32} color="currentColor" />
              </a>
              <a href="https://www.linkedin.com/in/pamelaascefcazarini" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Linkedin size={32} color="currentColor" />
              </a>
              <a href="https://wa.me/5535999816133" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <WhatsApp size={32} color="currentColor" />
              </a>
              <a href="mailto:ascefpam@gmail.com" className="hover:scale-110 transition-transform">
                <Mail size={32} color="currentColor" />
              </a>
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
          <CustomButton to="/frontend" label="Front-End " />
        </div>
        <div className="w-full fade-in" style={{ animationDelay: "0.6s" }}>
          <CustomButton to="/cloud-security" label="Cloud/Security " />
        </div>
      </div>
    </div>
  );
};

export default Index;
