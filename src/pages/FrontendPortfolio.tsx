import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Instagram, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/useTranslation";

const FrontendPortfolio = () => {
  // Estado para controlar animações na rolagem
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    about: false,
    education: false,
    projects: false,
    contact: false,
  });
  
  const t = useTranslation();
  
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
              <AvatarImage src="/pam.jpeg" className="object-cover w-full h-full" />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t.frontend.hero}</h1>
          <p className="text-xl text-gray-300 max-w-2xl text-center">
            {t.frontend.heroDesc}
          </p>
        </div>

        {/* Sobre Mim */}
        <section 
          id="about" 
          className={`glass p-8 mb-12 transition-all duration-700 ${
            visibleSections.about ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">{t.frontend.about}</h2>
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
              <h3 className="text-xl font-semibold mb-3">{t.frontend.skills}</h3>
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
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">{t.frontend.education}</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Bacharelado em Tecnologia em Gestão Ambiental</h3>
              <p className="text-gray-300">Universidade Federal de Viçosa- Campus Florestal, 2016-2019</p>
              <p className="mt-2">Iniciação em programação, recursos naturais, sistemas agroflorestais, Leis ambientais, técnico em segurança do trabalho</p>
            </div>
            
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Full Stack Java Developer</h3>
              <p className="text-gray-300">Faculdade Vincit, 2022-2023</p>
              <p className="mt-2">Java, Javascript, SQL, Angular, Html, Css, React, Kubernet, Docker, Git, GitHub, Nuvem(GCP, Azure, AWS)</p>
            </div>
            
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Google Cloud Cybersecurity</h3>
              <p className="text-gray-300">CloudBoost Skills, 2025</p>
              <p className="mt-2">Linux para nuvem, Terraform, VPC, TCP, Firewall, SSH, Docker, CI/CD, Resposta a Incidentes, Cloud Security, BigQuery, Auditorias, Leis de conformidade, frameworks</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Ethical Hacking</h3>
              <p className="text-gray-300">Cisco NetAcademy, 2025 (em andamento)</p>
              <p className="mt-2">Comandos Linux, Vulnerabilidades, OSAP 10, Mitre ATTACK, Nmap, Metasploit, Wireshark, SQL Injection, XSS, CSRF, Phishing, Redes, Segurança da Informação, Cibersegurança</p>
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
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">{t.frontend.projects}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "mcdonalds-checkout",
                title: "McDonald's Checkout",
                description: "Sistema de checkout moderno e intuitivo para o McDonald's, com interface responsiva e experiência de usuário otimizada.",
                tech: ["React", "TypeScript", "TailwindCSS", "Next.js"],
                imageUrl: "/mcdonalds.png",
                githubUrl: "https://github.com/ascef182/mcdonalds_0",
                liveUrl: "https://fullstackweek-donalds.vercel.app/fsw-donalds"
              },
              {
                id: "coffee-trading",
                title: "Coffee Trading Platform",
                description: "Plataforma multilíngue para exportação de café, com suporte a múltiplos idiomas e design moderno.",
                tech: ["React", "TypeScript", "i18n", "TailwindCSS"],
                imageUrl: "/cazarini.png",
                githubUrl: "https://github.com/ascef182/Trading-coffe-beans",
                liveUrl: "https://trading-coffe-beans.vercel.app/"
              },
              {
                id: "vigilant-sentinel",
                title: "Vigilant Sentinel Eye",
                description: "Plataforma de detecção de ameaças cibernéticas com IA, integração com AlienVault OTX e VirusTotal, e dashboard interativo.",
                tech: ["React", "TypeScript", "AI Integration", "Security APIs"],
                imageUrl: "/sentinel.png",
                githubUrl: "https://github.com/ascef182/vigilant-sentinel-eye",
                liveUrl: "https://vigilant-sentinel-eye.vercel.app"
              },
              {
                id: "finance-ai",
                title: "Finance.ai",
                description: "Plataforma de gerenciamento financeiro pessoal com IA, gerando relatórios mensais e sugestões personalizadas.",
                tech: ["React", "TypeScript", "AI Integration", "Data Visualization"],
                imageUrl: "/financeai.png",
                githubUrl: "https://github.com/ascef182/finance-ai",
                liveUrl: "https://finance-ai.vercel.app"
              }
            ].map((project) => (
              <Card key={project.id} className="glass border-none overflow-hidden hover:shadow-purple-500/20 hover:shadow-lg transition-all h-[500px] flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-white text-xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <div className="w-full h-48 bg-[#181818] flex items-center justify-center rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <p className="text-white mb-4 text-sm line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-white/10 px-2 py-1 rounded text-xs text-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-4">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline text-sm flex items-center gap-1 hover:text-purple-300"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline text-sm flex items-center gap-1 hover:text-purple-300"
                    >
                      Demo
                    </a>
                  </div>
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
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">{t.frontend.contact}</h2>
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
                <Button className="bg-purple-600 hover:bg-purple-700">{t.frontend.sendMessage}</Button>
              </form>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Redes Sociais</h3>
              <div className="space-y-4">
              <a 
                  href="https://www.linkedin.com/in/pamelaascefcazarini/" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/ascef182?tab=repositories" 
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                  <span>GitHub</span>
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
