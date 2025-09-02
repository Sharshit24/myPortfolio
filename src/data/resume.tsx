import { ResumeData } from '../types/resume';

export const resumeData: ResumeData = {
  name: "Sumit Verma",
  title: "Full Stack Developer",
  bio: "Passionate and detail-oriented web developer with strong skills in front-end and back-end technologies. Seeking to leverage my expertise in JavaScript and GO-Lang for backend, and modern frameworks to create user-friendly and efficient web applications, while contributing to the growth and success of a dynamic development team.",
  location: "New Delhi, India",
  email: "sumitworks.in@gmail.com",
  socialLinks: {
    github: "https://github.com/Sharshit24",
    linkedin: "https://tinyurl.com/289bube7",
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
        "C++",
        "GOLANG"
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
      title: "myPortfolio",
      description: "Developed a personal portfolio website to showcase my skills, projects, and experience. The website features a responsive design, interactive UI, project showcase, contact form, and dark mode toggle. Built using React, TypeScript, and Tailwind CSS.",
      technologies: ["JavaScript", "React", "TypeScript", "Tailwind CSS"],
      imageUrl: "/portfolio.png",
      githubUrl: "https://github.com/Sharshit24/myPortfolio",
      liveUrl: "https://my-portfolio-mauve-three-66.vercel.app/",
    },
    {
      title: "techSolutions",
      description: "Developed a Website for Transforming businesses through innovative technology solutions and expert consulting services.",
      technologies: ["HTML", "css"],
      imageUrl: "/techSolutions.png",
      githubUrl: "https://github.com/Sharshit24/techSolutions",
      liveUrl: "https://tech-solutions-psi-two.vercel.app/",
    }, 
    {
      title: "trafficLight",
      description: "Developed a traffic light simulation application to demonstrate the use of state management in React. The application visually represents the traffic light system with red, yellow, and green lights, and transitions between these states based on a timer. This project showcases my ability to create interactive and dynamic user interfaces using React.",
      technologies: ["JavaScript", "React", "HTML", "ReactRouterDom"],
      imageUrl: "/trafficLight.png",
      githubUrl: "https://github.com/Sharshit24/Traffic-lights",
      liveUrl: "https://traffic-lights-three.vercel.app/",
    },
    
  ],

    

  experience: [],
  education: []
};
