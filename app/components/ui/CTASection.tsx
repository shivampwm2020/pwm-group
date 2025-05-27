import React from "react";
import Link from "next/link";

interface CTASectionProps {
  heading: string;
  subheading: string;
  bgGradient?: string;
  leftBlobColor?: string;
  rightBlobColor?: string;
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
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="text-white max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans mb-4 leading-snug">
              {heading}
            </h2>
            <p className="text-base sm:text-lg text-blue-100 max-w-4xl mx-auto font-sans leading-tight">
              {subheading}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link
              href={buttonOneHref}
              className={`relative inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all ${buttonOneBg} ${buttonOneTextColor} rounded-lg shadow-lg hover:opacity-90 group w-full sm:w-auto text-center`}
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-blue-500 rounded-lg"></span>
              <span className="relative z-10">{buttonOneText}</span>
            </Link>

            <Link
              href={buttonTwoHref}
              className={`relative inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all ${buttonTwoBg} ${buttonTwoTextColor} rounded-lg shadow-lg hover:opacity-90 group w-full sm:w-auto text-center`}
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-lg"></span>
              <span className="relative z-10">{buttonTwoText}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
