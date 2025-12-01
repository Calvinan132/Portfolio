import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ExternalLink, X } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full-stack Development",
    shortDesc: "Nền tảng thương mại điện tử với thanh toán tích hợp.",
    fullDesc:
      "Một giải pháp thương mại điện tử toàn diện cho phép người dùng duyệt sản phẩm, thêm vào giỏ hàng và thanh toán trực tuyến. Hệ thống bao gồm trang quản trị cho admin để quản lý đơn hàng và tồn kho.",
    tech: ["ReactJS", "Node.js", "MongoDB", "Stripe"],
    color: "from-lime-600 to-slate-700",
    link: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Web Application",
    shortDesc: "Ứng dụng quản lý công việc nhóm theo thời gian thực.",
    fullDesc:
      "Ứng dụng kiểu Trello/Jira giúp các nhóm quản lý tiến độ dự án. Hỗ trợ kéo thả (drag & drop), bình luận thời gian thực và thông báo qua email.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    color: "from-slate-700 to-lime-600",
    link: "#",
  },
  {
    id: 3,
    title: "Travel Booking UI",
    category: "Frontend Design",
    shortDesc: "Giao diện đặt tour du lịch với trải nghiệm UX tối ưu.",
    fullDesc:
      "Tập trung vào UI/UX, website này cung cấp trải nghiệm mượt mà với các hiệu ứng animation đẹp mắt, chế độ dark mode và tối ưu hóa SEO.",
    tech: ["Next.js", "Framer Motion", "Sass"],
    color: "from-lime-700 to-gray-800",
    link: "#",
  },
  {
    id: 4,
    title: "Crypto Dashboard",
    category: "Data Visualization",
    shortDesc: "Bảng theo dõi biến động tiền ảo realtime.",
    fullDesc:
      "Dashboard hiển thị biểu đồ nến, lịch sử giao dịch và phân tích xu hướng của các loại tiền điện tử phổ biến. Dữ liệu được cập nhật mỗi giây.",
    tech: ["React", "D3.js", "WebSockets"],
    color: "from-gray-800 to-lime-700",
    link: "#",
  },
  {
    id: 5,
    title: "AI Chat Interface",
    category: "AI Integration",
    shortDesc: "Giao diện chat tích hợp OpenAI GPT-4.",
    fullDesc:
      "Một giao diện chat hiện đại, hỗ trợ lưu lịch sử hội thoại, highlight code syntax và xuất dữ liệu ra file PDF.",
    tech: ["React", "OpenAI API", "Prisma"],
    color: "from-lime-800 to-slate-800",
    link: "#",
  },
  {
    id: 6,
    title: "Personal Blog CMS",
    category: "CMS Development",
    shortDesc: "Hệ quản trị nội dung tùy chỉnh cho blog cá nhân.",
    fullDesc:
      "CMS nhanh, nhẹ, hỗ trợ viết bài bằng Markdown, tối ưu hóa hình ảnh tự động và comment system.",
    tech: ["Gatsby", "GraphQL", "Netlify CMS"],
    color: "from-slate-800 to-lime-800",
    link: "#",
  },
];

let Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="projects" className="py-20  dark:bg-slate-900/100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
              <span className="w-2 h-8 bg-lime-500 rounded-full"></span>
              Dự Án
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Các sản phẩm tâm huyết.
            </p>
          </div>
          <div className="hidden md:block text-lime-600 dark:text-lime-400 font-mono text-sm">
            // Click card to view details
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-lime-500 transition-all cursor-pointer hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-[0_10px_30px_-10px_rgba(163,230,53,0.15)]"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Placeholder with Gradient */}
              <div
                className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/50 backdrop-blur px-3 py-1 rounded text-xs font-bold text-lime-700 dark:text-lime-400 shadow-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded border border-slate-200 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center text-lime-600 dark:text-lime-400 text-sm font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Xem chi tiết <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/40 dark:bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-lime-500/20 shadow-2xl dark:shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            {/* Modal Header Image */}
            <div
              className={`h-48 w-full bg-gradient-to-br ${selectedProject.color} relative`}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-red-500/80 text-white rounded-full backdrop-blur transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                    {selectedProject.title}
                  </h3>
                  <span className="text-lime-600 dark:text-lime-400 text-sm font-medium">
                    {selectedProject.category}
                  </span>
                </div>
                <a
                  href={selectedProject.link}
                  className="flex items-center gap-2 bg-lime-500 hover:bg-lime-600 dark:hover:bg-lime-400 text-white dark:text-black px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-md dark:shadow-none"
                >
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-2 font-bold">
                    Mô tả
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-2 font-bold">
                    Công nghệ
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded text-sm hover:border-lime-500 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 text-center text-xs text-slate-500">
              Nhấn ESC để đóng
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
