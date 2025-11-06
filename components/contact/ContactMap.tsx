import React from "react";

interface ContactMapProps {
  locations?: {
    title: string;
    embedUrl: string;
  }[];
}

const ContactMap: React.FC<ContactMapProps> = ({
  locations = [
    {
      title: "London Office",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19869.077050187505!2d-0.081934!3d51.501572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760344d46163b1%3A0xf374d982d83bb45a!2s63%20Bermondsey%20St%2C%20London%20SE1%203XF%2C%20UK!5e0!3m2!1sen!2sfr!4v1747382408333!5m2!1sen!2sfr",
    },
    {
      title: "Gaborone Office",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.610959448856!2d25.90843367596584!3d-24.760520646989086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebb5b8b5429655d%3A0x14ec6714b70b7a68!2s75448%20Lemmenyane%20Rd%2C%20Gaborone%2C%20Botswana!5e0!3m2!1sen!2sus!4v1684259633068!5m2!1sen!2sus",
    },
  ],
}) => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-secondary">
          Find Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md"
            >
              <h3 className="text-lg font-semibold p-3 bg-primary text-white">
                {location.title}
              </h3>
              <iframe
                src={location.embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11183.028208382902!2d25.94762!3d-24.626164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebb5d315183f06b%3A0xf6c1fb832f985f9d!2sBemcoville!5e1!3m2!1sen!2sus!4v1747382306306!5m2!1sen!2sus"
                width="600"
                height="450"
                // style="border:0;"
                // allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
