"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [name, setName] = useState("");
  const fullName = "Jay Purohit";

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

      {/* Main Container - Reduced gap on mobile (gap-4) */}
      <div className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 py-6 md:py-12 z-10">
        
        {/* LEFT COLUMN: Text & Actions */}
        <div className="flex-1 space-y-5 md:space-y-8 text-center md:text-left w-full mt-4 md:mt-0">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-medium animate-fade-in mx-auto md:mx-0 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for new opportunities
          </div>

          <div className="space-y-3 md:space-y-4 animate-fade-in">
            {/* Typewriter Header - Scaled text sizes for mobile */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight min-h-[48px] sm:min-h-[60px] md:min-h-[90px] flex items-center justify-center md:justify-start">
              {name}
              <span className="inline-block w-[3px] md:w-[4px] h-[0.8em] ml-1 md:ml-2 bg-cyan-400 animate-pulse"></span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-cyan-400 font-medium">
              Full Stack Web Developer
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed px-2 md:px-0">
              Building modern, responsive, and problem-solving web applications. Let's turn your ideas into reality.
            </p>
          </div>

          {/* MAIN BUTTONS - Fixed heights for mobile (py-3) vs desktop (py-6) */}
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

          {/* SOCIAL LINKS - Tighter spacing on mobile */}
          <div className="flex items-center justify-center md:justify-start gap-5 md:gap-6 pt-4 md:pt-6 text-slate-400">
            <a href="https://github.com/jaypurohit45" target="_blank" rel="noreferrer" className="hover:text-cyan-400 hover:-translate-y-1 hover:scale-110 transition-all duration-300">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jay-purohit-8b789a320/" target="_blank" rel="noreferrer" className="hover:text-blue-400 hover:-translate-y-1 hover:scale-110 transition-all duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Picture - Scaled down for mobile (w-48) */}
        <div className="flex-1 flex justify-center md:justify-end items-center relative z-10 w-full mx-auto">
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
              100% { transform: translateY(0px); }
            }
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
          `}} />
          
          {/* Enhanced Glow on Hover inside the image wrapper */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-1.5 md:p-2 border border-cyan-500/30 md:border-2 animate-float group cursor-pointer">
            {/* Background glow effect that activates on hover */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500/10 blur-xl transition-all duration-500"></div>
            
            <div className="w-full h-full rounded-full overflow-hidden border-2 md:border-4 border-cyan-500 shadow-[0_0_25px_-5px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_50px_0px_rgba(6,182,212,0.6)] transition-all duration-500">
              <img 
                src="/profile-pic.webp" 
                alt="Jay Purohit" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile to save vertical space */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll down" className="text-cyan-500 hover:text-cyan-400 p-2">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}