"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "./components/ui/HeroSection";
import CTASection from "./components/ui/CTASection";

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
    image: "/aiution_logo.svg",
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
      <HeroSection
        badgeText="Builder-First Tech Collective"
        badgeBgColor="bg-blue-100"
        badgeTextColor="text-blue-700"
        headingBefore="Transforming Ideas"
        highlightText="Into Innovation"
        highlightTextColor="text-blue-700"
        description="PWM Group (formerly Programming with Maurya) is a builder-first tech collective focused on launching impactful platforms for developers, AI engineers, and enterprises."
        primaryBtnText="Explore Our Products"
        primaryBtnLink="/products"
        secondaryBtnText="Contact Us"
        secondaryBtnLink="/contact"
      />

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

          <div className="flex justify-center items-center min-h-[60vh] px-4 py-12">
            <div className="w-full max-w-xl bg-white border-t-4 border-blue-700 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              {/* Image */}
              <div className="flex justify-center items-center px-8 py-8 pt-10 pb-6">
                <img
                  src={services[0].image}
                  alt="Service Logo"
                  className="h-20 sm:h-24 object-contain"
                />
              </div>

              {/* Divider Line */}
              <div className="border-b border-gray-200 mx-8"></div>

              {/* Content */}
              <div className="p-8 sm:p-10 text-center">
                <span className="inline-block text-sm font-medium bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full mb-4">
                  {services[0].category}
                </span>

                <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                  {services[0].description}
                </p>

                <Link
                  href={services[0].path}
                  className="inline-flex items-center justify-center gap-2 text-indigo-600 font-semibold text-sm sm:text-base hover:underline"
                >
                  Learn more
                  <ArrowRight className="w-5 h-5" />
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
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto font-sans leading-tight">
              Whether you're just getting started, deep into dev tools,
              launching your startup, or scaling your side project — this space
              is for smart conversations, shared learnings, and meaningful
              connections.
            </p>
          </div>

          <div className="flex justify-center items-center min-h-[60vh] px-4 py-16">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md border-t-4 border-blue-700 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              {/* Logo Image */}
              <div className="flex justify-center items-center px-8 pt-8">
                <div className="w-28 h-28 rounded-xl overflow-hidden shadow-md border border-gray-200">
                  <img
                    src={communityInitiatives[0].image}
                    alt="Community"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-10 text-center">
                <span className="inline-block text-sm font-semibold bg-green-100 text-green-700 px-4 py-1 rounded-full mb-4 mt-6">
                  {communityInitiatives[0].category}
                </span>

                <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
                  {communityInitiatives[0].description}
                </p>

                <Link
                  href={communityInitiatives[0].path}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-semibold transition-transform duration-200 transform hover:scale-105"
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
      <CTASection
        heading="Let’s deploy more than code"
        subheading="Let’s deploy ideas, knowledge, and growth 🚀"
        buttonOneText="Get Started"
        buttonOneHref="/contact"
        buttonOneBg="bg-white"
        buttonOneTextColor="text-blue-700 hover:bg-blue-500 hover:text-white"
        buttonTwoText="Explore Solutions"
        buttonTwoHref="/products"
        buttonTwoBg="bg-blue-500 hover:bg-blue-800"
        buttonTwoTextColor="text-white hover:text-blue-700"
      />
    </div>
  );
}
