import { ArrowRight } from "lucide-react";
import Link from "next/link";

const journeyMilestones = [
  {
    year: "2018",
    title: "The Beginning",
    description: "PWM Group started as a small initiative to help students learn programming and technology skills.",
    achievements: [
      "Founded by Shivam Maurya",
      "First online programming course launched",
      "Built a community of 50+ learners",
    ],
  },
  {
    year: "2020",
    title: "Expansion & Growth",
    description: "Despite the pandemic, we expanded our offerings and reached more students through online platforms.",
    achievements: [
      "Launched SarkariSamadhan platform",
      "Expanded to 500+ students",
      "Started enterprise consulting services",
    ],
  },
  {
    year: "2022",
    title: "Technological Innovation",
    description: "We began focusing on AI-powered solutions and expanded our product portfolio.",
    achievements: [
      "Started AI research division",
      "Launched ExplainGitHub beta",
      "Formed The Production Gurus community",
    ],
  },
  {
    year: "2023",
    title: "Enterprise Solutions",
    description: "Started developing enterprise-grade solutions for businesses across India.",
    achievements: [
      "Launched AIution services",
      "Developed RepoFlicks platform",
      "Expanded team to 20+ members",
    ],
  },
  {
    year: "2024",
    title: "The Future Ahead",
    description: "Continuing to innovate and expand our offerings to empower more people with technology.",
    achievements: [
      "International expansion planned",
      "New enterprise platforms in development",
      "Research partnerships with leading institutions",
    ],
  },
];

export default function JourneyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Our Journey
            </h1>
            <p className="mt-6 text-xl text-gray-500 leading-relaxed">
              From a programming education platform to an AI innovation powerhouse
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Previous Site Archives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Archives</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Digital Evolution
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore our past iterations as we transformed from a simple blog to an enterprise platform
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <a href="https://shivam21maurya.wixsite.com/website-1" className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">2020</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                  Foundation Era
                </h3>
                <p className="text-gray-600 mb-4">Our initial platform focused on programming tutorials</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Visit Archive</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
            
            <a href="https://shivam21maurya.wixsite.com/my-site-3" className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">2021</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                  Growth Phase
                </h3>
                <p className="text-gray-600 mb-4">Expanded educational content and structured learning paths</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Visit Archive</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
            
            <a href="https://shivam21maurya.wixsite.com/programming-with-mau" className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">2022</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                  Community Focus
                </h3>
                <p className="text-gray-600 mb-4">Interactive features and community collaboration tools</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Visit Archive</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
            
            <a href="https://shivam21maurya.wixsite.com/website" className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-3">2023</span>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                  Pre-AI Transition
                </h3>
                <p className="text-gray-600 mb-4">Our comprehensive learning hub before our AI transformation</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Visit Archive</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-600 to-indigo-600 transform md:translate-x-px"></div>
            
            {/* 2025 - AI Renaissance */}
            <div className="relative mb-20">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 pr-12 md:text-right md:pr-16 pb-10 md:pb-0">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full mb-4">
                    Present • 2025
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">The AI Renaissance</h3>
                  <p className="text-gray-600">
                    Transformed into a comprehensive AI ecosystem with three distinct platforms: Sarkari Samadhan, Aiution, and Goal Ninja.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 top-0 -ml-2 md:-ml-3.5 mt-3 md:mt-3">
                  <div className="w-7 h-7 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-16">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                    <h4 className="font-semibold mb-4 text-gray-900 text-lg">Current Platforms</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h5 className="font-semibold text-orange-800">Sarkari Samadhan</h5>
                        <p className="text-gray-600">Simplifying government services for every Indian citizen</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h5 className="font-semibold text-blue-800">Aiution</h5>
                        <p className="text-gray-600">Enterprise AI integration and solutions platform</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-green-800">Community Hub</h5>
                        <p className="text-gray-600">Connecting professionals, learners, and innovators through our products and services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2024 - Strategic Transformation */}
            <div className="relative mb-20">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 pr-12 md:text-right md:pr-16 pb-10 md:pb-0">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-400 to-indigo-400 text-white text-sm font-medium rounded-full mb-4">
                    Transition • 2024
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Strategic Transformation</h3>
                  <p className="text-gray-600">
                    A year of reflection and reinvention, focusing on AI technology and innovation.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 top-0 -ml-2 md:-ml-3.5 mt-3 md:mt-3">
                  <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-16">
                </div>
              </div>
            </div>
            
            {/* 2023 - Comprehensive Learning Hub */}
            <div className="relative mb-20">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 pr-12 md:text-right md:pr-16 pb-10 md:pb-0">
                  <div className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-4">
                    2023 • Fourth Evolution
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Learning Hub</h3>
                  <p className="text-gray-600">
                    Expanded into a full-fledged educational platform with multiple courses and career guidance.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 top-0 -ml-2 md:-ml-3.5 mt-3 md:mt-3">
                  <div className="w-7 h-7 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-16">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                    <h4 className="font-semibold mb-4 text-gray-900 text-lg">Key Features</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Advanced programming courses
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Career counseling services
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Industry collaboration programs
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Live mentoring sessions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2022 - Community-Focused Platform */}
            <div className="relative mb-20">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 pr-12 md:text-right md:pr-16 pb-10 md:pb-0">
                  <div className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-4">
                    2022 • Third Evolution
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Community-Focused Platform</h3>
                  <p className="text-gray-600">
                    Enhanced the platform with community features and interactive learning elements.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 top-0 -ml-2 md:-ml-3.5 mt-3 md:mt-3">
                  <div className="w-7 h-7 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-16">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                    <h4 className="font-semibold mb-4 text-gray-900 text-lg">Highlights</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Interactive coding challenges
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Community forums
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Project collaborations
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Student showcase
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2021 - Educational Content Platform */}
            <div className="relative mb-20">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 pr-12 md:text-right md:pr-16 pb-10 md:pb-0">
                  <div className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-4">
                    2021 • Second Evolution
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Educational Content Platform</h3>
                  <p className="text-gray-600">
                    Expanded the tutorial base and introduced structured learning paths.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 top-0 -ml-2 md:-ml-3.5 mt-3 md:mt-3">
                  <div className="w-7 h-7 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-16">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                    <h4 className="font-semibold mb-4 text-gray-900 text-lg">Key Additions</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Video tutorials
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Programming courses
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Practice exercises
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Learning paths
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 2020 - The Foundation */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 pr-12 md:text-right md:pr-16 pb-10 md:pb-0">
                  <div className="inline-block px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-full mb-4">
                    2020 • Beginning
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">The Foundation</h3>
                  <p className="text-gray-600">
                    Started as a simple programming blog to share knowledge and experiences.
                  </p>
                </div>
                
                <div className="absolute left-0 md:left-1/2 top-0 -ml-2 md:-ml-3.5 mt-3 md:mt-3">
                  <div className="w-7 h-7 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                
                <div className="md:w-1/2 md:pl-16">
                  <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                    <h4 className="font-semibold mb-4 text-gray-900 text-lg">Initial Features</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Programming tutorials
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Technical blogs
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Code snippets
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-blue-600">•</span>
                        Basic resources
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Vision</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Looking Forward
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg text-white p-12">
            <p className="text-xl leading-relaxed">
              From our humble beginnings as a programming education platform to our current 
              position as an AI innovation leader, we continue to evolve and adapt to serve 
              our users better. Our mission remains constant: empowering individuals and 
              organizations through technology.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Be part of our evolution</span>
              <span className="block text-blue-200">Join us as we shape the future of technology</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Get in touch
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Explore solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 