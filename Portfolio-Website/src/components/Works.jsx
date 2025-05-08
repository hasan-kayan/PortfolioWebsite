import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Projeyi gösteren kart bileşeni
const ProjectCard = ({ title, description, technologies, images, githubLink, demoLink }) => {
  const imageUrl = images?.[0]?.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/") || "/images/fallback.png";
  const link = demoLink || githubLink;

  const techList = typeof technologies === "string"
    ? technologies.split(",").map(t => t.trim())
    : Array.isArray(technologies) ? technologies : [];

  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={imageUrl}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {githubLink && (
              <div
                onClick={() => window.open(githubLink, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {techList.map((tech, idx) => (
            <p key={idx} className="text-[14px] text-blue-400">#{tech}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Ana bileşen
const Works = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_PROJECT_URL}/get-all-projects`);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        console.log("Fetched projects:", data); // DEBUG
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These are some of the projects I've developed recently. You can check out the code or live demos.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {loading ? (
          Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[360px] h-[300px] bg-gray-100 rounded-xl animate-pulse"
            />
          ))
        ) : (
          projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
