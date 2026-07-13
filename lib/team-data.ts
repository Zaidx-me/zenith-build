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
    slug: "altaf-gill",
    name: "Altaf Gill",
    role: "B2B Marketing Expert",
    initials: "AG",
    color: "#D7E2EA",
    bio: "Dedicated marketing expert with 2 years of experience driving B2B growth and securing high-value client partnerships in the digital landscape.",
    fullBio:
      "As a dedicated Marketing Expert at ZenithBuild, Altaf specializes in driving B2B growth and securing high-value client partnerships. His core expertise lies in positioning mobile app development services in front of the right businesses and turning leads into long-term clients.\n\nHe brings value through client acquisition — designing targeted B2B marketing strategies and outreach funnels that consistently attract businesses looking for premium app development solutions. He elevates ZenithBuild's market presence to ensure the agency is the go-to choice for companies looking to build scalable tech products.\n\nAltaf also leads market and lead intelligence, analyzing industry demands and identifying potential corporate clients to maximize business opportunities and conversion rates. He is passionate about driving measurable business growth and helping enterprises bring their digital visions to life.",
    skills: ["B2B Marketing", "Client Acquisition", "Brand Positioning", "Lead Intelligence", "Outreach Strategy"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/altafgill",
    },
    projects: [],
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
    slug: "rehman-ul-haq",
    name: "Rehman Ul Haq",
    role: "Front End Engineer",
    initials: "RH",
    color: "#D7E2EA",
    bio: "Full-stack developer building modern web and mobile applications with React, Next.js, React Native, and Node.js.",
    fullBio:
      "Rehman is a BS Information Technology graduate from the University of the Punjab with a passion for building modern, scalable software solutions. He specializes in full-stack development, creating responsive web applications, cross-platform mobile apps, desktop software, and secure backend systems.\n\nHe works with technologies including React, Next.js, React Native, Node.js, C#, .NET, SQL Server, and MongoDB, delivering solutions that prioritize performance, maintainability, and user experience. His experience spans business management systems, e-commerce platforms, custom APIs, and enterprise applications.\n\nBeyond software development, Rehman has a strong interest in UI/UX design, cloud deployment, SEO, and digital product development. He enjoys exploring new technologies, solving complex technical challenges, and building software that delivers meaningful value for businesses and users alike.",
    skills: ["React.js", "Next.js", "React Native", "TypeScript", "Node.js", "C# / .NET", "SQL Server / MongoDB", "Tailwind CSS"],
    socialLinks: {
      linkedin: "https://linkedin.com/in/rehmanulhaq",
    },
    projects: [
      { title: "Hidaya Seeker", slug: "hidaya-seeker", category: "Web" },
      { title: "MUM Flooring Studio", slug: "mum-flooring", category: "Web" },],
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
      instagram: "https://instagram.com/zaidxme",
      threads: "https://threads.net/@zaidxme",
      website: "https://zareen.qzz.io",
    },
    projects: [
      { title: "Applicator", slug: "applicator", category: "Mobile Apps" },
      { title: "Maktaba", slug: "maktaba", category: "Mobile Apps" },
      { title: "Whatbot", slug: "whatbot", category: "API" },
    ],
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
