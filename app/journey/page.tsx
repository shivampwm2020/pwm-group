import { ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaCode,
  FaGlobe,
} from "react-icons/fa";
import CTASection from "../components/ui/CTASection";

const journeyMilestones = [
  {
    year: "2020",
    title: "Foundation Era",
    icon: "🛠️", // Represents foundation and building
    description: "Our initial platform focused on programming tutorials.",
    achievements: ["Built using Wix", "Programming-focused content"],
    link: "https://shivam21maurya.wixsite.com/website-1",
  },
  {
    year: "2021",
    title: "Growth Phase",
    icon: "📈", // Represents growth
    description: "Expanded educational content and structured learning paths.",
    achievements: ["Beginner to advanced courses", "Improved navigation"],
    link: "https://shivam21maurya.wixsite.com/my-site-3",
  },
  {
    year: "2022",
    title: "Community Focus",
    icon: "🌐", // Represents community and connectivity
    description: "Interactive features and community collaboration tools.",
    achievements: ["User forums", "Live Q&A sessions"],
    link: "https://shivam21maurya.wixsite.com/programming-with-mau",
  },
  {
    year: "2023",
    title: "Pre-AI Transition",
    icon: "🤖", // Represents AI and future tech
    description: "Our comprehensive learning hub before our AI transformation.",
    achievements: ["All-in-one hub", "Preview of upcoming AI tools"],
    link: "https://shivam21maurya.wixsite.com/website",
  },
];

export default function JourneyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-white z-0"></div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:py-36 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900">
              Our Journey
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              From a programming education platform to an AI innovation
              powerhouse
            </p>

            {/* CTA button */}
            <div className="mt-10">
              <a
                href="#archives"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-base sm:text-lg px-6 py-3 rounded-lg shadow-md transition"
              >
                Explore Our Story
              </a>
            </div>
          </div>
        </div>

        {/* Subtle bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
      </section>

      {/* Previous Site Archives */}
      <section id="archives" className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Archives
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Digital Evolution
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore our past iterations as we transformed from a simple blog
              to an enterprise platform
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {journeyMilestones.map((milestone, index) => (
              <a
                key={index}
                href={milestone.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl text-indigo-600">
                      {milestone.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {milestone.title}
                    </h3>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {milestone.year}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  {milestone.description}
                </p>

                <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
                  {milestone.achievements.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="mt-4 text-sm text-blue-600 font-medium flex items-center">
                  <span>Visit Archive</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vertical line */}
          <div className="relative">
            {/* On mobile, line on left; on md+, centered */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-500 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            {[
              {
                year: "2025",
                title: "The AI Renaissance",
                subtitle: "Present • 2025",
                gradient: "from-blue-600 to-indigo-600",
                content: (
                  <>
                    <p className="text-gray-600 mb-6">
                      Transformed into a comprehensive AI ecosystem with three
                      distinct platforms: Sarkari Samadhan, Aiution, and Goal
                      Ninja.
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Sarkari Samadhan",
                          desc: "Simplifying government services for every Indian citizen",
                          bg: "bg-orange-50",
                          text: "text-orange-800",
                        },
                        {
                          name: "Aiution",
                          desc: "Enterprise AI integration and solutions platform",
                          bg: "bg-blue-50",
                          text: "text-blue-800",
                        },
                        {
                          name: "Community Hub",
                          desc: "Connecting professionals, learners, and innovators",
                          bg: "bg-green-50",
                          text: "text-green-800",
                        },
                      ].map((item, idx) => (
                        <div key={idx} className={`p-4 rounded-md ${item.bg}`}>
                          <h5 className={`font-semibold ${item.text}`}>
                            {item.name}
                          </h5>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ),
              },
              {
                year: "2024",
                title: "Strategic Transformation",
                subtitle: "Transition • 2024",
                gradient: "from-blue-400 to-indigo-400",
                content: (
                  <p className="text-gray-600">
                    A year of reflection and reinvention, focusing on AI
                    technology and innovation.
                  </p>
                ),
              },
              {
                year: "2023",
                title: "Comprehensive Learning Hub",
                subtitle: "2023 • Fourth Evolution",
                gradient: "from-gray-300 to-gray-400",
                content: (
                  <>
                    <p className="text-gray-600 mb-4">
                      Expanded into a full-fledged educational platform with
                      multiple courses and career guidance.
                    </p>
                    <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                      <li>Advanced programming courses</li>
                      <li>Career counseling services</li>
                      <li>Industry collaboration programs</li>
                      <li>Live mentoring sessions</li>
                    </ul>
                  </>
                ),
              },
              {
                year: "2022",
                title: "Community-Focused Platform",
                subtitle: "2022 • Third Evolution",
                gradient: "from-gray-300 to-gray-400",
                content: (
                  <>
                    <p className="text-gray-600 mb-4">
                      Enhanced the platform with community features and
                      interactive learning elements.
                    </p>
                    <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                      <li>Interactive coding challenges</li>
                      <li>Community forums</li>
                      <li>Project collaborations</li>
                      <li>Student showcase</li>
                    </ul>
                  </>
                ),
              },
              {
                year: "2021",
                title: "Educational Content Platform",
                subtitle: "2021 • Second Evolution",
                gradient: "from-gray-300 to-gray-400",
                content: (
                  <>
                    <p className="text-gray-600 mb-4">
                      Expanded the tutorial base and introduced structured
                      learning paths.
                    </p>
                    <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
                      <li>Curated learning journeys</li>
                      <li>Topic-wise video lectures</li>
                      <li>Quizzes and certification</li>
                    </ul>
                  </>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="relative mb-20">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                  {/* Left side on md, full width center on mobile */}
                  <div className="md:w-1/2 md:pr-16 text-center md:text-right mb-6 md:mb-0">
                    <div
                      className={`inline-block px-4 py-2 bg-gradient-to-r ${item.gradient} text-white text-sm font-medium rounded-full mb-3`}
                    >
                      {item.subtitle}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:-ml-3.5 -ml-2 mt-3">
                    <div
                      className={`w-6 h-6 bg-gradient-to-r ${item.gradient} rounded-full border-4 border-white shadow-md`}
                    ></div>
                  </div>

                  {/* Right side on md, full width center on mobile */}
                  <div className="md:w-1/2 md:pl-16 text-center md:text-left">
                    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm inline-block max-w-full">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Vision
            </h2>
            <p className="mt-2 text-4xl font-bold text-gray-900">
              Looking Forward
            </p>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our journey from coding education to AI innovation reflects our
              dedication to evolving technology.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-10 sm:p-12 text-gray-800 text-xl leading-relaxed">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-blue-600 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-600 rounded-br-2xl"></div>
            <p>
              From our humble beginnings as a programming education platform to
              our current position as an AI innovation leader, we continue to
              evolve and adapt to serve our users better. Our mission remains
              constant: empowering individuals and organizations through
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Be part of our evolution"
        subheading="Join us as we shape the future of technology"
        bgGradient="bg-gradient-to-r from-blue-600 to-indigo-700"
        buttonOneText="Get in touch"
        buttonOneHref="/contact"
        buttonOneBg="bg-white"
        buttonOneTextColor="text-blue-700"
        buttonTwoText="Explore solutions"
        buttonTwoHref="/products"
        buttonTwoBg="bg-blue-700"
        buttonTwoTextColor="text-white"
      />
    </div>
  );
}
