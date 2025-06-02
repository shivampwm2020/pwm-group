import Image from "next/image";
import Link from "next/link";

const communityInitiatives = [
  {
    name: "The Production Gurus",
    description:
      "The Production Gurus is a focused tech community for builders, developers, founders, and AI enthusiasts who love turning ideas into real, shipped products. Whether you're just getting started, deep into dev tools, launching your startup, or scaling your side project — this space is for smart conversations, shared learnings, and meaningful connections.",
    path: "/community/production-gurus",
    imageUrl: "/theproductiongurus1.png",
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>

        <div className="min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
          <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-[url('/dots-pattern.svg')] bg-repeat opacity-5 z-0" />
          <div className="absolute bottom-0 left-0 w-3/4 sm:w-1/2 h-1/2 bg-[url('/circles-pattern.svg')] bg-no-repeat bg-left-bottom opacity-5 z-0" />

          <div className="w-full max-w-7xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-4">
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
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center sm:mt-10">
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
      </section>

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
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                {initiative.imageUrl ? (
                  <div className="w-full lg:w-2/5 h-64 lg:h-auto">
                    <Image
                      src={initiative.imageUrl}
                      alt={initiative.name || "Community Preview"}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-full lg:w-2/5 bg-gradient-to-br ${initiative.bgColor} p-10 lg:p-16 flex items-center justify-center`}
                  >
                    <div className="text-white text-center space-y-4">
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {initiative.name}
                      </h3>
                      <div className="w-20 h-1 bg-white/40 mx-auto"></div>
                      <p className="text-white/90">Join us today</p>
                    </div>
                  </div>
                )}

                {/* Right Content */}
                <div className="w-full lg:w-3/5 p-6 sm:p-10 lg:p-12 bg-white flex flex-col justify-between">
                  <div>
                    <p className="text-gray-700 text-base sm:text-lg mb-6">
                      {initiative.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="text-lg text-gray-900 font-semibold mb-4 flex items-center">
                          <span className="w-9 h-9 bg-green-100 text-green-600 flex items-center justify-center rounded-full mr-3 shadow-sm">
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
                        <ul className="space-y-2 text-sm text-gray-900 sm:text-base">
                          {initiative.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-green-600 mr-2 mt-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="text-lg text-gray-900 font-semibold mb-4 flex items-center">
                          <span className="w-9 h-9 bg-green-100 text-green-600 flex items-center justify-center rounded-full mr-3 shadow-sm">
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
                        <ul className="space-y-2 text-sm text-gray-900 sm:text-base">
                          {initiative.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-green-600 mr-2 mt-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href={initiative.path}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-medium text-sm sm:text-base hover:shadow-md transition-all"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Replace Upcoming Events with PWM's Roadmap */}
      <div id="events" className="bg-gradient-to-b from-white to-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
              🚀 PWM Group's Roadmap
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              PWM isn’t just a product studio — it's becoming a full-fledged
              ecosystem.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Weekly Newsletter",
                icon: "📬",
                desc: "Launching a focused newsletter covering tech trends, AI innovations, product stories, and community updates.",
              },
              {
                title: "Community Building",
                icon: "🤝",
                desc: "Creating dedicated communities for AI engineers, indie hackers, product builders, and users of each PWM tool.",
              },
              {
                title: "Sessions & Events",
                icon: "🎤",
                desc: "Organizing live sessions with industry experts, startup founders, and AI practitioners to guide the community.",
              },
              {
                title: "New Platforms",
                icon: "🛠️",
                desc: "Continued development of innovative tools for developers and non-tech users.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex items-center justify-center w-14 h-14 text-3xl rounded-full bg-gradient-to-tr from-green-100 to-teal-100 text-green-700 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-5 bg-gradient-to-r from-green-200 to-transparent rounded-2xl pointer-events-none transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 py-16 rounded-b-4xl">
        <div className="absolute inset-0 bg-[url('/wave-lines.svg')] opacity-10"></div>
        <div className="absolute -left-32 -bottom-32 w-80 h-80 sm:w-96 sm:h-96 bg-green-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -right-32 -top-32 w-80 h-80 sm:w-96 sm:h-96 bg-green-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center gap-8 text-center">
            <div className="text-white max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans mb-4 leading-snug">
                Let's deploy more than code
              </h2>
              <p className="text-base sm:text-lg text-blue-100 max-w-4xl mx-auto font-sans leading-tight">
                Let's deploy ideas, knowledge, and growth 🚀
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-green-600 font-medium text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:opacity-90 group w-full sm:w-auto text-center"
              >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-green-600 rounded-lg"></span>
                <span className="relative z-10 hover:text-white">
                  Contact Us
                </span>
              </Link>
              <Link
                href="/products"
                className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all bg-green-600 text-white rounded-lg shadow-lg hover:opacity-90 group w-full sm:w-auto text-center"
              >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-lg"></span>
                <span className="relative z-10 hover:text-green-600">
                  Explore Products
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
