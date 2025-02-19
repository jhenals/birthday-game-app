import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  java,
  southtours,
} from "../assets";

import { projects, highlightedProjects } from "./projects";
import accounts from "./socmeds";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "exploringfurther",
    title: "Exploring Further",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  /*   {
    title: "Content Creator",
    icon: creator,
  }, */
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "South Tours",
    icon: southtours,
    iconBg: "#383E56",
    date: "Jul 2023 - Sep 2023",
    points: [
      "Collaborated with the company’s development team to design, develop, and implement a web application aimed at allowing users to discover, recommend,and purchase various products based ontheir interests and buying preferences.",
      "Implemented HTTP calls in PHP for userregistration and authentication, as well as for requesting data from the web server.",
      "Utilized the following technologies and tools:",
      "– Backend: PHP,",
      "– Frontend: ReactJS",
      "– Database: MySQL",
      "– Libraries and frameworks: MUI, Bootstrap",
      "– others: HTML5,CSS,Javascript, XAMPP, Github, Git.",
    ],
  },
];

const exploringfurther = [
  {
    title: "Book Journal",
    about:
      "A personal collection of thoughts, reflections, and reviews on the books I’ve read. It’s a space where literature meets introspection.",
    link: "https://medium.com/@jhenalsbl",
  },
  {
    title: "Blogs",
    about:
      "A collection of articles and posts on various topics, ranging from programming and technology to personal musings and experiences.",
    link: "https://medium.com/@suboljhenalyn3",
  },
  {
    title: "Poetry",
    about:
      "A creative space where I share my poems, inspired by thoughts, feelings, and moments of inspiration from everyday life.",
    link: "https://allpoetry.com/Jhenals",
  },
  {
    title: "Little Gallery",
    about:
      "A small collection of moments captured through my lens—fragments of light, color, and memory. Each picture holds a quiet story, a fleeting thought, or a simple beauty that caught my eye.",
    link: "https://www.instagram.com/jhenalsbl/",
  },
];

export {
  services,
  technologies,
  experiences,
  exploringfurther,
  projects,
  highlightedProjects,
  accounts,
};
