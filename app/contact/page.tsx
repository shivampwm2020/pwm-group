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
            <SectionTitle className="text-5xl font-extrabold sm:text-5xl md:text-6xl leading-none">
              Let's Start a <span className="text-blue-600 ">Conversation</span>
            </SectionTitle>
            <SectionDescription className="mt-3 text-lg leading-relaxed">
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
              <a
                href="mailto:connect@programmingwithmaurya.com"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                connect@programmingwithmaurya.com
              </a>
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
              <a
                href="tel:+916391277940"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                +91 63912 77940
              </a>
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
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white">
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
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-blue-200 transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
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
      <Section variant="secondary" padding="md">
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <SectionDescription>
              Find answers to common questions about our products and services
            </SectionDescription>
          </SectionHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index: number) => (
              <Card
                key={index}
                variant="ghost"
                className="p-5 transition-all border-b-4 border-blue-700 hover:shadow-md rounded-xl"
              >
                <button
                  className="flex items-center justify-between w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 text-gray-900 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`mt-3 text-sm text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-2 text-gray-900">{faq.answer}</p>
                </div>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </Section>
    </>
  );
}
