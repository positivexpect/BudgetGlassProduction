import React from "react";
import type { Metadata } from "next";
import ServiceHero from "../../../components/ServiceHero";
import FeatureSection from "../../../components/FeatureSection";

export const metadata: Metadata = {
  title: "Commercial Storefront Service | Budget Glass",
  description:
    "Expert storefront maintenance and repair services in Richmond. Keep your storefront looking great and functioning properly.",
};

export default function StorefrontService() {
  const features = [
    {
      title: "Expert Service",
      description: "Experienced technicians for all repairs.",
    },
    {
      title: "Fast Response",
      description: "Quick service to minimize disruption.",
    },
    {
      title: "Quality Parts",
      description: "Premium replacement components.",
    },
    {
      title: "Preventive Care",
      description: "Maintenance to prevent issues.",
    },
  ];

  const services = [
    {
      title: "Door Service",
      description: "Complete door maintenance",
      items: [
        "Closer adjustment",
        "Hinge repair",
        "Lock service",
        "Weather seals",
      ],
    },
    {
      title: "Glass Service",
      description: "Glass maintenance & repair",
      items: [
        "Glass cleaning",
        "Seal repair",
        "Scratch removal",
        "Panel replacement",
      ],
    },
    {
      title: "Hardware",
      description: "Hardware maintenance",
      items: [
        "Lock repair",
        "Handle service",
        "Pivot repair",
        "Security upgrades",
      ],
    },
    {
      title: "Maintenance",
      description: "Preventive care",
      items: [
        "Regular inspection",
        "Lubrication",
        "Adjustment",
        "Weather protection",
      ],
    },
  ];

  return (
    <>
      <ServiceHero
        title="Storefront Service & Maintenance"
        description="Keep your storefront in perfect condition with our expert maintenance and repair services."
        ctaText="Schedule Service"
        ctaLink="/contact"
        secondaryCtaText="Emergency Service"
        secondaryCtaLink="/commercial/emergency-repair"
        imageSrc="/images/storefront-service.jpg"
        imageAlt="Storefront Glass Service"
      />

      <FeatureSection
        title="Why Choose Our Service"
        description="Richmond's trusted storefront maintenance experts"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Our Services</h2>
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
              <h2 className="mb-6">Maintenance Benefits</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Extended Lifespan
                    </h3>
                    <p>
                      Regular maintenance extends the life of your storefront
                      system.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Prevent Issues</h3>
                    <p>
                      Catch and fix small problems before they become major
                      repairs.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Save Money</h3>
                    <p>
                      Regular maintenance is more cost-effective than emergency
                      repairs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Maintenance Plans</h3>
                <p className="mb-4">
                  Keep your storefront in top condition with our maintenance
                  plans:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Regular inspections
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Preventive maintenance
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Priority service
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Discounted repairs
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
