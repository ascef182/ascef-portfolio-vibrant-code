
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Instagram, ArrowLeft, Shield, Cloud, Server } from "lucide-react";
import { Link } from "react-router-dom";

const CloudSecurityPortfolio = () => {
  // Estado para controlar animações na rolagem
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    about: false,
    expertise: false,
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
            <Avatar className="h-32 w-32 ring-4 ring-blue-500/30 pulse">
              <AvatarImage src="https://i.pravatar.cc/300?img=68" />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Especialista Cloud & Security</h1>
          <p className="text-xl text-gray-300 max-w-2xl text-center">
            Projetando infraestruturas seguras e escaláveis para o futuro digital
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
                Especialista em Cloud e Segurança com experiência em projetar, implementar e gerenciar 
                infraestruturas na nuvem seguras e de alta disponibilidade. Foco em soluções robustas
                que ajudam empresas a migrar e operar com confiança no ambiente cloud.
              </p>
              <p className="text-gray-300">
                Certificado nas principais plataformas de nuvem, com histórico comprovado 
                de implementações bem-sucedidas e otimização de custos em ambientes complexos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Certificações & Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS Certified Solutions Architect", 
                  "Azure Security Engineer", 
                  "GCP Professional Cloud Architect",
                  "Certified Kubernetes Admin",
                  "CISSP",
                  "Terraform",
                  "Docker",
                  "CI/CD"
                ].map((skill) => (
                  <span key={skill} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de Expertise */}
        <section 
          id="expertise" 
          className={`glass p-8 mb-12 transition-all duration-700 ${
            visibleSections.expertise ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Áreas de Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
              <Cloud className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-gray-300">
                Design e implementação de arquiteturas multi-cloud resilientes, escaláveis e otimizadas para custo.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
              <p className="text-gray-300">
                Estratégias de segurança abrangentes, implementação de controles e conformidade com regulamentações.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">DevSecOps</h3>
              <p className="text-gray-300">
                Integração de segurança em pipelines CI/CD, automação de infraestrutura e cultura DevOps.
              </p>
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
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Projetos & Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Migração Multi-Cloud",
                description: "Migração de infraestrutura legada para ambiente multi-cloud com AWS e Azure.",
                results: "Redução de 40% em custos operacionais e aumento de 99.99% de uptime.",
                tech: ["AWS", "Azure", "Terraform", "Kubernetes"]
              },
              {
                title: "Segurança Bancária na Nuvem",
                description: "Implementação de arquitetura Zero Trust para instituição financeira.",
                results: "Conformidade PCI-DSS e proteção avançada contra ameaças.",
                tech: ["GCP", "Vault", "IAM", "Security Monitoring"]
              },
              {
                title: "Pipeline DevSecOps",
                description: "Construção de pipeline CI/CD com segurança integrada para fintech.",
                results: "Redução de 70% no tempo de deployment e eliminação de vulnerabilidades críticas.",
                tech: ["GitLab CI", "SAST/DAST", "Container Security", "Compliance as Code"]
              },
              {
                title: "Disaster Recovery",
                description: "Estratégia de DR multi-região para empresa de e-commerce.",
                results: "RTO de 15 minutos e RPO de 5 minutos com failover automático.",
                tech: ["AWS Global Accelerator", "Multi-Region DB", "Route53", "CloudFormation"]
              }
            ].map((project, index) => (
              <Card key={index} className="glass border-none overflow-hidden hover:shadow-blue-500/20 hover:shadow-lg transition-all">
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-2">{project.description}</p>
                  <p className="text-blue-300 text-sm mb-3">{project.results}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-white/5 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
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
                    className="w-full bg-white/5 border-white/10 text-white rounded-md p-2 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Sua mensagem"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Enviar Mensagem</Button>
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

export default CloudSecurityPortfolio;
