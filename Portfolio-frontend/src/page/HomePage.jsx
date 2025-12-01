import {
  Code,
  Smartphone,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  X,
  Menu,
  ChevronRight,
  Terminal,
  Database,
  Globe,
  Cpu,
  Sun,
  Moon,
} from "lucide-react";
import Header from "../components/Header";
import Section from "../components/Section";
import Skill from "../components/Skill";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

let HomePage = () => {
  const { isDark } = useContext(AppContext);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-300 font-sans selection:bg-lime-500 selection:text-white">
        <Header></Header>
        <Section></Section>
        <Skill></Skill>
        <Project></Project>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomePage;
