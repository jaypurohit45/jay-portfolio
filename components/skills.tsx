import { Card, CardContent } from "@/components/ui/card";
import { Layout, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    skills: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "UI/UX"],
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 text-cyan-400" />,
    skills: ["Node.js", "Express.js", "REST APIs", "Database Design", "MySQL"],
  },
  {
    title: "Core Skills",
    icon: <Wrench className="w-6 h-6 text-cyan-400" />,
    skills: ["Problem Solving", "Bug Fixing", "Debugging", "Performance Optimization", "Code Review"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-[#0B1120]">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)] flex flex-col"
            >
              <CardContent className="p-8 flex-grow">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 shadow-inner">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                {/* 2-Column Grid Layout for Perfect Structure */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, index, array) => (
                    <div
                      key={skill}
                      /* If it's the last item and the total count is odd, make it span both columns to keep the bottom edge flat */
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all duration-300 group/skill ${
                        index === array.length - 1 && array.length % 2 !== 0 ? "col-span-2" : ""
                      }`}
                    >
                      {/* Interactive glowing dot indicator */}
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover/skill:bg-cyan-400 group-hover/skill:shadow-[0_0_10px_rgba(34,211,238,1)] transition-all duration-300"></div>
                      <span className="text-sm font-medium text-slate-300 group-hover/skill:text-white transition-colors">
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