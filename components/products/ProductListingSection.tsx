import GeneratorCard from "./GeneratorCard";

interface Generator {
  name: string;
  powerOutput: string;
  powerType: string;
  frequency: string;
  type: string;
  images: string[];
  description: string;
}

interface ProductListingSectionProps {
  title: string;
  description: string;
  generators: Generator[];
}

export default function ProductListingSection({
  title,
  description,
  generators,
}: ProductListingSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">{description}</p>
          </div>

          {/* Generator Cards - Vertical Layout */}
          <div className="space-y-16">
            {generators.map((generator) => (
              <GeneratorCard key={generator.name} generator={generator} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
