import React from "react";
import SocialLinks from "./SocialLinks";

interface ContactInfoProps {
  addresses: string[];
  phone: string;
  email: string;
  businessHours: {
    weekday: string;
    friday: string;
  };
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  addresses,
  phone,
  email,
  businessHours,
}) => {
  return (
    <div className="bg-gray-50 px-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-secondary border-b-2 border-primary pb-2">
        Get In Touch
      </h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-primary p-3 rounded-full mr-4">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary">Address</h3>
            {addresses.map((address, index) => (
              <p key={index} className="text-gray-600 mb-2">
                {address}
              </p>
            ))}
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary p-3 rounded-full mr-4">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary">Phone</h3>
            <p className="text-gray-600">{phone}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary p-3 rounded-full mr-4">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary">Email</h3>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary p-3 rounded-full mr-4">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-secondary">
              Business Hours
            </h3>
            <p className="text-gray-600">{businessHours.weekday}</p>
            <p className="text-gray-600">{businessHours.friday}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-secondary">
          Connect With Us
        </h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default ContactInfo;
