import Image from "next/image";
import Link from "next/link";
import SubHero from "@/components/SubHero";

export default function Products() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Products Hero Section */}
        <SubHero
          title="Our Products"
          description="Explore our range of high-quality power generators designed to
              meet your specific needs."
        />

        {/* Product Categories Call to Action */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Choose Your Generator Type
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {/* General Purpose Generators */}
              <Link
                href="/products/general-purpose"
                className="block bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
              >
                <div className="h-64 relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/products/products/gpg.jpg"
                    alt="General Purpose Generators"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    General Purpose Generators
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our general purpose generators are designed for versatility
                    and reliability, providing efficient power solutions for a
                    wide range of applications.
                  </p>
                  <div className="inline-block bg-primary text-white hover:bg-primary/90 font-bold transition-colors duration-300 px-6 py-3 rounded-full">
                    <span className="flex items-center">
                      Explore General Purpose
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
                </div>
              </Link>

              {/* Telecom Generators */}
              <Link
                href="/products/telecom"
                className="block bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
              >
                <div className="h-64 relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/products/products/Telecom/telecom1.png"
                    alt="Telecom Generators"
                    fill
                    style={{ objectFit: "contain" }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Telecom Generators
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our specialized telecom generators ensure uninterrupted
                    power supply for critical telecommunications infrastructure
                    with enhanced reliability features.
                  </p>
                  <div className="inline-block bg-primary text-white hover:bg-primary/90 font-bold transition-colors duration-300 px-6 py-3 rounded-full">
                    <span className="flex items-center">
                      Explore Telecom Solutions
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
                </div>
              </Link>

              {/* Lighting Towers */}
              <Link
                href="/products/lighting-towers"
                className="block bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300"
              >
                <div className="h-64 relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/products/lighting-towers/solar-panel-1.jpg"
                    alt="Lighting Towers"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">
                    Lighting Towers
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Professional trailer-mounted lighting towers combining LED technology with diesel generator or solar-battery power options. Perfect for construction sites, mining operations, events, and emergency applications.
                  </p>
                  <div className="inline-block bg-primary text-white hover:bg-primary/90 font-bold transition-colors duration-300 px-6 py-3 rounded-full">
                    <span className="flex items-center">
                      Explore Lighting Solutions
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
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Our Generators */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Generators
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At RiteWat UK Ltd, we're dedicated to providing top-quality
                power solutions that meet your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-block p-3 bg-orange-100 rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  All our generators are built to exacting standards, ensuring
                  reliable performance for years to come.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-block p-3 bg-orange-100 rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Superior Performance
                </h3>
                <p className="text-gray-600">
                  Our generators deliver consistent power with optimal fuel
                  efficiency and low maintenance requirements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-block p-3 bg-orange-100 rounded-lg mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Expert Support
                </h3>
                <p className="text-gray-600">
                  Our dedicated technical team provides comprehensive support
                  throughout the lifetime of your generator.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
