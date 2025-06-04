import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Link } from "next-view-transitions";
import { PageProps } from "@/app/types";
import SlideIn from "@/app/components/ui/SlideIn";

const services = {
  aiution: {
    name: "AIution",
    description: "AI-powered solutions for your business needs",
    longDescription:
      "AIution delivers cutting-edge artificial intelligence solutions tailored to your business needs, helping you automate processes, gain insights from data, and drive innovation across your organization.",
    features: [
      "Custom AI solution development",
      "Machine learning model deployment",
      "AI integration consulting",
      "Data analysis and insights",
    ],
    benefits: [
      "Increased operational efficiency",
      "Cost reduction through automation",
      "Data-driven decision making",
      "Competitive advantage",
    ],
    imageUrl: "/aiution_logo.svg",
    caseStudies: [
      {
        title: "Manufacturing Optimization",
        description:
          "Helped a manufacturing client reduce operational costs by 32% through AI-powered process optimization.",
      },
      {
        title: "Retail Analytics",
        description:
          "Implemented predictive analytics solution for a retail chain, increasing sales conversion by 24%.",
      },
    ],
  },
};

type ServicePageProps = PageProps<{
  service: string;
}>;

export default function ServicePage({ params }: ServicePageProps) {
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
            {/* Left side - Text */}
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <SlideIn>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  {service.name}
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  {service.longDescription}
                </p>
              </SlideIn>
              <SlideIn>
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
              </SlideIn>
            </div>

            {/* Right side - Image with white bg */}

            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 flex justify-center items-center bg-white rounded-lg shadow-lg overflow-hidden aspect-video max-w-md mx-auto">
              <SlideIn>
                <img
                  src={service.imageUrl}
                  alt={service.name}
                  className="object-contain w-full h-full"
                />
              </SlideIn>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Services Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <SlideIn>
            <div className="text-center mb-16">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                Our Services
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
                Comprehensive AI Solutions
              </p>
              <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                We offer a range of specialized services to meet your business
                needs and drive digital transformation.
              </p>
            </div>
          </SlideIn>

          {/* Feature Cards Grid */}
          <SlideIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="w-full max-w-md bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
                >
                  {/* Gradient Border Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-xl"></div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        Service {index + 1}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
          </SlideIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <SlideIn>
            <div className="text-center mb-16">
              <h2 className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
                Benefits
              </h2>
              <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Why Choose Our Services
              </p>
              <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
                Discover the key advantages that make us the trusted partner for
                your digital success.
              </p>
            </div>
          </SlideIn>
          {/* Benefit Cards */}{" "}
          <SlideIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="w-full max-w-md bg-white border-l-4 border-blue-700 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon Circle */}
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-semibold text-lg shadow-inner group-hover:scale-105 transition-transform duration-200">
                      {index + 1}
                    </div>
                    {/* Text Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {`Benefit ${index + 1}`}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
          </SlideIn>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <SlideIn>
            <div className="text-center mb-16">
              <h2 className="text-sm text-blue-600 font-semibold tracking-widest uppercase">
                Case Studies
              </h2>
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                Success Stories
              </p>
              <p className="mt-2 max-w-2xl mx-auto text-lg tracking-tight text-gray-500">
                See how our services have helped businesses like yours achieve
                remarkable results.
              </p>
            </div>
          </SlideIn>

          {/* Card Grid */}
          <SlideIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
              {service.caseStudies.map((caseStudy, index) => (
                <div
                  key={index}
                  className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 group"
                >
                  {/* Icon or Initial */}
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-5 font-semibold text-md group-hover:scale-105 transition-transform duration-200">
                    CS
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {caseStudy.description}
                  </p>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-b-4xl bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SlideIn>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 mb-10">
              Get in touch with our experts today.
            </p>
          </SlideIn>

          <SlideIn>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-base font-medium text-blue-600 bg-white rounded-md shadow-md hover:bg-blue-50 transition-all duration-200"
              >
                Contact us
              </Link>
              <Link
                href="/services"
                className="inline-block px-8 py-4 text-base font-medium text-white bg-white bg-opacity-10 border border-white border-opacity-20 rounded-md hover:bg-opacity-20 transition-all duration-200"
              >
                View all services
              </Link>
            </div>
          </SlideIn>
        </div>
      </section>
    </div>
  );
}
