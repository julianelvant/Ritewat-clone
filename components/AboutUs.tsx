import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
            About Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src="/about-us.jpg"
              alt="About RiteWat Energy Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Your Trusted Energy Partner
            </h3>
            <p className="text-gray-700 mb-4">
              RiteWat UK Ltd is a dynamic and forward-thinking company
              specializing in the supply of high-quality diesel generators and
              Energy Solutions. Established in the United Kingdom, we leverage
              our extensive industry expertise and global sourcing capabilities
              to provide reliable power solutions tailored to the needs of
              businesses and industries worldwide.
            </p>
            <p className="text-gray-700 mb-6">
              With over 25 years of experience in the power generation sector,
              we meticulously select manufacturers that adhere to strict quality
              control standards, ensuring that every product meets international
              reliability and durability benchmarks.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
