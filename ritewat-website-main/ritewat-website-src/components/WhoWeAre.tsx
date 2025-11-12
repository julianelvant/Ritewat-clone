"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="who-we-are" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6B00] to-[#FF9D4D] mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            A trusted supplier of premium power solutions with over 25 years of
            expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            // className="col-span-1 lg:col-span-2 order-2 lg:order-1"
            className="col-span-3"
          >
            <div className="bg-gray-100 p-8 rounded-xl shadow-md h-full flex flex-col justify-center border-l-4 border-[#FF6B00]">
              <h3 className="text-2xl font-semibold mb-6 text-[#FF6B00]">
                Our Story
              </h3>
              <p className="mb-6 text-gray-700">
                RiteWat UK Ltd is a dynamic and forward-thinking company
                specializing in the supply of high-quality diesel generators and
                Energy Solutions. Established in the United Kingdom, we leverage
                our extensive industry expertise and global sourcing
                capabilities to provide reliable power solutions tailored to the
                needs of businesses and industries worldwide.
              </p>
              <p className="mb-6 text-gray-700">
                We operate as a trusted supplier, sourcing premium diesel
                generators from leading manufacturers in the UK and China. With
                over 25 years of experience in the power generation sector, we
                meticulously select manufacturers that adhere to strict quality
                control standards, ensuring that every product meets
                international reliability and durability benchmarks.
              </p>
              <p className="text-gray-700">
                Through rigorous inspection processes and strong relationships
                with our manufacturing partners, we guarantee that our clients
                receive only high-quality, long-lasting power solutions.
              </p>
            </div>
          </motion.div>

          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
            className="col-span-1 order-1 lg:order-2"
          >
            <div className="relative h-64 md:h-80 lg:h-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/who-we-are.jpg"
                alt="RiteWat Team"
                fill
                style={{ objectFit: "cover" }}
                className="hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div> */}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          variants={fadeIn}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-[#FF6B00] p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Global Reach</h3>
            </div>
            <p className="text-gray-600 ml-16">
              Our commitment to excellence allows us to serve customers across
              Africa, the Middle East, UK and Europe, helping them meet their
              energy demands with confidence.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-[#FF6B00] p-3 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Reliable Supply Chain
              </h3>
            </div>
            <p className="text-gray-600 ml-16">
              Through a well-structured supply chain, we ensure seamless
              logistics and efficient distribution, delivering cost-effective
              and dependable power solutions to our clients.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
