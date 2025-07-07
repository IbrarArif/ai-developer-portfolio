
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, Github, Linkedin, Code2, Brain, Zap, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const [currentSkill, setCurrentSkill] = useState(0);
  
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
      title: "AI SaaS Platform",
      description: "End-to-end full-stack AI products with FastAPI backend and React frontend",
      tech: ["FastAPI", "React", "OpenAI", "Docker"],
      status: "Confidential @ Cyberify"
    },
    {
      title: "LangChain Agent System",
      description: "Intelligent agent workflows for automated business processes",
      tech: ["LangChain", "Python", "Vector DB", "FAISS"],
      status: "Production Ready"
    },
    {
      title: "AI Chat Interface",
      description: "Real-time chat application with GPT integration and vector search",
      tech: ["React", "Tailwind", "OpenAI", "Chroma"],
      status: "Live Demo"
    }
  ];

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
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-blue-400 bg-clip-text text-transparent">
              AI Developer
            </h1>
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

      {/* Projects Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Code2 className="h-8 w-8 text-green-400" />
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-slate-700 text-blue-400 rounded text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold text-sm">{project.status}</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-gray-400 text-sm">Active</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
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
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "FastAPI", icon: "🚀" },
              { name: "React.js", icon: "⚛️" },
              { name: "LangChain", icon: "🔗" },
              { name: "OpenAI", icon: "🧠" },
              { name: "Vector DBs", icon: "🗄️" },
              { name: "Docker", icon: "🐳" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
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
            © 2025 AI Developer Portfolio. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
