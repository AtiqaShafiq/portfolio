import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faAws,
  faMicrosoft,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Education() {
  const [activeTab, setActiveTab] = useState("formal");

  return (
    <section id="education" className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Educational <span className="text-blue-600">Background</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            My academic journey and continuous learning path in computer science
            and web development
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white shadow rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("formal")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "formal"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Formal Education
            </button>
            <button
              onClick={() => setActiveTab("cert")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                activeTab === "cert"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Certifications
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === "formal" ? <FormalEducation /> : <Certifications />}
      </div>
    </section>
  );
}

/* -------------------- Formal Education -------------------- */
function FormalEducation() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Bachelor */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-semibold">
          Bachelor of Software Engineering
        </h3>
        <p className="text-blue-600 mt-1">Software Engineering</p>

        <p className="text-sm text-gray-500 mt-3">
          Capital University of Science & Technology · Islamabad, Pakistan
        </p>
        <p className="text-sm text-gray-500">2020 – 2024</p>

        <div className="flex gap-3 mt-4">
          <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
            GPA: 3.15/4.00
          </span>
          <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
            Graduated
          </span>
        </div>

        <p className="mt-4 text-gray-600 text-sm">
          Passionate and detail-oriented software developer with a strong
          foundation in full-stack web development.
        </p>

        <h4 className="mt-4 font-semibold">Key Courses:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            "Data Structures",
            "Algorithms",
            "Software Engineering",
            "Mobile Programming",
            "Web Development",
          ].map((course) => (
            <span
              key={course}
              className="px-3 py-1 text-xs bg-gray-100 rounded-full"
            >
              {course}
            </span>
          ))}
        </div>
      </div>

      {/* Bootcamp */}
      <div className="bg-white rounded-2xl shadow p-6">
        <h3 className="text-xl font-semibold">
          Full Stack Web Development
        </h3>
        <p className="text-blue-600 mt-1">
          Intensive Bootcamp (MERN)
        </p>
        <p className="text-sm text-gray-500 mt-2">Online · 2025</p>

        <div className="flex gap-3 mt-4">
          <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
            Outstanding
          </span>
          <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
            Certified
          </span>
        </div>

        <h4 className="mt-4 font-semibold">Key Courses:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {["React", "Node.js", "MongoDB", "Express", "Deployment"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-gray-100 rounded-full"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------- Certifications -------------------- */
function Certifications() {
  const certs = [
    {
      title: "Meta Front-End Developer",
      org: "Coursera",
      year: "2024",
      icon: faGraduationCap,
    },
    {
      title: "Google UX Design",
      org: "Coursera",
      year: "2023",
      icon: faGoogle,
    },
    {
      title: "AWS Cloud Practitioner",
      org: "Amazon",
      year: "2024",
      icon: faAws,
    },
    {
      title: "Microsoft Azure Fundamentals",
      org: "Microsoft",
      year: "2023",
      icon: faMicrosoft,
    },
    {
      title: "React + TypeScript",
      org: "Udemy",
      year: "2022",
      icon: faReact,
    },
    {
      title: "Responsive Web Design",
      org: "freeCodeCamp",
      year: "2021",
      icon: faGraduationCap,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {certs.map((cert) => (
        <div
          key={cert.title}
          className="bg-white rounded-xl shadow p-5 text-center hover:shadow-lg transition"
        >
          <FontAwesomeIcon
            icon={cert.icon}
            className="text-4xl text-blue-600 mb-3"
          />
          <h4 className="font-semibold text-sm">{cert.title}</h4>
          <p className="text-xs text-gray-500 mt-1">{cert.org}</p>
          <span className="inline-block mt-3 px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
            {cert.year}
          </span>
        </div>
      ))}
    </div>
  );
}
