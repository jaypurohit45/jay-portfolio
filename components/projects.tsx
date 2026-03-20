"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI Chatbot Web App",
    description: "Built responsive chatbot using JavaScript and API integration with modern UI and real-time responses. Features include message history, typing indicators, and smart conversation management.",
    tags: ["React", "API", "JavaScript"],
    image: "https://images.unsplash.com/photo-1678483789107-0029c61fdcca?q=80&w=1080", // Using placeholder so it looks good immediately
    link: "#",
  },
  {
    title: "Real-time Weather Dashboard",
    description: "Developed responsive weather application using API and async JavaScript with clean UI. Displays current weather, forecasts, and location-based data with beautiful visualizations.",
    tags: ["React", "REST API", "Async JS"],
    image: "https://images.unsplash.com/photo-1666287536666-333af99d8a0d?q=80&w=1080",
    link: "#",
  },
  {
    title: "Gemini Bug Analysis",
    description: "Identified and documented real-world file upload bug with detailed analysis and solution. Provided comprehensive troubleshooting guide with implementation fixes.",
    tags: ["QA Testing", "Analysis", "Docs"],
    image: "https://images.unsplash.com/photo-1756822084498-e76c94f0f700?q=80&w=1080",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 bg-[#0B1120] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-cyan-950/20 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-slate-900/80 border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 group flex flex-col"
            >
              <div className="relative h-56 bg-slate-800 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  asChild
                  variant="ghost"
                  className="w-full bg-slate-800/50 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 border border-slate-700 hover:border-cyan-500 transition-all duration-300 group/btn"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    View Live Project
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}