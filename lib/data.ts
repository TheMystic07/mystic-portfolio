import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import ICPimg from "@/public/ICP2.png";
import rmtdevImg from "@/public/rmtdev.png";
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
    title: "Completed Diploma in Computer Science",
    location: "R and D Polytechnic, Punjab, India",
    description:
      "I passed my diploma in computer science . I learned the basics of programming, data structures and algorithms , web dev with php and databases.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },
  {
    title: "Web Dev Trainee",
    location: "Sandvok Solutions, Ludhiana, India",
    description:
      "Joined as a web development trainee. I worked on a few projects and learned about React,  Express and Frelancing.",
    icon: React.createElement(CgWorkAlt),
    date: "AUG 2022 - AUG 2022",
  },
  {
    title: "B.E   in Computer Science",
    location: "Chandigarh University, Punjab, India",
    description:
      "Currently Studying Computer Science Engineering at Chandigarh University. I'm learning web development, data structures and algorithms, databases, operating systems and computer networks. I'm also a part of the university's coding club.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2026",
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
    title: "Chapter President",
    location: "Geekroom Community, Chandigarh University, Punjab, India",
    description:
      "Was selected as the chapter president of Geekroom for  my University where i   oraganzed events  and workshops .",
    icon: React.createElement(CgWorkAlt),
    date: "MAR 2024 - Present",
  },

] as const;

export const projectsData = [
  {
    title: "ICP Kart",
    description:
      "A Go Kart racing game built with Unity.  Deployed on ICP mainet . ",
    tags: ["Unity", "WASM", "C#", "ICP", "Motoko"],
    imageUrl: ICPimg,
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "ARCHers Assemble",
    description:
      "A 3D Open world  Avengers game built with Unity. Where you can play as any Marvle Character and  explore the city , it is also deployes on ICP mainet . and it also had a NFT marketplace, where characters can be bought and sold.", 
    tags: ["ICP", "Motoko", "Unity", "HTML", "CSS"],
    imageUrl: rmtdevImg,
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "ARCHers Vision",
    description:
      "A Clone of Apple Vision Pro made in Unity with Mixed Reality  capabilities  at a  0.1% of the cost . We  Purchased an old  cheap vrbox and   made a hole for the camera.", 
    tags: ["Mediapipe ", "Unity", "Android", "C#"],
    imageUrl: rmtdevImg,
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "Form Forge ",
    description:
      "An AI fitness trainer .", 
    tags: ["ICP", "Motoko", "Unity", "HTML", "CSS"],
    imageUrl: rmtdevImg,
    githubUrl: "",
    demoUrl: "",
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
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
  "Web3.js",
  "Truffle",
  "Hardhat",
  "Ethers.js",
  "React Native",
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
