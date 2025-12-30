import React, { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaCode,
  FaServer,
} from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "FlavorVerse Pizza",
    description:
      "Modern pizza ordering website with size, flavors, and cart system.",
    category: "Frontend",
    tech: ["React", "Tailwind", "Framer Motion", "Context API"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Event Booking App",
    description:
      "Book and manage events with full CRUD and admin panel.",
    category: "FullStack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
  },
  {
    id: 3,
    title: "Nutritionist Website",
    description:
      "Clients submit diet plans & book consultations with backend storage.",
    category: "FullStack",
    tech: ["Next.js", "Tailwind", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "API Authentication",
    description:
      "Secure API backend with JWT authentication and MongoDB.",
    category: "Backend",
    tech: ["Node.js", "Express", "JWT", "MongoDB"],
    github: "#",
  },
  {
    id: 5,
    title: "E-Commerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and users.",
    category: "FullStack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
  },
  {
    id: 6,
    title: "Task Management System",
    description:
      "Full-stack task manager with authentication and role-based access.",
    category: "FullStack",
    tech: ["React", "Node.js", "JWT", "MongoDB"],
    github: "#",
  },
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const categories = [
    { name: "All", icon: <FaLayerGroup /> },
    { name: "Frontend", icon: <FaCode /> },
    { name: "Backend", icon: <FaServer /> },
    { name: "FullStack", icon: <FaLayerGroup /> },
  ];

  const filteredProjects =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <section id="projects" className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Explore by category
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition
                ${
                  active === cat.name
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 sm:p-6 border flex flex-col justify-between"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                <FaCode />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-sm bg-blue-50 text-blue-600 px-2 sm:px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-600 mt-auto">
                <a
                  href={project.github}
                  className="flex items-center gap-1 hover:text-blue-600 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 hover:text-blue-600 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
