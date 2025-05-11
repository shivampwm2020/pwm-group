import Link from 'next/link';

const products = [
  {
    name: 'ExplainGitHub',
    description: 'AI-powered repo exploration for developers and learners. ExplainGitHub lets you chat with any public or private GitHub repository using LLMs. Whether you\'re trying to understand a new codebase, review a pull request, or onboard faster, ExplainGitHub breaks down code structures, dependencies, and logic into natural language.',
    path: '/products/explaingithub',
    bgColor: 'from-blue-600 to-indigo-700',
    features: [
      'Repo chats',
      'Git structure diagrams',
      'File-level querying',
      'Multi-model support',
    ],
    cta: 'Explore ExplainGitHub',
    category: 'Developer Tools'
  },
  {
    name: 'RepoFlicks',
    description: 'A GitHub meets Instagram experience. RepoFlicks is a showcase platform where developers can present their GitHub repositories like social media posts — complete with images, tags, videos, and community discussions. It helps creators share, get feedback, and build credibility, especially for side projects and open-source work.',
    path: '/products/repoflicks',
    bgColor: 'from-indigo-600 to-purple-700',
    features: [
      'Repository showcases',
      'Social media style presentations',
      'Community discussions',
      'Project credibility building',
    ],
    cta: 'Discover RepoFlicks',
    category: 'Developer Platform'
  },
  {
    name: 'SarkariSamadhan',
    description: 'Simplifying access to government schemes in India. Sarkari Samadhan is a citizen-centric chatbot platform that helps users discover, understand, and apply for Indian government schemes. It also supports RTI filing, complaint portals, and grievance tracking — all through a unified interface designed to make governance more accessible.',
    path: '/products/sarkarisamadhan',
    bgColor: 'from-purple-600 to-pink-700',
    features: [
      'Government scheme discovery',
      'Application assistance',
      'RTI filing support',
      'Grievance tracking',
    ],
    cta: 'Start with SarkariSamadhan',
    category: 'Governance'
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6">
              Products by PWM Group
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
              From Open-Source <span className="text-blue-600">Tools</span> to AI-Powered Platforms
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              PWM is a launchpad for products, ideas, and community-led innovation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#solutions" 
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200"
              >
                Explore Solutions
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium text-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Product Categories */}
      <div id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">⚙️ Products by PWM Group</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            From open-source tools to AI-powered SaaS platforms
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div key={product.name} className={`flex flex-col lg:flex-row gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Product Image/Visual Section */}
              <div className="lg:w-5/12">
                <div className={`h-full w-full bg-gradient-to-br ${product.bgColor} rounded-2xl shadow-xl flex items-center justify-center p-10`}>
                  <div className="text-white text-center">
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
                      {product.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-4">{product.name}</h3>
                    <div className="w-20 h-1 bg-white/50 mx-auto mb-6"></div>
                    <p className="text-white/80 text-lg">Transforming the way you work</p>
                  </div>
                </div>
              </div>

              {/* Product Details Section */}
              <div className="lg:w-7/12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-xl text-gray-600 mb-6">
                  {product.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>

                <Link 
                  href={product.path}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-50 border border-gray-200 text-blue-600 font-medium hover:bg-gray-100 transition-colors duration-200 self-start"
                >
                  {product.cta}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">Let's deploy more than code</h3>
              <p className="text-blue-100 text-lg">
                Let's deploy ideas, knowledge, and growth 🚀
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="px-8 py-3 rounded-lg bg-white text-blue-600 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Contact Sales
              </Link>
              <Link 
                href="/products#solutions"
                className="px-8 py-3 rounded-lg bg-blue-500 bg-opacity-30 text-white font-medium text-lg hover:bg-opacity-40 transition-all duration-200"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 