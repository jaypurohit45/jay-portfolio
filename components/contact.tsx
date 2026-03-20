"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-[#0B1120] overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let's Work Together
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto md:mx-0"></div>
          <p className="text-slate-400 mt-4 max-w-md">I'm currently available for freelance work and full-time opportunities. Drop me a line!</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <Button className="w-full md:w-auto px-8 py-6 bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold text-md rounded-xl transition-all hover:scale-[1.02] flex items-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Social Links Sidebar */}
          <div className="md:col-span-2 space-y-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all group">
              <div className="p-4 rounded-full bg-slate-950 group-hover:bg-cyan-500/10 transition-colors">
                <Github className="w-6 h-6 text-slate-300 group-hover:text-cyan-400" />
              </div>
              <div>
                <p className="font-bold text-white">GitHub</p>
                <p className="text-sm text-slate-400">View my repositories</p>
              </div>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all group">
              <div className="p-4 rounded-full bg-slate-950 group-hover:bg-blue-500/10 transition-colors">
                <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-blue-400" />
              </div>
              <div>
                <p className="font-bold text-white">LinkedIn</p>
                <p className="text-sm text-slate-400">Let's connect</p>
              </div>
            </a>

            <a href="mailto:jay@example.com" 
               className="flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all group">
              <div className="p-4 rounded-full bg-slate-950 group-hover:bg-emerald-500/10 transition-colors">
                <Mail className="w-6 h-6 text-slate-300 group-hover:text-emerald-400" />
              </div>
              <div>
                <p className="font-bold text-white">Email</p>
                <p className="text-sm text-slate-400">jay@example.com</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}