import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductsCTA from "@/components/ProductsCTA";
import ProfessionalServices from "@/components/ProfessionalServices";
import ProjectCTA from "@/components/ProjectCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <AboutUs />
        <WhyChooseUs />
        <ProductsCTA />
        <ProjectCTA />
      </main>
    </div>
  );
}
