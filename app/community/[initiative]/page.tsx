import { notFound } from 'next/navigation';
import { ArrowRight, Check, Calendar, Users, Award } from 'lucide-react';
import Link from 'next/link';

const initiatives = {
  'production-gurus': {
    name: 'The Production Gurus',
    description: 'A community of production experts sharing knowledge and best practices',
    longDescription: 'The Production Gurus is an exclusive community of industry experts dedicated to sharing knowledge, best practices, and insights about production systems, DevOps, and enterprise infrastructure.',
    features: [
      'Expert-led workshops and webinars',
      'Knowledge sharing sessions',
      'Networking opportunities',
      'Best practices documentation',
    ],
    benefits: [
      'Learn from industry experts',
      'Connect with like-minded professionals',
      'Stay updated with latest trends',
      'Access to exclusive resources',
    ],
    icon: '👥',
    events: [
      {
        title: 'Production Systems Masterclass',
        date: 'June 15, 2024',
        location: 'Virtual Event',
        description: 'A comprehensive masterclass on building resilient production systems at scale.'
      },
      {
        title: 'DevOps Community Meetup',
        date: 'July 22, 2024',
        location: 'Bangalore, India',
        description: 'Connect with fellow DevOps professionals and share experiences in this in-person networking event.'
      }
    ],
    members: 1250,
    countries: 42,
    resources: 350
  },
};

export default function CommunityInitiativePage({ params }: { params: { initiative: string } }) {
  const initiative = initiatives[params.initiative as keyof typeof initiatives];

  if (!initiative) {
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
                PWM Group Community
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                {initiative.name}
              </h1>
              <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                {initiative.longDescription}
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
                <Link
                  href="#join"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Join the Community
                </Link>
                <Link
                  href="#features"
                  className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white border-blue-100 hover:bg-gray-50 md:py-4 md:text-lg md:px-10 shadow-sm transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                <div className="relative block w-full bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg overflow-hidden aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl">
                    {initiative.icon}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center p-6">
              <Users className="h-10 w-10 text-blue-600 mb-3" />
              <div className="text-3xl font-extrabold text-gray-900">{initiative.members.toLocaleString()}+</div>
              <div className="mt-2 text-sm font-medium text-gray-500">Community Members</div>
            </div>
            <div className="flex flex-col items-center p-6">
              <Award className="h-10 w-10 text-blue-600 mb-3" />
              <div className="text-3xl font-extrabold text-gray-900">{initiative.resources}+</div>
              <div className="mt-2 text-sm font-medium text-gray-500">Resources Available</div>
            </div>
            <div className="flex flex-col items-center p-6">
              <Calendar className="h-10 w-10 text-blue-600 mb-3" />
              <div className="text-3xl font-extrabold text-gray-900">{initiative.countries}</div>
              <div className="mt-2 text-sm font-medium text-gray-500">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What We Offer</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Community Resources
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Join our thriving community to access a wealth of knowledge, resources, and networking opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiative.features.map((feature, index) => (
              <div key={index} className="relative bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <Check className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Resource {index + 1}</h3>
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
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Member Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Join Our Community
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Being part of our community brings numerous advantages for your professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiative.benefits.map((benefit, index) => (
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

      {/* Events Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Upcoming Events</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Connect with the Community
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Join us at these exclusive events to learn, network, and grow with fellow professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiative.events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex flex-col items-center justify-center h-16 w-16 rounded-lg bg-blue-600 text-white">
                      <Calendar className="h-6 w-6 mb-1" />
                      <div className="text-xs font-medium">{event.date.split(',')[0]}</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{event.date} • {event.location}</p>
                    <p className="text-base text-gray-600">{event.description}</p>
                    <Link 
                      href="#"
                      className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      Register Now
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to join our community?</span>
              <span className="block text-blue-200">Become a member today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Join Now
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  href="/community"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Explore Communities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 