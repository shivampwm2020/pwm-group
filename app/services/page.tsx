import Link from 'next/link';

const services = [
  {
    name: 'AIution',
    description: 'Aiution is an AI-as-a-Service platform that helps businesses automate workflows, launch internal chatbots, create analytics dashboards, and integrate AI systems with minimal setup. It\'s tailored for enterprises in India and beyond that want to modernize operations without hiring large dev teams.',
    path: '/services/aiution',
    icon: 'artificial-intelligence',
    features: [
      'Workflow automation',
      'Internal chatbots',
      'Analytics dashboards',
      'AI system integration',
    ],
    benefits: [
      'Minimal setup required',
      'Modernize operations',
      'No need for large dev teams',
      'Tailored for enterprises',
    ],
  },
  {
    name: 'Enterprise Consulting',
    description: 'Service Arm: Expanding into enterprise consulting and product development using PWM\'s frameworks and internal tools.',
    path: '/services/enterprise-consulting',
    icon: 'chart-increasing',
    features: [
      'Enterprise consulting',
      'Product development',
      'Framework implementation',
      'Internal tools utilization',
    ],
    benefits: [
      'Expert guidance',
      'Custom solutions',
      'Proven frameworks',
      'Efficient implementation',
    ],
  },
];

const stats = [
  { value: '98%', label: 'Client satisfaction rate' },
  { value: '200+', label: 'Projects delivered' },
  { value: '24/7', label: 'Support and maintenance' },
  { value: '15+', label: 'Years of experience' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6">
              Services
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
              AI and Automation <span className="text-indigo-600">Services</span> for Enterprises
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              AI and automation for SMBs and enterprises, tailored for businesses that want to modernize operations.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#services" 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium text-lg shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-200"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 rounded-lg bg-white text-indigo-600 font-medium text-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-blue-500/30">
              {stats.map((stat, index) => (
                <div key={index} className="p-8 sm:p-10 text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-blue-100 text-sm sm:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Aiution- AI and automation for SMBs and enterprises
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.name} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-2/5">
                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl p-8 text-white h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                        <div className="w-16 h-1 bg-white/40 mb-6"></div>
                        <p className="text-blue-100 mb-8">
                          Transform your business with our expertise
                        </p>
                      </div>
                      
                      <Link 
                        href={service.path}
                        className="inline-flex items-center justify-center px-5 py-3 bg-white/20 hover:bg-white/30 rounded-lg text-white font-medium text-sm transition-colors duration-200 w-full"
                      >
                        Learn More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="lg:w-3/5">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                    <p className="text-lg text-gray-600 mb-8">
                      {service.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full mr-3">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </span>
                          Services
                        </h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full mr-3">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                          </span>
                          Benefits
                        </h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg className="w-5 h-5 text-indigo-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">PWM Group's Roadmap</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              PWM isn't just a product studio — it's becoming a full ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Weekly Newsletter</h3>
              <p className="text-gray-600">Launching a focused newsletter covering tech trends, AI innovations, product stories, and community updates.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Community Building</h3>
              <p className="text-gray-600">Creating dedicated communities for AI engineers, indie hackers, product builders, and users of each PWM tool.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">Sessions & Events</h3>
              <p className="text-gray-600">Organizing live sessions with industry experts, startup founders, and AI practitioners to guide the community.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4">New Platforms</h3>
              <p className="text-gray-600">Continued development of innovative tools for developers and non-tech users — with planned platforms over months.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">Let's deploy more than code</h3>
              <p className="text-indigo-100 text-lg">
                Let's deploy ideas, knowledge, and growth 🚀
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3 rounded-lg bg-white text-indigo-600 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Get Started
              </Link>
              <Link 
                href="/products"
                className="px-8 py-3 rounded-lg bg-indigo-500 bg-opacity-30 text-white font-medium text-lg hover:bg-opacity-40 transition-all duration-200"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 