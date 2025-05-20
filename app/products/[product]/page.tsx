import { notFound } from 'next/navigation';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { PageProps } from '@/app/types';

const products = {
  explaingithub: {
    name: 'ExplainGitHub',
    description: 'AI-powered GitHub repository explanation platform',
    longDescription: 'ExplainGitHub uses advanced AI to analyze and explain GitHub repositories, making codebases more accessible and understandable for developers at all levels.',
    features: [
      'Instant repository analysis',
      'Code explanation in plain English',
      'Documentation generation',
      'Team collaboration tools',
    ],
    benefits: [
      'Save time understanding new codebases',
      'Accelerate onboarding for new team members',
      'Improve code documentation',
      'Enhance team collaboration',
    ],
    icon: '📚',
  },
  repoflicks: {
    name: 'RepoFlicks',
    description: 'Your AI-powered code review assistant',
    longDescription: 'RepoFlicks leverages artificial intelligence to provide comprehensive code reviews, ensuring your projects follow best practices and are optimized for performance.',
    features: [
      'Automated code review',
      'Best practices suggestions',
      'Security vulnerability detection',
      'Performance optimization tips',
    ],
    benefits: [
      'Catch bugs before they reach production',
      'Maintain consistent code quality',
      'Enhance application security',
      'Improve system performance',
    ],
    icon: '🎯',
  },
  sarkarisamadhan: {
    name: 'SarkariSamadhan',
    description: 'Government job preparation platform',
    longDescription: 'SarkariSamadhan is a comprehensive platform designed to help aspirants prepare for government examinations with curated study materials and mock tests.',
    features: [
      'Comprehensive study materials',
      'Practice tests and mock exams',
      'Job alerts and notifications',
      'Expert guidance and mentorship',
    ],
    benefits: [
      'Structured preparation approach',
      'Real-time performance tracking',
      'Stay updated with latest job opportunities',
      'Learn from subject matter experts',
    ],
    icon: '🎓',
  },
};

type ProductPageProps = PageProps<{
  product: string;
}>;

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.product as keyof typeof products];

  if (!product) {
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
                PWM Group Product
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                {product.name}
              </h1>
              <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                {product.longDescription}
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link
                  href="#features"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Explore Features
                </Link>
                <Link
                  href="/contact"
                  className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white border-blue-100 hover:bg-gray-50 md:py-4 md:text-lg md:px-10 shadow-sm transition-all duration-200"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                <div className="relative block w-full bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg overflow-hidden aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl">
                    {product.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Key Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {product.name} provides a comprehensive set of features designed to enhance your workflow and productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {product.features.map((feature, index) => (
              <div key={index} className="relative bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <Check className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Feature {index + 1}</h3>
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
              Why choose {product.name}?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our product delivers tangible results that transform your operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {product.benefits.map((benefit, index) => (
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to transform your workflow?</span>
              <span className="block text-blue-200">Get started with {product.name} today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Get started
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 