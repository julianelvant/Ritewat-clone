import { Metadata } from "next";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import SubHero from "@/components/SubHero";

export const metadata: Metadata = {
  title: "Contact Us | RiteWat Energy Solutions",
  description:
    "Get in touch with RiteWat UK Ltd for high-quality diesel generators and energy solutions. We're here to answer your questions and provide support.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <main>
        <SubHero
          title="Contact Us"
          description="Let's discuss how RiteWat Energy Solutions can power your business. We're here to answer your questions and provide support."
        />

        {/* Contact Information & Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <ContactInfo
                addresses={[
                  "63 Bermondsey Street, London SE13 XF, United Kingdom",
                  "75448 Lemmenyane Road, Broadhurst - Gaborone, Botswana",
                ]}
                phone="+44 774 617 6656"
                email="enquiries@ritewat.uk"
                businessHours={{
                  weekday: "Monday - Thursday: 8:00 AM to 4:30 PM",
                  friday: "Friday: 8:00 AM to 1:30 PM",
                }}
              />
              <ContactForm />
            </div>
          </div>
        </section>

        <ContactMap />
      </main>
    </div>
  );
}
