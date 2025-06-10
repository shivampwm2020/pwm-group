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
      "AIution is an AI-as-a-Service platform that helps businesses automate workflows, launch internal chatbots, create analytics dashboards, and integrate AI systems with minimal setup. It's tailored for enterprises in India and beyond that want to modernize operations without hiring large dev teams.",
    path: "/services/aiution",
    image: "/aiution_logo.svg",
    icon: "artificial-intelligence",
    features: [
      "Workflow automation with AI",
      "Custom internal chatbots",
      "Real-time analytics dashboards",
      "Seamless AI system integration",
      "Natural language processing",
      "Predictive analytics",
    ],
    benefits: [
      "Minimal setup and maintenance",
      "Modernize operations instantly",
      "No need for large dev teams",
      "Tailored for enterprises",
      "Scalable solutions",
      "24/7 support and updates",
    ],
    category: "AI Solutions",
    useCases: [
      "Customer service automation",
      "Data analysis and insights",
      "Process optimization",
      "Document processing",
    ],
  },
  {
    name: "Enterprise Consulting",
    description:
      "Our enterprise consulting service leverages PWM's proven frameworks and internal tools to help businesses transform their operations. We provide expert guidance in product development, digital transformation, and technology implementation.",
    path: "/services/enterprise-consulting",
    image: "/aiution_logo.svg",
    icon: "chart-increasing",
    features: [
      "Strategic technology consulting",
      "Product development",
      "Framework implementation",
      "Digital transformation",
      "Process optimization",
      "Technology assessment",
    ],
    benefits: [
      "Expert guidance and support",
      "Custom solutions",
      "Proven frameworks",
      "Efficient implementation",
      "Risk mitigation",
      "ROI-focused approach",
    ],
    category: "Consulting",
    useCases: [
      "Digital transformation",
      "Product strategy",
      "Technology implementation",
      "Process improvement",
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
    title: "Initial Consultation",
    description:
      "Comprehensive consultation to understand your business needs and identify the right AI solutions for your organization.",
    icon: <FaUsers className="text-white text-2xl" />,
  },
  {
    id: 2,
    title: "Solution Design",
    description:
      "Tailored solution design including AI integration strategy, workflow automation, and technology stack recommendations.",
    icon: <FaRocket className="text-white text-2xl" />,
  },
  {
    id: 3,
    title: "Implementation & Training",
    description:
      "Complete implementation process with setup, integration, and team training for effective system utilization.",
    icon: <FaCalendarAlt className="text-white text-2xl" />,
  },
  {
    id: 4,
    title: "Ongoing Support",
    description:
      "Continuous support, regular updates, and performance monitoring to keep your AI solutions optimized.",
    icon: <FaNewspaper className="text-white text-2xl" />,
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
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900">Comprehensive Solutions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              AI and automation solutions tailored for modern enterprises, helping you transform and scale your operations.
            </p>
          </div>
        </SlideIn>

        <div className="space-y-20">
          {services.map((service) => (
            <SlideIn key={service.name}>
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border-t-4 border-blue-700 transition hover:shadow-2xl mb-8">
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
                      <div className="mt-4 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                          {service.category}
                        </span>
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
                                  <span className="text-gray-700">{feature}</span>
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
                                  <span className="text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Use Cases */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <FaRocket className="text-indigo-600 mr-2" />
                            Use Cases
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.useCases.map((useCase, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                              >
                                {useCase}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Learn More Button */}
                        <div className="mt-4">
                          <Link
                            href={service.path}
                            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition"
                          >
                            Learn More
                            <FaArrowRight className="ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-24" id="roadmap">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
                Our Process
              </span>
              <h2 className="text-4xl font-bold text-gray-900">
                Client Onboarding Journey
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                A structured approach to implementing AI solutions and consulting services for your business success.
              </p>
            </div>
          </SlideIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {roadmapItems.map((item) => (
              <SlideIn key={item.id}>
                <div className="relative bg-white border border-gray-100 rounded-3xl shadow-md p-8 hover:shadow-xl transition duration-300 h-[280px] flex flex-col">
                  {/* Icon Badge */}
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>

                  {/* Process Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Step number */}
                  <div className="absolute top-5 right-5 w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full flex items-center justify-center">
                    {item.id}
                  </div>
                </div>
              </SlideIn>
            ))}
          </div>

          {/* Additional Info */}
          <SlideIn>
            <div className="mt-16 text-center">
              <p className="text-gray-600 max-w-2xl mx-auto">
                Each step is designed to ensure a smooth transition and successful implementation of AI solutions in your organization. Our team of experts will guide you through every phase of the process.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-indigo-700 hover:to-blue-700 transition"
                >
                  Start Your Journey
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        heading="Let's deploy more than code"
        subheading="Let's deploy ideas, knowledge, and growth 🚀"
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
