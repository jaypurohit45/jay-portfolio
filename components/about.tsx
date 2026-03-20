import { Code2, Globe, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 bg-[#0B1120] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Main Text */}
          <div className="md:col-span-2 space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I'm a full stack web developer with a passion for creating clean, intuitive, and high-performing web applications. My approach combines technical expertise with a problem-solving mindset, ensuring that every project not only meets specifications but exceeds expectations.
            </p>
            <p>
              I specialize in building responsive front-end interfaces using React.js and modern JavaScript, while maintaining strong backend capabilities with Node.js and MySQL. Whether it's crafting pixel-perfect UIs or optimizing database queries, I bring attention to detail to every aspect of development.
            </p>
            <p>
              What drives me is the opportunity to solve real-world problems through code, transforming ideas into working solutions that users love. I'm constantly learning new technologies and best practices to stay at the forefront of web development.
            </p>
          </div>

          {/* Quick Facts / Philosophy Cards */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <Globe className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Web Optimization</h3>
              <p className="text-sm text-slate-400">Focused on fast load times and accessible, responsive layouts.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <Code2 className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Clean Code</h3>
              <p className="text-sm text-slate-400">Writing scalable, maintainable, and well-documented architecture.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <Lightbulb className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm text-slate-400">Turning complex business requirements into elegant software solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}