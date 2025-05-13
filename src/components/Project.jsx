import React from 'react';
import Blog from "../assets/images/blog.png";
import Hotel from "../assets/images/hotel.png";
import Worldtech from "../assets/images/worldtech.png";
import Movie from "../assets/images/movie.png";

function Skills() {
  const projectOverview = [
    { name: "MERN STACK", number: 5 },
    { name: "REACT JS", number: 10 },
    { name: "HTML", number: 5 },
    { name: "PHP", number: 3 },
    { name: "EXPRESS JS", number: 5 },
    { name: "FLUTTER", number: 2 },
  ];

  const latestProjects = [
    {
      name: "World Technology",
      description: "A project showcasing modern world technologies.",
      madeWith: "React JS and Tailwind CSS",
      imageUrl: Worldtech,
      isHosted: true,
      githubLink: "https://github.com/ngabodaniel1000/world-tech",
      hostingLink: "https://world-xtech.netlify.app/",
    },
    {
      name: "Blog App",
      description: "A fullstack blog app allowing users to create, view, edit, and comment on posts.",
      madeWith: "MERN Stack",
      imageUrl: Blog,
      isHosted: false,
      githubLink: "https://github.com/ngabodaniel1000/Blog-app",
      hostingLink: "",
    },
    {
      name: "Hotel Website",
      description: "A real-world hotel website developed with Express backend and frontend.",
      madeWith: "Node.js and Express.js",
      imageUrl: Hotel,
      isHosted: false,
      githubLink: "https://github.com/ngabodaniel1000/urumurihotel",
      hostingLink: "",
    },
    {
      name: "Movie Website",
      description: "A modern movie streaming site with React frontend.",
      madeWith: "React JS",
      imageUrl: Movie,
      isHosted: true,
      githubLink: "https://github.com/ngabodaniel1000/movie-web",
      hostingLink: "https://danwatchmovie.netlify.app/",
    },
  ];

  return (
    <div className="lg:ml-[200px] flex flex-col gap-5 lg:flex-row min-h-screen pt-[150px] lg:pt-[100px]">
      <div className="text-white lg:w-[80%] bg-[#333] pb-5">
        <h1 className="text-center pt-5 text-2xl font-bold">Latest Projects</h1>
        <div className="lg:w-[900px] lg:ml-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {latestProjects.map((project, index) => (
            <div key={index} className="bg-[#444] rounded-xl p-4 flex flex-col items-center gap-4 shadow-lg">
              <h2 className="text-xl font-semibold text-center">{project.name}</h2>
              <img
                src={project.imageUrl}
                alt={`${project.name} Screenshot`}
                className="w-full max-w-[400px] object-cover h-[200px] rounded-lg"
              />
              <p className="text-center">{project.description}</p>
              <p className="text-sm text-gray-300 italic">Built with: {project.madeWith}</p>
              <div className="flex gap-4 mt-2">
                <a
                  href={project.isHosted ? project.hostingLink : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-blue-600 rounded-xl px-4 py-2 text-white text-sm ${
                    !project.isHosted ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
                  }`}
                >
                  Live Preview
                </a>
                <a
                  href={project.githubLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-blue-600 rounded-xl px-4 py-2 text-white text-sm ${
                    !project.githubLink ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
                  }`}
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
