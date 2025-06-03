import { Link } from "next-view-transitions";
import React from "react";
import SlideIn from "./SlideIn";

interface CTASectionProps {
  heading: string;
  subheading: string;
  bgGradient?: string;
  buttonOneText: string;
  buttonOneHref: string;
  buttonOneBg: string;
  buttonOneTextColor: string;
  buttonTwoText: string;
  buttonTwoHref: string;
  buttonTwoBg: string;
  buttonTwoTextColor: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  heading,
  subheading,
  bgGradient,
  buttonOneText,
  buttonOneHref,
  buttonOneBg,
  buttonOneTextColor,
  buttonTwoText,
  buttonTwoHref,
  buttonTwoBg,
  buttonTwoTextColor,
}) => {
  return (
    <section
      className={`${
        bgGradient || "bg-gradient-to-r from-blue-600 to-indigo-700"
      } py-20 sm:py-24 lg:py-32 relative overflow-hidden rounded-b-4xl`}
    >
      <div className="absolute inset-0 bg-[url('/wave-lines.svg')] opacity-10"></div>
      <div className="absolute -left-32 -bottom-32 w-80 h-80 sm:w-96 sm:h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute -right-32 -top-32 w-80 h-80 sm:w-96 sm:h-96 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center gap-12 text-center">
          <SlideIn direction="right">
            <div className="text-white max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans mb-4 leading-snug">
                {heading}
              </h2>
              <p className="text-base sm:text-lg text-blue-100 max-w-4xl mx-auto font-sans leading-tight">
                {subheading}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 justify-center">
              {/* Button One */}
              <Link
                href={buttonOneHref}
                className={`relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg shadow-md w-full sm:w-auto text-center transition-colors duration-300
                ${buttonOneBg} ${buttonOneTextColor}
                hover:${
                  buttonOneBg === "bg-white" ? "bg-blue-700" : "bg-white"
                } hover:${
                  buttonOneTextColor === "text-blue-700"
                    ? "text-white"
                    : "text-blue-700"
                }
              `}
              >
                <span className="relative z-10">{buttonOneText}</span>
              </Link>

              {/* Button Two */}
              <Link
                href={buttonTwoHref}
                className={`relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg shadow-md w-full sm:w-auto text-center transition-colors duration-300
                ${buttonTwoBg} ${buttonTwoTextColor}
                hover:${
                  buttonTwoBg === "bg-white" ? "bg-blue-700" : "bg-white"
                } hover:${
                  buttonTwoTextColor === "text-blue-700"
                    ? "text-white"
                    : "text-blue-700"
                }
              `}
              >
                <span className="relative z-10">{buttonTwoText}</span>
              </Link>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
