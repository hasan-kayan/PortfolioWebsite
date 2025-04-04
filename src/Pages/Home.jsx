import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Typist from "react-typist-component";
import LaptopScene from "../Components/ModelComponents/LaptopModel";
import logo from "../assets/logo.jpg";

// React Icons
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiDocker,
  SiGit,
  SiGo,
  SiC,
  SiPython,
  SiLinux,
  SiGooglecloud,
  SiPostgresql,
} from "react-icons/si";

export default function Home() {
  const techStackRef = useRef(null);
  const isTechStackInView = useInView(techStackRef, { once: false, margin: "-100px" });

  const infoBoxes = [
    {
      title: "End-to-End Developer",
      desc: "From embedded systems to scalable cloud backends, I build full solutions.",
    },
    {
      title: "Real-Time Systems",
      desc: "Experienced with 3D, live data pipelines, and low-latency communication.",
    },
    {
      title: "IoT & Embedded",
      desc: "Working on cutting-edge projects combining software and hardware.",
    },
  ];

  const techTags = [
    "React", "NodeJs", "ExpressJs", "MongoDB",
    "Docker", "Git", "Golang", "C/C++",
    "Python", "Linux", "AWS", "Google Cloud"
  ];

  const techIcons = [
    SiReact, SiNodedotjs, SiMongodb, SiExpress,
    SiDocker, SiGit, SiGo, SiC,
    SiPython, SiLinux, SiGooglecloud, SiPostgresql,
  ];


  

  return (
    
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start p-10 font-eczar text-white">
      {/* Left dashed line */}
        <div className="absolute left-0 top-0 h-full w-[2px] border-l-2 border-dashed border-white opacity-30 z-0" />

        {/* Right dashed line */}
        <div className="absolute right-0 top-0 h-full w-[2px] border-r-2 border-dashed border-white opacity-30 z-0" />

      {/* Top Section */}
      <motion.div
        className="w-full flex flex-col lg:flex-row items-center justify-center mb-16"
        animate={isTechStackInView ? { opacity: 0, y: -100 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 3D Laptop */}
        <div className="w-[70vh] h-[70vh] flex justify-center items-center">
          <LaptopScene />
        </div>

        {/* Right - Intro Texts */}
        <div className="flex flex-col justify-center items-start text-left pl-16 space-y-6 max-w-xl">
          <motion.img
            src={logo}
            alt="Logo"
            className="w-32 h-32 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />

          <Typist typingDelay={60} cursor={<span>|</span>}>
            <p className="text-3xl font-bold text-white">Hi there! I’m Hasan...</p>
          </Typist>

          <motion.p
            className="text-lg font-medium text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            A Full-Stack Developer & Electronic Engineer.
          </motion.p>

          <motion.p
            className="text-md text-white tracking-wide leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.2 }}
          >
            Currently focused on cutting-edge IoT projects and backend systems.
          </motion.p>

          <motion.p
            className="text-md italic text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.2 }}
          >
            Passionate about 3D web apps, real-time data, and embedded systems.
          </motion.p>
        </div>
      </motion.div>

      {/* Info Boxes (Independent but sync animated with techStackRef) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
      >
        {infoBoxes.map((box, idx) => (
          <motion.div
            key={idx}
            className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md text-white hover:scale-[1.02] transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-2">{box.title}</h3>
            <p className="text-sm text-white/80">{box.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        ref={techStackRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl flex flex-col lg:flex-row items-start justify-between p-10 mt-10 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/20"
      >
        {/* Left - Tech Icons */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
          {techIcons.map((Icon, idx) => (
            <motion.div
              key={idx}
              className="w-24 h-24 flex items-center justify-center rounded-full bg-black/20 hover:scale-110 transition-transform duration-300 hover:bg-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Icon size={48} />
            </motion.div>
          ))}
        </div>

        {/* Right - Tech Tags + Description */}
        <div className="pl-10 mt-10 lg:mt-0 text-white max-w-md space-y-3">
          <motion.p
            className="text-md text-white flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {techTags.map((tech, idx) => (
              <span
                key={idx}
                className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-sm text-white hover:bg-white/20 transition"
              >
                {tech}
              </span>
            ))}
          </motion.p>

          <motion.p
            className="text-lg italic text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.2 }}
          >
            Including this stack I have experience in many other technologies.
            Currently working on embedded systems, IoT projects and backend development with microservices.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
 