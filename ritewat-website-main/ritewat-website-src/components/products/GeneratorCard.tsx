"use client";

import Image from "next/image";
import { useState } from "react";

interface Generator {
  name: string;
  powerOutput: string;
  powerType: string;
  frequency: string;
  type: string;
  images: string[];
  description: string;
  doc?: string;
}

interface GeneratorCardProps {
  generator: Generator;
}

export default function GeneratorCard({ generator }: GeneratorCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % generator.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? generator.images.length - 1 : prev - 1
    );
  };

  // Determine if this is a lighting tower product
  const isLightingTower = generator.type.toLowerCase().includes('tower');
  
  // Get appropriate label for the third specification field
  const getThirdFieldLabel = () => {
    if (isLightingTower) {
      return generator.frequency.includes('Coverage') ? 'Coverage Area' : 'Mast Height';
    }
    return 'Frequency';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-full">
      <div className="flex flex-col md:flex-row">
        {/* Image container with switchable images */}
        <div className="w-full md:w-1/3 relative">
          <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
            <Image
              src={generator.images[currentImageIndex]}
              alt={`${generator.name} - Image ${currentImageIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
              priority
            />

            {/* Image navigation controls */}
            {generator.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Image indicators */}
            {generator.images.length > 1 && (
              <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1 sm:gap-2">
                {generator.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-colors ${
                      currentImageIndex === index ? "bg-white" : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Generator type badge */}
          {/* <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
            {generator.type}
          </div> */}
        </div>

        <div className="w-full md:w-2/3 p-4 sm:p-6 md:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
            {generator.name}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            {generator.description}
          </p>

          {/* Specifications */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <span className="block text-xs sm:text-sm text-gray-500">
                Power Output
              </span>
              <span className="font-semibold text-primary text-sm sm:text-base">
                {generator.powerOutput}
              </span>
            </div>
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <span className="block text-xs sm:text-sm text-gray-500">
                Power Type
              </span>
              <span className="font-semibold text-sm sm:text-base">
                {generator.powerType}
              </span>
            </div>
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <span className="block text-xs sm:text-sm text-gray-500">
                {getThirdFieldLabel()}
              </span>
              <span className="font-semibold text-sm sm:text-base">
                {generator.frequency}
              </span>
            </div>
            <div className="bg-gray-50 p-3 sm:p-4 rounded">
              <span className="block text-xs sm:text-sm text-gray-500">
                Type
              </span>
              <span className="font-semibold text-sm sm:text-base">
                {generator.type}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4 mt-auto justify-end">
            <a
              href="/contact"
              className="text-sm sm:text-base bg-primary/10 hover:bg-primary/20 text-primary font-bold py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition-colors text-center"
            >
              Request Price
            </a>
            {generator.doc ? (
              <a
                href={generator.doc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base bg-primary hover:bg-primary/90 text-white font-bold py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition-colors text-center"
              >
                View More
              </a>
            ) : (
              <button
                className="text-sm sm:text-base bg-primary hover:bg-primary/90 text-white font-bold py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition-colors"
                disabled
              >
                View More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
