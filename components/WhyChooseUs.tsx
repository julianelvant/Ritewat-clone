import Image from "next/image";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "/icons/quality.svg",
      title: "Wide Product Range",
      description:
        "Access a broad selection of high-quality diesel generators to suit various power needs and applications.",
    },
    {
      icon: "/icons/money.svg",
      title: "Competitive Pricing",
      description:
        "We offer cost-effective energy solutions without compromising on quality or reliability.",
    },
    {
      icon: "/icons/logistics.svg",
      title: "Reliable Supply Chain",
      description:
        "Benefit from a strategic and efficient warehousing and distribution network for smooth deliveries.",
    },
    {
      icon: "/icons/support.svg",
      title: "Exceptional Support",
      description:
        "Our dedicated team provides outstanding customer service and technical assistance every step of the way.",
    },
    {
      icon: "/icons/handshake.svg",
      title: "Strong Partnerships",
      description:
        "We collaborate with leading manufacturers and distributors to deliver trusted and durable solutions.",
    },
    {
      icon: "/icons/experience.svg",
      title: "25+ Years of Expertise",
      description:
        "Leverage our extensive industry knowledge to ensure reliable and high-performance power solutions.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            We are committed to providing reliable, efficient, and
            cost-effective power solutions that keep your business running
            smoothly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary p-3 rounded-full mr-4">
                  <div className="w-8 h-8 relative">
                    <Image
                      src={reason.icon}
                      alt={reason.title}
                      width={32}
                      height={32}
                      className="text-white"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{reason.title}</h3>
              </div>
              <p className="text-gray-600 ml-16">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-[#FF8C33] text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
