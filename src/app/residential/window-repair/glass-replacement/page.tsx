import React from "react";
import type { Metadata } from "next";
import ServiceHero from "../../../../components/ServiceHero";
import FeatureSection from "../../../../components/FeatureSection";

export const metadata: Metadata = {
  title: "Window Glass Replacement in Richmond | Budget Glass",
  description:
    "Expert window glass replacement in Richmond. Emergency service available. All types of glass, including safety glass and energy-efficient options.",
};

export default function GlassReplacement() {
  const features = [
    {
      title: "Fast Service",
      description: "Emergency service available 24/7.",
    },
    {
      title: "All Glass Types",
      description: "Custom solutions for any window.",
    },
    {
      title: "Safety Glass",
      description: "Tempered and laminated options.",
    },
    {
      title: "Expert Install",
      description: "Professional installation.",
    },
  ];

  const glassTypes = [
    {
      title: "Single Pane",
      description: "Basic window glass",
      options: [
        "Clear glass",
        "Tempered safety",
        "Custom thickness",
        "Quick installation",
      ],
    },
    {
      title: "Double Pane",
      description: "Energy efficient units",
      options: [
        "Insulated glass",
        "Low-E coating",
        "Argon gas fill",
        "Warm edge spacer",
      ],
    },
    {
      title: "Safety Glass",
      description: "Enhanced protection",
      options: [
        "Tempered glass",
        "Laminated glass",
        "Impact resistant",
        "Code compliant",
      ],
    },
    {
      title: "Specialty Glass",
      description: "Custom solutions",
      options: [
        "Obscure patterns",
        "Tinted options",
        "UV protection",
        "Custom shapes",
      ],
    },
  ];

  return (
    <>
      <ServiceHero
        title="Window Glass Replacement"
        description="Fast, professional glass replacement for any window type. Emergency service available."
        ctaText="Schedule Service"
        ctaLink="/contact"
        secondaryCtaText="Emergency Service: (804) 231-1029"
        secondaryCtaLink="tel:+18042311029"
      />

      <FeatureSection
        title="Why Choose Our Glass Replacement"
        description="Richmond's trusted glass replacement experts"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Glass Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {glassTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-subtle"
              >
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.options.map((option, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {option}
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
              <h2 className="mb-6">Our Process</h2>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Assessment</h3>
                    <p>Evaluate damage and measure for replacement glass.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Glass Selection</h3>
                    <p>Choose the right glass type for your needs.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Preparation</h3>
                    <p>Safe removal of broken glass and frame cleaning.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Installation</h3>
                    <p>Professional installation and weatherproofing.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                <p className="mb-4">
                  Available 24/7 for broken window emergencies:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Fast response time
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Temporary board-up
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Safety assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Quick replacement
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Insurance assistance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Need Glass Replacement?</h2>
            <p className="text-xl mb-8">
              Schedule service today or call now for emergency assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/schedule-appointment" className="btn-primary">
                Schedule Service
              </a>
              <a href="tel:+18042311029" className="btn-outline">
                Emergency: (804) 231-1029
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
