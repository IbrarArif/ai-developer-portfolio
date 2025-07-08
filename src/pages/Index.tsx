
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, Github, Linkedin, Code2, Brain, Zap, ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Star, Play, Music, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const [currentSkill, setCurrentSkill] = useState(0);
  const [currentProjectImage, setCurrentProjectImage] = useState<{[key: number]: number}>({});
  
  const fullText = "Building the Future with AI, One App at a Time";
  const skills = ["FastAPI", "React.js", "LangChain", "OpenAI", "Vector DBs", "Docker"];
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const skillTimer = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    
    return () => clearInterval(skillTimer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "🎓 LectureMind",
      description: "An AI-powered learning assistant that converts YouTube lectures into a full learning experience.",
      tech: ["React.js", "FastAPI", "LangChain", "RAG", "LLM Summarization"],
      features: "Chat with video, auto-summarization, key point extraction, free to use for learners",
      icon: <Play className="h-6 w-6" />,
      images: [
        "https://i.postimg.cc/VsbC1tBg/Screenshot-2025-07-07-203226.jpg",
        "https://i.postimg.cc/0jgrrtdf/Screenshot-2025-07-07-203307.jpg",
        "https://i.postimg.cc/sgfxBGSt/1727592965916-1.jpg"
      ]
    },
    {
      id: 2,
      title: "📹 ReelTube AI",
      description: "An AI-based video generation platform that creates high-quality videos using the style of top YouTube channels.",
      tech: ["Generative AI", "LLMs", "Video Scripting AI", "FastAPI", "React"],
      features: "Fast rendering, AI scripting, publish-ready exports, creator-friendly UI",
      icon: <Brain className="h-6 w-6" />,
      images: [
        "https://i.postimg.cc/L4z8N33c/Screenshot-2025-07-07-205833.jpg",
        "https://i.postimg.cc/pTMtF34p/Screenshot-2025-07-07-210052.jpg",
        "https://i.postimg.cc/5yPGnr75/Screenshot-2025-07-07-210357.jpg",
        "https://i.postimg.cc/TYfg9wgc/Screenshot-2025-07-07-210221.jpg",
        "https://i.postimg.cc/xdwbbT9M/Screenshot-2025-07-07-210313.jpg",
        "https://i.postimg.cc/VvLsJ30X/Screenshot-2025-07-07-210428.jpg"
      ]
    },
    {
      id: 3,
      title: "🧠 Model Training – Code Expert T5",
      description: "Finetuned Google's Flan-T5 on expert Python datasets (codeagent-python) for better code generation.",
      tech: ["Hugging Face", "T5", "Python", "Fine-tuning"],
      features: "Code assistance, script generation, AI code review",
      icon: <FileCode className="h-6 w-6" />,
      modelCard: "https://huggingface.co/MalikIbrar/flan-python-expert",
      images: [
        "https://i.postimg.cc/1RCsW-7NY/Screenshot-2025-07-08-114124.jpg"
      ]
    },
    {
      id: 4,
      title: "🎵 Audio Classification – DistilHuBERT",
      description: "Fine-tuned distilhubert on the GTZAN dataset to classify audio/music genres with 87% accuracy.",
      tech: ["Hugging Face", "DistilHuBERT", "Audio ML", "Classification"],
      features: "Music genre classification, streaming tools, audio analysis",
      icon: <Music className="h-6 w-6" />,
      modelCard: "https://huggingface.co/MalikIbrar/distilhubert-finetuned-gtzan",
      images: [
        "https://i.postimg.cc/85kg4LkS/Screenshot-2025-07-08-114216.jpg"
      ]
    }
  ];

  const techStack = [
    { name: "FastAPI", icon: "🚀", description: "High-performance Python web framework" },
    { name: "React.js", icon: "⚛️", description: "Modern frontend library" },
    { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework" },
    { name: "OpenAI API", icon: "🧠", description: "GPT models and AI services" },
    { name: "Hugging Face", icon: "🤗", description: "Transformers and model hub" },
    { name: "LangChain", icon: "🔗", description: "LLM application framework" },
    { name: "CrewAI", icon: "👥", description: "Multi-agent AI systems" },
    { name: "FAISS", icon: "🔍", description: "Vector similarity search" },
    { name: "ChromaDB", icon: "🗄️", description: "Vector database" },
    { name: "Docker", icon: "🐳", description: "Containerization platform" },
    { name: "Ollama", icon: "🦙", description: "Local LLM deployment" },
    { name: "VLLM", icon: "⚡", description: "High-throughput LLM serving" }
  ];

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentProjectImage(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentProjectImage(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <img
                src="https://malik-ibrar-ai.vercel.app/static/media/portfolio.17fef9e14b5795557f0a.png"
                alt="Malik Ibrar"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-green-400 shadow-2xl shadow-green-400/20"
              />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-green-400 to-blue-400 bg-clip-text text-transparent">
              Malik Ibrar
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-green-400">
              GenAI Developer | AI Product Builder | NLP & Agents Expert
            </h2>
            <div className="h-20 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                {typedText}
                <span className="animate-pulse text-green-400">|</span>
              </p>
            </div>
          </motion.div>

          {/* Animated Tech Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  animate={{ 
                    opacity: currentSkill === index ? 1 : 0.7,
                    scale: currentSkill === index ? 1.1 : 1,
                  }}
                  className={`px-4 py-2 rounded-full border ${
                    currentSkill === index 
                      ? 'border-green-400 bg-green-400/10 text-green-400' 
                      : 'border-gray-600 text-gray-400'
                  } transition-all duration-500`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">My Journey</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Greetings! I am Malik Ibrar, a dedicated AI enthusiast with a relentless commitment to advancing my knowledge and prowess in the dynamic realm of artificial intelligence.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    With a solid foundation in AI, machine learning, and deep learning, I specialize in building end-to-end Generative AI applications using technologies like FastAPI, React.js, LangChain, OpenAI, Hugging Face, and Vector Databases.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    I'm actively working on LLMs, AI agents (OpenAI Agent SDK, Hugging Face Agent, SmolAgent, Crew AI, LangGraph, LlamaIndex, Ollama, VLLM) and retrieval-augmented generation systems (RAG).
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-blue-400 mb-6">My Vision</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    I aim to create a tech startup that transforms how people interact with intelligent systems. I'm committed to building solutions that drive meaningful innovation and empower visionary entrepreneurs globally.
                  </p>
                  <div className="flex items-center space-x-2 text-green-400">
                    <Zap className="h-5 w-5" />
                    <span className="font-semibold">Ready to innovate together</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Carousel Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Innovative AI solutions that push the boundaries of what's possible
            </p>
          </motion.div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Images */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative h-64 md:h-80">
                        <img
                          src={project.images[currentProjectImage[project.id] || 0]}
                          alt={`${project.title} screenshot`}
                          className="w-full h-full object-cover"
                        />
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={() => prevImage(project.id, project.images.length)}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => nextImage(project.id, project.images.length)}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {project.images.map((_, imageIndex) => (
                                <div
                                  key={imageIndex}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    imageIndex === (currentProjectImage[project.id] || 0)
                                      ? 'bg-green-400'
                                      : 'bg-gray-400'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <div className="text-green-400 mr-3">
                          {project.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">Key Features:</h4>
                        <p className="text-gray-300 text-sm">{project.features}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-slate-700 text-blue-400 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        {project.modelCard && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-green-400 text-green-400 hover:bg-green-400/10"
                            onClick={() => window.open(project.modelCard, '_blank')}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Model Card
                          </Button>
                        )}
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-gray-400 text-sm">Featured</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Crafting intelligent solutions at the intersection of AI and software engineering
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Software Engineer</h3>
                    <p className="text-green-400 font-semibold mb-2">Cyberify · Full-time</p>
                    <p className="text-gray-400">Jun 2024 - May 2025 · 1 yr</p>
                    <p className="text-gray-400">Multan, Punjab, Pakistan · On-site</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="flex items-center space-x-2 text-blue-400">
                      <Brain className="h-5 w-5" />
                      <span className="font-semibold">AI SaaS Specialist</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Built confidential end-to-end full-stack AI products, specializing in database administration 
                    and AI SaaS solutions. Developed scalable architectures using modern tech stack including 
                    FastAPI, React, and advanced AI/ML frameworks.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {["Database Administration", "AI SaaS", "FastAPI", "React.js", "LangChain", "OpenAI", "Vector DBs", "Docker", "CI/CD"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-700 text-green-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Tech Arsenal
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge technologies powering intelligent solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:border-green-400/50"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Let's Build Something Intelligent Together
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Ready to transform your ideas into cutting-edge AI solutions? 
              Let's discuss how we can push the boundaries of what's possible.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Start a Conversation
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-lg">
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Mail, label: "Email" }
              ].map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-4 bg-slate-800/50 rounded-full border border-slate-700 hover:border-green-400 transition-all duration-300 cursor-pointer"
                >
                  <social.icon className="h-6 w-6 text-gray-400 hover:text-green-400 transition-colors" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Malik Ibrar - GenAI Developer. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
