import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { PageProps } from "@/app/types";

const products = {
  explaingithub: {
    name: "ExplainGitHub",
    description: "AI-powered GitHub repository explanation platform",
    longDescription:
      "ExplainGitHub uses advanced AI to analyze and explain GitHub repositories, making codebases more accessible and understandable for developers at all levels.",
    features: [
      "Instant repository analysis",
      "Code explanation in plain English",
      "Documentation generation",
      "Team collaboration tools",
    ],
    benefits: [
      "Save time understanding new codebases",
      "Accelerate onboarding for new team members",
      "Improve code documentation",
      "Enhance team collaboration",
    ],
    imageUrl: "/explaingithub.png",
    link: "https://explaingithub.com",
  },
  repoflicks: {
    name: "RepoFlicks",
    description: "Your AI-powered code review assistant",
    longDescription:
      "RepoFlicks leverages artificial intelligence to provide comprehensive code reviews, ensuring your projects follow best practices and are optimized for performance.",
    features: [
      "Automated code review",
      "Best practices suggestions",
      "Security vulnerability detection",
      "Performance optimization tips",
    ],
    benefits: [
      "Catch bugs before they reach production",
      "Maintain consistent code quality",
      "Enhance application security",
      "Improve system performance",
    ],
    imageUrl: "/repoflicks.png",
    link: "https://repoflicks.com",
  },
  sarkarisamadhan: {
    name: "SarkariSamadhan",
    description: "Government job preparation platform",
    longDescription:
      "SarkariSamadhan is a comprehensive platform designed to help aspirants prepare for government examinations with curated study materials and mock tests.",
    features: [
      "Comprehensive study materials",
      "Practice tests and mock exams",
      "Job alerts and notifications",
      "Expert guidance and mentorship",
    ],
    benefits: [
      "Structured preparation approach",
      "Real-time performance tracking",
      "Stay updated with latest job opportunities",
      "Learn from subject matter experts",
    ],
    imageUrl: "/sarkari_samadhan_in_logo.png",
    link: "https://sarkarisamadhan.com",
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 z-0"></div>

        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 py-24 lg:py-32 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-xl">
                {product.longDescription}
              </p>

              <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-6">
                <Link
                  href="#features"
                  className="w-full sm:w-auto flex items-center justify-center px-10 py-4 rounded-lg bg-blue-700 text-white font-semibold text-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                >
                  Explore Features
                </Link>
                <Link
                  href={product.link}
                  target="_blank"
                  className="w-full sm:w-auto flex items-center justify-center px-10 py-4 rounded-lg border border-blue-200 text-blue-700 bg-white shadow-sm hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-100 transition"
                >
                  Visit Site
                </Link>
              </div>
            </div>

            <div className="mt-14 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 flex justify-center lg:justify-end">
              <div className="bg-white relative w-full max-w-md rounded-xl shadow-2xl overflow-hidden aspect-video flex items-center justify-center bg-cover bg-center">
                <img
                  src={product.imageUrl} // actual image in the center
                  alt="Product Preview"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Soft bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-20">
            <h2 className="text-base font-semibold tracking-wide uppercase text-transparent bg-clip-text bg-blue-700">
              Key Features
            </h2>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Everything You Need to Succeed
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              {product.name} provides a modern toolkit designed to boost your
              productivity and streamline your workflow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-16">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="relative w-full max-w-[340px] mx-auto bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-700 rounded-t-xl"></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-700 text-white shadow-md group-hover:scale-110 transition-transform">
                      <Check className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {`Feature ${index + 1}`}
                    </h3>
                    <p className="text-base text-gray-700">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-20">
            <h2 className="text-sm font-semibold tracking-widest text-blue-700 uppercase">
              Benefits
            </h2>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Why choose <span className="text-blue-700">{product.name}</span>?
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              Our product delivers tangible results that transform your
              operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {product.benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer transform hover:-translate-y-1"
                style={{ willChange: "transform, box-shadow" }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-700 text-white mb-6 shadow-md transition-transform duration-500 group-hover:scale-110">
                  <span className="text-xl font-extrabold tracking-wide">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                  Benefit {index + 1}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed tracking-normal">
                  {benefit}
                </p>

                {/* Decorative large number */}
                <div className="absolute top-6 right-6 opacity-10 text-indigo-300 text-8xl font-extrabold select-none pointer-events-none leading-none">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Customer Reviews
            </h2>
            <h3 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Loved by Developers Like You
            </h3>
            <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-600">
              Here's what our happy users have to say about {product.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Aarav Mehta",
                title: "Frontend Developer",
                rating: 5,
                review: `I've saved hours trying to understand unfamiliar repositories. ${product.name} is now a must-have in my toolkit!`,
              },
              {
                name: "Sanya Kapoor",
                title: "Software Engineer",
                rating: 4,
                review: `The explanations are incredibly accurate and easy to follow. It really helps during code reviews.`,
              },
              {
                name: "Rahul Sharma",
                title: "Tech Lead",
                rating: 5,
                review: `Our team uses ${product.name} to onboard new developers. It cuts down ramp-up time significantly.`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-5 w-5 ${
                        i < item.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.6 12.545 1 8.91l6.09-.888L10 2.5l2.91 5.522 6.09.888-4.6 3.636 1.478 5.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  “{item.review}”
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            <span className="block">Ready to transform your workflow?</span>
            <span className="block text-blue-300 mt-2">{`Get started with ${product.name} today.`}</span>
          </h2>
          <div className="mt-10 flex justify-center space-x-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-white text-blue-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-[1.05] transition-transform duration-300"
            >
              Get started
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-blue-700 bg-opacity-60 text-white font-semibold text-lg shadow-md hover:bg-opacity-80 hover:shadow-lg hover:scale-[1.05] transition-all duration-300"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
