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
    <section id="education" className="w-full py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Educational <span className="text-blue-600">Background</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            My academic journey and continuous learning path in computer science
            and web development
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="bg-white shadow rounded-full p-1 flex flex-wrap sm:flex-nowrap">
            <button
              onClick={() => setActiveTab("formal")}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition ${
                activeTab === "formal"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600"
              }`}
            >
              Formal Education
            </button>
            <button
              onClick={() => setActiveTab("cert")}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition ${
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {/* Bachelor */}
      <EducationCard
        title="Bachelor of Software Engineering"
        degree="Software Engineering"
        location="Capital University of Science & Technology · Islamabad, Pakistan"
        year="2020 – 2024"
        badges={["GPA: 3.15/4.00", "Graduated"]}
        description="Passionate and detail-oriented software developer with a strong foundation in full-stack web development."
        courses={[
          "Data Structures",
          "Algorithms",
          "Software Engineering",
          "Mobile Programming",
          "Web Development",
        ]}
      />

      {/* Bootcamp */}
      <EducationCard
        title="Full Stack Web Development"
        degree="Intensive Bootcamp (MERN)"
        location="Online"
        year="2025"
        badges={["Outstanding", "Certified"]}
        description=""
        courses={["React", "Node.js", "MongoDB", "Express", "Deployment"]}
      />
    </div>
  );
}

function EducationCard({ title, degree, location, year, badges, description, courses }) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 sm:p-6 flex flex-col">
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      <p className="text-blue-600 mt-1">{degree}</p>
      <p className="text-sm text-gray-500 mt-2">{location}</p>
      <p className="text-sm text-gray-500">{year}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {badges.map((badge) => (
          <span
            key={badge}
            className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full"
          >
            {badge}
          </span>
        ))}
      </div>

      {description && <p className="mt-4 text-gray-600 text-sm">{description}</p>}

      {courses && courses.length > 0 && (
        <>
          <h4 className="mt-4 font-semibold text-sm sm:text-base">Key Courses:</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {courses.map((course) => (
              <span
                key={course}
                className="px-3 py-1 text-xs bg-gray-100 rounded-full"
              >
                {course}
              </span>
            ))}
          </div>
        </>
      )}
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {certs.map((cert) => (
        <div
          key={cert.title}
          className="bg-white rounded-xl shadow p-4 sm:p-5 text-center hover:shadow-lg transition flex flex-col items-center"
        >
          <FontAwesomeIcon
            icon={cert.icon}
            className="text-3xl sm:text-4xl text-blue-600 mb-2 sm:mb-3"
          />
          <h4 className="font-semibold text-sm sm:text-base">{cert.title}</h4>
          <p className="text-xs text-gray-500 mt-1">{cert.org}</p>
          <span className="inline-block mt-2 px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
            {cert.year}
          </span>
        </div>
      ))}
    </div>
  );
}
