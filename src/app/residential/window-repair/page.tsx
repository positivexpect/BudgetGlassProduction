import React from "react";
import type { Metadata } from "next";
import ServiceHero from "../../../components/ServiceHero";
import FeatureSection from "../../../components/FeatureSection";

export const metadata: Metadata = {
  title: "Window Repair & Glass Replacement | Budget Glass",
  description:
    "Save up to 90% vs. full window replacement. Expert window repair and glass replacement in Richmond. Same-day service available.",
};

export default function WindowRepair() {
  const features = [
    {
      title: "Save Money",
      description: "Up to 90% savings vs. full window replacement.",
    },
    {
      title: "Same-Day Service",
      description: "Quick response for urgent repairs.",
    },
    {
      title: "Expert Installation",
      description: "Certified technicians with decades of experience.",
    },
    {
      title: "Warranty Backed",
      description: "All repairs backed by our satisfaction guarantee.",
    },
  ];

  const services = [
    {
      title: "Foggy Window Repair",
      description: "Fix cloudy double-pane windows",
      link: "/residential/window-repair/fogged-window-repair",
      features: [
        "Clear views restored",
        "Energy efficiency improved",
        "Same-day service",
        "Save up to 90% vs replacement",
      ],
    },
    {
      title: "Insulated Glass Units",
      description: "Replace failed sealed units",
      link: "/residential/window-repair/insulated-glass-units",
      features: [
        "Custom fabrication",
        "Energy efficient options",
        "Quick turnaround",
        "Professional installation",
      ],
    },
    {
      title: "Glass Replacement",
      description: "Replace broken window glass",
      link: "/residential/window-repair/glass-replacement",
      features: [
        "Emergency service",
        "All glass types",
        "Safety glass options",
        "Perfect fit guaranteed",
      ],
    },
    {
      title: "Hardware Repair",
      description: "Fix window operation issues",
      link: "/residential/window-repair/hardware",
      features: [
        "Lock repair",
        "Handle replacement",
        "Balance service",
        "Weatherstripping",
      ],
    },
  ];

  return (
    <>
      <ServiceHero
        title="Window Repair & Glass Replacement"
        description="Save up to 90% by replacing just the glass, not the entire window. Expert service with same-day availability."
        ctaText="Schedule Service"
        ctaLink="/contact"
        secondaryCtaText="Get a Quote"
        secondaryCtaLink="/contact"
        imageSrc="/images/window-repair.jpg"
        imageAlt="Professional Window Repair Service"
      />

      <FeatureSection
        title="Why Choose Our Window Repair Service"
        description="Richmond's trusted experts in window repair and glass replacement"
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
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  className="btn-primary w-full text-center"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Common Window Problems</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Foggy Glass</h3>
                  <p className="text-gray-600">
                    Moisture between panes due to failed seals. We can restore
                    clear views without full window replacement.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Failed Seals</h3>
                  <p className="text-gray-600">
                    Loss of energy efficiency and comfort. Our IGU replacement
                    restores proper insulation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Broken Glass</h3>
                  <p className="text-gray-600">
                    Cracked or shattered panes. Fast replacement with safety
                    glass options available.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Operation Issues</h3>
                  <p className="text-gray-600">
                    Difficult to open/close windows. We repair or replace
                    hardware for smooth operation.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">
                  Why Repair vs Replace?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Save up to 90% vs new windows
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Faster solution
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Keep existing frames
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Restore energy efficiency
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Same-day service available
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
            <h2 className="mb-8">Ready to Fix Those Windows?</h2>
            <p className="text-xl mb-8">
              Schedule service today. Most repairs can be completed same-day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/schedule-appointment" className="btn-primary">
                Schedule Service
              </a>
              <a href="tel:+18042311029" className="btn-outline">
                Call: (804) 231-1029
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
