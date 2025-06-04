"use client";

import { Link } from "next-view-transitions";
import HeroSection from "../components/ui/HeroSection";
import CountUp from "react-countup";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaNewspaper,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import { FiGift, FiSettings } from "react-icons/fi";
import CTASection from "../components/ui/CTASection";
import SlideIn from "../components/ui/SlideIn";

const services = [
  {
    name: "AIution",
    description:
      "Aiution is an AI-as-a-Service platform that helps businesses automate workflows, launch internal chatbots, create analytics dashboards, and integrate AI systems with minimal setup. It's tailored for enterprises in India and beyond that want to modernize operations without hiring large dev teams.",
    path: "/services/aiution",
    image: "/aiution_logo.svg",
    icon: "artificial-intelligence",
    features: [
      "Workflow automation",
      "Internal chatbots",
      "Analytics dashboards",
      "AI system integration",
    ],
    benefits: [
      "Minimal setup required",
      "Modernize operations",
      "No need for large dev teams",
      "Tailored for enterprises",
    ],
  },
  {
    name: "Enterprise Consulting",
    description:
      "Service Arm: Expanding into enterprise consulting and product development using PWM's frameworks and internal tools.",
    path: "/services/enterprise-consulting",
    image: "/aiution_logo.svg",
    icon: "chart-increasing",
    features: [
      "Enterprise consulting",
      "Product development",
      "Framework implementation",
      "Internal tools utilization",
    ],
    benefits: [
      "Expert guidance",
      "Custom solutions",
      "Proven frameworks",
      "Efficient implementation",
    ],
  },
];

const stats = [
  { value: 98, suffix: "%", label: "Client satisfaction rate" },
  { value: 20, suffix: "+", label: "Projects delivered" },
  { value: 24, suffix: "/7", label: "Support and maintenance" },
  { value: 5, suffix: "+", label: "Years of experience" },
];

const roadmapItems = [
  {
    id: 1,
    title: "Weekly Newsletter",
    description:
      "Launching a focused newsletter covering tech trends, AI innovations, product stories, and community updates.",
    icon: <FaNewspaper className="text-white text-2xl" />,
  },
  {
    id: 2,
    title: "Community Building",
    description:
      "Creating dedicated communities for AI engineers, indie hackers, product builders, and users of each PWM tool.",
    icon: <FaUsers className="text-white text-2xl" />,
  },
  {
    id: 3,
    title: "Sessions & Events",
    description:
      "Organizing live sessions with industry experts, startup founders, and AI practitioners to guide the community.",
    icon: <FaCalendarAlt className="text-white text-2xl" />,
  },
  {
    id: 4,
    title: "New Platforms",
    description:
      "Continued development of innovative tools for developers and non-tech users — with planned platforms over months.",
    icon: <FaRocket className="text-white text-2xl" />,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badgeText="Services by PWM Group"
        badgeBgColor="bg-blue-100"
        badgeTextColor="text-blue-700"
        headingBefore="AI and Automation"
        highlightText="Services"
        headingAfter="for Enterprises"
        highlightTextColor="text-blue-700"
        description="AI and automation for SMBs and enterprises, tailored for businesses that want to modernize operations."
        primaryBtnText="Explore Services"
        primaryBtnLink="#services"
        secondaryBtnText="Request Consultation"
        secondaryBtnLink="/contact"
      />

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SlideIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-600 rounded-3xl shadow-xl overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="p-8 text-center">
                  <h3 className="text-4xl sm:text-5xl font-extrabold text-white">
                    <CountUp
                      end={stat.value}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {stat.suffix}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-white/90 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <SlideIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Aiution – AI and automation tailored for SMBs and enterprises.
            </p>
          </div>
        </SlideIn>

        <div className="space-y-20">
          <SlideIn>
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border-t-4 border-blue-700 transition hover:shadow-2xl mb-8"
              >
                <div className="p-6 md:p-10">
                  <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left Image Panel */}
                    <div className="lg:w-2/5">
                      <div className="rounded-2xl overflow-hidden h-full flex items-center justify-center bg-gray-50 p-6">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="max-w-full max-h-64 object-contain"
                        />
                      </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:w-3/5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-base mb-6">
                          {service.description}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mb-6">
                          {/* Features */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                              <FiSettings className="text-indigo-600 mr-2" />
                              Features
                            </h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-indigo-600 mt-1 mr-2" />
                                  <span className="text-gray-700">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                              <FiGift className="text-indigo-600 mr-2" />
                              Benefits
                            </h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                  <FaCheckCircle className="text-indigo-600 mt-1 mr-2" />
                                  <span className="text-gray-700">
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Learn More Button */}
                        <div className="mt-4">
                          <Link
                            href={service.path}
                            className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition"
                          >
                            Learn More →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SlideIn>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-24" id="roadmap">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900">
                PWM Group's Roadmap
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                PWM isn't just a product studio — it's becoming a full
                ecosystem.
              </p>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {roadmapItems.map((item) => (
              <SlideIn>
                <div
                  key={item.id}
                  className="relative bg-white border border-gray-100 rounded-3xl shadow-md p-8 hover:shadow-xl transition duration-300"
                >
                  {/* Icon Badge */}
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>

                  {/* Roadmap Content */}
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>

                  {/* Step number (optional badge style) */}
                  <div className="absolute top-5 right-5 w-6 h-6 bg-indigo-100 text-indigo-600 text-sm font-semibold rounded-full flex items-center justify-center">
                    {item.id}
                  </div>
                </div>{" "}
              </SlideIn>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        heading="Let’s deploy more than code"
        subheading="Let’s deploy ideas, knowledge, and growth 🚀"
        buttonOneText="Get Started"
        buttonOneHref="/contact"
        buttonOneBg="bg-white"
        buttonOneTextColor="text-blue-700 hover:bg-blue-500 hover:text-white"
        buttonTwoText="Explore Products"
        buttonTwoHref="/products"
        buttonTwoBg="bg-blue-500 hover:bg-blue-800"
        buttonTwoTextColor="text-white hover:text-blue-700"
      />
    </div>
  );
}
