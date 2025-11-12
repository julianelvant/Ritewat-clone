import generalPurposeGenerators from "@/lib/products/general-purpose-generators.json";
import CallToAction from "@/components/products/CallToAction";
import SubHero from "@/components/SubHero";
import ProductListingSection from "@/components/products/ProductListingSection";

export default function GeneralPurposeGenerators() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <SubHero
          title="General Purpose Generators"
          description="Reliable power solutions designed for versatility and performance across a wide range of applications."
        />

        {/* Product Listing Section */}
        <ProductListingSection
          title="Our Generator Range"
          description="Explore our selection of high-quality general purpose generators suitable for various power needs."
          generators={generalPurposeGenerators}
        />

        {/* Call to Action */}
        <CallToAction />
      </main>
    </div>
  );
}
