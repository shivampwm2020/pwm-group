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
  // {
  //   name: "Enterprise Consulting",
  //   description:
  //     "Service Arm: Expanding into enterprise consulting and product development using PWM's frameworks and internal tools.",
  //   path: "/services/enterprise-consulting",
  //   icon: "chart-bar",
  //   color: "from-blue-600 to-cyan-600",
  //   category: "Consulting",
  // },
];

const communityInitiatives = [
  {
    name: "The Production Gurus",
    description:
      "The Production Gurus is a focused tech community for builders, developers, founders, and AI enthusiasts who love turning ideas into real, shipped products.",
    path: "/community/production-gurus",
    image: "/theproductiongurus1.png",
    icon: "users",
    color: "from-green-600 to-teal-600",
    category: "Professional Network",
  },
  // {
  //   name: "Developer Champions",
  //   description:
  //     "PWM Group began as a small peer-to-peer learning group where developers shared knowledge, asked questions, and helped each other grow.",
  //   path: "/community/developer-champions",
  //   icon: "code",
  //   color: "from-blue-600 to-indigo-600",
  //   category: "Knowledge Sharing",
  // },
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
    <div className="min-h-screen bg-white mt-16 sm:mt-18 ">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-[url('/dots-pattern.svg')] bg-repeat opacity-5 z-0"></div>
        <div className="absolute bottom-0 left-0 w-3/4 sm:w-1/2 h-1/2 bg-[url('/circles-pattern.svg')] bg-no-repeat bg-left-bottom opacity-5 z-0"></div>

        {/* Content Container */}
        <div className="min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full max-w-7xl mx-auto text-center">
            {/* Badge */}
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Builder-First Tech Collective
            </span>

            {/* Heading */}
            <h1 className="max-w-4xl mx-auto text-3xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-none font-sans uppercase">
              Transforming Ideas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Into Innovation
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed tracking-tight font-sans max-w-3xl mx-auto">
              PWM Group (formerly Programming with Maurya) is a builder-first
              tech collective focused on launching impactful platforms for
              developers, AI engineers, and enterprises.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-10">
              <Button
                href="/products"
                variant="primary"
                className="w-full sm:w-auto "
              >
                Explore Our Products
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-0"></div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 rounded-b-4xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hexagon-pattern.svg')] opacity-10"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center py-8">
            <p className="text-2xl font-medium leading-tight tracking-tighter text-white font-sans">
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

          <div className="max-w-lg sm:max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="group bg-white rounded-xl shadow-md  border-t-4 border-blue-700 overflow-hidden hover:shadow-xl transition-all duration-300 relative"
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
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-2">
              Services
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-2 font-sans">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto font-sans leading-tight">
              AI and automation for SMBs and enterprises.
            </p>
          </div>

          <div className="flex justify-center items-center min-h-[60vh] px-4 py-12 ">
            <div className="w-full max-w-2xl backdrop-blur-sm border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
              {/* Header */}
              <div
                className={`p-6 sm:p-8 bg-gradient-to-r ${services[0].color} text-white rounded-t-3xl relative`}
              >
                <div className="absolute inset-0 bg-[url('/tech-pattern.svg')] opacity-10 bg-repeat rounded-t-3xl"></div>
                <div className="relative z-10">
                  <span className="text-xs sm:text-sm font-medium bg-white/20 px-3 py-1 rounded-full inline-block mb-3">
                    {services[0].category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif text-center">
                    {services[0].name}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 text-center">
                <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                  {services[0].description}
                </p>
                <Link
                  href={services[0].path}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-medium transition-transform transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
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
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-4">
              Community
            </span>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 leading-tight tracking-tighter max-w-3xl mx-auto">
              Whether you're just getting started, deep into dev tools,
              launching your startup, or scaling your side project — this space
              is for smart conversations, shared learnings, and meaningful
              connections.
            </p>
          </div>

          <div className="flex justify-center items-center min-h-[60vh] px-4 py-16 ">
            <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              {/* Top Banner with Image & Title */}
              <div
                className={`relative bg-gradient-to-r ${communityInitiatives[0].color} text-white p-8 sm:p-10`}
              >
                <div className="absolute inset-0 bg-[url('/community-pattern.svg')] bg-repeat opacity-10 rounded-t-3xl"></div>
                <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img
                    src={communityInitiatives[0].image}
                    alt={communityInitiatives[0].name}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-white shadow-md"
                  />
                  <div className="text-center sm:text-left">
                    <span className="inline-block bg-white/20 text-xs sm:text-sm px-3 py-1 rounded-full font-medium mb-2">
                      {communityInitiatives[0].category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif">
                      {communityInitiatives[0].name}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Description + CTA */}
              <div className="p-6 sm:p-10 text-center sm:text-left">
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                  {communityInitiatives[0].description}
                </p>
                <Link
                  href={communityInitiatives[0].path}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-medium transition-transform transform hover:scale-105"
                >
                  Join Community
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
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
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 sm:py-24 lg:py-32 relative overflow-hidden rounded-b-4xl">
        <div className="absolute inset-0 bg-[url('/wave-lines.svg')] opacity-10"></div>
        <div className="absolute -left-32 -bottom-32 w-80 h-80 sm:w-96 sm:h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -right-32 -top-32 w-80 h-80 sm:w-96 sm:h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <div className="text-white max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans mb-4 leading-snug">
                Let’s deploy more than code
              </h2>
              <p className="text-blue-100 text-base sm:text-lg leading-snug tracking-tight">
                Let’s deploy ideas, knowledge, and growth 🚀
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all bg-white text-blue-700 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white group w-full sm:w-auto text-center"
              >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-blue-500 rounded-lg"></span>
                <span className="relative z-10">Get Started</span>
              </Link>

              <Link
                href="/products"
                className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-800 group w-full sm:w-auto text-center"
              >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-lg"></span>
                <span className="relative z-10">Explore Solutions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
