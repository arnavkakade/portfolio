import { useState, useEffect, useRef, ReactNode } from "react";
import {
  Code, Database, Cloud, Wrench, Linkedin, Mail, Phone, MapPin,
  ChevronDown, Menu, X, Moon, Sun, Award, Briefcase, GraduationCap,
  Send, Download, ArrowUp, Zap, Globe, Shield, Bot, CreditCard,
  FileText, Users, TrendingUp, CheckCircle, Play, Layers, Terminal,
  Cpu, Server, Github
} from "lucide-react";

/* ═══════════════════════════════════════════
   THEME CONFIG
   ═══════════════════════════════════════════ */
const themes = {
  dark: {
    bg: "#0a0a0f", bgSecondary: "#12121a", bgTertiary: "#1a1a28",
    bgCard: "rgba(255,255,255,0.03)", bgCardHover: "rgba(255,255,255,0.06)",
    text: "#e8e8f0", textSecondary: "#8888a8", textMuted: "#5c5c78",
    accent: "#6366f1", accentSecondary: "#a78bfa",
    accentGlow: "rgba(99,102,241,0.15)",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a78bfa 50%, #ec4899 100%)",
    gradientSubtle: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(167,139,250,0.05) 100%)",
    border: "rgba(255,255,255,0.06)", borderHover: "rgba(99,102,241,0.3)",
    shadow: "0 8px 32px rgba(0,0,0,0.4)", shadowLg: "0 24px 64px rgba(0,0,0,0.5)",
  },
  light: {
    bg: "#fafafe", bgSecondary: "#f0f0f8", bgTertiary: "#e8e8f2",
    bgCard: "rgba(255,255,255,0.8)", bgCardHover: "rgba(255,255,255,0.95)",
    text: "#1a1a2e", textSecondary: "#555577", textMuted: "#8888a8",
    accent: "#6366f1", accentSecondary: "#7c3aed",
    accentGlow: "rgba(99,102,241,0.1)",
    gradient: "linear-gradient(135deg, #6366f1 0%, #7c3aed 50%, #db2777 100%)",
    gradientSubtle: "linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(124,58,237,0.04) 100%)",
    border: "rgba(0,0,0,0.08)", borderHover: "rgba(99,102,241,0.3)",
    shadow: "0 8px 32px rgba(0,0,0,0.08)", shadowLg: "0 24px 64px rgba(0,0,0,0.12)",
  }
};

type Theme = typeof themes.dark;

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */
const skills: Record<string, { name: string; level: number }[]> = {
  Frontend: [
    { name: "React.js", level: 92 }, { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 90 }, { name: "Redux", level: 82 },
    { name: "PrimeReact", level: 85 }, { name: "HTML5/CSS3", level: 90 },
  ],
  Backend: [
    { name: "C# / .NET Core 8", level: 93 }, { name: "ASP.NET Web API", level: 92 },
    { name: "FastAPI (Python)", level: 80 }, { name: "Entity Framework", level: 88 },
    { name: "Clean Architecture", level: 85 }, { name: "REST API Design", level: 90 },
  ],
  Database: [
    { name: "SQL Server", level: 90 }, { name: "PostgreSQL", level: 85 },
    { name: "pgVector", level: 78 }, { name: "Query Optimization", level: 82 },
    { name: "Stored Procedures", level: 85 },
  ],
  "Cloud & AI": [
    { name: "Azure Functions", level: 85 }, { name: "Azure OpenAI", level: 82 },
    { name: "Azure Blob Storage", level: 84 }, { name: "Azure AD / Auth", level: 80 },
    { name: "CI/CD Pipelines", level: 78 }, { name: "RAG Pipelines", level: 80 },
  ],
  Tools: [
    { name: "Git / GitHub", level: 90 }, { name: "Azure DevOps", level: 82 },
    { name: "Docker (Basics)", level: 68 }, { name: "Postman / Swagger", level: 88 },
    { name: "Jira / Agile", level: 85 }, { name: "Figma", level: 70 },
  ],
};

interface Project {
  title: string; category: string; description: string;
  problem: string; solution: string; impact: string;
  tech: string[]; features: string[];
  icon: typeof Bot; color: string;
}

const projects: Project[] = [
  {
    title: "AI Knowledge Base & RAG Chatbot", category: "AI",
    description: "Production-grade document Q&A platform with full PDF ingestion, semantic vector search, and context-aware AI responses.",
    problem: "Enterprise teams spent hours manually searching through documents for answers, leading to slow query resolution.",
    solution: "Built a RAG-based chatbot with PDF parsing, chunking, embedding generation, and semantic search via pgVector + Azure OpenAI.",
    impact: "Reduced document lookup time by 60%+ and manual query resolution by ~40%.",
    tech: ["React.js", "FastAPI", "Azure OpenAI", "PostgreSQL", "pgVector", "Azure Blob", "JWT"],
    features: ["Real-time SSE streaming", "Multi-session chat history", "Markdown rendering", "RBAC auth", "Scalable Azure deployment"],
    icon: Bot, color: "#6366f1",
  },
  {
    title: "Smart QR Electoral Data System", category: "AI",
    description: "AI-powered system to extract and structure data from electoral roll PDFs, eliminating manual data entry for field workers.",
    problem: "Processing electoral PDF rolls was manual, slow, and error-prone — requiring massive human effort.",
    solution: "Leveraged Azure OpenAI for intelligent data extraction with serverless Azure Functions APIs and a mobile-first React app.",
    impact: "Reduced processing effort by an estimated 70% with mobile-first field worker access.",
    tech: ["React.js", "Azure Functions", "Azure OpenAI", "Azure Blob Storage"],
    features: ["Mobile-first UX", "QR scanning", "Serverless backend", "Figma-driven design", "High-volume PDF processing"],
    icon: FileText, color: "#a78bfa",
  },
  {
    title: "Driving School Management SaaS", category: "Full Stack",
    description: "Multi-platform SaaS with admin dashboard, mobile apps for trainers/students, and automated messaging.",
    problem: "Driving schools lacked a unified system to manage admins, trainers, students, scheduling, and communications.",
    solution: "Architected a multi-platform backend with Azure Functions powering React admin + Flutter mobile apps with role-based access.",
    impact: "Streamlined operations with automated OTP auth, WhatsApp messaging, and cross-platform API compatibility.",
    tech: ["React.js", "PrimeReact", "Azure Functions", "Flutter APIs", "Brevo", "WhatsApp Meta API"],
    features: ["RBAC for 3 roles", "OTP auth via Brevo", "WhatsApp notifications", "Cross-platform APIs", "Azure cloud deployment"],
    icon: Users, color: "#ec4899",
  },
  {
    title: "Subscription & Payment Module", category: "Full Stack",
    description: "Enterprise subscription management with Razorpay payment gateway integration for seamless billing.",
    problem: "Clients needed a reliable, automated subscription and payment collection system integrated into their SaaS products.",
    solution: "Built a subscription lifecycle module with Razorpay integration, handling plan management, recurring payments, and invoicing.",
    impact: "Enabled automated billing with zero manual intervention and reliable payment tracking.",
    tech: ["ASP.NET Core", "React.js", "Razorpay API", "SQL Server", "Entity Framework"],
    features: ["Plan management", "Recurring billing", "Invoice generation", "Payment webhooks", "Admin dashboard"],
    icon: CreditCard, color: "#f59e0b",
  },
  {
    title: "Dynamic Form & Syllabus Builder", category: "Full Stack",
    description: "Configurable form builder and syllabus management system for educational and enterprise use cases.",
    problem: "Organizations needed dynamic, no-code form creation and curriculum management without developer involvement.",
    solution: "Designed a flexible form schema engine with drag-and-drop UI, validation rules, and linked syllabus management.",
    impact: "Empowered non-technical users to create and manage forms and syllabi independently.",
    tech: ["React.js", "TypeScript", "ASP.NET Core", "SQL Server", "PrimeReact"],
    features: ["Drag-and-drop builder", "Dynamic validation", "Syllabus linking", "Template system", "Export capabilities"],
    icon: Layers, color: "#10b981",
  },
  {
    title: "Employee-Department Management System", category: "Full Stack",
    description: "Full-stack CRUD application with relational schema, stored procedures, and React UI — built as a solo project.",
    problem: "Needed a comprehensive employee management system with proper relational data modeling and clean architecture.",
    solution: "Designed relational schema, stored procedures, CRUD APIs in ASP.NET Core, and a complete React frontend as a solo developer.",
    impact: "Translated from intern to production-ready developer within 3 months with this foundational project.",
    tech: ["ASP.NET Core", "React.js", "SQL Server", "Entity Framework", "JavaScript"],
    features: ["Relational schema design", "Stored procedures", "Full CRUD operations", "Clean Architecture", "Solo development"],
    icon: Server, color: "#06b6d4",
  },
];

const experience = [
  {
    role: "Associate – Technology", company: "Arieotech Solutions", period: "Apr 2025 – Present", type: "current",
    highlights: [
      "Architected end-to-end RAG-based AI chatbot using Azure OpenAI, FastAPI, and pgVector",
      "Engineered Azure Functions serverless APIs consumed by React.js front-ends",
      "Optimized SQL Server & PostgreSQL stored procedures, reducing data retrieval latency",
      "Integrated Azure Blob Storage & Azure AD authentication into production modules",
    ]
  },
  {
    role: "Junior Associate – Technology", company: "Arieotech Solutions", period: "Jul 2024 – Apr 2025", type: "past",
    highlights: [
      "Delivered production features in ASP.NET Core 8 with Clean Architecture & SOLID principles",
      "Built RESTful APIs with Entity Framework Core, improving team development velocity",
      "Enhanced UI/UX with PrimeReact & TypeScript; maintained zero-downtime deployments",
      "Contributed to 3+ live client-facing product releases",
    ]
  },
  {
    role: "Project Trainee", company: "Arieotech Solutions", period: "Aug 2023 – Jun 2024", type: "past",
    highlights: [
      "Built full-stack Employee-Department Management System as solo project",
      "Designed relational schema, stored procedures, CRUD APIs, and React UI",
      "Translated internship learnings into production-ready code within 3 months",
    ]
  },
];

const certifications = [
  { name: "Azure AI Engineer Associate (AI-102)", issuer: "Microsoft", icon: Shield, color: "#6366f1" },
  { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft", icon: Cloud, color: "#a78bfa" },
  { name: "15 Days of SQL Masterclass 2025", issuer: "Udemy", icon: Database, color: "#ec4899" },
  { name: "Build ASP.NET Core Web API (.NET 8)", issuer: "Udemy", icon: Server, color: "#f59e0b" },
  { name: "AI Foundations", issuer: "LinkedIn Learning", icon: Cpu, color: "#10b981" },
  { name: "Generative AI Leader", issuer: "LinkedIn Learning", icon: Zap, color: "#06b6d4" },
];

const achievements = [
  { label: "Years Experience", value: 2.5, suffix: "+", icon: Briefcase },
  { label: "Live Products Shipped", value: 5, suffix: "+", icon: Globe },
  { label: "Query Time Reduced", value: 40, suffix: "%", icon: TrendingUp },
  { label: "Doc Lookup Improved", value: 60, suffix: "%", icon: Zap },
  { label: "Certifications Earned", value: 6, suffix: "", icon: Award },
  { label: "Azure Services Used", value: 8, suffix: "+", icon: Cloud },
];

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Certifications", "Achievements", "Contact"];

/* ═══════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════ */
function useCounter(end: number, duration = 2000, startOn = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startOn) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start * 10) / 10);
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, startOn]);
  return count;
}

function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════ */
function Section({ id, children }: { id: string; children: ReactNode }) {
  const [ref, inView] = useInView(0.08);
  return (
    <section id={id} ref={ref} style={{
      opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)",
      transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
    }}>{children}</section>
  );
}

function CounterCard({ item, index, t, inView }: { item: typeof achievements[0]; index: number; t: Theme; inView: boolean }) {
  const count = useCounter(item.value, 2000, inView);
  const Icon = item.icon;
  return (
    <div style={{
      background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 16,
      padding: "28px 20px", textAlign: "center", transition: "all 0.3s", cursor: "default",
    }}
    onMouseEnter={e => { const el = e.currentTarget; el.style.border = `1px solid ${t.borderHover}`; el.style.transform = "translateY(-4px)"; el.style.boxShadow = t.shadow; }}
    onMouseLeave={e => { const el = e.currentTarget; el.style.border = `1px solid ${t.border}`; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}>
      <Icon size={28} style={{ color: t.accent, marginBottom: 12 }} />
      <div style={{ fontSize: 36, fontWeight: 700, background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1 }}>
        {typeof count === "number" && count % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}{item.suffix}
      </div>
      <div style={{ color: t.textSecondary, fontSize: 13, marginTop: 8, fontWeight: 500, letterSpacing: 0.5 }}>{item.label}</div>
    </div>
  );
}

function SkillBar({ skill, index, t, inView }: { skill: { name: string; level: number }; index: number; t: Theme; inView: boolean }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: t.text }}>{skill.name}</span>
        <span style={{ fontSize: 12, color: t.textMuted, fontWeight: 600 }}>{skill.level}%</span>
      </div>
      <div style={{ height: 6, background: t.bgTertiary, borderRadius: 3, overflow: "hidden" }}>
        <div style={{
          height: "100%", width: inView ? `${skill.level}%` : "0%",
          background: t.gradient, borderRadius: 3,
          transition: `width 1s cubic-bezier(0.16,1,0.3,1) ${index * 0.08}s`,
        }} />
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose, t }: { project: Project | null; onClose: () => void; t: Theme }) {
  if (!project) return null;
  const Icon = project.icon;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 1000, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center", padding: 20, animation: "fadeIn 0.3s ease",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: t.bgSecondary, borderRadius: 20, maxWidth: 640, width: "100%", maxHeight: "85vh",
        overflow: "auto", border: `1px solid ${t.border}`, boxShadow: t.shadowLg,
      }}>
        <div style={{ padding: "32px 32px 0", borderBottom: `1px solid ${t.border}`, paddingBottom: 24 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: `${project.color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={24} style={{ color: project.color }} />
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: t.text, margin: 0 }}>{project.title}</h3>
                <span style={{ fontSize: 12, color: t.accent, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{project.category}</span>
              </div>
            </div>
            <button onClick={onClose} style={{ background: "none", border: "none", color: t.textMuted, cursor: "pointer", padding: 4 }}><X size={20} /></button>
          </div>
        </div>
        <div style={{ padding: 32 }}>
          <p style={{ color: t.textSecondary, lineHeight: 1.7, marginBottom: 24, fontSize: 14 }}>{project.description}</p>
          {([["Problem", project.problem, "🔍"], ["Solution", project.solution, "💡"], ["Impact", project.impact, "📈"]] as const).map(([label, text, emoji]) => (
            <div key={label} style={{ marginBottom: 20, padding: 16, background: t.bgCard, borderRadius: 12, border: `1px solid ${t.border}` }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: t.accent, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>{emoji} {label}</div>
              <p style={{ color: t.text, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{text}</p>
            </div>
          ))}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: t.accent, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>🛠 Tech Stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.tech.map(t2 => (
                <span key={t2} style={{ padding: "5px 12px", background: `${project.color}15`, color: project.color, borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{t2}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: t.accent, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>✨ Key Features</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {project.features.map(f => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, color: t.textSecondary, fontSize: 13 }}>
                  <CheckCircle size={14} style={{ color: "#10b981", flexShrink: 0 }} />{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════ */
export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectFilter, setProjectFilter] = useState("All");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSent, setFormSent] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const t = themes[theme];

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
      const sections = navItems.map(n => document.getElementById(n.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i]!.getBoundingClientRect().top <= 120) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileMenu(false);
  };

  const handleForm = () => {
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const filteredProjects = projectFilter === "All" ? projects : projects.filter(p => p.category === projectFilter);
  const categoryIcons = [Code, Server, Database, Cloud, Wrench];

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${t.bg}; }
        ::-webkit-scrollbar-thumb { background: ${t.accent}44; border-radius: 3px; }
        ::selection { background: ${t.accent}44; color: ${t.text}; }
        input:focus, textarea:focus { outline: none; border-color: ${t.accent} !important; box-shadow: 0 0 0 3px ${t.accentGlow} !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; align-items: center; gap: 4px; }
          .hero-grid { flex-direction: column !important; text-align: center !important; }
          .hero-title-text { font-size: 36px !important; }
          .hero-buttons { justify-content: center !important; flex-wrap: wrap !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .projects-grid { grid-template-columns: 1fr !important; }
          .achievements-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .certs-grid { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; }
          .section-pad { padding: 60px 16px !important; }
          .hero-visual { display: none !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div style={{ background: t.bg, color: t.text, minHeight: "100vh", transition: "background 0.4s, color 0.4s" }}>

        {/* ══ NAVBAR ══ */}
        <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 900, background: `${t.bg}dd`, backdropFilter: "blur(20px)", borderBottom: `1px solid ${t.border}` }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            <div style={{ fontWeight: 800, fontSize: 20, cursor: "pointer" }} onClick={() => scrollTo("home")}>
              <span style={{ background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>AK</span>
              <span style={{ color: t.textMuted, fontWeight: 400, fontSize: 14, marginLeft: 8 }}>Portfolio</span>
            </div>
            <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {navItems.map(item => (
                <button key={item} onClick={() => scrollTo(item)} style={{
                  background: activeSection === item ? t.accentGlow : "none",
                  border: "none", color: activeSection === item ? t.accent : t.textSecondary,
                  padding: "6px 14px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 500, transition: "all 0.2s", fontFamily: "'Outfit', sans-serif",
                }}>{item}</button>
              ))}
              {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} style={{
                background: t.bgCard, border: `1px solid ${t.border}`, borderRadius: 8, padding: 8,
                cursor: "pointer", color: t.textSecondary, marginLeft: 8, display: "flex", alignItems: "center",
              }}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button> */}
            </div>
            <div className="mobile-toggle" style={{ display: "none" }}>
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} style={{ background: "none", border: "none", color: t.textSecondary, cursor: "pointer", padding: 8 }}>
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setMobileMenu(!mobileMenu)} style={{ background: "none", border: "none", color: t.text, cursor: "pointer", padding: 8 }}>
                {mobileMenu ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
          {mobileMenu && (
            <div style={{ background: t.bgSecondary, borderTop: `1px solid ${t.border}`, padding: 16, display: "flex", flexDirection: "column", gap: 4 }}>
              {navItems.map(item => (
                <button key={item} onClick={() => scrollTo(item)} style={{
                  background: activeSection === item ? t.accentGlow : "none",
                  border: "none", color: activeSection === item ? t.accent : t.textSecondary,
                  padding: "10px 16px", borderRadius: 8, cursor: "pointer", fontSize: 14, fontWeight: 500, textAlign: "left", fontFamily: "'Outfit', sans-serif",
                }}>{item}</button>
              ))}
            </div>
          )}
        </nav>

        {/* ══ HERO ══ */}
        <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
            <div style={{ position: "absolute", top: "10%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: `${t.accent}08`, filter: "blur(80px)", animation: "float 8s ease-in-out infinite" }} />
            <div style={{ position: "absolute", bottom: "10%", right: "10%", width: 350, height: 350, borderRadius: "50%", background: `${t.accentSecondary}08`, filter: "blur(80px)", animation: "float 10s ease-in-out infinite 2s" }} />
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 200, height: 200, borderRadius: "50%", background: "#ec489908", filter: "blur(60px)", animation: "float 6s ease-in-out infinite 1s" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(${t.border} 1px, transparent 1px), linear-gradient(90deg, ${t.border} 1px, transparent 1px)`, backgroundSize: "80px 80px", opacity: 0.3 }} />
          </div>
          <div className="hero-grid" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", gap: 60, position: "relative", zIndex: 1, width: "100%" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", background: t.accentGlow, borderRadius: 20, marginBottom: 24, border: `1px solid ${t.accent}22` }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", animation: "pulse 2s ease-in-out infinite" }} />
                <span style={{ fontSize: 13, color: t.accent, fontWeight: 600 }}>Available for opportunities</span>
              </div>
              <h1 className="hero-title-text" style={{
                fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginBottom: 16,
                background: t.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%", animation: "gradientMove 4s ease-in-out infinite",
              }}>Arnav Kakade</h1>
              <h2 style={{ fontSize: 20, fontWeight: 500, color: t.textSecondary, marginBottom: 12 }}>
                Associate – Technology <span style={{ color: t.textMuted }}>|</span> Full Stack Developer
              </h2>
              <p style={{ fontSize: 15, color: t.textMuted, lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
                Building scalable, high-performance applications with <span style={{ color: t.accent, fontWeight: 600 }}>.NET Core</span>, <span style={{ color: t.accentSecondary, fontWeight: 600 }}>React</span>, <span style={{ color: "#ec4899", fontWeight: 600 }}>Azure</span>, and <span style={{ color: "#10b981", fontWeight: 600 }}>AI</span>. Passionate about clean architecture, cloud-native solutions, and turning complex business problems into elegant software.
              </p>
              <div className="hero-buttons" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={() => scrollTo("projects")} style={{ background: t.gradient, color: "#fff", border: "none", padding: "12px 28px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 600, transition: "all 0.3s", boxShadow: `0 4px 20px ${t.accent}33`, display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Outfit', sans-serif" }}>
                  <Play size={16} /> View Projects
                </button>
                <button onClick={() => scrollTo("contact")} style={{ background: t.bgCard, color: t.text, border: `1px solid ${t.border}`, padding: "12px 28px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 600, transition: "all 0.3s", backdropFilter: "blur(10px)", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Outfit', sans-serif" }}>
                  <Mail size={16} /> Contact Me
                </button>
                <a href="./Arnav_Kakade_Resume.pdf" download style={{ background: "none", color: t.accent, border: `1px solid ${t.accent}44`, padding: "12px 28px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 600, transition: "all 0.3s", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Outfit', sans-serif" }}>
                  <Download size={16} /> Resume
                </a>
              </div>
              <div style={{ display: "flex", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
                {[["2.5+", "Years Exp"], ["5+", "Products"], ["6", "Certifications"]].map(([val, label]) => (
                  <div key={label}><div style={{ fontSize: 24, fontWeight: 800, color: t.text }}>{val}</div><div style={{ fontSize: 12, color: t.textMuted, fontWeight: 500 }}>{label}</div></div>
                ))}
              </div>
            </div>
            <div className="hero-visual" style={{ flex: "0 0 auto", position: "relative" }}>
              <div style={{ width: 320, height: 320, borderRadius: "50%", position: "relative", background: t.gradientSubtle, border: `2px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {[Code, Database, Cloud, Shield, Terminal, Cpu].map((Icon, i) => {
                  const angle = (i * 60) * (Math.PI / 180); const r = 145;
                  return (
                    <div key={i} style={{ position: "absolute", left: `calc(50% + ${Math.cos(angle) * r}px - 20px)`, top: `calc(50% + ${Math.sin(angle) * r}px - 20px)`, width: 40, height: 40, borderRadius: 10, background: t.bgCard, border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", animation: `float ${5 + i}s ease-in-out infinite ${i * 0.5}s`, backdropFilter: "blur(10px)" }}>
                      <Icon size={18} style={{ color: t.accent }} />
                    </div>
                  );
                })}
                <div style={{ width: 120, height: 120, borderRadius: "50%", background: t.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, fontWeight: 900, color: "#fff", boxShadow: `0 0 60px ${t.accent}33` }}>AK</div>
                <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: `1px dashed ${t.accent}22`, animation: "spin 30s linear infinite" }} />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={() => scrollTo("about")}>
            <span style={{ fontSize: 11, color: t.textMuted, letterSpacing: 2, textTransform: "uppercase" }}>Scroll</span>
            <ChevronDown size={18} style={{ color: t.textMuted, animation: "float 2s ease-in-out infinite" }} />
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <Section id="about">
          <div className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: t.accent, letterSpacing: 3, textTransform: "uppercase" }}>About Me</span>
              <h2 style={{ fontSize: 36, fontWeight: 800, marginTop: 12, color: t.text }}>Crafting Digital Experiences</h2>
            </div>
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
              <div>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: t.textSecondary, marginBottom: 20 }}>Results-driven <strong style={{ color: t.text }}>.NET Full Stack Developer</strong> with 2.5+ years of experience building scalable, high-performance web applications and AI-integrated platforms at <strong style={{ color: t.accent }}>Arieotech Solutions</strong>.</p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: t.textSecondary, marginBottom: 20 }}>I specialize in <strong style={{ color: t.text }}>C#, .NET Core 8, React, TypeScript, SQL Server, and PostgreSQL</strong>, with deep expertise in Azure cloud services, Clean Architecture, and RESTful API design. I've architected and shipped a production-grade <strong style={{ color: t.accent }}>RAG-based AI chatbot</strong> using Azure OpenAI, FastAPI, and pgVector.</p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: t.textSecondary }}>I'm passionate about building systems that combine intelligent automation, clean engineering, and real business impact — from serverless APIs to AI-powered document processing platforms.</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[{ icon: Code, label: "Full Stack", desc: ".NET, React, TypeScript" }, { icon: Cloud, label: "Azure Cloud", desc: "Functions, Blob, AD, DevOps" }, { icon: Bot, label: "AI & RAG", desc: "OpenAI, pgVector, NLP" }, { icon: Database, label: "Databases", desc: "SQL Server, PostgreSQL" }].map((item, i) => (
                  <div key={i} style={{ padding: 24, background: t.bgCard, borderRadius: 16, border: `1px solid ${t.border}`, transition: "all 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = t.borderHover; e.currentTarget.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.transform = "translateY(0)"; }}>
                    <item.icon size={24} style={{ color: t.accent, marginBottom: 12 }} />
                    <div style={{ fontWeight: 700, fontSize: 14, color: t.text, marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: t.textMuted }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ══ SKILLS ══ */}
        <Section id="skills">
          <div className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: t.accent, letterSpacing: 3, textTransform: "uppercase" }}>Technical Skills</span>
              <h2 style={{ fontSize: 36, fontWeight: 800, marginTop: 12, color: t.text }}>My Tech Arsenal</h2>
            </div>
            {(() => { const [ref, inView] = useInView(0.1); return (
              <div ref={ref} className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                {Object.entries(skills).map(([category, items], ci) => { const CatIcon = categoryIcons[ci]; return (
                  <div key={category} style={{ padding: 28, background: t.bgCard, borderRadius: 16, border: `1px solid ${t.border}`, transition: "all 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = t.borderHover; e.currentTarget.style.boxShadow = t.shadow; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.boxShadow = "none"; }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                      <CatIcon size={20} style={{ color: t.accent }} />
                      <span style={{ fontWeight: 700, fontSize: 15, color: t.text }}>{category}</span>
                    </div>
                    {items.map((skill, si) => <SkillBar key={skill.name} skill={skill} index={si} t={t} inView={inView} />)}
                  </div>
                ); })}
              </div>
            ); })()}
          </div>
        </Section>

        {/* ══ PROJECTS ══ */}
        <Section id="projects">
          <div className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: t.accent, letterSpacing: 3, textTransform: "uppercase" }}>Featured Projects</span>
              <h2 style={{ fontSize: 36, fontWeight: 800, marginTop: 12, color: t.text }}>What I've Built</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
              {["All", "AI", "Full Stack"].map(f => (
                <button key={f} onClick={() => setProjectFilter(f)} style={{
                  background: projectFilter === f ? t.accent : t.bgCard, color: projectFilter === f ? "#fff" : t.textSecondary,
                  border: `1px solid ${projectFilter === f ? t.accent : t.border}`, padding: "8px 20px", borderRadius: 20,
                  cursor: "pointer", fontSize: 13, fontWeight: 600, transition: "all 0.2s", fontFamily: "'Outfit', sans-serif",
                }}>{f}</button>
              ))}
            </div>
            <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {filteredProjects.map((p) => { const Icon = p.icon; return (
                <div key={p.title} onClick={() => setSelectedProject(p)} style={{
                  background: t.bgCard, borderRadius: 16, border: `1px solid ${t.border}`, overflow: "hidden", cursor: "pointer", transition: "all 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = p.color + "55"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = `0 12px 40px ${p.color}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ height: 140, background: `linear-gradient(135deg, ${p.color}12 0%, ${p.color}05 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <Icon size={48} style={{ color: p.color, opacity: 0.7 }} />
                    <div style={{ position: "absolute", top: 12, right: 12, padding: "4px 10px", background: `${p.color}18`, borderRadius: 12, fontSize: 11, fontWeight: 600, color: p.color }}>{p.category}</div>
                  </div>
                  <div style={{ padding: 24 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: t.text, marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: t.textMuted, lineHeight: 1.6, marginBottom: 16 }}>{p.description.slice(0, 100)}...</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {p.tech.slice(0, 4).map(tech => (<span key={tech} style={{ padding: "3px 10px", background: t.bgTertiary, borderRadius: 12, fontSize: 11, color: t.textSecondary, fontWeight: 500 }}>{tech}</span>))}
                      {p.tech.length > 4 && <span style={{ padding: "3px 10px", background: t.bgTertiary, borderRadius: 12, fontSize: 11, color: t.textMuted }}>+{p.tech.length - 4}</span>}
                    </div>
                  </div>
                </div>
              ); })}
            </div>
          </div>
        </Section>

        {/* ══ EXPERIENCE ══ */}
        <Section id="experience">
          <div className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: t.accent, letterSpacing: 3, textTransform: "uppercase" }}>Work Experience</span>
              <h2 style={{ fontSize: 36, fontWeight: 800, marginTop: 12, color: t.text }}>My Journey</h2>
            </div>
            <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
              <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${t.accent}, ${t.accentSecondary}, ${t.accent}33)` }} />
              {experience.map((exp, i) => (
                <div key={i} style={{ display: "flex", gap: 32, marginBottom: 40, position: "relative", paddingLeft: 52 }}>
                  <div style={{ position: "absolute", left: 12, top: 4, width: 18, height: 18, borderRadius: "50%", background: exp.type === "current" ? t.accent : t.bgTertiary, border: `3px solid ${exp.type === "current" ? t.accent : t.textMuted}`, boxShadow: exp.type === "current" ? `0 0 20px ${t.accent}44` : "none", zIndex: 1 }} />
                  <div style={{ flex: 1, padding: 28, background: t.bgCard, borderRadius: 16, border: `1px solid ${exp.type === "current" ? t.accent + "33" : t.border}`, transition: "all 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = t.borderHover; e.currentTarget.style.boxShadow = t.shadow; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = exp.type === "current" ? t.accent + "33" : t.border; e.currentTarget.style.boxShadow = "none"; }}>
                    {exp.type === "current" && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", background: "#10b98118", borderRadius: 12, marginBottom: 12, fontSize: 11, color: "#10b981", fontWeight: 700 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", animation: "pulse 2s infinite" }} /> Current Role
                      </span>
                    )}
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: t.text, marginBottom: 4 }}>{exp.role}</h3>
                    <div style={{ fontSize: 14, color: t.accent, fontWeight: 600, marginBottom: 4 }}>{exp.company}</div>
                    <div style={{ fontSize: 12, color: t.textMuted, marginBottom: 16 }}>{exp.period}</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {exp.highlights.map((h, hi) => (
                        <div key={hi} style={{ display: "flex", gap: 10, fontSize: 13, color: t.textSecondary, lineHeight: 1.6 }}>
                          <CheckCircle size={14} style={{ color: t.accent, flexShrink: 0, marginTop: 3 }} /><span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 32, position: "relative", paddingLeft: 52 }}>
                <div style={{ position: "absolute", left: 12, top: 4, width: 18, height: 18, borderRadius: "50%", background: t.bgTertiary, border: `3px solid ${t.textMuted}`, zIndex: 1 }} />
                <div style={{ flex: 1, padding: 28, background: t.bgCard, borderRadius: 16, border: `1px solid ${t.border}` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <GraduationCap size={20} style={{ color: t.accent }} />
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: t.text }}>B.E. Computer Engineering</h3>
                  </div>
                  <div style={{ fontSize: 14, color: t.accent, fontWeight: 600, marginBottom: 4 }}>PES Modern College of Engineering, Pune</div>
                  <div style={{ fontSize: 12, color: t.textMuted }}>2019 – 2023</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ══ CERTIFICATIONS ══ */}
        <Section id="certifications">
          <div className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: t.accent, letterSpacing: 3, textTransform: "uppercase" }}>Certifications</span>
              <h2 style={{ fontSize: 36, fontWeight: 800, marginTop: 12, color: t.text }}>Credentials & Learning</h2>
            </div>
            <div className="certs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 900, margin: "0 auto" }}>
              {certifications.map((cert, i) => { const Icon = cert.icon; return (
                <div key={i} style={{ padding: 24, background: t.bgCard, borderRadius: 16, border: `1px solid ${t.border}`, transition: "all 0.3s", display: "flex", alignItems: "flex-start", gap: 16 }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = cert.color + "44"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 8px 30px ${cert.color}12`; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${cert.color}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={22} style={{ color: cert.color }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: t.text, marginBottom: 4, lineHeight: 1.3 }}>{cert.name}</div>
                    <div style={{ fontSize: 12, color: t.textMuted, fontWeight: 500 }}>{cert.issuer}</div>
                  </div>
                </div>
              ); })}
            </div>
          </div>
        </Section>

        {/* ══ ACHIEVEMENTS ══ */}
        <Section id="achievements">
          <div className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: t.accent, letterSpacing: 3, textTransform: "uppercase" }}>Achievements</span>
              <h2 style={{ fontSize: 36, fontWeight: 800, marginTop: 12, color: t.text }}>Impact in Numbers</h2>
            </div>
            {(() => { const [ref, inView] = useInView(0.2); return (
              <div ref={ref} className="achievements-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 800, margin: "0 auto" }}>
                {achievements.map((item, i) => <CounterCard key={i} item={item} index={i} t={t} inView={inView} />)}
              </div>
            ); })()}
          </div>
        </Section>

        {/* ══ CONTACT ══ */}
        <Section id="contact">
          <div className="section-pad" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: t.accent, letterSpacing: 3, textTransform: "uppercase" }}>Get in Touch</span>
              <h2 style={{ fontSize: 36, fontWeight: 800, marginTop: 12, color: t.text }}>Let's Build Something Together</h2>
            </div>
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 900, margin: "0 auto" }}>
              <div>
                <p style={{ fontSize: 15, color: t.textSecondary, lineHeight: 1.7, marginBottom: 32 }}>I'm always open to discussing new opportunities, collaborative projects, or innovative ideas. Feel free to reach out!</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { icon: Mail, text: "arnavkakade1718@gmail.com", href: "mailto:arnavkakade1718@gmail.com" },
                    { icon: Phone, text: "+91 8080011801", href: "tel:+918080011801" },
                    { icon: MapPin, text: "Pune, Maharashtra, India", href: "" },
                    { icon: Linkedin, text: "linkedin.com/in/arnav-kakade", href: "https://linkedin.com/in/arnav-kakade" },
                    { icon: Github, text: "github.com/arnavkakade", href: "https://github.com/arnavkakade" },
                  ].map((item, i) => (
                    <a key={i} href={item.href || "#"} target={item.href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{
                      display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: t.bgCard, borderRadius: 12, border: `1px solid ${t.border}`, transition: "all 0.2s", color: t.text,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = t.borderHover; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; }}>
                      <item.icon size={18} style={{ color: t.accent }} />
                      <span style={{ fontSize: 14, color: t.textSecondary }}>{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ padding: 28, background: t.bgCard, borderRadius: 16, border: `1px solid ${t.border}` }}>
                {formSent ? (
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: 16, padding: 40 }}>
                    <CheckCircle size={48} style={{ color: "#10b981" }} />
                    <div style={{ fontSize: 18, fontWeight: 700, color: t.text }}>Message Sent!</div>
                    <div style={{ fontSize: 13, color: t.textMuted }}>Thanks for reaching out. I'll get back to you soon.</div>
                  </div>
                ) : (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {[["Name", "name", "text", "Your name"], ["Email", "email", "email", "your@email.com"]].map(([label, key, type, placeholder]) => (
                      <div key={key}>
                        <label style={{ fontSize: 12, fontWeight: 600, color: t.textMuted, marginBottom: 6, display: "block", textTransform: "uppercase", letterSpacing: 1 }}>{label}</label>
                        <input value={formData[key as keyof typeof formData]} onChange={e => setFormData({ ...formData, [key]: e.target.value })} type={type} placeholder={placeholder as string} style={{
                          width: "100%", padding: "12px 16px", background: t.bgTertiary, border: `1px solid ${t.border}`, borderRadius: 10, color: t.text, fontSize: 14, fontFamily: "'Outfit', sans-serif", transition: "all 0.2s",
                        }} />
                      </div>
                    ))}
                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: t.textMuted, marginBottom: 6, display: "block", textTransform: "uppercase", letterSpacing: 1 }}>Message</label>
                      <textarea value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={4} placeholder="Tell me about your project..." style={{
                        width: "100%", padding: "12px 16px", background: t.bgTertiary, border: `1px solid ${t.border}`, borderRadius: 10, color: t.text, fontSize: 14, fontFamily: "'Outfit', sans-serif", resize: "vertical", transition: "all 0.2s",
                      }} />
                    </div>
                    <button onClick={handleForm} style={{
                      background: t.gradient, color: "#fff", border: "none", padding: "14px 28px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 700, fontFamily: "'Outfit', sans-serif",
                      transition: "all 0.3s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: `0 4px 20px ${t.accent}33`,
                    }}><Send size={16} /> Send Message</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Section>

        {/* ══ FOOTER ══ */}
        <footer style={{ borderTop: `1px solid ${t.border}`, padding: "40px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 20 }}>
              {[{ icon: Linkedin, href: "https://linkedin.com/in/arnav-kakade" }, { icon: Github, href: "https://github.com/arnavkakade" }, { icon: Mail, href: "mailto:arnavkakade1718@gmail.com" }].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" style={{
                  width: 40, height: 40, borderRadius: 10, background: t.bgCard, border: `1px solid ${t.border}`,
                  display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s", color: t.textSecondary,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.color = t.accent; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.textSecondary; }}>
                  <item.icon size={18} />
                </a>
              ))}
            </div>
            <p style={{ color: t.textMuted, fontSize: 13 }}>Designed & Built by <span style={{ color: t.accent, fontWeight: 600 }}>Arnav Kakade</span> · {new Date().getFullYear()}</p>
          </div>
        </footer>

        {/* Scroll to top */}
        {showTop && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
            position: "fixed", bottom: 24, right: 24, width: 44, height: 44, borderRadius: 12,
            background: t.accent, color: "#fff", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: `0 4px 20px ${t.accent}44`, zIndex: 800, animation: "fadeIn 0.3s ease",
          }}><ArrowUp size={20} /></button>
        )}

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} t={t} />
      </div>
    </>
  );
}
