import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnail: unknown;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  techStack: string[];
  teamMembers: { name: string; slug: { current: string }; photo: unknown; role: string }[];
  liveUrl: string;
  githubUrl: string;
}

const fallbackProjects: Project[] = [
  { _id: "1", title: "Vertex Dashboard", slug: { current: "vertex-dashboard" }, category: "UI/UX", overview: "A high-performance analytics dashboard with real-time data visualization and collaborative workspace features.", challenge: "The client needed a real-time dashboard that could handle thousands of data points per second while maintaining smooth interactive visualizations across distributed teams.", solution: "We built a WebSocket-powered dashboard using React, D3.js, and a custom caching layer that reduced latency by 60%. The architecture supports real-time collaboration through operational transforms.", results: "45% increase in team productivity, 99.9% uptime, and successful deployment across 5 enterprise clients within the first quarter.", thumbnail: null, techStack: ["React", "D3.js", "WebSocket", "Redis", "Docker"], teamMembers: [{ name: "Alex Chen", slug: { current: "alex-chen" }, photo: null, role: "Creative Director" }, { name: "Maya Patel", slug: { current: "maya-patel" }, photo: null, role: "Lead Engineer" }, { name: "Elena Voss", slug: { current: "elena-voss" }, photo: null, role: "Strategy Lead" }], liveUrl: "https://vertex-dashboard.vercel.app", githubUrl: "" },
  { _id: "2", title: "Nova Brand Identity", slug: { current: "nova-brand-identity" }, category: "Branding", overview: "Complete brand overhaul for a fintech startup including visual identity, design system, and launch collateral.", challenge: "Nova needed to differentiate in a crowded fintech market while maintaining trust and approachability. Their existing brand was generic and failed to convey innovation.", solution: "We developed a bold geometric identity system inspired by financial charts and data visualization. The design system included 200+ components, a custom icon set, and comprehensive brand guidelines.", results: "Brand awareness increased 3x within 6 months. Successful Series A raise of $12M, with investors citing the strong brand as a key factor in their decision.", thumbnail: null, techStack: ["Figma", "Illustrator", "After Effects", "Design Tokens"], teamMembers: [{ name: "Alex Chen", slug: { current: "alex-chen" }, photo: null, role: "Creative Director" }, { name: "Samir Khan", slug: { current: "samir-khan" }, photo: null, role: "Product Designer" }], liveUrl: "", githubUrl: "" },
  { _id: "3", title: "Flow State CRM", slug: { current: "flow-state-crm" }, category: "Web App", overview: "Intelligent CRM platform designed for creative agencies to manage clients, projects, and pipeline.", challenge: "Agencies were drowning in spreadsheets and disconnected tools. They needed a unified platform tailored to creative workflows, not enterprise sales processes.", solution: "Flow State reimagines CRM for the creative industry with visual pipeline boards, integrated time tracking, and AI-powered project forecasting. Built with a modular architecture for custom workflows.", results: "Beta users reported 30% time savings on administrative tasks. 200+ agencies signed up within the first month of launch.", thumbnail: null, techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "TypeScript"], teamMembers: [{ name: "Maya Patel", slug: { current: "maya-patel" }, photo: null, role: "Lead Engineer" }, { name: "Samir Khan", slug: { current: "samir-khan" }, photo: null, role: "Product Designer" }, { name: "Elena Voss", slug: { current: "elena-voss" }, photo: null, role: "Strategy Lead" }], liveUrl: "", githubUrl: "https://github.com/zaidx-me/flow-state-crm" },
];

export async function generateStaticParams() {
  return fallbackProjects.map((p) => ({ slug: p.slug.current }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = fallbackProjects.find((p) => p.slug.current === slug) || null;

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <div className="relative z-[2] px-6 py-24 max-w-4xl mx-auto">
        {/* Back Link */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors mb-12 text-sm uppercase tracking-[0.15em] font-medium">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="h-64 md:h-96 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#19B64F]/10 via-transparent to-[#5050F7]/10 mb-10" />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <h1 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
            {project.title}
          </h1>
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#D7E2EA]/30 px-3 py-1 rounded-full border border-white/[0.08] w-fit">
            {project.category}
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-10">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-[#19B64F] hover:text-[#19B64F]/80 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              Source Code
            </a>
          )}
        </div>

        {/* Content */}
        <div className="space-y-10">
          {project.overview && (
            <div>
              <span className="text-[#D7E2EA]/40 font-medium uppercase tracking-[0.2em] text-xs mb-3 block">Overview</span>
              <p className="text-[#D7E2EA]/70 leading-relaxed">{project.overview}</p>
            </div>
          )}

          {project.challenge && (
            <div>
              <span className="text-[#D7E2EA]/40 font-medium uppercase tracking-[0.2em] text-xs mb-3 block">Challenge</span>
              <p className="text-[#D7E2EA]/70 leading-relaxed">{project.challenge}</p>
            </div>
          )}

          {project.solution && (
            <div>
              <span className="text-[#D7E2EA]/40 font-medium uppercase tracking-[0.2em] text-xs mb-3 block">Solution</span>
              <p className="text-[#D7E2EA]/70 leading-relaxed">{project.solution}</p>
            </div>
          )}

          {project.results && (
            <div>
              <span className="text-[#D7E2EA]/40 font-medium uppercase tracking-[0.2em] text-xs mb-3 block">Results</span>
              <p className="text-[#D7E2EA]/70 leading-relaxed">{project.results}</p>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="mt-12">
            <span className="text-[#D7E2EA]/40 font-medium uppercase tracking-[0.2em] text-xs mb-4 block">Tech Stack</span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl text-sm text-[#D7E2EA]/70">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Team Members */}
        {project.teamMembers && project.teamMembers.length > 0 && (
          <div className="mt-12">
            <span className="text-[#D7E2EA]/40 font-medium uppercase tracking-[0.2em] text-xs mb-4 block">Team</span>
            <div className="flex flex-wrap gap-3">
              {project.teamMembers.map((member) => (
                <Link key={member.slug.current} href={`/team/${member.slug.current}`} className="inline-flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl px-4 py-3 hover:bg-white/[0.08] transition-all duration-300">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#19B64F]/40 to-[#5050F7]/40 flex items-center justify-center text-white text-xs font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#D7E2EA]">{member.name}</p>
                    <p className="text-xs text-[#D7E2EA]/40">{member.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
