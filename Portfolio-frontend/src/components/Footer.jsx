let Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-900 text-center text-slate-500 text-sm transition-colors duration-300">
      <p>
        © {new Date().getFullYear()} Designed & Built by Me.{" "}
        <span className="text-lime-600 dark:text-lime-500/50">
          React Portfolio.
        </span>
      </p>
    </footer>
  );
};

export default Footer;
