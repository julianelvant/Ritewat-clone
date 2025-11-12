import WhoWeAre from "@/components/WhoWeAre";
import OurProfile from "@/components/OurProfile";
import OurVision from "@/components/OurVision";
import WhatWeAreAbout from "@/components/WhatWeAreAbout";
import SubHero from "@/components/SubHero";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <main>
        <SubHero
          title="About Us"
          description="Learn more about RiteWat UK Ltd, our mission, values, and what drives us to deliver excellence in energy solutions."
        />
        <WhoWeAre />
        <OurProfile />
        <OurVision />
        <WhatWeAreAbout />
      </main>
    </div>
  );
}
