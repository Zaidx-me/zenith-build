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
    instagram?: string;
    threads?: string;
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
  slug: "khalil-khan",
  name: "Khalil Khan",
  role: "Backend & Infrastructure Lead",
  initials: "KK",
  color: "#D7EAE2",
  bio: "Software Engineer focused on backend architecture, scalable server logic, and full-stack web/mobile integration.",
  fullBio:
    "Khalil architects the backend and infrastructure core at ZenithBuild. Possessing a dual-capability technical profile, he specializes in executing rapid market deployments using Backend-as-a-Service (Firebase, Clerk) alongside engineering custom, highly scalable server logic using the MERN stack (MongoDB, Express.js, Node.js).\n\nAt ZenithBuild Agency, Khalil designs language-agnostic RESTful APIs, standardizing JSON protocols to ensure seamless integration across client-side React and React Native applications. He optimizes NoSQL schemas for efficient read/write operations while ensuring strict client data isolation.\n\nWith a foundational background rooted in core software engineering, Khalil regularly bridges high-performance low-level concepts in C++ with modern cloud infrastructure to build highly reliable, data-synchronized software systems.",
  skills: ["Node.js/Express.js", "MongoDB", "Firebase/Clerk", "RESTful API Design", "C++ & Data Structures"],
  socialLinks: {
    github: "https://github.com/khalilkhancodes",
    linkedin: "https://www.linkedin.com/in/khalilkhancodes/",
    instagram: "https://instagram.com/khalilkhancodes",
  },
  projects: [
    { title: "HealthMate AI", slug: "healthmate-ai", category: "Mobile App" },
    { title: "ZenithBuild API Integration Layer", slug: "zenithbuild-api-integration-layer", category: "Backend" },
    { title: "JS-Arcade", slug: "js-arcade", category: "Web App" },
    { title: "Spotify Clone", slug: "spotify-clone", category: "Core System" },
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
    role: "Lead Engineer and Founder",
    initials: "MZ",
    color: "#D7E2EA",
    bio: "Full-stack developer and designer building mobile apps, APIs, and digital experiences. Creator of Applicator, Maktaba, and Whatbot.",
    fullBio:
      "Zaid is an Information Technology student at the University of the Punjab and the founder of Applicator. He builds across the full stack — from React Native mobile apps published on the Play Store to NestJS API gateways and interactive 3D web experiences.\n\nHis projects include Applicator (an AI-powered job application assistant), Maktaba (a free Urdu book reading app with 3,000+ titles), and Whatbot (an open-source WhatsApp API Gateway). He's also built a personal portfolio with Three.js 3D visuals and a Storybook component library.\n\nWhen not coding, Zaid works on UX design in Figma, experiments with C++ game development, and explores new tools to bring creative ideas to life.",
    skills: ["React Native", "NestJS", "TypeScript", "Next.js", "UI/UX Design", "Node.js", "Docker"],
    socialLinks: {
      github: "https://github.com/zaidx-me",
      linkedin: "https://linkedin.com/in/zaidx-me",
      instagram: "https://instagram.com/zaidx_me",
      threads: "https://threads.net/@zaidx_me",
      website: "https://zareen.qzz.io",
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
