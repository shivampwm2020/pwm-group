import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const services = {
  aiution: {
    name: 'AIution',
    description: 'AI-powered solutions for your business needs',
    longDescription: 'AIution delivers cutting-edge artificial intelligence solutions tailored to your business needs, helping you automate processes, gain insights from data, and drive innovation across your organization.',
    features: [
      'Custom AI solution development',
      'Machine learning model deployment',
      'AI integration consulting',
      'Data analysis and insights',
    ],
    benefits: [
      'Increased operational efficiency',
      'Cost reduction through automation',
      'Data-driven decision making',
      'Competitive advantage',
    ],
    icon: '🤖',
    caseStudies: [
      {
        title: 'Manufacturing Optimization',
        description: 'Helped a manufacturing client reduce operational costs by 32% through AI-powered process optimization.'
      },
      {
        title: 'Retail Analytics',
        description: 'Implemented predictive analytics solution for a retail chain, increasing sales conversion by 24%.'
      }
    ]
  },
};

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = services[params.service as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                PWM Group Service
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                {service.name}
              </h1>
              <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                {service.longDescription}
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link
                  href="#features"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white border-blue-100 hover:bg-gray-50 md:py-4 md:text-lg md:px-10 shadow-sm transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                <div className="relative block w-full bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg overflow-hidden aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl">
                    {service.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Services Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive AI Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We offer a range of specialized services to meet your business needs and drive digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="relative bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <Check className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Service {index + 1}</h3>
                    <p className="text-base text-gray-600">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why choose our services
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our services deliver tangible results that transform your business operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <span className="text-lg font-semibold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Benefit {index + 1}</h3>
                <p className="text-base text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Case Studies</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Success Stories
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              See how our services have helped businesses like yours achieve remarkable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {service.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-6 text-lg font-bold">
                  CS
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{caseStudy.title}</h3>
                <p className="text-base text-gray-600">{caseStudy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to transform your business?</span>
              <span className="block text-blue-200">Get in touch with our experts today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Contact us
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  View all services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 