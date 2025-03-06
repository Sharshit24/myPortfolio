import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  name: "Sumit Verma",
  title: "Full Stack Developer",
  bio: "Passionate and detail-oriented web developer with strong skills in front-end and back-end technologies. Seeking to leverage my expertise in JavaScript and GO-Lang for backend, and modern frameworks to create user-friendly and efficient web applications, while contributing to the growth and success of a dynamic development team.",
  location: "New Delhi, India",
  email: "sumitworks.in@gmail.com",
  socialLinks: {
    github: "https://github.com/Sharshit24",
    linkedin: "www.linkedin.com/in/sumit-verma-431981284",
    twitter: "https://x.com/codec_sumit24",
  },
  interests: [
"Web Development: Creating responsive and efficient web applications",
"Open Source: Contributing to the community and collaborating on impactful projects"
  ],
  learning: [
    "Event-Driven Architectures: Exploring how systems communicate efficiently",
    "Backend Fundamentals: Building a deeper understanding of backend systems"
  ],
  skills: [
    {
      category: "",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "MongoDB",
        "Docker",
        "Git",
        "GitHub",
        "Python",
        "C++"
      ]
    }
  ],
  projects: [
    {
      title: "onlineCodeCompiler",
      description: "Designed intuitive interfaces for an all-in-one coding solution where users could run programs seamlessly in popular languages such as C++ and Python. Established an enhanced task queue with BullMQ for real-time job management.",
      technologies: ["JavaScript", "React", "Express", "Node", "BullMQ", "MongoDB"],
      imageUrl: "/compiler.png",
      githubUrl: "https://github.com/Sharshit24/codeCompiler",
      liveUrl: "https://code-compiler-black.vercel.app/",
    },
    {
      title: "trafficLight",
      description: "Designed intuitive interfaces for an all-in-one coding solution where users could run programs seamlessly in popular languages such as C++ and Python. Established an enhanced task queue with BullMQ for real-time job management.",
      technologies: ["JavaScript", "React",],
      imageUrl: "/compiler.png",
      githubUrl: "https://github.com/Sharshit24/Traffic-lights",
      liveUrl: "https://vercel.com/sumit-vermas-projects-8e264046/traffic-lights",
    }
  ],

    

  experience: [],
  education: []
};