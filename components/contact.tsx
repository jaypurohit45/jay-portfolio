"use client";

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
          access_key: "YOUR_ACCESS_KEY_HERE", // <-- Keep your Web3Forms key here
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
      {/* Reduced py-24 to py-12/16 to close the gaps */}
      <section id="contact" className="relative py-12 md:py-16 px-4 bg-[#0B1120] overflow-hidden">
        {/* Background elements */}
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto z-10 relative">
          
          {/* Header Section with Animated Underline */}
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
            {/* Contact Form - Added Slide-In Animation */}
            <div className="md:col-span-3 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: "150ms" }}>
              <div className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                        required
                        disabled={isSubmitting}
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
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                        required
                        disabled={isSubmitting}
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <Button 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-6 bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-bold text-md rounded-xl transition-all hover:scale-[1.02] flex items-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
                  </Button>
                </form>
              </div>
            </div>

            {/* Social Links Sidebar - Added Hover Lift and Staggered Animations */}
            <div className="md:col-span-2 space-y-4">
              <a href="https://github.com/jaypurohit45" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 group shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: "300ms" }}>
                <div className="p-3 md:p-4 rounded-full bg-slate-950 group-hover:bg-cyan-500/10 transition-colors">
                  <Github className="w-5 h-5 md:w-6 md:h-6 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm md:text-base">GitHub</p>
                  <p className="text-xs md:text-sm text-slate-400">View my repositories</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/jay-purohit-8b789a320/" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-300 group shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both" style={{ animationDelay: "450ms" }}>
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

      {/* THE PERFECT FULL-SCREEN POPUP MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          
          <div className="relative w-full max-w-md p-8 rounded-2xl bg-[#0B1120] border border-cyan-500/30 shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)] animate-in zoom-in-95 duration-300 flex flex-col items-center text-center">
            
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 md:w-20 md:h-20 mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Message Sent!</h3>
            <p className="text-sm md:text-base text-slate-400 mb-8 leading-relaxed">
              Thank you for reaching out. I've received your message and will get back to you as soon as possible.
            </p>

            <Button 
              onClick={() => setShowModal(false)}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl py-5 md:py-6 text-sm md:text-base transition-transform hover:scale-[1.02]"
            >
              Back to Portfolio
            </Button>
          </div>
        </div>
      )}
    </>
  );
}