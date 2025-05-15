
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Instagram, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FrontendPortfolio = () => {
  // Estado para controlar animações na rolagem
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    about: false,
    education: false,
    projects: false,
    contact: false,
  });
  
  // Observer para detectar elementos visíveis
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observar todas as seções
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white pb-16">
      {/* Botão de voltar */}
      <div className="fixed top-6 left-6 z-10">
        <Link to="/">
          <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
            <ArrowLeft size={20} /> Voltar
          </Button>
        </Link>
      </div>
      
      {/* Hero Section */}
      <div className="container mx-auto pt-20 px-4">
        <div className="flex flex-col items-center justify-center py-16">
          <div className="relative mb-8">
            <Avatar className="h-32 w-32 ring-4 ring-purple-500/30 pulse">
              <AvatarImage src="https://i.pravatar.cc/300" />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Desenvolvedor Front-End</h1>
          <p className="text-xl text-gray-300 max-w-2xl text-center">
            Criando experiências digitais com foco em design e performance
          </p>
        </div>

        {/* Sobre Mim */}
        <section 
          id="about" 
          className={`glass p-8 mb-12 transition-all duration-700 ${
            visibleSections.about ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-lg">
                Desenvolvedor Front-End apaixonado por criar interfaces intuitivas e responsivas. 
                Com experiência em desenvolvimento web moderno, tenho criado experiências digitais 
                que combinam estética e funcionalidade.
              </p>
              <p className="text-gray-300">
                Focado em soluções que priorizam a experiência do usuário, 
                sempre buscando aprender novas tecnologias e metodologias para 
                aprimorar meu trabalho.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Next.js", "Redux", "Git"].map((skill) => (
                  <span key={skill} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Educação */}
        <section 
          id="education" 
          className={`glass p-8 mb-12 transition-all duration-700 ${
            visibleSections.education ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Educação</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Bacharelado em Ciência da Computação</h3>
              <p className="text-gray-300">Universidade Federal, 2018-2022</p>
              <p className="mt-2">Foco em desenvolvimento de software e interfaces de usuário.</p>
            </div>
            
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Bootcamp Full Stack Development</h3>
              <p className="text-gray-300">Digital Academy, 2021</p>
              <p className="mt-2">Projeto final premiado com menção honrosa.</p>
            </div>
            
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Certificação React Developer</h3>
              <p className="text-gray-300">Meta, 2023</p>
              <p className="mt-2">Especialização em desenvolvimento com React e ecossistema moderno.</p>
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section 
          id="projects" 
          className={`mb-12 transition-all duration-700 ${
            visibleSections.projects ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-commerce Dashboard",
                description: "Painel administrativo para lojas virtuais com análise de dados.",
                tech: ["React", "Redux", "Recharts"],
                link: "#"
              },
              {
                title: "App de Clima",
                description: "Aplicação de previsão do tempo com geolocalização.",
                tech: ["React", "TypeScript", "TailwindCSS"],
                link: "#"
              },
              {
                title: "Portfolio Hub",
                description: "Plataforma para criação de portfólios para criativos.",
                tech: ["Next.js", "MongoDB", "AWS"],
                link: "#"
              },
            ].map((project, index) => (
              <Card key={index} className="glass border-none overflow-hidden hover:shadow-purple-500/20 hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-white/5 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver projeto
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section 
          id="contact" 
          className={`glass p-8 transition-all duration-700 ${
            visibleSections.contact ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Contato</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Nome</label>
                  <Input className="bg-white/5 border-white/10 text-white" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <Input className="bg-white/5 border-white/10 text-white" placeholder="seu@email.com" type="email" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Mensagem</label>
                  <textarea 
                    className="w-full bg-white/5 border-white/10 text-white rounded-md p-2 h-32 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    placeholder="Sua mensagem"
                  />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">Enviar Mensagem</Button>
              </form>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Redes Sociais</h3>
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FrontendPortfolio;
