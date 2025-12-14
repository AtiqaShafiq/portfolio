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
    <section
      id="contact"
      className="w-full bg-white py-16 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-2">
          Contact <span className="text-blue-600">Me</span>
        </h2>
        <p className="text-gray-500 mb-8">Let's get connected</p>

        {/* Tabs */}
        <div className="inline-flex bg-gray-100 rounded-full p-1 mb-12">
          <button
            onClick={() => setActiveTab("form")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "form"
                ? "bg-blue-600 text-white"
                : "text-gray-600"
            }`}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Contact Form
          </button>

          <button
            onClick={() => setActiveTab("methods")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition ${
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-gray-500 mt-1">
                hammad@example.com
              </p>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-purple-100 text-purple-600 mb-4">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <h3 className="font-semibold">Social Media</h3>
              <div className="flex justify-center gap-4 mt-3 text-gray-600 text-lg">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="cursor-pointer hover:text-blue-600 transition"
                />
                <FontAwesomeIcon
                  icon={faGithub}
                  className="cursor-pointer hover:text-black transition"
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="cursor-pointer hover:text-sky-500 transition"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-gray-500 mt-1">
                +92-XXX-XXXXXXX
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-left">
            {/* Name */}
            <label className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Message */}
            <label className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Submit */}
            <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
