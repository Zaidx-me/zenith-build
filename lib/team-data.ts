export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  initials: string;
  color: string;
  bio: string;
  fullBio: string;
  skills: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  projects: { title: string; slug: string; category: string }[];
}

export const teamMembers: TeamMember[] = [
  {
    slug: "alex-chen",
    name: "Alex Chen",
    role: "Creative Director",
    initials: "AC",
    color: "#D7E2EA",
    bio: "Visionary creative director with 12+ years of experience crafting brand identities and digital experiences that captivate audiences and drive results.",
    fullBio:
      "Alex leads our creative vision with a relentless pursuit of originality. With a background spanning traditional design, motion graphics, and interactive media, they bring a holistic perspective to every project.\n\nOver the past decade, Alex has worked with Fortune 500 brands and emerging startups alike — always pushing the boundary of what digital experiences can achieve. Their work has been featured in Communication Arts, Awwwards, and Behance.\n\nWhen not directing creative strategy, Alex mentors emerging designers and speaks at industry conferences about the future of brand storytelling.",
    skills: ["Creative Strategy", "Brand Identity", "Art Direction", "Motion Design", "UI/UX Vision"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/alexchen",
      twitter: "https://twitter.com/alexchen",
      website: "https://alexchen.design",
    },
    projects: [
      { title: "Nova Brand Identity", slug: "nova-brand-identity", category: "Branding" },
      { title: "Vertex Dashboard", slug: "vertex-dashboard", category: "UI/UX" },
    ],
  },
  {
    slug: "maya-patel",
    name: "Maya Patel",
    role: "Lead Engineer",
    initials: "MP",
    color: "#D7E2EA",
    bio: "Full-stack engineer specializing in high-performance web applications, scalable architectures, and developer tooling.",
    fullBio:
      "Maya architects the technical backbone of our most ambitious projects. With deep expertise in React, Next.js, Node.js, and cloud infrastructure, they ensure every pixel-perfect design translates into a robust, performant reality.\n\nBefore joining Zenith Build, Maya led engineering teams at two high-growth startups, scaling platforms from MVP to millions of users. They're a strong advocate for type-safe code, automated testing, and developer experience.\n\nOutside of code, Maya contributes to open-source projects and organizes local hackathons to grow the engineering community.",
    skills: ["React/Next.js", "Node.js", "TypeScript", "Cloud Architecture", "System Design"],
    socialLinks: {
      github: "https://github.com/mayapatel",
      linkedin: "https://linkedin.com/in/mayapatel",
    },
    projects: [
      { title: "Vertex Dashboard", slug: "vertex-dashboard", category: "UI/UX" },
      { title: "Flow State CRM", slug: "flow-state-crm", category: "Web App" },
    ],
  },
  {
    slug: "samir-khan",
    name: "Samir Khan",
    role: "Product Designer",
    initials: "SK",
    color: "#D7E2EA",
    bio: "Product designer obsessed with craft, interaction design, and building interfaces that feel as good as they look.",
    fullBio:
      "Samir believes great design lives in the details. From micro-interactions to design systems, they craft cohesive product experiences that users genuinely enjoy.\n\nWith a background in both visual design and front-end development, Samir bridges the gap between design and engineering — producing work that's both beautiful and buildable. They've designed products used by millions across fintech, health, and creative tools.\n\nSamir is passionate about design tokens, component libraries, and building scalable design systems that empower teams to move fast without sacrificing quality.",
    skills: ["Product Design", "Interaction Design", "Design Systems", "Prototyping", "User Research"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/samirkhan",
      twitter: "https://twitter.com/samirkhan",
      website: "https://samirkhan.design",
    },
    projects: [
      { title: "Nova Brand Identity", slug: "nova-brand-identity", category: "Branding" },
      { title: "Flow State CRM", slug: "flow-state-crm", category: "Web App" },
    ],
  },
  {
    slug: "elena-voss",
    name: "Elena Voss",
    role: "Strategy Lead",
    initials: "EV",
    color: "#D7E2EA",
    bio: "Strategist who bridges business goals and creative execution, driving measurable impact through data-informed brand narratives.",
    fullBio:
      "Elena turns ambiguous business challenges into clear, actionable strategies. With expertise in market positioning, audience insights, and brand architecture, they ensure every creative decision is grounded in strategic intent.\n\nElena's career spans agency and in-house roles across tech, luxury, and lifestyle sectors. They've launched campaigns that drove 3× engagement growth and repositioned brands for new markets.\n\nA trained ethnographer, Elena brings deep user empathy to strategic planning — ensuring that brand strategies resonate with real people, not just spreadsheets.",
    skills: ["Brand Strategy", "Market Research", "Positioning", "Content Strategy", "Analytics"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/elenavoss",
      twitter: "https://twitter.com/elenavoss",
    },
    projects: [
      { title: "Flow State CRM", slug: "flow-state-crm", category: "Web App" },
      { title: "Vertex Dashboard", slug: "vertex-dashboard", category: "UI/UX" },
    ],
  },
  {
    slug: "muhammad-zaid",
    name: "Muhammad Zaid",
    role: "Founder & Developer",
    initials: "MZ",
    color: "#D7E2EA",
    bio: "Full-stack developer and designer building mobile apps, APIs, and digital experiences. Creator of Applicator, Maktaba, and Whatbot.",
    fullBio:
      "Zaid is an Information Technology student at the University of the Punjab and the founder of Zenith Build. He builds across the full stack — from React Native mobile apps published on the Play Store to NestJS API gateways and interactive 3D web experiences.\n\nHis projects include Applicator (an AI-powered job application assistant), Maktaba (a free Urdu book reading app with 3,000+ titles), and Whatbot (an open-source WhatsApp API Gateway). He's also built a personal portfolio with Three.js 3D visuals and a Storybook component library.\n\nWhen not coding, Zaid works on UX design in Figma, experiments with C++ game development, and explores new tools to bring creative ideas to life.",
    skills: ["React Native", "NestJS", "TypeScript", "Next.js", "UI/UX Design", "Node.js", "Docker"],
    socialLinks: {
      github: "https://github.com/zaidx-me",
      linkedin: "https://linkedin.com/in/zaidx-me",
      website: "https://zaidxme.com",
    },
    projects: [
      { title: "Applicator", slug: "applicator", category: "Mobile" },
      { title: "Maktaba", slug: "maktaba", category: "Mobile" },
      { title: "Whatbot", slug: "whatbot", category: "API" },
    ],
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
