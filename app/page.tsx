import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: 'ExplainGitHub',
    description: 'AI-powered repo exploration for developers and learners. ExplainGitHub lets you chat with any public or private GitHub repository using LLMs.',
    path: '/products/explaingithub',
    icon: 'code',
    color: 'from-blue-600 to-indigo-700',
    category: 'Developer Tools'
  },
  {
    name: 'RepoFlicks',
    description: 'A GitHub meets Instagram experience. RepoFlicks is a showcase platform where developers can present their GitHub repositories like social media posts.',
    path: '/products/repoflicks',
    icon: 'shield-check',
    color: 'from-indigo-600 to-purple-700',
    category: 'Developer Platform'
  },
  {
    name: 'SarkariSamadhan',
    description: 'Simplifying access to government schemes in India. Sarkari Samadhan is a citizen-centric chatbot platform that helps users discover, understand, and apply for Indian government schemes.',
    path: '/products/sarkarisamadhan',
    icon: 'graduation-cap',
    color: 'from-purple-600 to-pink-700',
    category: 'Governance'
  },
];

const services = [
  {
    name: 'AIution',
    description: 'AI and automation for SMBs and enterprises. Aiution is an AI-as-a-Service platform that helps businesses automate workflows, launch internal chatbots, create analytics dashboards, and integrate AI systems with minimal setup.',
    path: '/services/aiution',
    icon: 'brain',
    color: 'from-indigo-600 to-blue-700',
    category: 'AI Solutions'
  },
  {
    name: 'Enterprise Consulting',
    description: 'Service Arm: Expanding into enterprise consulting and product development using PWM\'s frameworks and internal tools.',
    path: '/services/enterprise-consulting',
    icon: 'chart-bar',
    color: 'from-blue-600 to-cyan-600',
    category: 'Consulting'
  },
];

const communityInitiatives = [
  {
    name: 'The Production Gurus',
    description: 'The Production Gurus is a focused tech community for builders, developers, founders, and AI enthusiasts who love turning ideas into real, shipped products.',
    path: '/community/production-gurus',
    icon: 'users',
    color: 'from-green-600 to-teal-600',
    category: 'Professional Network'
  },
  {
    name: 'Developer Champions',
    description: 'PWM Group began as a small peer-to-peer learning group where developers shared knowledge, asked questions, and helped each other grow.',
    path: '/community/developer-champions',
    icon: 'code',
    color: 'from-blue-600 to-indigo-600',
    category: 'Knowledge Sharing'
  },
];

const testimonials = [
  {
    quote: "PWM Group's solutions have completely transformed our workflow efficiency. The AI integration was seamless and the results exceeded our expectations.",
    author: "Rajiv Mehta",
    position: "CTO, TechVantage Solutions",
    image: "/avatars/avatar-1.jpg"
  },
  {
    quote: "The expertise and professionalism of the PWM team is unmatched. Their enterprise consulting services helped us navigate a complex digital transformation.",
    author: "Priya Sharma",
    position: "Director of Operations, Nexus Innovations",
    image: "/avatars/avatar-2.jpg"
  },
  {
    quote: "SarkariSamadhan platform has revolutionized how we prepare candidates for government positions. The comprehensiveness of study materials is exceptional.",
    author: "Amit Patel",
    position: "Head of Training, GovPrep Institute",
    image: "/avatars/avatar-3.jpg"
  }
];

const stats = [
  { value: '15+', label: 'Global partnerships' },
  { value: '10M+', label: 'Users reached' },
  { value: '99.9%', label: 'System uptime' },
  { value: '24/7', label: 'Support coverage' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/dots-pattern.svg')] bg-repeat opacity-5 z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[url('/circles-pattern.svg')] bg-no-repeat bg-left-bottom opacity-5 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
                Builder-First Tech Collective
              </span>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                Transforming Ideas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Into Innovation</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                PWM Group (formerly Programming with Maurya) is a builder-first tech collective focused on launching impactful platforms for developers, AI engineers, and enterprises.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/products" 
                  className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200"
                >
                  Explore Our Products
                </Link>
                <Link 
                  href="/contact" 
                  className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium text-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="flex justify-center items-center">
                  <img 
                    src="/pwm_logo.svg" 
                    alt="PWM Logo" 
                    className="w-64 h-64 object-contain" 
                  />
                </div>
                
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hexagon-pattern.svg')] opacity-10"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center py-8">
            <p className="text-xl font-medium text-white">
              From open-source tools to AI-powered SaaS platforms, PWM is now a launchpad for products, ideas, and community-led innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/diagonal-lines.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Products
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Products by PWM Group
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From open-source tools to AI-powered SaaS platforms, PWM is now a launchpad for products, ideas, and community-led innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <div 
                key={product.name}
                className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className={`h-32 bg-gradient-to-r ${product.color} flex items-center justify-center p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[url('/circuit-dots.svg')] bg-repeat opacity-10"></div>
                  <div className="text-white text-center relative z-10">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mb-2">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6 relative z-10">
                  <p className="text-gray-600 mb-6 line-clamp-3">{product.description}</p>
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
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-50 border border-gray-200 text-blue-600 font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              View all products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
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
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
              Services
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI and automation for SMBs and enterprises.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div 
                key={service.name}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex flex-col md:flex-row">
                  <div className={`md:w-1/3 bg-gradient-to-br ${service.color} p-8 flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-[url('/tech-pattern.svg')] bg-repeat opacity-10"></div>
                    <div className="text-white text-center relative z-10">
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mb-2">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold">{service.name}</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 relative z-10">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Link
                      href={service.path}
                      className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-indigo-600 font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              View all services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/curved-lines.svg')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take pride in delivering exceptional solutions that meet our clients' needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="mb-6 relative z-10">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 inline-block">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center relative z-10">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center text-blue-600 font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Whether you're just getting started, deep into dev tools, launching your startup, or scaling your side project — this space is for smart conversations, shared learnings, and meaningful connections.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {communityInitiatives.map((initiative) => (
              <div 
                key={initiative.name}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-teal-50 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                <div className="flex flex-col md:flex-row">
                  <div className={`md:w-1/3 bg-gradient-to-br ${initiative.color} p-8 flex items-center justify-center relative`}>
                    <div className="absolute inset-0 bg-[url('/community-pattern.svg')] bg-repeat opacity-10"></div>
                    <div className="text-white text-center relative z-10">
                      <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-medium mb-2">
                        {initiative.category}
                      </span>
                      <h3 className="text-xl font-bold">{initiative.name}</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 relative z-10">
                    <p className="text-gray-600 mb-6">{initiative.description}</p>
                    <Link
                      href={initiative.path}
                      className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
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
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-200 text-green-600 font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              View all community initiatives
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-lines.svg')] opacity-10"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Let's deploy more than code</h2>
              <p className="text-blue-100 text-lg">
                Let's deploy ideas, knowledge, and growth 🚀
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started
              </Link>
              <Link 
                href="/products"
                className="px-8 py-3 rounded-lg bg-blue-500 bg-opacity-30 text-white font-medium text-lg hover:bg-opacity-40 transition-all duration-200"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
