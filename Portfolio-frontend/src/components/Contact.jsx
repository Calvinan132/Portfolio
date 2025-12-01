import { Github, Linkedin, Mail } from "lucide-react";

let Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-slate-100 dark:bg-gradient-to-b dark:from-slate-900/90 dark:to-slate-950 relative transition-colors duration-300"
    >
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Liên hệ với tôi
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
          Luôn sẵn sàng cho những ý tưởng mới và cơ hội hợp tác thú vị.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-4 bg-white dark:bg-slate-800 rounded-full shadow-md dark:shadow-none hover:bg-lime-500 hover:text-white dark:hover:bg-lime-500 dark:hover:text-black transition-all transform hover:scale-110 text-slate-700 dark:text-slate-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <a
          href="mailto:contact@email.com"
          className="inline-block border-2 border-lime-500 text-lime-600 dark:text-lime-400 px-8 py-3 rounded-full font-bold hover:bg-lime-500 hover:text-white dark:hover:text-black transition-all"
        >
          Gửi Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
