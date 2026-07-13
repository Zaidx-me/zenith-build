import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getTeamMemberBySlug, teamMembers, type TeamMember } from "@/lib/team-data";

async function getMember(slug: string): Promise<TeamMember | null> {
  return getTeamMemberBySlug(slug) || null;
}

const socialIconsConfig = [
  { key: "github", label: "GitHub", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
  { key: "linkedin", label: "LinkedIn", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { key: "twitter", label: "Twitter", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { key: "website", label: "Website", svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg> },
];

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ slug: m.slug }));
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = await getMember(slug);

  if (!member) notFound();

  const socialIcons = socialIconsConfig
    .filter((s) => member.socialLinks?.[s.key as keyof typeof member.socialLinks])
    .map((s) => ({
      ...s,
      href: member.socialLinks![s.key as keyof typeof member.socialLinks] as string,
    }));

  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      {/* Background gradient orbs */}
      <div className="fixed top-[-300px] right-[-200px] w-[500px] h-[500px] rounded-full opacity-[0.03] bg-gradient-to-br from-white via-white/50 to-transparent blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full opacity-[0.02] bg-gradient-to-tr from-white/60 via-white/30 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative z-[2] px-6 md:px-10 py-20 md:py-32 max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/#team"
          className="inline-flex items-center gap-2 text-[#D7E2EA]/40 hover:text-[#D7E2EA] transition-colors mb-16 text-xs uppercase tracking-[0.2em] font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Team
        </Link>

        {/* Profile header */}
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10 mb-16">
          <div className="w-24 h-24 md:w-28 h-28 rounded-2xl flex items-center justify-center text-lg md:text-xl font-bold text-[#D7E2EA] border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl flex-shrink-0">
            {member.initials}
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-black uppercase leading-none tracking-tight text-[#D7E2EA] mb-2">
              {member.name}
            </h1>
            <p className="text-sm text-[#D7E2EA]/50 uppercase tracking-[0.15em] font-medium mb-6">
              {member.role}
            </p>

            <div className="flex gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl flex items-center justify-center text-[#D7E2EA]/40 hover:text-[#D7E2EA] hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-16">
          <span className="text-[#D7E2EA]/40 font-medium uppercase tracking-[0.2em] text-xs mb-4 block">About</span>
          <div className="space-y-4 text-[#D7E2EA]/70 leading-relaxed text-base max-w-3xl">
            {member.fullBio.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <span className="text-[#D7E2EA]/40 font-medium uppercase tracking-[0.2em] text-xs mb-5 block">Skills & Expertise</span>
          <div className="flex flex-wrap gap-2.5">
            {member.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl text-sm text-[#D7E2EA]/60 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects */}
        {member.projects.length > 0 && (
          <div>
            <span className="text-[#D7E2EA]/40 font-medium uppercase tracking-[0.2em] text-xs mb-5 block">Projects</span>
            <div className="grid sm:grid-cols-2 gap-4">
              {member.projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl p-5 md:p-6 hover:bg-white/[0.08] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-[#D7E2EA] group-hover:text-white transition-colors text-sm">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#D7E2EA]/30">{project.category}</span>
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
