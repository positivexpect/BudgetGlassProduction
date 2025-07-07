import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../components/ServiceHero'
import FeatureSection from '../../../components/FeatureSection'

export const metadata: Metadata = {
  title: 'Commercial Glass for New Construction | Budget Glass Company',
  description: 'Complete commercial glass solutions for new construction projects in Richmond. Expert installation of storefronts, curtain walls, and architectural glass.',
}

export default function NewConstruction() {
  const features = [
    {
      title: 'Full-Service Solutions',
      description: 'From design consultation to final installation, we handle every aspect of your commercial glass needs.',
    },
    {
      title: 'Code Compliant',
      description: 'All installations meet or exceed local building codes and safety standards.',
    },
    {
      title: 'Energy Efficient',
      description: 'Modern glass solutions that help reduce energy costs and improve building performance.',
    },
    {
      title: 'Project Management',
      description: 'Dedicated project managers to ensure smooth coordination and timely completion.',
    },
  ]

  const services = [
    {
      title: 'Storefront Systems',
      description: 'Complete storefront framing and glass installation',
      details: ['Single/double doors', 'ADA compliance', 'Multiple finish options'],
    },
    {
      title: 'Curtain Walls',
      description: 'Modern curtain wall systems for multi-story buildings',
      details: ['Pressure plate', 'Structural glazing', 'Sun shading options'],
    },
    {
      title: 'Entry Systems',
      description: 'Commercial entrance systems and door packages',
      details: ['Manual/automatic', 'Security integration', 'Access control'],
    },
    {
      title: 'Specialty Glass',
      description: 'Custom architectural and decorative glass solutions',
      details: ['Spandrel glass', 'Pattern/textured', 'Custom colors'],
    },
  ]

  return (
    <>
      <ServiceHero
        title="Commercial Glass for New Construction"
        description="Complete glass solutions for your commercial construction project. Expert consultation, installation, and project management."
        ctaText="Request a Quote"
        ctaLink="/contact"
        secondaryCtaText="View Portfolio"
        secondaryCtaLink="/commercial/portfolio"
      />

      <FeatureSection
        title="Why Choose Budget Glass"
        description="40 years of commercial glass expertise in Richmond and surrounding areas"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {detail}
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
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                    <p>Review plans, discuss requirements, and provide expert recommendations.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Detailed Proposal</h3>
                    <p>Comprehensive quote with timeline, materials, and specifications.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Project Execution</h3>
                    <p>Professional installation with dedicated project management.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                    <p>Final inspection and warranty documentation.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Project Types</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Office Buildings
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Retail Centers
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Medical Facilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Educational Institutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Government Buildings
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Mixed-Use Developments
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
            <h2 className="mb-8">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your commercial glass needs. We'll help you choose the perfect solution for your building.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Request a Quote
              </a>
              <a href="/commercial/portfolio" className="btn-outline">
                View Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 