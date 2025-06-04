"use client";

import Script from "next/script";
import {
  Section,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  SectionBadge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/app/components/ui";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "next-view-transitions";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We provide solutions for a wide range of industries including education, finance, healthcare, retail, and technology. Our expertise spans across various domains to deliver tailored solutions.",
  },
  {
    question: "How quickly can you develop a custom solution?",
    answer:
      "Development timelines vary based on project complexity, but we typically deliver small to medium projects within 4-12 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you offer support after deployment?",
    answer:
      "Yes, we offer comprehensive post-deployment support and maintenance packages to ensure your solution continues to perform optimally and evolves with your business needs.",
  },
  {
    question: "How do I join your developer community?",
    answer:
      "You can join our developer community by registering on our community portal. We offer various membership levels, from free to premium, with different benefits and access levels.",
  },
];

const socialLinks = [
  {
    href: "https://x.com/_shivammaurya__",
    label: "X",
    icon: FaSquareXTwitter,
  },
  {
    href: "https://www.linkedin.com/company/programming-with-maurya/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.youtube.com/@ProgrammingwithMaurya21",
    label: "YouTube",
    icon: FaYoutube,
  },
];

export default function Contact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <Section
        variant="accent"
        padding="lg"
        overflow={true}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0"></div>

        <SectionContainer className="py-16 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <SectionBadge className="bg-blue-100 text-blue-700">
              Get in Touch
            </SectionBadge>
            <SectionTitle className="text-5xl font-extrabold sm:text-5xl md:text-6xl uppercase leading-none">
              Let's Start a <span className="text-blue-600 ">Conversation</span>
            </SectionTitle>
            <SectionDescription className="mt-3 text-base max-w-4xl sm:text-lg leading-relaxed tracking-tight">
              Have questions about our products, services, or community? Our
              team is ready to assist you.
            </SectionDescription>
          </div>
        </SectionContainer>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </Section>

      {/* Contact Options */}
      <Section padding="md">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <CardTitle className="mb-3">Email Us</CardTitle>
              <CardDescription className="mb-4">
                Our team typically responds within 24 hours
              </CardDescription>
              <Link
                href="mailto:connect@programmingwithmaurya.com"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                connect@programmingwithmaurya.com
              </Link>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <CardTitle className="mb-3">Call Us</CardTitle>
              <CardDescription className="mb-4">
                Available Monday-Friday, 9am-6pm IST
              </CardDescription>
              <Link
                href="tel:+916391277940"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                +91 63912 77940
              </Link>
            </Card>

            <Card className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <CardTitle className="mb-3">Live Chat</CardTitle>
              <CardDescription className="mb-4">
                Chat with our customer support team
              </CardDescription>
              <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Start Chat Session
              </button>
            </Card>
          </div>
        </SectionContainer>
      </Section>

      {/* Contact Form */}
      <Section padding="md">
        <SectionContainer>
          <Card variant="featured" className="overflow-hidden p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-6 py-10 sm:px-8 sm:py-12 text-white break-words">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-blue-100 mb-12 text-lg">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-blue-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">
                        Office Location
                      </h3>
                      <p className="mt-1 text-blue-100">Varanasi, India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-blue-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Email</h3>
                      <p className="mt-1 text-blue-100">
                        connect@programmingwithmaurya.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-blue-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Phone</h3>
                      <p className="mt-1 text-blue-100">+91 63912 77940</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16">
                  <h3 className="text-lg font-medium text-white mb-4">
                    Connect with us
                  </h3>
                  <div className="mt-4 flex gap-4">
                    {socialLinks.map(({ href, label, icon: Icon }, index) => (
                      <Link
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-200 transition"
                      >
                        <span className="sr-only">{label}</span>
                        <Icon className="h-6 w-6" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-12">
                <div
                  data-fillout-id="vd7UA6UGvnus"
                  data-fillout-embed-type="standard"
                  data-fillout-inherit-parameters="true"
                  data-fillout-dynamic-resize="true"
                  style={{
                    width: "100%",
                    height: "500px",
                  }}
                ></div>
                <Script
                  src="https://server.fillout.com/embed/v1/"
                  strategy="afterInteractive"
                />
              </div>
            </div>
          </Card>
        </SectionContainer>
      </Section>

      {/* FAQ */}

      <Section padding="md">
        <SectionContainer className="max-w-3xl mx-auto">
          <SectionHeader className="text-center mb-10">
            <SectionTitle className="text-3xl font-bold">
              Frequently Asked Questions
            </SectionTitle>
            <SectionDescription className="mt-2 text-gray-600">
              Find answers to the most common questions about our services and
              community.
            </SectionDescription>
          </SectionHeader>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b-4 border-blue-300 rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-left text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 px-5 pb-5 text-gray-600 text-base ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </SectionContainer>
      </Section>
    </>
  );
}
