import Image from "next/image";

export default function ProfessionalServices() {
  const services = [
    {
      title: "Generator Supply & Installation",
      description:
        "We provide a wide range of diesel generators from leading manufacturers, with professional installation and commissioning services.",
      icon: "/icons/quality.svg",
    },
    {
      title: "Maintenance & Repair",
      description:
        "Our expert technicians offer comprehensive maintenance and repair services to ensure optimal performance and longevity of your power systems.",
      icon: "/icons/support.svg",
    },
    {
      title: "Power System Design",
      description:
        "We design custom power solutions tailored to your specific requirements, taking into account load capacity, redundancy needs, and space constraints.",
      icon: "/icons/customization.svg",
    },
    {
      title: "Energy Consultation",
      description:
        "Our specialists provide expert advice on energy efficiency, system sizing, and optimal power solutions to meet your operational needs.",
      icon: "/icons/experience.svg",
    },
    {
      title: "Global Logistics",
      description:
        "We handle all aspects of shipping, customs clearance, and delivery, ensuring your equipment reaches you safely and on time.",
      icon: "/icons/logistics.svg",
    },
    {
      title: "International Support",
      description:
        "With our global presence, we offer reliable support and service to clients across Africa, the Middle East, UK, and Europe.",
      icon: "/icons/global.svg",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Professional Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            We offer a comprehensive range of professional services to meet all
            your power generation needs, from supply and installation to ongoing
            maintenance and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary"
            >
              <div className="mb-4 h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
