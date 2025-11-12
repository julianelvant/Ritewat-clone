import Link from "next/link";

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CallToAction({
  title = "Need a Custom Power Solution?",
  description = "Our team of experts can help you identify the perfect generator for your specific requirements.",
  primaryButtonText = "Contact Our Team",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Explore Other Products",
  secondaryButtonLink = "/products",
}: CallToActionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">{description}</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href={primaryButtonLink}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonLink}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors"
          >
            {secondaryButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
