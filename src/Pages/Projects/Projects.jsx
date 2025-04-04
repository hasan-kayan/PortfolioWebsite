import React from "react";
import ProjectCard from "../../Components/ProjectCard";

const projectData = [
  {
    title: "IoT Dashboard",
    description: "React-based dashboard for MQTT device monitoring.",
    tech: "React · Node.js · MQTT",
    image: "/images/iot-dashboard.png",
    link: "https://your-link.com",
  },
  {
    title: "Smart Home Controller",
    description: "Mobile app for controlling smart devices.",
    tech: "React Native · Raspberry Pi",
    image: "/images/smart-home.png",
    link: "https://your-link.com",
  },
  {
    title: "3D Portfolio",
    description: "A Three.js-based 3D personal website.",
    tech: "React · Three.js · Typescript",
    image: "/images/3d-portfolio.png",
    link: "https://your-link.com",
  },
  {
    title: "Embedded Linux App",
    description: "CLI and GUI tools for embedded boards.",
    tech: "C++ · GTK · Yocto",
    image: "/images/linux-app.png",
    link: "https://your-link.com",
  },
  {
    title: "Embedded Linux App",
    description: "CLI and GUI tools for embedded boards.",
    tech: "C++ · GTK · Yocto",
    image: "/images/linux-app.png",
    link: "https://your-link.com",
  },
  {
    title: "Embedded Linux App",
    description: "CLI and GUI tools for embedded boards.",
    tech: "C++ · GTK · Yocto",
    image: "/images/linux-app.png",
    link: "https://your-link.com",
  },
  {
    title: "Embedded Linux App",
    description: "CLI and GUI tools for embedded boards.",
    tech: "C++ · GTK · Yocto",
    image: "/images/linux-app.png",
    link: "https://your-link.com",
  },
  {
    title: "Embedded Linux App",
    description: "CLI and GUI tools for embedded boards.",
    tech: "C++ · GTK · Yocto",
    image: "/images/linux-app.png",
    link: "https://your-link.com",
  },
  {
    title: "Embedded Linux App",
    description: "CLI and GUI tools for embedded boards.",
    tech: "C++ · GTK · Yocto",
    image: "/images/linux-app.png",
    link: "https://your-link.com",
  },
];

const Projects = () => {
  return (
    <section className="px-4 py-16 ">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
