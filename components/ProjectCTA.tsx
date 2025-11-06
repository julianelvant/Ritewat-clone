import Link from "next/link";

export default function ProjectCTA() {
  return (
    <section id="project-cta" className="py-20 bg-white text-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-10 text-gray-800">
            Contact us today to discuss your power needs and discover how our
            diesel generators and energy solutions can help your business or
            community thrive.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Get a Consultation
              </h3>
              <p className="mb-6">
                Our experts are ready to provide a free consultation to
                understand your requirements and recommend the right power
                solutions for your needs.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-[#FF8C33] text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Request a Consultation
              </Link>
            </div>

            <div className="p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Get a Quote
              </h3>
              <p className="mb-6">
                Ready to move forward? Contact us for a detailed quote on our
                generators and services tailored to your specific requirements.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-[#FF8C33] text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-lg mb-4">
              Have questions or need immediate assistance?
            </p>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <p className="font-semibold text-primary">Call Us</p>
                <p>+44 774 617 6656</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-primary">Email Us</p>
                <p>enquiries@ritewat.uk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
