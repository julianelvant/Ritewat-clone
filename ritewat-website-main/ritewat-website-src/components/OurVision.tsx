export default function OurVision() {
  return (
    <section
      id="vision"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our Vision
          </h2>
          <div className="w-24 h-1.5 bg-[#FF6B00] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition hover:scale-[1.02] hover:shadow-2xl">
              <div className="h-2 bg-[#FF6B00]"></div>
              <div className="p-8">
                <div className="inline-block p-3 rounded-full bg-orange-100 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FF6B00"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide reliable, efficient, and sustainable power
                  solutions that empower businesses and communities worldwide,
                  ensuring uninterrupted operations and fostering economic
                  growth.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition hover:scale-[1.02] hover:shadow-2xl">
              <div className="h-2 bg-[#FF6B00]"></div>
              <div className="p-8">
                <div className="inline-block p-3 rounded-full bg-orange-100 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#FF6B00"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in innovative energy solutions,
                  recognized for our commitment to quality, sustainability, and
                  customer satisfaction, while driving the transition to cleaner
                  energy alternatives.
                </p>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF8A3D] rounded-xl shadow-xl p-8 md:p-12 mb-16 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">
              Powering a Sustainable Future
            </h3>
            <p className="text-white/90 max-w-3xl mx-auto text-lg">
              We're committed to delivering innovative power solutions while
              reducing environmental impact. Our approach balances reliable
              performance with responsible practices.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Our Core Values
            </h3>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[#FF6B00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-800">
                    Quality Excellence
                  </h4>
                  <p className="text-gray-600">
                    We are committed to delivering products that exceed industry
                    standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[#FF6B00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-800">
                    Customer Focus
                  </h4>
                  <p className="text-gray-600">
                    We prioritize understanding and meeting our customers'
                    unique energy needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[#FF6B00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-800">
                    Integrity
                  </h4>
                  <p className="text-gray-600">
                    We conduct business with honesty, transparency, and ethical
                    practices.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 text-[#FF6B00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-800">
                    Innovation
                  </h4>
                  <p className="text-gray-600">
                    We continuously seek new technologies and solutions to
                    improve energy efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start md:col-span-2">
                <div className="mr-4 mt-1 text-[#FF6B00]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-gray-800">
                    Sustainability
                  </h4>
                  <p className="text-gray-600">
                    We are dedicated to minimizing environmental impact while
                    maximizing performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
