import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";

import { RiReactjsLine } from "react-icons/ri";

import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
];

export const HERO = {
  name: "RAKSHITH ",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Properties Lisiting Website",
    description:
      "A RealEstate Website where properties can be listed,Built using expressjs reactjs mongodb nodejs and tailwindcss",
    image: projectImage1,
    githubLink: "https://github.com/rakshithsantosh/projectAlpha",
    websiteLink: "https://real-estate-8o77.onrender.com",
  },
  {
    id: 2,
    name: "Movies App",
    description:
      "A Movie App which fetches movie details,Built using reactjs tailwindcss and appwrite for backend",
    image: projectImage2,
    githubLink: "https://github.com/rakshithsantosh/movieApp",
    websiteLink: "https://movie-app-pi-beryl.vercel.app/",
  },
  {
    id: 3,
    name: "MarkDown Previewer",
    description:
      "A MarkDown Previewer website where we can preview our markdown syntax into the formatted text instantly built with vanilla javascript",
    image: projectImage3,
    githubLink:
      "https://github.com/rakshithsantosh/100projects/tree/main/markdownPreviewer",
    websiteLink: "https://100projects-lilac.vercel.app/",
  },
  {
    id: 4,
    name: "MERN Authentication",
    description:
      "A boiler plate project to start with authentication built with nodejs expressjs mongodb and reactjs for the frontend",
    image: projectImage4,
    githubLink: "https://github.com/rakshithsantosh/mernAuthentication",
  },
  {
    id: 5,
    name: "Portfolio Website",
    description:
      "A portfolio website built using reactjs tailwindcss and framer-motion",
    image: projectImage5,
    githubLink: "https://github.com/rakshithsantosh/devPortfolio",
    websiteLink: "https://dev-portfolio-rho-green.vercel.app/",
  },
];

export const BIO = [
  "Experienced Front-End Developer specializing in Adobe Experience Manager (AEM) implementations, with a focus on modern JavaScript frameworks and scalable architectures. Proficient in developing dynamic and engaging user interfaces using MERN stack. Eager to expand expertise in areas such as GenAI and performance optimization techniques to deliver exceptional digital experiences.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2.5+ years",
  },
  {
    icon: <SiJavascript className="text-4xl text-white lg:text-5xl" />,
    name: "Javascript",
    experience: "3+ years",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <SiTailwindcss className="text-4xl text-red-600 lg:text-5xl" />,
    name: "TailwindCSS",
    experience: "2+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <SiExpress className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Express JS",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "0.5+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Project Engineer",
    company: "Wipro Limited",
    duration: "July 2021 - April 2025",
    description:
      "Worked as an AEM Developer for a high-traffic, US-based e-commerce platform. Developed and maintained key features using vanilla JavaScript, GraphQL, and React, leveraging Adobe Experience Manager (AEM) for content management. Collaborated within an Agile environment using Git for version control. Contributed to the improvement in LCP by implementing lazy loading.",
  },
];

export const EDUCATION = [
  {
    degree: "B Tech in Electrical Engineering",
    institution: "PES University",
    duration: "May 2017 - June 2021",
    description:
      "Specialized in Embedded Engineering and Robotics. Participated in various projects involving frontend development, Participated in multiple Hackathons. Graduated with Distinction.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/Rakshithsantos1",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/rakshithsantosh",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/rak-99-s/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
