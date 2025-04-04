import React from "react";

const ProjectCard = ({ title, description, tech, image, link }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:scale-105 hover:shadow-xl w-full max-w-xs">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{tech}</p>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-blue-600 hover:underline font-medium"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
