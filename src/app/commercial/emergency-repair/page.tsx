import React from "react";
import type { Metadata } from "next";
import ServiceHero from "../../../components/ServiceHero";
import FeatureSection from "../../../components/FeatureSection";

export const metadata: Metadata = {
  title: "24/7 Emergency Glass Repair | Budget Glass",
  description:
    "Emergency glass repair service in Richmond. Available 24/7 for break-ins, accidents, and storm damage. Fast response and professional service.",
};

export default function EmergencyRepair() {
  const features = [
    {
      title: "24/7 Service",
      description: "Available any time, day or night.",
    },
    {
      title: "Fast Response",
      description: "Quick arrival to secure your property.",
    },
    {
      title: "Insurance Help",
      description: "We work with all insurance companies.",
    },
    {
      title: "Board Up Service",
      description: "Immediate property protection.",
    },
  ];

  const services = [
    {
      title: "Break-In Repair",
      description: "Fast security restoration",
      items: [
        "Glass replacement",
        "Lock repair",
        "Security upgrades",
        "Insurance claims",
      ],
    },
    {
      title: "Storm Damage",
      description: "Weather-related repairs",
      items: [
        "Impact damage",
        "Water protection",
        "Temporary solutions",
        "Full replacement",
      ],
    },
    {
      title: "Board Up",
      description: "Immediate protection",
      items: [
        "Quick response",
        "Secure coverage",
        "Weather protection",
        "Theft prevention",
      ],
    },
    {
      title: "Insurance Service",
      description: "Claims assistance",
      items: [
        "Documentation",
        "Direct billing",
        "Claim filing",
        "Adjuster liaison",
      ],
    },
  ];

  return (
    <>
      <ServiceHero
        title="24/7 Emergency Glass Repair"
        description="Fast response when you need it most. Available 24/7 for all emergency glass repairs."
        ctaText="Call Now: (804) 231-1029"
        ctaLink="tel:+18042311029"
        secondaryCtaText="Non-Emergency Service"
        secondaryCtaLink="/contact"
        imageSrc="/images/storefront-service.jpg"
        imageAlt="Emergency Glass Repair Service"
      />

      <FeatureSection
        title="Why Choose Our Emergency Service"
        description="Richmond's trusted emergency glass repair experts"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Our Emergency Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-subtle"
              >
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Emergency Process</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Immediate Response
                    </h3>
                    <p>
                      We'll dispatch a team right away to assess and secure your
                      property.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Property Security
                    </h3>
                    <p>
                      Quick board-up service to protect your property from
                      further damage.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Permanent Solution
                    </h3>
                    <p>
                      Professional glass replacement to get your business back
                      to normal.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Insurance Claims</h3>
                <p className="mb-4">
                  We work directly with insurance companies to handle your claim
                  efficiently. Our team will:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Document all damage
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Provide detailed estimates
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Work with adjusters
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Handle paperwork
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
