import React from "react";
import { PROJECTS } from "../Data/data";

const Projects = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <div className="space-y-6 max-w-lg">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer transition-colors duration-200"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-purple-600 text-white mr-2 mb-2 px-2 py-1 text-sm font-medium rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
