"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, User, Briefcase, Github, Linkedin, Key, FileText, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import JSZip from "jszip";
import { saveAs } from "file-saver";

// Import our Server Action and Templates
import { generatePortfolioContent } from "../actions/generate-ai";
import { 
  generateHeroCode, 
  generateAboutCode, 
  generateContactCode, 
  generatePackageJsonCode, 
  generateEnvCode,
  generateTailwindConfigCode,
  generatePostcssConfigCode,
  generateTsconfigCode,
  generateNextConfigCode,
  generateLayoutCode,
  generatePageCode,
  generateGlobalsCssCode,
  generateButtonCode,
  generateCursorCode,
  generateSkillsCode,
  generateProjectsCode,
  generateProblemSolvedCode,
  generateCardCode
} from "./templates";

export default function GeneratorPage() {
  // 👇 ALL HOOKS AND STATE MUST BE INSIDE THIS FUNCTION 👇
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    name: "", profession: "", github: "", linkedin: "", web3forms: "", aiPrompt: "",
  });
  
  // Image State
  const [imageFile, setImageFile] = useState<File | null>(null);

  // File Upload Handler
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      // 1. Call Gemini AI to write the copy
      toast.loading("Gemini AI is writing your bio...", { id: "generate" });
      const aiContent = await generatePortfolioContent(formData.aiPrompt);

      // 2. Combine user inputs with AI generated text
      const portfolioData: any = {
        ...formData,
        aiTagline: aiContent.tagline,
        aiBio: aiContent.bio,
      };

      // 3. Start building the ZIP file!
      toast.loading("Zipping up your Next.js source code...", { id: "generate" });
      const zip = new JSZip();

      // --- FOLDER STRUCTURE ---
      const appFolder = zip.folder("app");
      const componentsFolder = zip.folder("components");
      const uiFolder = componentsFolder?.folder("ui"); // Phase 3 UI folder
      const publicFolder = zip.folder("public");       // NEW: Public folder for the image

      // --- ADD THE IMAGE (IF UPLOADED) ---
      if (imageFile) {
        // Keep the original extension (e.g., .jpg, .png, .webp)
        const fileExtension = imageFile.name.split('.').pop();
        const imageName = `profile.${fileExtension}`;
        
        // Add the actual image file to the public folder in the ZIP
        publicFolder?.file(imageName, imageFile);
        
        // Save the name so our templates know what to call it!
        portfolioData.imageName = `/${imageName}`;
      } else {
        portfolioData.imageName = ""; // No image uploaded
      }

      // --- PHASE 2: APP ROUTE FILES ---
      appFolder?.file("layout.tsx", generateLayoutCode(portfolioData));
      appFolder?.file("page.tsx", generatePageCode());
      appFolder?.file("globals.css", generateGlobalsCssCode());

      // --- PHASE 3: UI COMPONENTS ---
      uiFolder?.file("button.tsx", generateButtonCode());
      uiFolder?.file("card.tsx", generateCardCode());
      componentsFolder?.file("Cursor.tsx", generateCursorCode());

      // --- PHASE 1 & 3: PAGE SECTIONS ---
      componentsFolder?.file("hero.tsx", generateHeroCode(portfolioData));
      componentsFolder?.file("about.tsx", generateAboutCode(portfolioData));
      componentsFolder?.file("skills.tsx", generateSkillsCode());
      componentsFolder?.file("problems-solved.tsx", generateProblemSolvedCode());
      componentsFolder?.file("projects.tsx", generateProjectsCode());
      componentsFolder?.file("contact.tsx", generateContactCode(portfolioData));
      
      // --- CONFIGURATION FILES ---
      zip.file("package.json", generatePackageJsonCode(portfolioData));
      zip.file(".env.local", generateEnvCode(portfolioData));
      zip.file("tailwind.config.ts", generateTailwindConfigCode());
      zip.file("postcss.config.js", generatePostcssConfigCode());
      zip.file("tsconfig.json", generateTsconfigCode());
      zip.file("next.config.mjs", generateNextConfigCode());

      // 4. Download the ZIP file to the user's computer
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, `${formData.name.replace(/\s+/g, '-').toLowerCase()}-portfolio.zip`);

      toast.success("Success! Your SaaS portfolio is downloading.", { id: "generate" });
      
    } catch (error) {
      console.error(error);
      toast.error("Generation failed. Please try again.", { id: "generate" });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-[100svh] bg-[#0B1120] relative overflow-hidden py-12 px-4 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 pt-8">
        
        {/* Back to Portfolio Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Header Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 rounded-xl mb-6 border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <Sparkles className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            AI Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Generator</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Fill in your details below. Our AI will write your professional bio, organize your skills, and instantly generate a production-ready Next.js codebase.
          </p>
        </div>

        {/* The Magic Form */}
        <div className="p-6 md:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-md shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
          <form onSubmit={handleGenerate} className="space-y-8">
            
            {/* Basic Info Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-400" /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jay Purohit"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-400" /> Primary Role
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  placeholder="e.g. Full Stack Developer"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Github className="w-4 h-4 text-cyan-400" /> GitHub URL
                </label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/yourusername"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-cyan-400" /> LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourusername"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Optional Web3Forms Key */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Key className="w-4 h-4 text-emerald-400" /> Web3Forms Access Key (Optional)
              </label>
              <input
                type="text"
                name="web3forms"
                value={formData.web3forms}
                onChange={handleChange}
                placeholder="Paste key to enable the contact form..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
              />
            </div>
            
            {/* Image Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <User className="w-4 h-4 text-cyan-400" /> Profile Picture
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-500/10 file:text-cyan-400 hover:file:bg-cyan-500/20"
              />
            </div>

            {/* The AI Engine Prompt Area */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" /> Tell the AI about yourself
              </label>
              <textarea
                name="aiPrompt"
                value={formData.aiPrompt}
                onChange={handleChange}
                placeholder="e.g. I have 2 years of experience in React and Node.js. I love building fast APIs and responsive UIs. I recently solved a major file upload bug..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                required
              ></textarea>
              <p className="text-xs text-slate-500">Gemini will use this to write your About section, summarize your skills, and craft your tagline.</p>
            </div>

            {/* Generate Button */}
            <Button 
              type="submit"
              disabled={isGenerating}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-lg py-7 rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] flex items-center justify-center gap-3 group"
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 animate-spin" /> Cooking the Code...
                </span>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 
                  Generate Source Code (.zip)
                </>
              )}
            </Button>
            
          </form>
        </div>
      </div>
    </main>
  );
}