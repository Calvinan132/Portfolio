import { Menu, Terminal, Sun, Moon, X } from "lucide-react";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

let Header = () => {
  const { isDark, toggleTheme, isMenuOpen, scrollToSection, setIsMenuOpen } =
    useContext(AppContext);
  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 
          "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-lime-500/20 py-4 shadow-sm dark:shadow-none"
          `}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
          <Terminal className="text-lime-600 dark:text-lime-400" size={28} />
          <span>
            An
            <span className="text-lime-600 dark:text-lime-400">.PORTFOLIO</span>
          </span>
        </div>
        <div className="flex items-center dark:text-white gap-6">
          <nav className="hidden md:flex gap-8 font-medium">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors relative group"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-500 transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>
          <button
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-lime-400"
            aria-label="Toggle Theme"
            onClick={toggleTheme}
          >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button
            className="md:hidden text-slate-900 dark:text-lime-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-lime-500/20 p-4 flex flex-col gap-4 shadow-xl dark:text-white">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              className="text-left py-2 hover:text-lime-600 dark:hover:text-lime-400 border-b border-slate-100 dark:border-slate-800 last:border-0"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
