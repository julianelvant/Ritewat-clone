export default function WhatWeAreAbout() {
  const items = [
    {
      title: "Our Commitment",
      description:
        "We are committed to excellence in power solutions, understanding that reliable energy is essential for businesses, communities, and economic growth. Our dedication extends beyond simply supplying generators to providing tailored solutions for each customer's unique needs.",
    },
    {
      title: "Our Approach",
      description:
        "We take a consultative approach, working closely with clients to understand their specific requirements and challenges. This collaboration ensures we recommend the most appropriate solutions while providing ongoing technical support and maintenance guidance.",
    },
    {
      title: "Our Impact",
      description:
        "Our success is measured by the positive impact our solutions have on keeping businesses operational, supporting critical facilities, providing power to remote locations, and ensuring events run smoothly without disruption.",
    },
  ];

  return (
    <section id="what-we-are-about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What We Are About
          <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        </h2>

        {/* Main Content - Horizontal Layout */}
        <div className="flex flex-col space-y-16 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Column - Title */}
              <div className="md:w-1/3">
                <div className="bg-primary/5 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-primary"></div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="md:w-2/3 flex items-center">
                <div className="bg-white border-l-4 border-primary pl-6 py-2">
                  <p className="text-gray-700 text-lg">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gray-50 py-10 px-8 rounded-lg">
            <p className="text-gray-700 text-lg mb-6">
              At RiteWat UK Ltd, we're dedicated to ensuring your operations
              never stop due to power disruptions. Our generator solutions are
              designed to meet your specific needs with reliability and
              efficiency.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded transition-colors">
              Explore Our Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
