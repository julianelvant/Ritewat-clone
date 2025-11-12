"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/hero-bg.jpg"
          alt="RiteWat Energy Solutions"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.75,
          }}
          priority
          className="filter brightness-75"
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/logos/dark_logo.png"
            alt="RiteWat Energy Solutions"
            width={400}
            height={120}
            className="mx-auto"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          // className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Reliable Power Solutions for Your Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
        >
          Providing high-quality diesel generators and energy solutions tailored
          to your needs
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/contact"
            className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:scale-105"
          >
            Contact Us
          </a>
          <a
            href="/products"
            className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full transition-all hover:shadow-lg hover:scale-105"
          >
            Our Products
          </a>
        </motion.div>
      </div>
    </section>
  );
}
