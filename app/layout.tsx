import type { Metadata } from "next";
import { montserrat } from "@/lib/fonts";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RiteWat Energy Solutions | High-Quality Diesel Generators",
  description:
    "RiteWat UK Ltd is a dynamic company specializing in the supply of high-quality diesel generators and energy solutions for businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
