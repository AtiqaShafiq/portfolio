import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Solid Icons */
import {
  faCode,
  faUsers,
  faScrewdriverWrench,
  faLightbulb,
  faComments,
  faPeopleGroup,
  faClock,
  faCrown,
  faArrowsRotate,
  faPaintBrush,
  faRocket,
  faCodeBranch,
  faServer,
  faDatabase,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";

/* Brand Icons */
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faGitAlt,
  faGithub,
  faNpm,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <section id="skills" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="mt-3 text-gray-600">
            Explore my strengths across tech, tools, and mindset.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-full p-1 flex gap-1">
            <TabButton
              label="Technical"
              icon={faCode}
              active={activeTab === "technical"}
              onClick={() => setActiveTab("technical")}
            />
            <TabButton
              label="Soft Skills"
              icon={faUsers}
              active={activeTab === "soft"}
              onClick={() => setActiveTab("soft")}
            />
            <TabButton
              label="Tools"
              icon={faScrewdriverWrench}
              active={activeTab === "tools"}
              onClick={() => setActiveTab("tools")}
            />
          </div>
        </div>

        {/* Content */}
        {activeTab === "technical" && <Technical />}
        {activeTab === "soft" && <SoftSkills />}
        {activeTab === "tools" && <Tools />}

      </div>
    </section>
  );
}

/* ---------------- TAB BUTTON ---------------- */
function TabButton({ label, icon, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-600 hover:bg-white"
      }`}
    >
      <FontAwesomeIcon icon={icon} />
      {label}
    </button>
  );
}

/* ---------------- TECHNICAL ---------------- */
function Technical() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <TechCard
        title="Frontend Development"
        icon={faReact}
        skills={[
          { name: "React", value: 90, icon: faReact },
          { name: "HTML", value: 95, icon: faHtml5 },
          { name: "CSS", value: 90, icon: faCss3Alt },
          { name: "JavaScript", value: 88, icon: faJs },
        ]}
      />

      <TechCard
        title="Backend Development"
        icon={faNodeJs}
        skills={[
          { name: "Node.js", value: 85, icon: faNodeJs },
        ]}
      />

      <TechCard
        title="Database & Cloud"
        icon={faDatabase}
        skills={[
          { name: "MongoDB", value: 85 },
          { name: "Git", value: 90, icon: faGitAlt },
          { name: "GitHub", value: 88, icon: faGithub },
        ]}
      />
    </div>
  );
}

function TechCard({ title, icon, skills }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-blue-600">
        <FontAwesomeIcon icon={icon} />
        {title}
      </h3>

      {skills.map((skill) => (
        <div key={skill.name} className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="flex items-center gap-2">
              {skill.icon && <FontAwesomeIcon icon={skill.icon} />}
              {skill.name}
            </span>
            <span>{skill.value}%</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-blue-600 rounded-full"
              style={{ width: `${skill.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- SOFT SKILLS ---------------- */
function SoftSkills() {
  const skills = [
    {
      title: "Problem Solving",
      desc: "Approach complex issues with structured thinking.",
      level: "Expert",
      icon: faLightbulb,
    },
    {
      title: "Communication",
      desc: "Clearly express ideas to teams and clients.",
      level: "Advanced",
      icon: faComments,
    },
    {
      title: "Team Collaboration",
      desc: "Work effectively with cross-functional teams.",
      level: "Advanced",
      icon: faPeopleGroup,
    },
    {
      title: "Adaptability",
      desc: "Quickly learn and adjust to new technologies.",
      level: "Advanced",
      icon: faArrowsRotate,
    },
    {
      title: "Time Management",
      desc: "Meet deadlines and manage workload efficiently.",
      level: "Proficient",
      icon: faClock,
    },
    {
      title: "Leadership",
      desc: "Guide and support team growth and productivity.",
      level: "Intermediate",
      icon: faCrown,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {skills.map((s) => (
        <div
          key={s.title}
          className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
        >
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
            <FontAwesomeIcon icon={s.icon} className="text-2xl text-blue-600" />
          </div>

          <h4 className="font-semibold text-lg">{s.title}</h4>
          <p className="text-sm text-gray-600 mt-2">{s.desc}</p>

          <span className="inline-block mt-4 px-4 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-medium">
            {s.level}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------------- TOOLS ---------------- */
function Tools() {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      <ToolColumn
        title="Development Tools"
        icon={faScrewdriverWrench}
        items={[
          { name: "Git & GitHub", icon: faGithub },
          { name: "VS Code", icon: faCodeBranch },
          { name: "NPM", icon: faNpm },
        ]}
      />

      <ToolColumn
        title="Design Tools"
        icon={faPaintBrush}
        items={[
          { name: "Figma", icon: faFigma },
        ]}
      />

      <ToolColumn
        title="Testing & Deployment"
        icon={faRocket}
        items={[
          { name: "Postman", icon: faServer },
          { name: "MongoDB Compass", icon: faDatabase },
          { name: "Vercel", icon: faCloud },
          { name: "Netlify", icon: faCloud },
          { name: "Render", icon: faCloud },
        ]}
      />
    </div>
  );
}

function ToolColumn({ title, icon, items }) {
  return (
    <div>
      <h4 className="font-semibold text-blue-600 mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={icon} />
        {title}
      </h4>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg text-sm hover:bg-blue-50 transition"
          >
            <FontAwesomeIcon icon={item.icon} className="text-blue-600" />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
