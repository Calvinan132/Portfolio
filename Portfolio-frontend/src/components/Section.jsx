import { Code } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
let Section = () => {
  const { scrollToSection } = useContext(AppContext);
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden dark:bg-slate-900/100 py-10"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-lime-100/50 dark:bg-lime-500/10 rounded-full blur-3xl -z-10 transition-colors duration-500"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-lime-200/30 dark:bg-lime-400/5 rounded-full blur-3xl -z-10 transition-colors duration-500"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 border border-lime-500/30 rounded-full bg-lime-100 dark:bg-lime-500/10 text-lime-700 dark:text-lime-400 text-sm font-semibold tracking-wide">
            HELLO WORLD
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
            Tôi là <br />
            <span className="text-lime-600 dark:text-lime-400 drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(163,230,53,0.3)]">
              Web Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg">
            Chuyên xây dựng các ứng dụng web hiện đại, hiệu suất cao với trải
            nghiệm người dùng tuyệt vời. Biến ý tưởng thành hiện thực.
          </p>
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-lime-500 hover:bg-lime-400 dark:bg-lime-500 dark:hover:bg-lime-400 text-white dark:text-black font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg shadow-lime-500/30 dark:shadow-[0_0_20px_rgba(132,204,22,0.4)]"
            >
              Xem Dự Án
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-slate-300 dark:border-slate-600 hover:border-lime-500 dark:hover:border-lime-400 text-slate-700 dark:text-slate-300 hover:text-lime-600 dark:hover:text-lime-400 font-medium py-3 px-8 rounded-full transition-all"
            >
              Liên Hệ
            </button>
          </div>
        </div>

        <div className="relative group flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-lime-500/30 bg-white/50 dark:bg-slate-900/50 backdrop-blur flex items-center justify-center shadow-2xl dark:shadow-none transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-200/20 to-transparent dark:from-lime-500/10 dark:to-transparent"></div>
            <div className="text-center p-6">
              <Code
                size={64}
                className="mx-auto text-lime-600 dark:text-lime-400 mb-4 animate-pulse"
              />
              <div className="font-mono text-sm text-lime-700 dark:text-lime-400/80">
                &lt;Code is poetry /&gt;
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 opacity-50">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 bg-lime-500/50 rounded animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          {/* Decorative frame */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-lime-500 rounded-tr-3xl"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-lime-500 rounded-bl-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Section;
