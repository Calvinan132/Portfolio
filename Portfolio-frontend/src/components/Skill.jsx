import { Smartphone, Database, Globe, Cpu } from "lucide-react";

let Skill = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-100/50 dark:bg-slate-900/90 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
          <span className="w-2 h-8 bg-lime-500 rounded-full"></span>
          Kỹ Năng
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <Globe />,
              name: "Frontend",
              items: "React, Vue, Tailwind",
            },
            {
              icon: <Database />,
              name: "Backend",
              items: "Node.js, Python, SQL",
            },
            {
              icon: <Smartphone />,
              name: "Mobile",
              items: "React Native, Flutter",
            },
            { icon: <Cpu />, name: "Tools", items: "Git, Docker, Figma" },
          ].map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-lime-500 hover:shadow-lg dark:hover:shadow-none hover:bg-slate-50 dark:hover:bg-slate-900 transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-lime-100 dark:bg-lime-500/10 text-lime-600 dark:text-lime-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {skill.name}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
