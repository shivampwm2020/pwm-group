import Link from "next/link";

const communityInitiatives = [
  {
    name: "The Production Gurus",
    description:
      "The Production Gurus is a focused tech community for builders, developers, founders, and AI enthusiasts who love turning ideas into real, shipped products. Whether you're just getting started, deep into dev tools, launching your startup, or scaling your side project — this space is for smart conversations, shared learnings, and meaningful connections.",
    path: "/community/production-gurus",
    icon: "users",
    bgColor: "from-green-600 to-teal-600",
    features: [
      "Smart conversations",
      "Shared learnings",
      "Meaningful connections",
      "No spam, no fluff",
    ],
    benefits: [
      "Build real things",
      "Connect with good people",
      "Turn ideas into shipped products",
      "Deploy more than code",
    ],
  },
  {
    name: "Developer Champions",
    description:
      "PWM Group began as a small peer-to-peer learning group where developers shared knowledge, asked questions, and helped each other grow. Over time, as our community matured and our projects evolved, we realized the need to turn this energy into action — to build things together that solve real-world problems.",
    path: "/community/developer-champions",
    icon: "code",
    bgColor: "from-blue-600 to-indigo-600",
    features: [
      "Peer-to-peer learning",
      "Knowledge sharing",
      "Question answering",
      "Collaborative growth",
    ],
    benefits: [
      "Help others grow",
      "Build things together",
      "Solve real-world problems",
      "Turn energy into action",
    ],
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-6">
              Community-Led Innovation
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
              From Learning <span className="text-green-600">to Building</span>{" "}
              Together
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              We've moved beyond just learning — we now build, ship, and grow
              together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#initiatives"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium text-lg shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-200"
              >
                Explore Communities
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-white text-green-600 font-medium text-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Community Initiatives */}
      <div
        id="initiatives"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            PWM Group's Community
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            No spam. No fluff. Just good people building real things.
          </p>
        </div>

        <div className="space-y-20">
          {communityInitiatives.map((initiative, index) => (
            <div
              key={initiative.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-8 md:p-0">
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`md:w-2/5 bg-gradient-to-br ${initiative.bgColor} p-12 md:p-16 flex items-center justify-center`}
                  >
                    <div className="text-white text-center">
                      <h3 className="text-3xl font-bold mb-4">
                        {initiative.name}
                      </h3>
                      <div className="w-20 h-1 bg-white/40 mx-auto mb-6"></div>
                      <p className="text-white/90">Join us today</p>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8 md:p-12">
                    <p className="text-xl text-gray-600 mb-8">
                      {initiative.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <span className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full mr-3">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          What We Offer
                        </h4>
                        <ul className="space-y-3">
                          {initiative.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-green-600 mt-0.5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <span className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full mr-3">
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                            </svg>
                          </span>
                          Community Benefits
                        </h4>
                        <ul className="space-y-3">
                          {initiative.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-green-600 mt-0.5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10">
                      <Link
                        href={initiative.path}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium hover:shadow-lg transition-all duration-200"
                      >
                        Join This Community
                        <svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Replace Upcoming Events with PWM's Roadmap */}
      <div id="events" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              PWM Group's Roadmap
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              PWM isn't just a product studio — it's becoming a full ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100 bg-green-50">
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  Weekly Newsletter
                </h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-600 mb-6">
                  Launching a focused newsletter covering tech trends, AI
                  innovations, product stories, and community updates.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100 bg-green-50">
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  Community Building
                </h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-600 mb-6">
                  Creating dedicated communities for AI engineers, indie
                  hackers, product builders, and users of each PWM tool.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100 bg-green-50">
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  Sessions & Events
                </h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-600 mb-6">
                  Organizing live sessions with industry experts, startup
                  founders, and AI practitioners to guide the community.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100 bg-green-50">
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  New Platforms
                </h3>
              </div>
              <div className="px-6 py-4">
                <p className="text-gray-600 mb-6">
                  Continued development of innovative tools for developers and
                  non-tech users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">
                Let's deploy more than code
              </h3>
              <p className="text-green-100 text-lg">
                Let's deploy ideas, knowledge, and growth 🚀
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-white text-green-600 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="px-8 py-3 rounded-lg bg-green-500 bg-opacity-30 text-white font-medium text-lg hover:bg-opacity-40 transition-all duration-200"
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
