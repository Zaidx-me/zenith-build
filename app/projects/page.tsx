import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnail: unknown;
  category: string;
  overview: string;
  techStack: string[];
  teamMembers: { name: string; slug: { current: string }; photo: unknown }[];
}

const projects: Project[] = [
  { _id: "1", title: "Vertex Dashboard", slug: { current: "vertex-dashboard" }, category: "UI/UX", overview: "A high-performance analytics dashboard with real-time data visualization and collaborative workspace features.", thumbnail: null, techStack: [], teamMembers: [{ name: "Alex Chen", slug: { current: "alex-chen" }, photo: null }, { name: "Maya Patel", slug: { current: "maya-patel" }, photo: null }, { name: "Elena Voss", slug: { current: "elena-voss" }, photo: null }] },
  { _id: "2", title: "Nova Brand Identity", slug: { current: "nova-brand-identity" }, category: "Branding", overview: "Complete brand overhaul for a fintech startup including visual identity, design system, and launch collateral.", thumbnail: null, techStack: [], teamMembers: [{ name: "Alex Chen", slug: { current: "alex-chen" }, photo: null }, { name: "Samir Khan", slug: { current: "samir-khan" }, photo: null }] },
  { _id: "3", title: "Flow State CRM", slug: { current: "flow-state-crm" }, category: "Web App", overview: "Intelligent CRM platform designed for creative agencies to manage clients, projects, and pipeline.", thumbnail: null, techStack: [], teamMembers: [{ name: "Maya Patel", slug: { current: "maya-patel" }, photo: null }, { name: "Samir Khan", slug: { current: "samir-khan" }, photo: null }, { name: "Elena Voss", slug: { current: "elena-voss" }, photo: null }] },
];

export default function ProjectsPage() {
  const categoryStyles: Record<string, string> = {
    "UI/UX": "border-[#5050F7]/30 text-[#5050F7]",
    "Web App": "border-[#19B64F]/30 text-[#19B64F]",
    Branding: "border-[#0BB044]/30 text-[#0BB044]",
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <div className="relative z-[2] px-6 py-24 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-[#D7E2EA]/40 font-medium uppercase tracking-[0.2em] text-xs">OUR WORK</span>
          <h1 className="hero-heading font-black uppercase leading-none tracking-tight mt-4" style={{ fontSize: "clamp(2.5rem, 10vw, 6rem)" }}>
            Projects
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <Link
              key={project._id}
              href={`/projects/${project.slug.current}`}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl overflow-hidden hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="h-48 bg-gradient-to-br from-[#19B64F]/5 via-transparent to-[#5050F7]/5" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="font-semibold text-lg text-[#D7E2EA] group-hover:text-white transition-colors">
                    {project.title}
                  </h2>
                  <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/20 group-hover:text-[#D7E2EA]/60 transition-colors flex-shrink-0 mt-0.5" />
                </div>
                <span className={`text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border ${categoryStyles[project.category] || "border-white/[0.08] text-[#D7E2EA]/30"}`}>
                  {project.category}
                </span>
                <p className="text-sm text-[#D7E2EA]/50 leading-relaxed mt-3 line-clamp-2">{project.overview}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
