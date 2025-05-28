import Link from "next/link";

const communityInitiatives = [
  {
    name: "The Production Gurus",
    description:
      "The Production Gurus is a focused tech community for builders, developers, founders, and AI enthusiasts who love turning ideas into real, shipped products. Whether you're just getting started, deep into dev tools, launching your startup, or scaling your side project — this space is for smart conversations, shared learnings, and meaningful connections.",
    path: "/community/production-gurus",
    image: "/theproductiongurus1.png",
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
    image: "/theproductiongurus1.png",
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
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
        <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-[url('/dots-pattern.svg')] bg-repeat opacity-5 z-0" />
        <div className="absolute bottom-0 left-0 w-3/4 sm:w-1/2 h-1/2 bg-[url('/circles-pattern.svg')] bg-no-repeat bg-left-bottom opacity-5 z-0" />

        <div className="min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full max-w-7xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-6">
              Community-Led Innovation
            </span>
            <h1 className="max-w-4xl mx-auto text-3xl sm:text-5xl lg:text-7xl font-black leading-none text-gray-900 font-sans uppercase">
              From Learning <span className="text-green-600">to Building</span>{" "}
              Together
            </h1>
            <p className="text-base sm:text-lg max-w-4xl mx-auto mt-4 font-sans leading-tight text-gray-600 ">
              We've moved beyond just learning — we now build, ship, and grow
              together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#initiatives"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium text-lg shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-200"
              >
                Explore Communities
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-white text-green-600 font-medium text-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-200"
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
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            PWM Group's Community
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            No spam. No fluff. Just good people building real things.
          </p>
        </div>

        <div className="space-y-20">
          {communityInitiatives.map((initiative) => (
            <div
              key={initiative.name}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-200 transition-transform hover:scale-[1.01]"
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Image Panel */}
                <div className="w-full md:w-2/5 h-60 md:h-auto relative">
                  <img
                    src={initiative.image}
                    alt={initiative.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-12 bg-white">
                  <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                    {initiative.description}
                  </p>

                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {/* What We Offer */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                        <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-green-100 text-green-600 rounded-full mr-2 sm:mr-3 shadow-sm">
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
                              className="w-5 h-5 text-green-600 mt-1 mr-2 shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700 text-sm sm:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Community Benefits */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                        <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-green-100 text-green-600 rounded-full mr-2 sm:mr-3 shadow-sm">
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
                              className="w-5 h-5 text-green-600 mt-1 mr-2 shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700 text-sm sm:text-base">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={initiative.path}
                      className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-teal-600 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition"
                    >
                      Join {initiative.name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
