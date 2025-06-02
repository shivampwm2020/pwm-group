"use client";

import { notFound } from "next/navigation";
import { ArrowRight, Check, Calendar, Users, Award } from "lucide-react";
import Link from "next/link";
import { PageProps } from "@/app/types";
import CountUp from "react-countup";
import { FaAward, FaGlobe, FaUsers } from "react-icons/fa";

const initiatives = {
  "production-gurus": {
    name: "The Production Gurus",
    description:
      "A community of production experts sharing knowledge and best practices",
    longDescription:
      "The Production Gurus is an exclusive community of industry experts dedicated to sharing knowledge, best practices, and insights about production systems, DevOps, and enterprise infrastructure.",
    features: [
      "Expert-led workshops and webinars",
      "Knowledge sharing sessions",
      "Networking opportunities",
      "Best practices documentation",
    ],
    benefits: [
      "Learn from industry experts",
      "Connect with like-minded professionals",
      "Stay updated with latest trends",
      "Access to exclusive resources",
    ],
    events: [
      {
        title: "Production Systems Masterclass",
        date: "June 15, 2024",
        location: "Virtual Event",
        description:
          "A comprehensive masterclass on building resilient production systems at scale.",
      },
      {
        title: "DevOps Community Meetup",
        date: "July 22, 2024",
        location: "Bangalore, India",
        description:
          "Connect with fellow DevOps professionals and share experiences in this in-person networking event.",
      },
    ],
    members: 1250,
    countries: 42,
    resources: 350,
  },
};

type InitiativePageProps = PageProps<{
  initiative: string;
}>;

export default function CommunityInitiativePage({
  params,
}: InitiativePageProps) {
  const initiative = initiatives[params.initiative as keyof typeof initiatives];

  if (!initiative) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 z-0"></div>

        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 py-24 lg:py-32 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-6 items-center">
            {/* Left: Text Section */}
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-none">
                {initiative.name}
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl">
                {initiative.longDescription}
              </p>

              <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-6">
                <Link
                  href="#join"
                  className="w-full sm:w-auto flex items-center justify-center px-10 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
                >
                  Join the Community
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto flex items-center justify-center px-10 py-4 rounded-lg border border-blue-200 text-blue-600 bg-white shadow-sm hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-100 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right: Image Section */}
            <div className="mt-14 lg:mt-0 lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-xl shadow-2xl overflow-hidden">
                <img
                  src="/theproductiongurus1.png"
                  alt="Production Gurus"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Stats Section */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center">
            {/* Stat 1 - Community Members */}
            <div className="bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg">
              <FaUsers className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <div className="text-4xl font-extrabold text-gray-900">
                <CountUp
                  end={initiative.members}
                  duration={2.5}
                  separator=","
                />
                +
              </div>
              <p className="mt-2 text-sm text-gray-500 font-medium">
                Community Members
              </p>
            </div>

            {/* Stat 2 - Resources Available */}
            <div className="bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg">
              <FaAward className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <div className="text-4xl font-extrabold text-gray-900">
                <CountUp end={initiative.resources} duration={2.5} />+
              </div>
              <p className="mt-2 text-sm text-gray-500 font-medium">
                Resources Available
              </p>
            </div>

            {/* Stat 3 - Countries Represented */}
            <div className="bg-white shadow-md rounded-xl p-6 transition hover:shadow-lg">
              <FaGlobe className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <div className="text-4xl font-extrabold text-gray-900">
                <CountUp end={initiative.countries} duration={2.5} />
              </div>
              <p className="mt-2 text-sm text-gray-500 font-medium">
                Countries Represented
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-20">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              What We Offer
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Community Resources
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Join our thriving community to access a wealth of knowledge,
              resources, and networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {initiative.features.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-lg shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute -top-1 left-1 w-10 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-600 text-white shadow-md">
                    <Check className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Resource {index + 1}
                    </h3>
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
          <div className="lg:text-center mb-20">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Member Benefits
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Join Our Community
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Being part of our community brings numerous advantages for your
              professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {initiative.benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 text-white mb-5 shadow-md">
                  <span className="text-lg font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Benefit {index + 1}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {benefit}
                </p>
                <div className="absolute top-0 left-0 w-12 h-1.5 rounded-br-lg bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="lg:text-center mb-20">
            <h2 className="text-sm text-blue-600 font-semibold tracking-wide uppercase">
              Upcoming Events
            </h2>
            <p className="mt-3 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Connect with the Community
            </p>
            <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
              Join us at these exclusive events to learn, network, and grow with
              fellow professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {initiative.events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-shadow duration-400 ease-in-out"
                style={{
                  backdropFilter: "blur(12px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex flex-col items-center justify-center h-20 w-20 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-md">
                      <Calendar className="h-8 w-8 mb-2" />
                      <div className="text-sm font-semibold tracking-wide">
                        {event.date.split(",")[0]}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 italic">
                      {event.date} &bull; {event.location}
                    </p>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                    <Link
                      href="#"
                      className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="join"
        className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 sm:py-24"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            <span>Ready to join our community?</span>
            <br />
            <span className="text-blue-200">Become a member today.</span>
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-xl shadow-md hover:bg-blue-50 transition duration-300"
            >
              Join Now
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white bg-opacity-10 border border-white border-opacity-30 rounded-xl hover:bg-opacity-20 transition duration-300 backdrop-blur-sm"
            >
              Explore Communities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
