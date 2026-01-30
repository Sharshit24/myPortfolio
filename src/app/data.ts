import type { StaticImageData } from "next/image";


import {
    AirwatchImage,
    LibraryImage,
    SkygazeImage,
    TodoImage,
    VIPSImage,
    VueBitsImage,
} from "@/assets/projects";

export interface IProjectData {
    LIVE_PREVIEW?: string;
    GITHUB?: string;
    DESCRIPTION: string[];
    NOTE?: string;
    TECH_STACK: string[];
    IMAGE: StaticImageData;
}



import site from "./site.json";

export function getGitHubUsername(url?: string) {
    if (!url) return "";
    try {
        const u = new URL(url);
        return u.pathname.replace(/^\//, "").replace(/\/$/, "");
    } catch {
        const parts = url.split("/").filter(Boolean);
        return parts[parts.length - 1] || "";
    }
}

export const GITHUB_USERNAME = getGitHubUsername(site.socials.github);

export const DATA = {
    HEADER: {
        NAME: site.profile.name || "Your Name",
        AGE: "",
        PRONOUN: "",
        HEADLINE: site.site.title || site.site.description || "",
        RESUME: site.profile.resume || "",
        EMAIL: site.socials.email || "",
        GITHUB: site.socials.github || "",
        LINKEDIN: site.socials.linkedin || "",
        INTRO: site.profile.bio || "",
        EXPERTISE: "",
    },

    EXPERIENCE: {
        Suraasa: {
            WEBSITE: "https://www.suraasa.com/",
            POSITION: "SDE - 1 Backend",
            LOCATION: "Hybrid",
            DURATION: "Oct, 2025 - Present",
            DESCRIPTION: [
                "Developed and maintained backend services and APIs to support product features and integrations.",
                "Worked on reliability, security, and performance improvements across services, including caching and monitoring.",
                "Collaborated with frontend, platform, and DevOps teams to design APIs, event-driven workflows, and developer-facing documentation.",
            ],
            TECH_STACK: [
                "TypeScript",
                "Node.js",
                "Python",
                "Django",
                "AdonisJS",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Git & GitHub",
            ],
        },
        "Aardo Solutions": {
            WEBSITE: "https://www.aardosolutions.com/",
            POSITION: "Software Developer",
            LOCATION: "Remote",
            DURATION: "Nov, 2024 - Sep, 2025",
            DESCRIPTION: [
                "Developed and maintained scalable web applications to enhance user engagement and operational efficiency.",
                "Hosted and managed servers on AWS EC2, configured domains, and implemented SSL certificates for secure access.",
                "Collaborated with cross-functional teams to design and implement scalable solutions.",
                "Utilized modern frameworks and libraries to ensure responsive and dynamic user interfaces.",
            ],
            TECH_STACK: [
                "TypeScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "ShadCN",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Firebase",
                "Contentful",
                "AWS",
                "GCP",
                "Vercel",
                "Nginx",
                "Git & Github",
            ],
        },
        "Vivekananda Institute of Professional Studies - Technical Campus (VIPS-TC)":
            {
                WEBSITE: "https://vips.edu/",
                POSITION: "Software Developer Intern",
                LOCATION: "Hybrid - Delhi, India",
                DURATION: "Nov, 2023 - Jun, 2025",
                DESCRIPTION: [
                    "Assisted in the development of full-stack applications to support academic initiatives.",
                    "Implemented cloud-based solutions using Google Cloud Platform (GCP) services.",
                    "Participated in code reviews and contributed to the optimization of existing codebases.",
                ],
                TECH_STACK: [
                    "React.js",
                    "Tailwind CSS",
                    "Material UI",
                    "Firebase",
                    "GCP",
                    "Vercel",
                    "Git & Github",
                ],
            },
        Requestly: {
            WEBSITE: "https://requestly.com/",
            POSITION: "Product Engineer Intern",
            LOCATION: "Hybrid - Delhi, India",
            DURATION: "Aug, 2024 - Oct, 2024",
            DESCRIPTION: [
                "Researched and analyzed various API testing platforms (Kubesense, LevoAI, Wallarm, Traceable, Safe Security, Keploy) to evaluate features, security, and integration capabilities.",
                "Worked extensively with AWS services (Lambda, Kinesis, S3, API Gateway, EC2, Route 53) to manage infrastructure, automate processes, and optimize security configurations.",
                "Built a To-Do Chrome Extension using Chrome Storage API, enabling users to save and manage tasks directly within their browser.",
            ],
            TECH_STACK: [
                "TypeScript",
                "React.js",
                "Tailwind CSS",
                "AWS",
                "Chrome Extensions",
                "Git & Github",
            ],
        },
    },

    PROJECTS: (() => {
        const mapped: Record<string, any> = {};
        (site.projects || []).forEach((proj: any) => {
            mapped[proj.name] = {
                LIVE_PREVIEW: proj.live || "",
                GITHUB: proj.repo || "",
                DESCRIPTION: proj.description ? [proj.description] : [],
                TECH_STACK: proj.tech || [],
                IMAGE: VIPSImage, // placeholder image for user projects
            };
        });
        return mapped;
    })(),

    BLOGS: {},

    SKILLS: {
        Languages: [
            "JavaScript",
            "TypeScript",
            "HTML",
            "CSS",
            "Node.js",
            "Python",
        ],
        Frameworks: [
            "React",
            "Next.js",
            "Django",
            "Vue.js",
            "Astro",
            "Express.js",
            "AdonisJS",
            "React Native",
            "Expo",
            "Electron",
            "PWA",
        ],
        Libraries: [
            "React Query",
            "Tailwind CSS",
            "ShadCN UI",
            "Ant Design",
            "Styled Components",
            "Material UI",
        ],
        "Database & Backend": [
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Contentful",
            "Firebase",
            "GraphQL",
            "JWT",
            "Auth.js",
            "Clerk",
        ],
        "Cloud & Deployment": [
            "Google Cloud Platform (GCP)",
            "Amazon Web Services (AWS)",
            "Vercel",
        ],
        "Tools & Platforms": [
            "Git",
            "GitHub",
            "Postman",
            "Docker",
            "Visual Studio Code",
            "Prettier",
            "Sentry",
        ],
    },
};
