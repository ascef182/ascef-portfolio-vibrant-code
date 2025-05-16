import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Instagram, ArrowLeft, Shield, Cloud, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/useTranslation";

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
  
  const t = useTranslation();
  
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
              <AvatarImage src="/pam.jpeg" className="object-cover w-full h-full" />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t.cloud.hero}</h1>
          <p className="text-xl text-gray-300 max-w-2xl text-center">
            {t.cloud.heroDesc}
          </p>
        </div>

        {/* Sobre Mim */}
        <section 
          id="about" 
          className={`glass p-8 mb-12 transition-all duration-700 ${
            visibleSections.about ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">{t.cloud.about}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-lg">
                Especialista em Cloud e Segurança com experiência em projetar, implementar e gerenciar 
                infraestruturas na nuvem seguras e de alta disponibilidade. Foco em soluções robustas
                que ajudam empresas a migrar e operar com confiança no ambiente cloud.
              </p>
              <p className="text-gray-300">
                Certificado nas principais plataformas de nuvem, com histórico 
                de implementações bem-sucedidas e otimização de custos em ambientes complexos.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Certificações & Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS ", 
                  "Azure", 
                  "GCP Cloud Security",
                  "Terraform",
                  "Docker",
                  "CI/CD",
                  "Linux",
                  "Firewall",
                  "SSH",
                  "VPC",
                  "TCP",
                  "BigQuery",
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
          className={`mb-12 transition-all duration-700 fade-in`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">{t.cloud.projects}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "access-firewall-create-rule",
                title: "Access a firewall and create a rule",
                description: "Projeto de acesso e criação de regras em firewall, demonstrando práticas avançadas de segurança em ambientes cloud.",
                tech: ["Firewall", "Cloud Security", "Network Security"],
                imageUrl: "/firewall.png",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/firewall"
              },
              {
                id: "chronicle-siem-intro-single-event",
                title: "Chronicle SIEM Introduction & Single Event Rules",
                description: "Implementação e configuração do Chronicle SIEM para monitoramento de eventos de segurança em tempo real.",
                tech: ["SIEM", "Security Monitoring", "Event Analysis"],
                imageUrl: "/chronicle.jpg",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/chronicle"
              },
              {
                id: "chronicle-siem-outcomes-functions",
                title: "Chronicle SIEM Outcomes & Functions",
                description: "Análise avançada de resultados e implementação de funções personalizadas no Chronicle SIEM.",
                tech: ["SIEM", "Data Analysis", "Security Automation"],
                imageUrl: "/siem.png",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/chronicle-functions"
              },
              {
                id: "change-firewall-terraform-cloudshell",
                title: "Change firewall rules using Terraform and Cloud Shell",
                description: "Automação de regras de firewall utilizando Terraform e Cloud Shell para gerenciamento de infraestrutura como código.",
                tech: ["Terraform", "Cloud Shell", "IaC", "Firewall"],
                imageUrl: "/terraform.jpeg",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/terraform-firewall"
              },
              {
                id: "continuous-delivery-gcloud-deploy",
                title: "Continuous Delivery with Google Cloud Deploy",
                description: "Implementação de pipeline de entrega contínua utilizando Google Cloud Deploy para automação de deployments.",
                tech: ["CI/CD", "Google Cloud", "DevOps", "Automation"],
                imageUrl: "/cicd.jpg",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/continuous-delivery"
              },
              {
                id: "create-role-gcloud-iam",
                title: "Create a role in Google Cloud IAM",
                description: "Gerenciamento avançado de identidades e acessos no Google Cloud IAM com implementação de roles personalizadas.",
                tech: ["IAM", "Google Cloud", "Security", "Access Control"],
                imageUrl: "/iam.png",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/iam-roles"
              },
              {
                id: "diff-normal-incident",
                title: "Determine the difference between normal activity and an incident",
                description: "Sistema de detecção e análise de incidentes de segurança com diferenciação entre atividades normais e suspeitas.",
                tech: ["Incident Response", "Security Analysis", "Threat Detection"],
                imageUrl: "/incident.png",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/incident-detection"
              },
              {
                id: "gcloud-fundamentals-storage-sql",
                title: "Google Cloud Fundamentals: Storage and Cloud SQL",
                description: "Implementação de soluções de armazenamento e banco de dados seguros utilizando Google Cloud Storage e Cloud SQL.",
                tech: ["Cloud Storage", "Cloud SQL", "Database Security"],
                imageUrl: "/storage.jpg",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/cloud-storage-sql"
              },
              {
                id: "identify-vulnerabilities-remediation",
                title: "Identify vulnerabilities and remediation techniques",
                description: "Sistema de identificação de vulnerabilidades e implementação de técnicas de remediação automatizadas.",
                tech: ["Vulnerability Assessment", "Security Remediation", "Automation"],
                imageUrl: "/remediation.png",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/vulnerability-management"
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
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">{t.cloud.contact}</h2>
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

export default CloudSecurityPortfolio;
