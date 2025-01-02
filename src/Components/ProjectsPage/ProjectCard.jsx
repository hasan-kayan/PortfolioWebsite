import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={props.imgPath}
        alt="card-img"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{props.title}</h3>
        <p className="text-gray-700 text-justify">{props.description}</p>
        <div className="mt-4 flex items-center space-x-4">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition"
          >
            <BsGithub className="mr-2" /> {props.isBlog ? "Blog" : "GitHub"}
          </a>
          {!props.isBlog && props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center hover:bg-green-700 transition"
            >
              <CgWebsite className="mr-2" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
