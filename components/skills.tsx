import { Card, CardContent } from "@/components/ui/card";
import { Layout, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    skills: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "UI/UX"],
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    skills: ["Node.js", "Express.js", "REST APIs", "Database Design", "MySQL"],
  },
  {
    title: "Core Skills",
    icon: <Wrench className="w-6 h-6 md:w-7 md:h-7 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    skills: ["Problem Solving", "Bug Fixing", "Debugging", "Performance Optimization", "Code Review"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 px-4 bg-[#0B1120] overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-12 relative z-10">
        
        {/* Header Section with Animated Underline */}
        <div className="text-center md:text-left group inline-block cursor-default w-full md:w-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Arsenal</span>
          </h2>
          <div className="h-1.5 w-16 md:w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 ease-out group-hover:w-32 md:group-hover:w-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              // Consistent hover effects matching the About section
              className="bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 hover:bg-slate-800/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)] transition-all duration-300 flex flex-col group animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 md:p-8 flex-grow">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  {/* Icon Wrapper with subtle interactive glow */}
                  <div className="p-3 md:p-4 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                {/* Responsive 2-Column Grid Layout */}
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {category.skills.map((skill, skillIndex, array) => (
                    <div
                      key={skill}
                      /* Handles odd-numbered arrays by spanning the last item beautifully */
                      className={`flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2.5 md:py-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all duration-300 group/skill cursor-default ${
                        skillIndex === array.length - 1 && array.length % 2 !== 0 
                          ? "col-span-2 justify-center md:justify-start" 
                          : ""
                      }`}
                    >
                      {/* Interactive glowing dot indicator */}
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-700 group-hover/skill:bg-cyan-400 group-hover/skill:shadow-[0_0_10px_rgba(34,211,238,1)] transition-all duration-300"></div>
                      <span className="text-xs md:text-sm font-medium text-slate-300 group-hover/skill:text-white transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}