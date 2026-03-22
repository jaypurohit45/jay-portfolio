import { CheckCircle2, Terminal } from "lucide-react";

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
    // Reduced padding to py-12 on mobile and py-16 on desktop
    <section id="problems" className="relative py-12 md:py-16 px-4 bg-[#0B1120] overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 relative z-10">
        
        {/* Header Section with Animated Underline */}
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

        {/* Card List - Tighter spacing on mobile (space-y-4) */}
        <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
          {problemsSolved.map((problem, index) => (
            <div 
              key={problem.title}
              // Consistent premium hover effects & staggered animations
              className="relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)] transition-all duration-300 group overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Large faded background number with hover color transition */}
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
                
                {/* Impact Badge */}
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
}