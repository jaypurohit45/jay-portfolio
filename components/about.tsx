import { Code2, Globe, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-4 bg-[#0B1120] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section with Animated Underline */}
        <div className="mb-12 md:mb-16 text-center md:text-left group inline-block cursor-default">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          {/* The animated expanding line */}
          <div className="h-1.5 w-16 md:w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 ease-out group-hover:w-full mx-auto md:mx-0"></div>
        </div>

        {/* Content Grid - Changed to items-center to balance the empty space! */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* Main Text Area - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6 text-slate-300 text-base md:text-lg leading-relaxed px-2 md:px-0">
            <p>
              I'm a full stack web developer with a passion for creating clean, intuitive, and high-performing web applications. My approach combines technical expertise with a problem-solving mindset, ensuring that every project not only meets specifications but exceeds expectations.
            </p>
            <p>
              I specialize in building responsive front-end interfaces using <span className="text-cyan-300 font-medium hover:text-cyan-200 transition-colors cursor-default">React.js</span> and modern JavaScript, while maintaining strong backend capabilities with <span className="text-cyan-300 font-medium hover:text-cyan-200 transition-colors cursor-default">Node.js</span> and <span className="text-cyan-300 font-medium hover:text-cyan-200 transition-colors cursor-default">MySQL</span>. Whether it's crafting pixel-perfect UIs or optimizing database queries, I bring attention to detail to every aspect of development.
            </p>
            <p>
              What drives me is the opportunity to solve real-world problems through code, transforming ideas into working solutions that users love. I'm constantly learning new technologies and best practices to stay at the forefront of web development.
            </p>
          </div>

          {/* Quick Facts / Philosophy Cards - Takes up 1 column on large screens */}
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
}