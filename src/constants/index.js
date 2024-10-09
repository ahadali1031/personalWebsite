import { spring } from "react-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    database,
    html,
    css,
    aws,
    reactjs,
    csharp,
    personalWebPic,
    springboot,
    firebase,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sql,
    meta,
    electronicArts,
    java,
    python,
    tesla,
    gtri,
    carrent,
    jobit,
    tripguide,
    threejs,
    diamond,
    eelog,
    cpp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "FullStack Developer",
      icon: web,
    },
    {
      title: "Database System Implementations",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Tools and Utilities Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Spring Boot",
      icon: springboot,
    },
    {
      name: "Firebase",
      icon: firebase,
    }
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "Electronic Arts",
      icon: electronicArts,
      iconBg: "#F5F5F5",
      date: "May 2024 - Aug 2024",
      points: [
        "Optimized a critical data export plugin in C# and XML, reducing data processing time by 25%",
        "Developed and integrated 50+ script methods, accelerating script integration by 30% using Visual Studio",
        "Debugged legacy code using breakpoints and call stack analysis, solving long-standing bugs",
        "Collaborated in Agile teams for code reviews using Git and Swarm, ensuring code quality and consistency",
        "Generated JUnit tests to validate cases for JSON exports, improving test coverage by 50+ cases",
        "Documented processes using Confluence, facilitating seamless onboarding for 5+ future developers"
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Divine Diamonds",
      icon: diamond,
      iconBg: "#F5F5F5",
      date: "May 2023 - Aug 2023",
      points: [
        "Migrated inventory system to a cloud-based platform using AWS ensuring 100% data safety",
        "Applied AWS RDS to migrate inventory data and AWS S3 for scalable cloud storage",
        "Enhanced database performance using SQL optimization, reducing query response times by 50%",
        "Planned backup and disaster recovery solutions, increasing system reliability and fault tolerance",
        "Collaborated with cross-functional teams to ensure seamless cloud deployment, achieving 99.9% uptime"
      ],
    },
    {
      title: "Software Engineer",
      company_name: "GT Research Institute",
      icon: gtri,
      iconBg: "#383E56",
      date: "Jan 2023 - May 2023",
      points: [
        "Formulated C++ algorithms for servos, increasing balloon descent accuracy by 95% and optimizing power efficiency",
        "Utilized Python and Pandas libraries to decode telemetry, providing real-time insights via Jupyter Notebook",
        "Processed and visualized sensor data using Matplotlib, optimizing balloon performance tracking by 20%",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "Divine Diamonds",
      icon: diamond,
      iconBg: "#F5F5F5",
      date: "May 2022 - Aug 2022",
      points: [
        "Created and built a centralized inventory system, reducing manual tracking errors by 40% across 3 retail locations",
        "Leveraged SQL and Java(Spring Boot) to implement real-time inventory updates, improving efficiency by 300%, implementing responsive design and ensuring cross-browser compatibility",
        "Improved the inventory management process, increasing accuracy and speed of stock updates by 20%",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Website",
      description:
        "React based webstie that uses Three.js as well as advanced CSS elements.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: personalWebPic,
      source_code_link: "https://github.com/ahadali1031/personalWebsite",
    },
    {
      name: "Electronic Edge Logbook",
      description:
        "Full-stack application with Flask, Firebase and React that allows users to login and add shift information as well as customize fields and allows for offline storage.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: eelog,
      source_code_link: "https://github.com/",
    },
    {
      name: "Database System Implementatiom",
      description:
        "Created database using C++ that allows for efficient, multi-threaded access.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: database,
      source_code_link: "https://github.com/ahadali1031/DatabaseSystemImplementation",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };