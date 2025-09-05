import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Zap, Shield, Award } from "lucide-react";
import oscarHeadshot from "@/assets/oscar-garcia-headshot.jpg";

const Index = () => {
  const skills = [
    "Solidity", "Rust", "Move", "Go", "TypeScript",
    "Hardhat", "Foundry", "Anchor", "Truffle", "OpenZeppelin",
    "React", "Next.js", "Tailwind", "Node.js", "MongoDB", "PostgreSQL",
    "MetaMask", "Phantom", "Sui Wallet", "TON", "Coinbase Wallet",
    "IPFS", "Arweave"
  ];

  const projects = [
    {
      title: "Cross-Chain Bridge Protocol",
      description: "Multi-chain bridge supporting Ethereum, Polygon, and Solana with advanced security features",
      tech: ["Solidity", "Rust", "TypeScript", "Hardhat"],
      type: "Bridge Contract",
      chains: ["Ethereum", "Polygon", "Solana"]
    },
    {
      title: "DAO Governance Platform",
      description: "Comprehensive DAO management system with proposal voting, treasury management, and token staking",
      tech: ["Solidity", "React", "OpenZeppelin", "IPFS"],
      type: "DAO Governance",
      chains: ["Ethereum", "Polygon"]
    },
    {
      title: "P2P DEX Protocol",
      description: "Decentralized exchange with peer-to-peer trading, AMM functionality, and validator staking rewards",
      tech: ["Move", "Rust", "Sui", "TypeScript"],
      type: "DEX Protocol",
      chains: ["Sui", "Ethereum"]
    },
    {
      title: "NFT Marketplace & Staking",
      description: "ERC-721 marketplace with integrated staking rewards and cross-chain compatibility",
      tech: ["Solidity", "Next.js", "Foundry", "Arweave"],
      type: "NFT Platform",
      chains: ["Ethereum", "Polygon"]
    }
  ];

  const experience = [
    {
      period: "2019 - Present",
      role: "Senior Blockchain Engineer",
      company: "Multiple Projects & Consultancy",
      highlights: [
        "10+ years software engineering with 5+ years blockchain specialization",
        "Built 20+ smart contracts across Ethereum, Polygon, Solana, and Sui",
        "Zero high-severity findings across all 3rd-party security audits",
        "Led multi-chain dApp development for DeFi and NFT projects"
      ]
    },
    {
      period: "2020 - 2023",
      role: "Smart Contract Auditor",
      company: "Cognizant Security Division",
      highlights: [
        "Conducted security audits for enterprise blockchain solutions",
        "Developed security-first engineering practices and standards",
        "Specialized in ERC-20, ERC-721, and custom protocol auditing",
        "Maintained zero critical vulnerabilities across all reviewed contracts"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative px-6 py-20 bg-gradient-glow">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={oscarHeadshot} 
              alt="Oscar Garcia - Blockchain Engineer" 
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-glow border-2 border-primary/20"
            />
            <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Oscar Garcia
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Blockchain Engineer | Smart Contracts | Multi-chain dApps
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8">
              10+ years of software engineering with expertise in Solidity, Rust, and Move. 
              Building secure, scalable blockchain solutions across Ethereum, Polygon, Solana, and Sui.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="hero" size="lg" className="group">
              <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Button variant="glow" size="lg">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-6 text-muted-foreground">
            <a href="mailto:oscar.garcia.work2@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Expertise Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Security First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Zero high-severity findings across all 3rd-party audits. Security-first engineering culture 
                  with comprehensive testing and audit practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Multi-Chain Expert</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep expertise across Ethereum, Polygon, Solana, and Sui ecosystems. 
                  Building seamless cross-chain solutions and bridges.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Full-Stack DeFi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete dApp development from smart contracts to front-end interfaces. 
                  Specializing in DeFi, NFTs, and DAO governance systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Arsenal</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Contract Type</p>
                      <Badge variant="outline">{project.type}</Badge>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Chains</p>
                      <div className="flex flex-wrap gap-2">
                        {project.chains.map((chain) => (
                          <Badge key={chain} className="text-xs">{chain}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="border-primary/20 shadow-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription className="text-primary">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to bring your blockchain vision to life? Let's discuss your project.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a 
              href="mailto:oscar.garcia.work2@gmail.com" 
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              oscar.garcia.work2@gmail.com
            </a>
            <a 
              href="tel:+19152845158" 
              className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              (915) 284-5158
            </a>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              El Paso, TX
            </div>
          </div>
          
          <Button variant="hero" size="lg" className="shadow-glow">
            <Mail className="mr-2 h-5 w-5" />
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
