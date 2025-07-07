import React from "react";
import type { Metadata } from "next";
import ServiceHero from "../../../components/ServiceHero";
import FeatureSection from "../../../components/FeatureSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Storefront Glass & Repair Services | Richmond",
  description:
    "Expert storefront glass installation and 24/7 emergency repair in Richmond. New construction, replacements, and emergency service available.",
};

export default function StorefrontRepair() {
  const features = [
    {
      title: "New Installation",
      description: "Complete storefront systems for new construction.",
    },
    {
      title: "24/7 Emergency Repair",
      description: "Available around the clock for break-ins and emergencies.",
    },
    {
      title: "Same-Day Service",
      description: "Quick response for both repairs and installations.",
    },
    {
      title: "Insurance Approved",
      description: "We work directly with insurance companies for claims.",
    },
  ];

  return (
    <>
      <ServiceHero
        title="Commercial Storefront Glass"
        description="Expert installation for new construction and 24/7 emergency repair service. Richmond's trusted glass experts since 1987."
        ctaText="Get a Quote"
        ctaLink="/contact"
        secondaryCtaText="Emergency Service"
        secondaryCtaLink="tel:+18042311029"
        imageSrc="/images/storefront-service.jpg"
        imageAlt="Commercial Storefront Glass Installation and Repair"
      />

      <FeatureSection
        title="Richmond's Most Trusted Commercial Glass Service"
        description="40+ years serving Richmond's businesses with quality installations and emergency service"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-subtle">
              <h3 className="text-2xl font-bold mb-4">New Storefronts</h3>
              <p className="text-gray-600 mb-6">
                Complete storefront glass systems with expert installation and
                premium materials.
              </p>
              <Link
                href="/commercial/new-storefront"
                className="btn-primary w-full text-center"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-subtle">
              <h3 className="text-2xl font-bold mb-4">Emergency Repair</h3>
              <p className="text-gray-600 mb-6">
                24/7 emergency service for break-ins, accidents, and storm
                damage.
              </p>
              <Link
                href="/commercial/emergency-repair"
                className="btn-primary w-full text-center"
              >
                Emergency Service
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-subtle">
              <h3 className="text-2xl font-bold mb-4">Storefront Service</h3>
              <p className="text-gray-600 mb-6">
                Professional maintenance and repair services for your storefront
                system.
              </p>
              <Link
                href="/commercial/storefront-service"
                className="btn-primary w-full text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Emergency Response Process</h2>
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
                      Call our 24/7 emergency line and we'll dispatch a team
                      right away.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Secure the Site</h3>
                    <p>
                      We'll board up the damaged area to protect your business.
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
                      Fast installation of new glass to get you back to
                      business.
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
                    Document all damage with photos
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Provide detailed estimates
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Work directly with adjusters
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Handle paperwork submission
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
            <h2 className="mb-8">Need Emergency Glass Service?</h2>
            <p className="text-xl mb-8">
              Don't wait - call us now for immediate response. We'll secure your
              business fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+18042311029" className="btn-primary">
                Call Now: (804) 231-1029
              </a>
              <a href="/contact" className="btn-outline">
                Schedule Non-Emergency Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
