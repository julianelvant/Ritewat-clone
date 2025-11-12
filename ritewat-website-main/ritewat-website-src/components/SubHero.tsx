import React from "react";

interface SubHeroProps {
  title: string;
  description: string;
}

export default function SubHero({ title, description }: SubHeroProps) {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  );
}
