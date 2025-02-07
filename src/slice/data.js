import { createSlice } from "@reduxjs/toolkit";
import {
  California,
  Infinizai,
  NftMarketplace,
  Yt,
  Zoo,
  Wejob,
  Epis,
  Borgo,
  Osonvend,
  Dastyor,
  backendProject,
  Image
} from "../assets";

const initialState = {
  theme: "dark",
  experiences: [
    {
      start: "Nov, 2024",
      end: "PRESENT",
      company: "Najot Ta'lim",
      company_link: "https://najottalim.uz/",
      position: "Frontend Mentor",
      degree: "Middle",
      description:
        "As a Frontend Mentor at Najot Ta'lim, I guide aspiring developers by teaching advanced frontend concepts and best practices. My role involves conducting interactive sessions, reviewing code, and providing constructive feedback to enhance students' understanding of modern frontend technologies like React, Redux, and TypeScript. I also contribute to developing learning resources and improving the overall quality of the teaching process.",
      techs: [
        "TypeScript",
        "React JS",
        "Redux JS",
        "Next JS",
        "Zustand",
        "TailwindCSS",
      ],
    },
    {
      start: "Sep, 2023",
      end: "Sep, 2024",
      company: "Origin Digital",
      company_link: "https://origin-digital.uz/",
      position: "Frontend Developer",
      description:
        "At Origin Digital, I worked as a Frontend Developer, focusing on creating responsive and visually appealing user interfaces for various web projects. This experience allowed me to refine my skills in web development and gain hands-on experience in delivering high-quality products tailored to client needs.",
      degree: "Middle",
      techs: [
        "TypeScript",
        "React JS",
        "Redux JS",
        "jQuery",
        "JavaScript",
        "API",
        "SCSS",
        "TailwindCSS",
      ],
    },
    {
      start: "March, 2022",
      end: "May 2022",
      company: "Termiz ZOO",
      company_link: "https://termiz-zoo.uz/",
      position: "Full-Stack Web Developer",
      description:
        "I made a website for the zoo. The site uses CRUD and has an admin panel. On the site, you can add news, pictures of animals, holiday greetings, ticket prices, daily news, and the list of employees. The site is designed to be user-friendly. The information on the site is written in a very understandable way.",
      degree: "Junior",
      techs: ["HTML", "CSS", "BOOTSTRAP", "JavaScript", "Django", "Python"],
    },
    {
      start: "Jan, 2022",
      end: "Feb 2022",
      company: "Sabina's Academy",
      company_link: "https://www.instagram.com/sabinas__academy/",
      position: "Frontend Mentor",
      description:
        "During my 1-month internship, I taught front-end web development to academy students. I conducted lessons, prepared a final test, and assessed their progress, with all students achieving excellent results. By the end of the training, they were able to independently create basic websites.",
      degree: "Junior(Intern)",
      techs: ["HTML", "CSS", "SCSS", "BOOTSTRAP", "JavaScript"],
    },
  ],
  skills: ["NodeJs", "NestJs", "ReactJs", "NextJs"],
  projects: [
    {
      title: "Moliya app",
      description:
        "Harajatlaringizni nazorat qila olishingiz uchun loyiha bekendi.",
      src: backendProject,
      github: "https://github.com/whyshoxrux/moliya",
      // href: "https://nft-marketplace-uz.netlify.app/",
      date: "01-02-2025",
    },
    {
      title: "YouTube",
      description: "YouTube clone",
      src: Image,
      github: "https://github.com/whyshoxrux/youtube",
      href: "https://youtube-psi-topaz.vercel.app/",
      date: "12-01-2025 ",
    },
    {
      title: "Erp system",
      description: "O'quv markaz tizimi",
      src: backendProject,
      github: "https://github.com/whyshoxrux/Erp-system",
      // href: "https://mustafo-coder.github.io/game/",
      date: "07-12-2024",
    },
  ],
  socials: [
    { href: "https://t.me/why_shoxrux", icon: "fa-telegram" },
    { href: "https://github.com/whyshoxrux", icon: "fa-github" },
    // { href: "https://www.linkedin.com/in/mustafo-coder", icon: "fa-linkedin" },
    { href: "https://instagram.com/why.shoxrux", icon: "fa-instagram" },
  ],
  status: true,
};

export const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = DataSlice.actions;
export default DataSlice.reducer;
