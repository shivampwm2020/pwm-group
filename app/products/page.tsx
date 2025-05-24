import Link from "next/link";
import { Button } from "../components/ui";
import HeroSection from "../components/ui/HeroSection";
import CTASection from "../components/ui/CTASection";
import Image from "next/image";

const products = [
  {
    name: "ExplainGitHub",
    description:
      "AI-powered repo exploration for developers and learners. ExplainGitHub lets you chat with any public or private GitHub repository using LLMs. Whether you're trying to understand a new codebase, review a pull request, or onboard faster, ExplainGitHub breaks down code structures, dependencies, and logic into natural language.",
    path: "/products/explaingithub",
    image: "/explaingithub.png",
    bgColor: "from-blue-600 to-indigo-700",
    features: [
      "Repo chats",
      "Git structure diagrams",
      "File-level querying",
      "Multi-model support",
    ],
    cta: "Explore ExplainGitHub",
    category: "Developer Tools",
  },
  {
    name: "RepoFlicks",
    description:
      "A GitHub meets Instagram experience. RepoFlicks is a showcase platform where developers can present their GitHub repositories like social media posts — complete with images, tags, videos, and community discussions. It helps creators share, get feedback, and build credibility, especially for side projects and open-source work.",
    path: "/products/repoflicks",
    image: "/repoflicks.png",
    bgColor: "from-indigo-600 to-purple-700",
    features: [
      "Repository showcases",
      "Social media style presentations",
      "Community discussions",
      "Project credibility building",
    ],
    cta: "Discover RepoFlicks",
    category: "Developer Platform",
  },
  {
    name: "SarkariSamadhan",
    description:
      "Simplifying access to government schemes in India. Sarkari Samadhan is a citizen-centric chatbot platform that helps users discover, understand, and apply for Indian government schemes. It also supports RTI filing, complaint portals, and grievance tracking — all through a unified interface designed to make governance more accessible.",
    path: "/products/sarkarisamadhan",
    image: "/sarkari_samadhan_in_logo.png",
    bgColor: "from-purple-600 to-pink-700",
    features: [
      "Government scheme discovery",
      "Application assistance",
      "RTI filing support",
      "Grievance tracking",
    ],
    cta: "Start with SarkariSamadhan",
    category: "Governance",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection
        badgeText="Products by PWM Group"
        headingBefore="From Open-Source"
        highlightText="Tools"
        headingAfter="to AI-Powered Platforms"
        highlightGradient="from-blue-600 to-indigo-600"
        description="PWM is a launchpad for products, ideas, and community-led innovation"
        primaryBtnText="Explore Solutions"
        primaryBtnLink="#solutions"
        secondaryBtnText="Schedule a Demo"
        secondaryBtnLink="/contact"
      />

      {/* Product Categories */}
      <div
        id="solutions"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold font-sans text-gray-900">
            Products by PWM Group
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto font-sans leading-tight mt-2">
            From open-source tools to AI-powered SaaS platforms
          </p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`flex flex-col-reverse lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Product Image Section */}
              <div
                className={`lg:w-1/2 w-full rounded-3xl overflow-hidden shadow-xl ${
                  index % 2 === 1
                    ? "lg:border-l-4 border-blue-700"
                    : "lg:border-r-4 border-blue-700"
                }`}
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={450}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div className="lg:w-1/2 w-full">
                <div className="mb-4">
                  <span className="text-sm font-medium bg-blue-100 py-2 px-4 rounded-full text-blue-700 uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h3>

                <p className="text-lg text-gray-700 mb-6 font-sans">
                  {product.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={product.path}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  {product.cta}
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
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <CTASection
        heading="Let’s deploy more than code"
        subheading="Let’s deploy ideas, knowledge, and growth 🚀"
        buttonOneText="Contact Sales"
        buttonOneHref="/contact"
        buttonOneBg="bg-white"
        buttonOneTextColor="text-blue-700 hover:bg-blue-500 hover:text-white"
        buttonTwoText="View All Products"
        buttonTwoHref="/products#solutions"
        buttonTwoBg="bg-blue-500 hover:bg-blue-800"
        buttonTwoTextColor="text-white hover:text-blue-700"
      />
    </div>
  );
}
