import telecomGenerators from "@/lib/products/telecom-generators.json";
import CallToAction from "@/components/products/CallToAction";
import SubHero from "@/components/SubHero";
import ProductListingSection from "@/components/products/ProductListingSection";

export default function TelecomGenerators() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <SubHero
          title="Telecom Generators"
          description="Specialized power solutions designed for critical telecommunications infrastructure."
        />

        {/* Product Listing Section */}
        <ProductListingSection
          title="Our Telecom Generator Range"
          description="Explore our selection of reliable generators designed specifically for telecommunications applications."
          generators={telecomGenerators}
        />

        {/* Call to Action */}
        <CallToAction
          title="Need a Specialized Telecom Power Solution?"
          description="Our team of experts can help you identify the perfect generator for your telecom infrastructure requirements."
        />
      </main>
    </div>
  );
}
