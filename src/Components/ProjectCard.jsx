import React from "react";
import Button from "@mui/material/Button";

const ProjectCard = ({ title, description, tech, image, link }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition hover:scale-105 hover:shadow-xl w-full max-w-xs flex flex-col">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-white mt-1">{tech}</p>
        <p className="text-sm text-white mt-2 flex-grow">{description}</p>
        <div className="mt-auto">
          <Button
            size="small"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
