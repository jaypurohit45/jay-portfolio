// Define the data structure we expect to receive after the AI does its magic
export interface PortfolioData {
  name: string;
  profession: string;
  github: string;
  linkedin: string;
  web3forms: string;
  aiTagline: string;
  aiBio: string;
  imageName?: string;
}

// 1. Generate the Hero Component Code (UPDATED TO YOUR REAL UI)
export const generateHeroCode = (data: PortfolioData) => {
  // Use the uploaded image name if available, otherwise fallback to the default
  const imageSrc = data.imageName ? data.imageName : "/profile-pic.webp";

  return `"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [name, setName] = useState("");
  const fullName = "${data.name}";

  // Bulletproof Typewriter Effect
  useEffect(() => {
    let isMounted = true;
    let currentIndex = 0;
    
    setName("");

    const typingInterval = setInterval(() => {
      if (!isMounted) return;
      
      if (currentIndex <= fullName.length) {
        setName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => {
      isMounted = false;
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] bg-[#0B1120] flex items-center justify-center px-4 overflow-hidden pt-16 md:pt-0">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-1/4 w-72 h-72 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none animate-pulse"></div>

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 py-6 md:py-12 z-10">
        
        {/* LEFT COLUMN: Text & Actions */}
        <div className="flex-1 space-y-5 md:space-y-8 text-center md:text-left w-full mt-4 md:mt-0">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-medium animate-fade-in mx-auto md:mx-0 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for new opportunities
          </div>

          <div className="space-y-3 md:space-y-4 animate-fade-in">
            {/* Typewriter Header */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight min-h-[48px] sm:min-h-[60px] md:min-h-[90px] flex items-center justify-center md:justify-start">
              {name}
              <span className="inline-block w-[3px] md:w-[4px] h-[0.8em] ml-1 md:ml-2 bg-cyan-400 animate-pulse"></span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 font-medium">
              ${data.profession}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed px-2 md:px-0">
              ${data.aiTagline}
            </p>
          </div>

          {/* MAIN BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start pt-2 md:pt-4 w-full sm:w-auto px-2 md:px-0">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(6,182,212,0.6)] font-bold"
            >
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-slate-700 bg-transparent text-slate-300 hover:text-white hover:bg-slate-800 hover:border-slate-500 text-sm md:text-base px-6 md:px-8 py-5 md:py-6 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center justify-center md:justify-start gap-5 md:gap-6 pt-4 md:pt-6 text-slate-400">
            <a href="${data.github}" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-300">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="${data.linkedin}" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:-translate-y-1 hover:scale-110 transition-all duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Picture */}
        <div className="flex-1 flex justify-center md:justify-end items-center relative z-10 w-full mx-auto">
          
          <style dangerouslySetInnerHTML={{__html: \`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0px); }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
          \`}} />
          
          {/* Enhanced Glow on Hover inside the image wrapper */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-1.5 md:p-2 border border-cyan-500/30 md:border-2 animate-float group cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-xl transition-all duration-500"></div>
            
            <div className="w-full h-full rounded-full overflow-hidden border-2 md:border-4 border-cyan-500 shadow-[0_0_25px_-5px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_50px_0px_rgba(6,182,212,0.6)] transition-all duration-500">
              <img 
                src="${imageSrc}" 
                alt="${data.name}" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll down" className="text-cyan-500 hover:text-cyan-400 p-2">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}`;
};

// 2. Generate the About Component Code (UPDATED TO YOUR REAL UI)
export const generateAboutCode = (data: PortfolioData) => {
  return `import { Code2, Globe, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-4 bg-[#0B1120] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16 text-center md:text-left group inline-block cursor-default">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="h-1.5 w-16 md:w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 ease-out group-hover:w-full mx-auto md:mx-0"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* Main Text Area - AI Generated Bio */}
          <div className="lg:col-span-2 space-y-6 text-slate-300 text-base md:text-lg leading-relaxed px-2 md:px-0 whitespace-pre-line">
            ${data.aiBio}
          </div>

          {/* Quick Facts / Philosophy Cards */}
          <div className="space-y-4 md:space-y-5 px-2 md:px-0">
            
            {/* Card 1 */}
            <div className="group p-5 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-slate-950 rounded-xl group-hover:bg-cyan-500/10 transition-colors">
                  <Globe className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-white font-semibold text-lg">Web Optimization</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Focused on fast load times and accessible, fully responsive layouts.</p>
            </div>

            {/* Card 2 */}
            <div className="group p-5 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-slate-950 rounded-xl group-hover:bg-cyan-500/10 transition-colors">
                  <Code2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-white font-semibold text-lg">Clean Code</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Writing scalable, maintainable, and well-documented architecture.</p>
            </div>

            {/* Card 3 */}
            <div className="group p-5 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-slate-950 rounded-xl group-hover:bg-cyan-500/10 transition-colors">
                  <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-white font-semibold text-lg">Problem Solving</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">Turning complex business requirements into elegant software solutions.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}`;
};

// 3. Generate the Contact Component Code (UPDATED TO YOUR REAL UI)
export const generateContactCode = (data: PortfolioData) => {
  return `"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Send, CheckCircle, X } from "lucide-react";
import { toast } from "sonner"; 

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "${data.web3forms}", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowModal(true);
        setFormData({ name: "", email: "", message: "" }); 
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="relative py-12 md:py-16 px-4 bg-[#0B1120] overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto z-10 relative">
          
          <div className="mb-10 md:mb-16 text-center md:text-left group inline-block cursor-default w-full md:w-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Together</span>
            </h2>
            <div className="h-1.5 w-16 md:w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 ease-out group-hover:w-32 md:group-hover:w-full mx-auto md:mx-0"></div>
            <p className="text-slate-400 mt-6 max-w-md mx-auto md:mx-0 text-sm md:text-base px-2 md:px-0">
              I'm currently available for freelance work and full-time opportunities. Drop me a line!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-3 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: "150ms" }}>
              <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all" required disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all" required disabled={isSubmitting} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={5} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none" required disabled={isSubmitting}></textarea>
                  </div>
                  
                  <Button disabled={isSubmitting} className="w-full md:w-auto px-8 py-6 bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold text-md rounded-xl transition-all hover:scale-[1.02] flex items-center gap-2">
                    {isSubmitting ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
                  </Button>
                </form>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <a href="${data.github}" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 group shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: "300ms" }}>
                <div className="p-3 md:p-4 rounded-full bg-slate-950 group-hover:bg-cyan-500/10 transition-colors">
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm md:text-base">GitHub</p>
                  <p className="text-xs md:text-sm text-slate-400">View my repositories</p>
                </div>
              </a>

              <a href="${data.linkedin}" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 group shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: "450ms" }}>
                <div className="p-3 md:p-4 rounded-full bg-slate-950 group-hover:bg-blue-500/10 transition-colors">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-slate-300 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm md:text-base">LinkedIn</p>
                  <p className="text-xs md:text-sm text-slate-400">Let's connect</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-md p-8 rounded-2xl bg-[#0B1120] border border-cyan-500/30 shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)] animate-in zoom-in-95 duration-300 flex flex-col items-center text-center">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
            <div className="w-16 h-16 md:w-20 md:h-20 mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Message Sent!</h3>
            <p className="text-sm md:text-base text-slate-400 mb-8 leading-relaxed">
              Thank you for reaching out. I've received your message and will get back to you as soon as possible.
            </p>
            <Button onClick={() => setShowModal(false)} className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl py-5 md:py-6 text-sm md:text-base transition-transform hover:scale-[1.02]">
              Back to Portfolio
            </Button>
          </div>
        </div>
      )}
    </>
  );
}`;
};

// 4. Generate package.json so they can run "npm install"
export const generatePackageJsonCode = (data: PortfolioData) => {
  return `{
  "name": "${data.name.toLowerCase().replace(/\\s+/g, '-')}-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "next": "14.1.0",
    "react": "^18",
    "react-dom": "^18",
    "sonner": "^1.4.0",
    "tailwind-merge": "^2.2.1",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}`;
};

// 5. Generate Environment Variables (.env.local)
export const generateEnvCode = (data: PortfolioData) => {
  return `NEXT_PUBLIC_WEB3FORMS_KEY=${data.web3forms}`;
};

// 6. Generate tailwind.config.ts (Crucial for your dark theme & animations)
export const generateTailwindConfigCode = () => {
  return `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;`;
};

// 7. Generate postcss.config.js
export const generatePostcssConfigCode = () => {
  return `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`;
};

// 8. Generate tsconfig.json (So TypeScript knows how to read the @/ path aliases)
export const generateTsconfigCode = () => {
  return `{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`;
};

// 9. Generate next.config.mjs (Allows external images from Unsplash for the projects)
export const generateNextConfigCode = () => {
  return `/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;`;
};

// 10. Generate app/layout.tsx (UPDATED: Added Toaster and Premium Font)
export const generateLayoutCode = (data: PortfolioData) => {
  return `import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "${data.name} | Portfolio",
  description: "${data.aiTagline}",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={\`\${jakarta.className} bg-[#0B1120] text-slate-50 antialiased\`}>
        {children}
        <Toaster theme="dark" position="bottom-right" richColors />
      </body>
    </html>
  );
}`;
};

// 11. Generate app/page.tsx (Updated to include ProblemsSolved)
export const generatePageCode = () => {
  return `import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import ProblemsSolved from "@/components/problems-solved";
import Contact from "@/components/contact";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] selection:bg-cyan-500/30 selection:text-cyan-200">
      <Cursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProblemsSolved />
      <Contact />
    </main>
  );
}`;
};

// 12. Generate app/globals.css (Tailwind directives and base styles)
export const generateGlobalsCssCode = () => {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0B1120;
  color: #f8fafc;
}

@layer utilities {
  .animate-fade-in {
    animation: fadeIn 1s ease-in-out forwards;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`;
};



// 13. Generate components/ui/button.tsx
export const generateButtonCode = () => {
  return `import * as React from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    
    // Base styles + matching your portfolio's premium look
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold shadow-lg",
      ghost: "hover:bg-slate-800/50 text-slate-300 hover:text-white",
      outline: "border-2 border-slate-700 bg-transparent text-slate-300 hover:text-white hover:bg-slate-800"
    }
    
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 px-8 py-6 text-base"
    }

    const combinedClasses = twMerge(baseStyles, variants[variant], sizes[size], className)

    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(props.children, {
        className: twMerge(combinedClasses, props.children.props.className),
        ...props,
        children: props.children.props.children
      } as any)
    }

    return <button className={combinedClasses} ref={ref} {...props} />
  }
)
Button.displayName = "Button"
export { Button }`;
};

// 14. Generate components/Cursor.tsx (Your custom floating cursor)
export const generateCursorCode = () => {
  return `"use client";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  if (typeof window === "undefined" || window.innerWidth < 768) return null;

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-4 h-4 bg-cyan-500 rounded-full mix-blend-screen pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{ transform: \`translate(\${position.x - 8}px, \${position.y - 8}px) scale(\${isPointer ? 1.5 : 1})\` }}
      />
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-500/50 rounded-full mix-blend-screen pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{ transform: \`translate(\${position.x - 16}px, \${position.y - 16}px) scale(\${isPointer ? 1.5 : 1})\` }}
      />
    </>
  );
}`;
};

// 15. Generate components/skills.tsx (UPDATED TO YOUR REAL UI)
export const generateSkillsCode = () => {
  return `import { Card, CardContent } from "@/components/ui/card";
import { Layout, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    skills: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "UI/UX"],
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    skills: ["Node.js", "Express.js", "REST APIs", "Database Design", "MySQL"],
  },
  {
    title: "Core Skills",
    icon: <Wrench className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    skills: ["Problem Solving", "Bug Fixing", "Debugging", "Performance Optimization", "Code Review"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 px-4 bg-[#0B1120] overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 relative z-10">
        
        {/* Header Section with Animated Underline */}
        <div className="text-center md:text-left group inline-block cursor-default w-full md:w-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Arsenal</span>
          </h2>
          <div className="h-1.5 w-16 md:w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 ease-out group-hover:w-32 md:group-hover:w-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              // Consistent hover effects matching the About section
              className="bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)] transition-all duration-300 flex flex-col group animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: \`\${index * 150}ms\` }}
            >
              <CardContent className="p-6 md:p-8 flex-grow">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  {/* Icon Wrapper with subtle interactive glow */}
                  <div className="p-3 md:p-4 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                {/* Responsive 2-Column Grid Layout */}
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {category.skills.map((skill, skillIndex, array) => (
                    <div
                      key={skill}
                      /* Handles odd-numbered arrays by spanning the last item beautifully */
                      className={\`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all duration-300 group/skill cursor-default \${
                        skillIndex === array.length - 1 && array.length % 2 !== 0 
                          ? "col-span-2 justify-center md:justify-start" 
                          : ""
                      }\`}
                    >
                      {/* Interactive glowing dot indicator */}
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-700 group-hover/skill:bg-cyan-400 group-hover/skill:shadow-[0_0_10px_rgba(34,211,238,1)] transition-all duration-300"></div>
                      <span className="text-xs md:text-sm font-medium text-slate-300 group-hover/skill:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}`;
};

// 16. Generate components/projects.tsx (UPDATED TO YOUR REAL UI)
export const generateProjectsCode = () => {
  return `"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Lock } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "CMS Admin Panel",
    description: "A comprehensive, ERP-style Construction Management System (CMS) built with React, Node.js, and MySQL. Features module-based management for projects, inventory, vendors, and employees.",
    tags: ["React", "Node.js", "MySQL", "JavaScript"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080&auto=format&fit=crop", 
    link: "https://github.com/jaypurohit45/CMS-admin-panel",
    isPrivate: false,
  },
  {
    title: "Kalalayshop (Commercial)",
    description: "Collaborated as a contributor on a private company project. Focused on building clean component architecture and implementing professional UI/UX designs for a commercial platform.",
    tags: ["Frontend", "UI/UX", "Commercial", "Private Repo"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1080", 
    link: "#",
    isPrivate: true,
  },
  {
    title: "Assist App",
    description: "A JavaScript-based web application focused on providing helpful utility features, efficient data handling, and an intuitive user interface.",
    tags: ["JavaScript", "Web Development", "UI/UX"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080", 
    link: "https://github.com/jaypurohit45/Assist",
    isPrivate: false,
  },
  {
    title: "Gemini Bug Analysis",
    description: "Identified and documented a real-world file upload bug. Provided comprehensive troubleshooting guides and implementation fixes for production environments.",
    tags: ["QA Testing", "Analysis", "Documentation"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080", 
    link: "https://github.com/jaypurohit45/gemini-file-upload-bug",
    isPrivate: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-12 md:py-16 px-4 bg-[#0B1120] overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-cyan-950/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 relative z-10">
        
        {/* Header Section with Animated Underline */}
        <div className="text-center md:text-left group inline-block cursor-default w-full md:w-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <div className="h-1.5 w-16 md:w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 ease-out group-hover:w-32 md:group-hover:w-full mx-auto md:mx-0"></div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              // Added staggered slide-in animation and hover:-translate-y-1
              className="bg-slate-900/50 border-slate-800 backdrop-blur-sm overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group flex flex-col hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)] hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: \`\${index * 150}ms\` }}
            >
              {/* Image Section */}
              <div className="relative h-48 md:h-52 bg-slate-800 overflow-hidden border-b border-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Conditional Button Rendering */}
                {project.isPrivate ? (
                  <div className="w-full px-4 py-[10px] mt-auto rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-center gap-2 text-slate-500 select-none">
                    <Lock className="w-4 h-4" />
                    <span className="font-medium text-sm">Private Company Repo</span>
                  </div>
                ) : (
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full mt-auto bg-slate-800/50 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 border border-slate-700 hover:border-cyan-500 transition-all duration-300 group/btn rounded-xl py-5"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 font-semibold">
                      <Github className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                      View Source Code
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}`;
};
// 18. Generate components/ui/card.tsx (CRITICAL FIX FOR THE NEW SECTIONS)
export const generateCardCode = () => {
  return `import * as React from "react"
import { twMerge } from "tailwind-merge"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge("rounded-xl border border-slate-800 bg-slate-900/50 text-slate-50 shadow-sm", className)} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge("flex flex-col space-y-1.5 p-6", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={twMerge("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p ref={ref} className={twMerge("text-sm text-slate-400", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge("flex items-center p-6 pt-0", className)} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`;
};

// 17. Generate components/problems-solved.tsx
export const generateProblemSolvedCode = () => {
  return `import { CheckCircle2, Terminal } from "lucide-react";

const problemsSolved = [
  {
    title: "Gemini File Upload Bug",
    description: "Identified a critical bug in file upload functionality affecting production users. Provided detailed analysis including root cause, impact assessment, and a comprehensive solution with code examples.",
    impact: "Reduced upload failures by 95%",
  },
  {
    title: "API Response Optimization",
    description: "Optimized API response times by implementing proper caching strategies and database indexing. Analyzed performance bottlenecks and implemented async/await patterns effectively.",
    impact: "Achieved 30% faster load times",
  },
  {
    title: "Real-time Data Synchronization",
    description: "Solved complex state management issues in real-time applications using WebSockets and efficient event handling. Reduced memory leaks and improved data consistency across components.",
    impact: "Ensured 99.9% data accuracy",
  },
];

export default function ProblemsSolved() {
  return (
    <section id="problems" className="relative py-12 md:py-16 px-4 bg-[#0B1120] overflow-hidden">
      <div className="absolute top-1/2 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 relative z-10">
        <div className="text-center group flex flex-col items-center cursor-default w-full">
          <div className="inline-flex items-center justify-center p-3 md:p-4 bg-cyan-500/10 rounded-xl mb-4 border border-cyan-500/20 shadow-inner transition-transform duration-300 group-hover:scale-110">
            <Terminal className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Problems <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solved</span>
          </h2>
          <div className="h-1.5 w-16 md:w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 ease-out group-hover:w-32 md:group-hover:w-64 mx-auto"></div>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-sm md:text-base px-2">
            Real-world challenges I've tackled through analytical thinking and efficient code architecture.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
          {problemsSolved.map((problem, index) => (
            <div 
              key={problem.title}
              className="relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)] transition-all duration-300 group overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: \`\${index * 150}ms\` }}
            >
              <div className="absolute top-2 md:top-4 right-4 md:right-8 text-6xl md:text-8xl font-black text-slate-800/30 group-hover:text-cyan-500/5 transition-colors duration-500 pointer-events-none select-none">
                0{index + 1}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-5 md:mb-6 max-w-2xl">
                  {problem.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 shadow-inner group-hover:bg-emerald-500/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                  <span className="text-xs md:text-sm font-semibold text-emerald-400">
                    {problem.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;
};