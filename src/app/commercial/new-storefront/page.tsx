import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../components/ServiceHero'
import FeatureSection from '../../../components/FeatureSection'

export const metadata: Metadata = {
  title: 'New Storefront Installation | Budget Glass',
  description: 'Expert storefront glass installation for new businesses in Richmond. Complete storefront systems, custom designs, and professional installation.',
}

export default function NewStorefront() {
  const features = [
    {
      title: 'Custom Design',
      description: 'Tailored solutions for your business needs.',
    },
    {
      title: 'Expert Installation',
      description: 'Professional team with decades of experience.',
    },
    {
      title: 'Quality Materials',
      description: 'Premium glass and hardware systems.',
    },
    {
      title: 'Project Management',
      description: 'Dedicated support from start to finish.',
    },
  ]

  const services = [
    {
      title: 'Design Consultation',
      description: 'Expert guidance for your project',
      items: [
        'Custom solutions',
        'Material selection',
        'Energy efficiency options',
        'Security features',
      ],
    },
    {
      title: 'Installation',
      description: 'Professional installation service',
      items: [
        'Certified installers',
        'Project management',
        'Timeline adherence',
        'Quality assurance',
      ],
    },
    {
      title: 'Glass Options',
      description: 'Premium glass solutions',
      items: [
        'Tempered glass',
        'Insulated units',
        'Low-E glass',
        'Security glass',
      ],
    },
    {
      title: 'Hardware Systems',
      description: 'Complete door systems',
      items: [
        'Door closers',
        'Panic hardware',
        'ADA compliance',
        'Security locks',
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title="New Storefront Installation"
        description="Transform your business with a custom-designed storefront. Expert installation and premium materials."
        ctaText="Get a Quote"
        ctaLink="/contact"
        secondaryCtaText="View Portfolio"
        secondaryCtaLink="/commercial/portfolio"
        imageSrc="/images/storefront-service.jpg"
        imageAlt="New Storefront Glass Installation"
      />

      <FeatureSection
        title="Why Choose Budget Glass"
        description="Richmond's trusted commercial glass experts since 1987"
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your new storefront project. We'll help you create the perfect entrance for your business.
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