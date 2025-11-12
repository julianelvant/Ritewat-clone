import Image from "next/image";
import Link from "next/link";

export default function ProductsCTA() {
  return (
    <section className="w-full bg-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 p-4">
          <div className="relative">
            <Image
              src="/products/products/gpg.jpg"
              alt="Power Generation Equipment"
              width={600}
              height={400}
              className="rounded-md"
            />
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>

          <p className="text-gray-600 mb-8">
            Ritewat offers an extensive Full range of reliable standby and prime
            power generators designed for seamless power transition during
            outages for critical operations to meet customer requirements for
            any power application globally
          </p>

          <Link href="/products">
            <div className="inline-block bg-primary text-white hover:bg-primary-hover font-bold transition-colors duration-300 px-6 py-3 rounded-full ">
              <span className="flex items-center">
                VIEW OUR GENERATOR RANGE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
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
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
