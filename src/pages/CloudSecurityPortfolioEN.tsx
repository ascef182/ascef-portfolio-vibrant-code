import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Linkedin, Instagram, ArrowLeft, Shield, Cloud, Server } from "lucide-react";
import { Link } from "react-router-dom";

const CloudSecurityPortfolioEN = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({
    about: false,
    expertise: false,
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
            <Avatar className="h-32 w-32 ring-4 ring-blue-500/30 pulse">
              <AvatarImage src="/pam.jpeg" className="object-cover w-full h-full" />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Cloud Security Engineer</h1>
          <p className="text-xl text-gray-300 max-w-2xl text-center">
            Designing and implementing secure cloud infrastructures with a focus on DevSecOps and automation
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
                Cloud and Security Specialist with experience in designing, implementing, and managing 
                secure and highly available cloud infrastructures. Focus on robust solutions
                that help companies migrate and operate with confidence in the cloud environment.
              </p>
              <p className="text-gray-300">
                Certified in major cloud platforms, with a history 
                of successful implementations and cost optimization in complex environments.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Certifications & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS", 
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

        <section 
          id="expertise" 
          className={`glass p-8 mb-12 transition-all duration-700 ${
            visibleSections.expertise ? "fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
              <Cloud className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-gray-300">
                Design and implementation of resilient, scalable, and cost-optimized multi-cloud architectures.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
              <p className="text-gray-300">
                Comprehensive security strategies, control implementation, and regulatory compliance.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center text-center">
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">DevSecOps</h3>
              <p className="text-gray-300">
                Security integration in CI/CD pipelines, infrastructure automation, and DevOps culture.
              </p>
            </div>
          </div>
        </section>

        <section 
          id="projects" 
          className={`mb-12 transition-all duration-700 fade-in`}
        >
          <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "access-firewall-create-rule",
                title: "Access a firewall and create a rule",
                description: "Project demonstrating advanced firewall access and rule creation practices in cloud environments.",
                tech: ["Firewall", "Cloud Security", "Network Security"],
                imageUrl: "/firewall.png",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/firewall"
              },
              {
                id: "chronicle-siem-intro-single-event",
                title: "Chronicle SIEM Introduction & Single Event Rules",
                description: "Implementation and configuration of Chronicle SIEM for real-time security event monitoring.",
                tech: ["SIEM", "Security Monitoring", "Event Analysis"],
                imageUrl: "/chronicle.jpg",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/chronicle"
              },
              {
                id: "chronicle-siem-outcomes-functions",
                title: "Chronicle SIEM Outcomes & Functions",
                description: "Advanced analysis of results and implementation of custom functions in Chronicle SIEM.",
                tech: ["SIEM", "Data Analysis", "Security Automation"],
                imageUrl: "/siem.png",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/chronicle-functions"
              },
              {
                id: "change-firewall-terraform-cloudshell",
                title: "Change firewall rules using Terraform and Cloud Shell",
                description: "Automation of firewall rules using Terraform and Cloud Shell for infrastructure as code management.",
                tech: ["Terraform", "Cloud Shell", "IaC", "Firewall"],
                imageUrl: "/terraform.jpeg",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/terraform-firewall"
              },
              {
                id: "continuous-delivery-gcloud-deploy",
                title: "Continuous Delivery with Google Cloud Deploy",
                description: "Implementation of continuous delivery pipeline using Google Cloud Deploy for deployment automation.",
                tech: ["CI/CD", "Google Cloud", "DevOps", "Automation"],
                imageUrl: "/cicd.jpg",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/continuous-delivery"
              },
              {
                id: "create-role-gcloud-iam",
                title: "Create a role in Google Cloud IAM",
                description: "Advanced identity and access management in Google Cloud IAM with custom role implementation.",
                tech: ["IAM", "Google Cloud", "Security", "Access Control"],
                imageUrl: "/iam.png",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/iam-roles"
              },
              {
                id: "diff-normal-incident",
                title: "Determine the difference between normal activity and an incident",
                description: "Security incident detection and analysis system with differentiation between normal and suspicious activities.",
                tech: ["Incident Response", "Security Analysis", "Threat Detection"],
                imageUrl: "/incident.png",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/incident-detection"
              },
              {
                id: "gcloud-fundamentals-storage-sql",
                title: "Google Cloud Fundamentals: Storage and Cloud SQL",
                description: "Implementation of secure storage and database solutions using Google Cloud Storage and Cloud SQL.",
                tech: ["Cloud Storage", "Cloud SQL", "Database Security"],
                imageUrl: "/storage.jpg",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/cloud-storage-sql"
              },
              {
                id: "identify-vulnerabilities-remediation",
                title: "Identify vulnerabilities and remediation techniques",
                description: "Vulnerability identification system and implementation of automated remediation techniques.",
                tech: ["Vulnerability Assessment", "Security Remediation", "Automation"],
                imageUrl: "/remediation.png",
                githubUrl: "https://github.com/ascef182/cloud-security-projects",
                liveUrl: "https://cloud-security-demo.vercel.app/vulnerability-management"
              }
            ].map((project) => (
              <Card key={project.id} className="glass border-none overflow-hidden hover:shadow-blue-500/20 hover:shadow-lg transition-all h-[500px] flex flex-col">
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
                      className="text-white underline text-sm flex items-center gap-1 hover:text-blue-300"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline text-sm flex items-center gap-1 hover:text-blue-300"
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
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <Input className="bg-white/5 border-white/10 text-white" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <Input className="bg-white/5 border-white/10 text-white" placeholder="your@email.com" type="email" />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    className="w-full bg-white/5 border-white/10 text-white rounded-md p-2 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Your message"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Send Message</Button>
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

export default CloudSecurityPortfolioEN; 