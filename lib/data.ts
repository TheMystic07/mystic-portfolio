import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import ICPimg from "@/public/ICP2.png";
import fps from "@/public/fps.png";
import avengers from "@/public/avengers.png";
import vision from "@/public/vision.png";
import fit from "@/public/fit.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Chapter President",
    location: "Geekroom Community, Chandigarh University, Punjab, India",
    description:
      "Was selected as the chapter president of Geekroom for my University where i oraganized events and workshops .",
    icon: React.createElement(CgWorkAlt),
    date: "MAR 2024 - Present",
  },
  {
    title: "Leader / Founder",
    location: "ARCHers, Chandigarh University, Punjab, India",
    description:
      "Created a development group called ARCHers. We work on projects, participate in hackathons and conduct workshops. I lead the group and manage projects.",
    icon: React.createElement(CgWorkAlt),
    date: "MAR 2024 - Present",
  },
  {
    title: "B.E in Computer Science",
    location: "Chandigarh University, Punjab, India",
    description:
      "Currently Studying Computer Science Engineering at Chandigarh University. I'm learning web development, data structures and algorithms, databases, operating systems and computer networks. I'm also a part of the university's coding club.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2026",
  },
  {
    title: "Web Dev Trainee",
    location: "Sandvok Solutions, Ludhiana, India",
    description:
      "Joined as a web development trainee. I worked on a few projects and learned about React, Express and Frelancing.",
    icon: React.createElement(CgWorkAlt),
    date: "AUG 2022 - AUG 2022",
  },
  {
    title: "Completed Diploma in Computer Science",
    location: "R and D Polytechnic, Punjab, India",
    description:
      "I passed my diploma in computer science . I learned the basics of programming, data structures and algorithms , web dev with php and databases.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },
] as const;

export const projectsData = [
  {
    title: "ICP Buggy ",
    description:
      "A Go Kart racing game with AI self Driving  built with Unity.  Deployed on ICP mainet . ",
    tags: ["Unity", "WASM", "C#", "ICP", "Motoko"],
    imageUrl: ICPimg,
    githubUrl: "https://github.com/TheMystic07/ICPBuggy",
    demoUrl: "https://azirs-saaaa-aaaak-qif4q-cai.icp0.io/",
  },
  {
    title: "ICP Shooter",
    description:
      "A FPS Shooter  game built with Unity Micogame.  Deployed on ICP mainet . ",
    tags: ["Unity", "WASM", "C#", "ICP", "Motoko"],
    imageUrl: fps,
    githubUrl: "https://github.com/TheMystic07/ICPShooter",
    demoUrl: "https://axk42-jqaaa-aaaak-qif5q-cai.icp0.io/",
  },
  {
    title: "ARCHers Assemble",
    description:
      "A 3D Open world  Avengers game built with Unity. Where you can play as any Marvle Character and  explore the city , it is also deployes on Itch.io.", 
    tags: [ "Unity","C#", "HTML", "CSS"],
    imageUrl: avengers,
    githubUrl: "https://github.com/TheMystic07/",
    demoUrl: "https://mysticog.itch.io/archers-assemble",
  },
  {
    title: "ARCHers Vision",
    description:
      "A Clone of Apple Vision Pro made in Unity with Mixed Reality  capabilities  at a  0.1% of the cost . We  Used  an old  cheap vrbox .", 
    tags: ["ManoMotion ", "Unity", "Android", "C#"],
    imageUrl: vision,
    githubUrl: "https://github.com/ARChers001/ARCHers_Vision/",
    demoUrl: "https://anukuls-stellar-site.webflow.io/",
  },
  {
    title: "Form Forge ",
    description:
      "An AI fitness trainer  .", 
    tags: ["Mediapipe", "Python", "Unity", "C#",],
    imageUrl: fit,
    githubUrl: "",
    demoUrl: "https://formforge-sooty.vercel.app/",
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Unity",
  "Flutter",
  "Blockchain",
  "Solidity",
  "Firebase",
  "Docker",
  "Kubernetes",
  "Jest",
  "C++",
  "Java",
  "C#",
  "PHP",
  "MySQL",
  "SQLite",
  "Linux",
  "I Use Arch btw",
  "ICP",
  "Motoko",
  "Rust",
  "Go",
  "Dart",

] as const;

