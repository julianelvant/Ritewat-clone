import Image from "next/image";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Industrial Diesel Generator",
      image: "/products/generator.jpg",
      description:
        "High-performance industrial diesel generator suitable for factories, hospitals, and large commercial buildings.",
    },
    {
      id: 2,
      name: "Portable Diesel Generator",
      image: "/products/generator2.jpg",
      description:
        "Compact and portable diesel generator perfect for construction sites, events, and emergency backup power.",
    },
    {
      id: 3,
      name: "Standby Power Generator",
      image: "/products/generator3.jpg",
      description:
        "Reliable standby power generator designed for seamless power transition during outages for critical operations.",
    },
    {
      id: 4,
      name: "Silent Diesel Generator",
      image: "/products/generator4.jpg",
      description:
        "Low-noise diesel generator with acoustic enclosure, ideal for residential areas and noise-sensitive environments.",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Discover our range of high-quality diesel generators and power
            solutions designed to meet your specific energy needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={`/products/${product.id}`}
                  className="text-primary font-bold hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/products"
            className="inline-block bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
