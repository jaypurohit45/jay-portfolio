import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section className="py-24 px-4 bg-[#0B1120]">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 rounded-full mb-4">
            <Terminal className="w-6 h-6 text-cyan-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Problems Solved
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Real-world challenges I've tackled through analytical thinking and efficient code architecture.</p>
        </div>

        <div className="space-y-6 mt-12">
          {problemsSolved.map((problem, index) => (
            <div 
              key={problem.title}
              className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300 group"
            >
              {/* Large faded background number */}
              <div className="absolute top-4 right-8 text-8xl font-black text-slate-800/30 pointer-events-none select-none">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {problem.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">
                  {problem.description}
                </p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-400">
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