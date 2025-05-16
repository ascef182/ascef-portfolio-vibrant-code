import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Instagram, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FrontendPortfolioEN = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    about: false,
    education: false,
    projects: false,
    contact: false,
  });
  
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

  // Função para envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('https://formspree.io/f/xvgalzkq', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Error sending message.');
    }
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white pb-16">
      <div className="fixed top-6 left-6 z-10">
        <Link to="/">
          <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-white/10">
            <ArrowLeft size={20} /> Back
          </Button>
        </Link>
      </div>
      
      <div className="container mx-auto pt-20 px-4">
        <div className="flex flex-col items-center justify-center py-16">
          <div className="relative mb-8">
            <Avatar className="h-32 w-32 ring-4 ring-purple-500/30 pulse">
              <AvatarImage src="/pam.jpeg" className="object-cover w-full h-full" />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frontend Developer</h1>
          <p className="text-xl text-gray-300 max-w-2xl text-center">
            Creating modern, responsive, and user-friendly web applications
          </p>
        </div>

        <section 
          id="about" 
          className={`glass p-8 mb-12 transition-all duration-700 ${
            visibleSections.about ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-lg">
                Frontend Developer passionate about creating intuitive and responsive interfaces. 
                With experience in modern web development, I create digital experiences 
                that combine aesthetics and functionality.
              </p>
              <p className="text-gray-300">
                Focused on solutions that prioritize user experience, 
                always seeking to learn new technologies and methodologies to 
                improve my work.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
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

        <section 
          id="education" 
          className={`glass p-8 mb-12 transition-all duration-700 ${
            visibleSections.education ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Education</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Bachelor's in Environmental Technology Management</h3>
              <p className="text-gray-300">Federal University of Viçosa - Florestal Campus, 2016-2019</p>
              <p className="mt-2">Introduction to programming, natural resources, agroforestry systems, Environmental Laws, occupational safety technician</p>
            </div>
            
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Full Stack Java Developer</h3>
              <p className="text-gray-300">Vincit College, 2022-2023</p>
              <p className="mt-2">Java, JavaScript, SQL, Angular, HTML, CSS, React, Kubernetes, Docker, Git, GitHub, Cloud (GCP, Azure, AWS)</p>
            </div>
            
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-xl font-semibold">Google Cloud Cybersecurity</h3>
              <p className="text-gray-300">CloudBoost Skills, 2025</p>
              <p className="mt-2">Linux for cloud, Terraform, VPC, TCP, Firewall, SSH, Docker, CI/CD, Incident Response, Cloud Security, BigQuery, Audits, Compliance Laws, frameworks</p>
            </div>
          </div>
        </section>

        <section 
          id="projects" 
          className={`mb-12 transition-all duration-700 ${
            visibleSections.projects ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "mcdonalds-checkout",
                title: "McDonald's Checkout",
                description: "Modern and intuitive checkout system for McDonald's, with responsive interface and optimized user experience.",
                tech: ["React", "TypeScript", "TailwindCSS", "Next.js"],
                imageUrl: "/mcdonalds.png",
                githubUrl: "https://github.com/ascef182/mcdonalds_0",
                liveUrl: "https://fullstackweek-donalds.vercel.app/fsw-donalds"
              },
              {
                id: "coffee-trading",
                title: "Coffee Trading Platform",
                description: "Multilingual platform for coffee export, with support for multiple languages and modern design.",
                tech: ["React", "TypeScript", "i18n", "TailwindCSS"],
                imageUrl: "/cazarini.png",
                githubUrl: "https://github.com/ascef182/Trading-coffe-beans",
                liveUrl: "https://trading-coffe-beans.vercel.app/"
              },
              {
                id: "vigilant-sentinel",
                title: "Vigilant Sentinel Eye",
                description: "AI-powered cybersecurity threat detection platform with AlienVault OTX and VirusTotal integration, and interactive dashboard.",
                tech: ["React", "TypeScript", "AI Integration", "Security APIs"],
                imageUrl: "/sentinel.png",
                githubUrl: "https://github.com/ascef182/vigilant-sentinel-eye",
                liveUrl: "https://vigilant-sentinel-eye.vercel.app"
              },
              {
                id: "finance-ai",
                title: "Finance.ai",
                description: "AI-powered personal finance management platform generating monthly reports and personalized suggestions.",
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

        <section 
          id="contact" 
          className={`glass p-8 transition-all duration-700 ${
            visibleSections.contact ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <Input className="bg-white/5 border-white/10 text-white" placeholder="Your name" name="name" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <Input className="bg-white/5 border-white/10 text-white" placeholder="your@email.com" type="email" name="email" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    className="w-full bg-white/5 border-white/10 text-white rounded-md p-2 h-32 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    placeholder="Your message"
                    name="message"
                  />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700" type="submit">Send Message</Button>
              </form>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Social Media</h3>
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

export default FrontendPortfolioEN; 