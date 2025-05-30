import React from "react";
import Link from "next/link";

interface ProductHeroSectionProps {
  name: string;
  longDescription: string;
  imageUrl: string;
  tagline?: string;
  ctaPrimaryLink: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryLink: string;
  ctaSecondaryLabel?: string;
}

const ProductHeroSection: React.FC<ProductHeroSectionProps> = ({
  name,
  longDescription,
  imageUrl,
  tagline,
  ctaPrimaryLink,
  ctaPrimaryLabel,
  ctaSecondaryLink,
  ctaSecondaryLabel,
}) => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 z-0"></div>

      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 py-24 lg:py-32 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
              {tagline}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              {name}
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-xl">
              {longDescription}
            </p>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-6">
              <Link
                href={ctaPrimaryLink}
                className="w-full sm:w-auto flex items-center justify-center px-10 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
              >
                {ctaPrimaryLabel}
              </Link>
              <Link
                href={ctaSecondaryLink}
                className="w-full sm:w-auto flex items-center justify-center px-10 py-4 rounded-lg border border-blue-200 text-blue-600 bg-white shadow-sm hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-100 transition"
              >
                {ctaSecondaryLabel}
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="mt-14 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="bg-white relative w-full max-w-md rounded-xl shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
              <img
                src={imageUrl}
                alt={`${name} Preview`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
    </div>
  );
};

export default ProductHeroSection;
