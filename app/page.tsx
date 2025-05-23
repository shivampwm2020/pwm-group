"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui";

const products = [
  {
    name: "ExplainGitHub",
    description:
      "AI-powered repo exploration for developers and learners. ExplainGitHub lets you chat with any public or private GitHub repository using LLMs.",
    path: "/products/explaingithub",
    image: "/explaingithub.png",
    icon: "code",
    color: "from-blue-600 to-indigo-700",
    category: "Developer Tools",
  },
  {
    name: "RepoFlicks",
    description:
      "A GitHub meets Instagram experience. RepoFlicks is a showcase platform where developers can present their GitHub repositories like social media posts.",
    path: "/products/repoflicks",
    image: "/repoflicks.png",
    icon: "shield-check",
    color: "from-indigo-600 to-purple-700",
    category: "Developer Platform",
  },
  {
    name: "SarkariSamadhan",
    description:
      "Simplifying access to government schemes in India. Sarkari Samadhan is a citizen-centric chatbot platform that helps users discover, understand, and apply for Indian government schemes.",
    path: "/products/sarkarisamadhan",
    image: "/sarkari_samadhan_in_logo.png",
    icon: "graduation-cap",
    color: "from-purple-600 to-pink-700",
    category: "Governance",
  },
];

const services = [
  {
    name: "AIution",
    description:
      "AI and automation for SMBs and enterprises. Aiution is an AI-as-a-Service platform that helps businesses automate workflows, launch internal chatbots, create analytics dashboards, and integrate AI systems with minimal setup.",
    path: "/services/aiution",
    icon: "brain",
    color: "from-indigo-600 to-blue-700",
    category: "AI Solutions",
  },
  {
    name: "Enterprise Consulting",
    description:
      "Service Arm: Expanding into enterprise consulting and product development using PWM's frameworks and internal tools.",
    path: "/services/enterprise-consulting",
    icon: "chart-bar",
    color: "from-blue-600 to-cyan-600",
    category: "Consulting",
  },
];

const communityInitiatives = [
  {
    name: "The Production Gurus",
    description:
      "The Production Gurus is a focused tech community for builders, developers, founders, and AI enthusiasts who love turning ideas into real, shipped products.",
    path: "/community/production-gurus",
    icon: "users",
    color: "from-green-600 to-teal-600",
    category: "Professional Network",
  },
  {
    name: "Developer Champions",
    description:
      "PWM Group began as a small peer-to-peer learning group where developers shared knowledge, asked questions, and helped each other grow.",
    path: "/community/developer-champions",
    icon: "code",
    color: "from-blue-600 to-indigo-600",
    category: "Knowledge Sharing",
  },
];

const testimonials = [
  {
    quote:
      "PWM Group's solutions have completely transformed our workflow efficiency. The AI integration was seamless and the results exceeded our expectations.",
    author: "Rajiv Mehta",
    position: "CTO, TechVantage Solutions",
    image: "/avatars/avatar-1.jpg",
  },
  {
    quote:
      "The expertise and professionalism of the PWM team is unmatched. Their enterprise consulting services helped us navigate a complex digital transformation.",
    author: "Priya Sharma",
    position: "Director of Operations, Nexus Innovations",
    image: "/avatars/avatar-2.jpg",
  },
  {
    quote:
      "SarkariSamadhan platform has revolutionized how we prepare candidates for government positions. The comprehensiveness of study materials is exceptional.",
    author: "Amit Patel",
    position: "Head of Training, GovPrep Institute",
    image: "/avatars/avatar-3.jpg",
  },
];

const stats = [
  { value: "15+", label: "Global partnerships" },
  { value: "10M+", label: "Users reached" },
  { value: "99.9%", label: "System uptime" },
  { value: "24/7", label: "Support coverage" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white mt-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/dots-pattern.svg')] bg-repeat opacity-5 z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[url('/circles-pattern.svg')] bg-no-repeat bg-left-bottom opacity-5 z-0"></div>

        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full max-w-7xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Builder-First Tech Collective
            </span>

            <h1 className="max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none font-sans uppercase">
              Transforming Ideas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Into Innovation
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 text-base sm:text-sm md:text-lg text-gray-600 leading-tight tracking-tighter font-sans max-w-3xl mx-auto">
              PWM Group (formerly Programming with Maurya) is a builder-first
              tech collective focused on launching impactful platforms for
              developers, AI engineers, and enterprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-10">
              <Button href="/products" variant="primary">
                Explore Our Products
              </Button>
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 rounded-b-4xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hexagon-pattern.svg')] opacity-10"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center py-8">
            <p className="text-2xl font-medium leading-tight text-white font-sans">
              From open-source tools to AI-powered SaaS platforms, PWM is now a
              launchpad for products, ideas, and community-led innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/diagonal-lines.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-2">
              Products
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-2 font-sans">
              Our Products
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto font-sans leading-tight">
              From open-source tools to AI-powered SaaS platforms, PWM is now a
              launchpad for products, ideas, and community-led innovation.
            </p>
          </div>

          <div className="max-w-lg sm:max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Image section with overlay */}
                <div className="relative h-[170px] flex items-center justify-center overflow-hidden bg-white">
                  <img
                    src={product.image}
                    alt={product.category}
                    className="h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>

                {/* Content section */}
                <div className="p-6 relative z-10">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs font-medium rounded-full mb-3">
                    {product.category}
                  </span>
                  <p className="text-gray-600 text-base mb-6 line-clamp-3">
                    {product.description}
                  </p>
                  <Link
                    href={product.path}
                    className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 shadow-lg ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-100 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <ArrowRight className="w-5 h-5 text-blue-700" />
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                View all products
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/square-dots.svg')] opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-100 to-transparent opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-2">
              Services
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-2 font-sans">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto font-mono leading-tight">
              AI and automation for SMBs and enterprises.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 relative md:min-h-[200px]"
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 hover:opacity-10 transition-opacity duration-300 z-0"></div>

                {/* Responsive Flex */}
                <div className="flex flex-col sm:flex-col md:flex-row h-full relative z-10">
                  {/* Left Section (Image/Color) */}
                  <div
                    className={`w-full md:w-[200px] h-[180px] md:h-auto bg-gradient-to-br ${service.color} p-6 flex items-center justify-center relative`}
                  >
                    <div className="absolute inset-0 bg-[url('/tech-pattern.svg')] bg-repeat opacity-10"></div>
                    <div className="text-white text-center relative z-10">
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mb-2">
                        {service.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold font-serif">
                        {service.name}
                      </h3>
                    </div>
                  </div>

                  {/* Right Section (Text) */}
                  <div className="flex-1 p-5 flex flex-col justify-between">
                    <p className="text-gray-600 text-sm md:text-base mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.path}
                      className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 shadow-lg ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-100 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <ArrowRight className="w-5 h-5 text-blue-700" />
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                View all services
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className=" hidden py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/curved-lines.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto font-mono leading-tight">
              We take pride in delivering exceptional solutions that meet our
              clients' needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg border border-b-4 border-b-blue-700 border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl z-0"></div>
                <div className="flex flex-col justify-between h-full relative z-10">
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-700 text-base sm:text-lg italic leading-relaxed font-serif">
                      “{testimonial.quote}”
                    </p>
                  </div>
                  <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-bold text-lg mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Community Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/polygon-mesh.svg')] opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-green-100 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-4">
              Community
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're just getting started, deep into dev tools,
              launching your startup, or scaling your side project — this space
              is for smart conversations, shared learnings, and meaningful
              connections.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {communityInitiatives.map((initiative) => (
              <div
                key={initiative.name}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 relative md:min-h-[320px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-teal-50 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex flex-col md:flex-row h-full">
                  <div
                    className={`md:w-1/3 h-[200px] md:h-auto bg-gradient-to-br ${initiative.color} p-8 flex items-center justify-center relative`}
                  >
                    <div className="absolute inset-0 bg-[url('/community-pattern.svg')] bg-repeat opacity-10"></div>
                    <div className="text-white text-center relative z-10">
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mb-2">
                        {initiative.category}
                      </span>
                      <h3 className="text-xl font-bold font-serif">
                        {initiative.name}
                      </h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 relative z-10 flex flex-col justify-center">
                    <p className="text-gray-600 mb-6">
                      {initiative.description}
                    </p>
                    <Link
                      href={initiative.path}
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200 group"
                    >
                      Join community
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/community"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-600 transition-all duration-150 shadow-lg ease-in-out rounded hover:pl-10 hover:pr-6 bg-indigo-100 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <ArrowRight className="w-5 h-5 text-green-600" />
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <ArrowRight className="w-5 h-5 text-white" />
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                View all community initiatives
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 relative overflow-hidden rounded-b-4xl">
        <div className="absolute inset-0 bg-[url('/wave-lines.svg')] opacity-10"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-4xl font-extrabold mb-2 font-serif text-center">
                Let's deploy more than code
              </h2>
              <p className="text-blue-100 text-lg font-mono text-center">
                Let's deploy ideas, knowledge, and growth 🚀
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-white shadow-lg rounded-lg hover:bg-blue-500 group"
              >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-blue-500 rounded-lg"></span>
                <span className="relative w-full text-left text-blue-700 transition-colors duration-200 ease-in-out group-hover:text-white">
                  Get Started
                </span>
              </Link>

              <Link
                href="/products"
                className="relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-medium transition-all bg-blue-500 shadow-lg rounded-lg hover:bg-blue-800 group"
              >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-lg"></span>
                <span className="relative w-full text-left text-white hover:text-blue-700 transition-colors duration-200 ease-in-out">
                  Explore Solutions
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
