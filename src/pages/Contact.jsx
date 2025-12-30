import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faUser,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState("methods");

  return (
    <section id="contact" className="w-full bg-white py-12 md:py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Contact <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          Let's get connected
        </p>

        {/* Tabs */}
        <div className="inline-flex bg-gray-100 rounded-full p-1 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveTab("form")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "form" ? "bg-blue-600 text-white" : "text-gray-600"
            }`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Contact Form
          </button>

          <button
            onClick={() => setActiveTab("methods")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "methods"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            <FontAwesomeIcon icon={faPhone} />
            Contact Methods
          </button>
        </div>

        {/* Content */}
        {activeTab === "methods" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Email */}
            <InfoCard
              icon={faEnvelope}
              bgColor="bg-blue-100"
              textColor="text-blue-600"
              title="Email"
              description="Atiqashafiqa72@gmail.com"
            />

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4 text-xl">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h3 className="font-semibold">Social Media</h3>
              <div className="flex justify-center gap-4 mt-3 text-gray-600 text-lg">
                <SocialIcon icon={faLinkedin} color="hover:text-blue-600" />
                <SocialIcon icon={faGithub} color="hover:text-black" />
                <SocialIcon icon={faTwitter} color="hover:text-sky-500" />
              </div>
            </div>

            {/* Phone */}
            <InfoCard
              icon={faPhone}
              bgColor="bg-green-100"
              textColor="text-green-600"
              title="Phone"
              description="+92-333-9361548"
            />
          </div>
        ) : (
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6 sm:p-8 text-left">
            <InputField label="Name" placeholder="Your Name" />
            <InputField label="Email" placeholder="you@email.com" type="email" />
            <TextAreaField label="Message" placeholder="Your message..." />
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition mt-2 sm:mt-4">
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* Reusable Components */

function InfoCard({ icon, bgColor, textColor, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
      <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 text-xl ${bgColor} ${textColor}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  );
}

function SocialIcon({ icon, color }) {
  return (
    <FontAwesomeIcon
      icon={icon}
      className={`cursor-pointer transition ${color}`}
    />
  );
}

function InputField({ label, placeholder, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function TextAreaField({ label, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <textarea
        rows="4"
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
