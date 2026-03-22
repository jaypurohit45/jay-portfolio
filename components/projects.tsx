"use client";

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
    // Reduced py-24 to py-12 on mobile and py-16 on desktop to close the gaps!
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
              style={{ animationDelay: `${index * 150}ms` }}
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
}