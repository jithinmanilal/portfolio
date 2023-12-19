import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Cakesmiths from "@/public/Cakesmiths.png";
import Nextnode from "@/public/Nextnode.png";
import Pagen from "@/public/Pagen.png";

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
    title: "Brototype",
    location: "Cochin, Kerala",
    description:
      "I graduated Python full-stack web development program, gaining expertise in utilizing the Django framework, React.js, and PostgreSQL within a dynamic and collaborative learning environment.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2022 - Nov 2023",
  },
  {
    title: "Shibu Enterprises | Manager",
    location: "Raigad, Maharashtra",
    description:
      "Oversaw supplier, customer, and third-party vendor relationships while efficiently managing financial obligations. Executed bank deposits and ensured accurate reconciliation of financial statements.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2020 - Jun 2022",
  },
  {
    title: "FAB | Sr. Relationship Officer",
    location: "Dubai, UAE",
    description:
      "Worked as a relationship officer & I have successfully navigated various responsibilities centered around building and maintaining strong relationships with clients",
      icon: React.createElement(CgWorkAlt),
    date: "Sep 2018 - Jul 2019",
  },
  {
    title: "ADCB | Sr. Relationship Officer",
    location: "Abu Dhabi, UAE",
    description:
      "Addressed the banking needs of target market companies, providing personalized solutions such as personal loans, credit cards, current accounts, and savings accounts.",
      icon: React.createElement(CgWorkAlt),
    date: "Jan 2018 - Jul 2018",
  },
  {
    title: "Doha Bank | Relationship Officer",
    location: "Abu Dhabi, UAE",
    description:
      "Implemented effective marketing strategies to expand market presence, including onboarding new companies and promoting new products.",
      icon: React.createElement(CgWorkAlt),
    date: "May 2014 - Nov-2017",
  },
] as const;

export const projectsData = [
  {
    title: "Cakesmiths",
    description:
      "E-commerce project with cakes as a product. Features include cart, wishlist, coupons and orders for the user side.",
    tags: ["Django", "Ajax", "Bootstrap", "Figma", "Postgresql"],
    imageUrl: Cakesmiths,
    siteUrl: "https://www.cakesmiths.shop",
  },
  {
    title: "Nextnode",
    description:
      "A fully functional social media project with options to set user preferences for posts.",
    tags: ["Django", "Django Rest Framework", "Tailwind", "React.js", "Redux Toolkit"],
    imageUrl: Nextnode,
    siteUrl: "https://nextnode.jithinmanilal.site",
  },
  {
    title: "Pagen",
    description:
      "A password generator app to create random passwords and save them for further applications.",
    tags: ["Django", "Postgresql", "React.js", "Css", "Figma", "Context API"],
    imageUrl: Pagen,
    siteUrl: "https://github.com/jithinmanilal/pagen",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "PostgreSQL",
  "MongoDB",
  "Redux-Toolkit",
  "GraphQL",
] as const;