import React, { useEffect, useState } from "react";
import ProjectCard from "../../Components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_PROJECT_URL}/get-all-projects`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="w-full max-w-xs h-[300px] bg-gray-100 rounded-xl animate-pulse"
              />
            ))
          : projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                image={project.images?.[0] || "/images/fallback.png"}
                link={project.link}
              />
            ))}
      </div>
    </section>
  );
};

export default Projects;
