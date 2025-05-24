import React from "react";
import { Button } from "./Button";

interface HeroSectionProps {
  badgeText: string;
  badgeBgColor?: string; // e.g., 'bg-green-100'
  badgeTextColor?: string; // e.g., 'text-green-700'
  headingBefore: string;
  highlightText: string;
  headingAfter?: string;
  highlightGradient: string; // gradient tailwind class e.g., 'from-green-600 to-green-400'
  headingTextColor?: string; // e.g., 'text-gray-900'
  description: string;
  descriptionColor?: string; // e.g., 'text-gray-600'
  primaryBtnText: string;
  primaryBtnLink: string;
  primaryBtnColor?: string; // e.g., 'bg-green-600 hover:bg-green-700'
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  secondaryBtnColor?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  badgeText,
  badgeBgColor = "bg-blue-100",
  badgeTextColor = "text-blue-700",
  headingBefore,
  highlightText,
  headingAfter,
  highlightGradient,
  headingTextColor = "text-gray-900",
  description,
  descriptionColor = "text-gray-600",
  primaryBtnText,
  primaryBtnLink,
  primaryBtnColor = "bg-blue-600 hover:bg-blue-700",
  secondaryBtnText,
  secondaryBtnLink,
  secondaryBtnColor = "bg-gray-200 hover:bg-gray-300",
}) => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 z-0" />
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-[url('/dots-pattern.svg')] bg-repeat opacity-5 z-0" />
      <div className="absolute bottom-0 left-0 w-3/4 sm:w-1/2 h-1/2 bg-[url('/circles-pattern.svg')] bg-no-repeat bg-left-bottom opacity-5 z-0" />

      {/* Content */}
      <div className="min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-7xl mx-auto text-center">
          {/* Badge */}
          <span
            className={`inline-block px-4 py-2 rounded-full font-medium text-sm mb-4 ${badgeBgColor} ${badgeTextColor}`}
          >
            {badgeText}
          </span>

          {/* Heading */}
          <h1
            className={`max-w-4xl mx-auto text-3xl sm:text-5xl lg:text-7xl font-black leading-none font-sans uppercase ${headingTextColor}`}
          >
            {headingBefore}{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${highlightGradient}`}
            >
              {highlightText}
            </span>
            {headingAfter && <> {headingAfter}</>}
          </h1>

          {/* Description */}
          <p
            className={`text-base sm:text-lg max-w-4xl mx-auto mt-4 font-sans leading-tight ${descriptionColor}`}
          >
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-10">
            <Button
              href={primaryBtnLink}
              className={`w-full sm:w-auto ${primaryBtnColor} text-white rounded-full`}
            >
              {primaryBtnText}
            </Button>

            {secondaryBtnText && secondaryBtnLink && (
              <Button
                href={secondaryBtnLink}
                className={`w-full sm:w-auto ${secondaryBtnColor} rounded-full`}
              >
                {secondaryBtnText}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-0" />
    </section>
  );
};

export default HeroSection;
