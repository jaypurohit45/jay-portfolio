"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [name, setName] = useState("");
  const fullName = "Jay Purohit";

  // Typewriter Effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 120);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0B1120] flex items-center justify-center px-4 overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20 z-10">
        
        {/* LEFT COLUMN: Text & Actions */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Available for new opportunities
          </div>

          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight min-h-[1.2em] flex items-center justify-center md:justify-start">
              {name}
              <span className="inline-block w-[4px] h-[0.9em] ml-2 bg-white animate-pulse"></span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-400 font-medium">
              Full Stack Web Developer
            </p>
            <p className="text-lg text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Building modern, responsive, and problem-solving web applications. Let's turn your ideas into reality.
            </p>
          </div>

          {/* MAIN BUTTONS (Now wired up with asChild and <a> tags) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Button
              asChild
              size="lg"
              className="bg-cyan-500 text-slate-950 hover:bg-cyan-400 text-base px-8 transition-transform hover:-translate-y-1 font-semibold"
            >
              <a href="#projects">View Projects</a>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-base px-8 transition-transform hover:-translate-y-1"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* SOCIAL LINKS (Fills empty space and adds utility) */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 hover:text-cyan-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 hover:text-cyan-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Profile Picture */}
        <div className="flex-1 flex justify-center md:justify-end items-center relative z-10 w-full max-w-[280px] md:max-w-none mx-auto">
          {/* Outer matching ring */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full p-2 border-2 border-cyan-500/30">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)] transition-transform hover:scale-[1.02] duration-500">
              <img 
                src="/profile-pic.jpeg" 
                alt="Jay Purohit" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down" className="text-cyan-500 hover:text-cyan-400">
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}