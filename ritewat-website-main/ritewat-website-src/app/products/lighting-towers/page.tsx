import lightingTowers from "@/lib/products/lighting-towers.json";
import CallToAction from "@/components/products/CallToAction";
import SubHero from "@/components/SubHero";
import ProductListingSection from "@/components/products/ProductListingSection";

export default function LightingTowers() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <SubHero
          title="Lighting Towers"
          description="Robust trailer-mounted lighting towers combining high-efficiency LED optics with diesel generator or solar-battery power options for construction, mining, events and emergency sites."
        />

        {/* Product Listing Section */}
        <ProductListingSection
          title="Our Lighting Tower Range"
          description="Professional trailer-mounted lighting solutions featuring rapid deployment, full-site coverage with 360° rotation, and resilient design rated for 100 km/h winds. Choose from diesel-powered or zero-emission solar-battery systems."
          generators={lightingTowers}
        />

        {/* Call to Action */}
        <CallToAction
          title="Need Professional Lighting Solutions?"
          description="Our lighting towers provide efficient, reliable illumination for your projects. Contact us for expert consultation and customized solutions."
        />
      </main>
    </div>
  );
}
