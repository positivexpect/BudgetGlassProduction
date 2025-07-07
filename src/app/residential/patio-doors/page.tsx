import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../components/ServiceHero'
import FeatureSection from '../../../components/FeatureSection'

export const metadata: Metadata = {
  title: 'Patio Door Repair & Replacement | Budget Glass',
  description: 'Expert patio door repair and replacement in Richmond. Sliding glass door repair, roller replacement, and track repair. Same-day service available.',
}

export default function PatioDoors() {
  const features = [
    {
      title: 'Expert Repair',
      description: 'Fix sticking doors, broken rollers, and track issues.',
    },
    {
      title: 'Same-Day Service',
      description: 'Quick repairs to restore your door function.',
    },
    {
      title: 'Quality Parts',
      description: 'Premium replacement parts and hardware.',
    },
    {
      title: 'Energy Efficient',
      description: 'Improve insulation with weatherstripping and seals.',
    },
  ]

  const services = [
    {
      title: 'Roller Repair',
      description: 'Smooth sliding operation',
      items: [
        'Roller replacement',
        'Track cleaning',
        'Alignment adjustment',
        'Lubrication service',
      ],
    },
    {
      title: 'Glass Repair',
      description: 'Clear views restored',
      items: [
        'Foggy glass repair',
        'Impact damage',
        'Seal replacement',
        'Security film',
      ],
    },
    {
      title: 'Track Service',
      description: 'Smooth operation',
      items: [
        'Track repair',
        'Deep cleaning',
        'Anti-jump repair',
        'Track replacement',
      ],
    },
    {
      title: 'Lock & Handle',
      description: 'Security restored',
      items: [
        'Lock repair',
        'Handle replacement',
        'Security upgrades',
        'Child safety',
      ],
    },
  ]

  const doorTypes = [
    {
      title: 'Sliding Glass',
      description: 'Classic sliding patio doors',
      features: [
        'Space-saving design',
        'Large glass panels',
        'Smooth operation',
        'Screen options',
      ],
    },
    {
      title: 'French Doors',
      description: 'Traditional swing doors',
      features: [
        'Elegant appearance',
        'Wide opening',
        'Multiple styles',
        'Energy efficient',
      ],
    },
    {
      title: 'Multi-Panel',
      description: 'Modern sliding walls',
      features: [
        'Large openings',
        'Indoor/outdoor living',
        'Custom configurations',
        'Premium operation',
      ],
    },
    {
      title: 'Bifold Doors',
      description: 'Folding glass walls',
      features: [
        'Full wall opening',
        'Unique design',
        'Space efficient',
        'Weather resistant',
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title="Patio Door Repair & Replacement"
        description="Expert repair for sliding glass doors and French doors. Fast service and quality parts."
        ctaText="Schedule Service"
        ctaLink="/schedule-appointment"
        secondaryCtaText="View Door Types"
        secondaryCtaLink="#door-types"
      />

      <FeatureSection
        title="Richmond's Patio Door Experts"
        description="Fast, professional service for all patio door types"
        features={features}
        columns={4}
      />

      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-12">Repair Services</h2>
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

      <section id="door-types" className="py-20 bg-neutral-lightest">
        <div className="container">
          <h2 className="text-center mb-12">Door Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doorTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Common Door Problems</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Hard to Open/Close</h3>
                  <p className="text-gray-600">Usually caused by worn rollers or dirty tracks. We'll clean, repair, or replace components for smooth operation.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Foggy Glass</h3>
                  <p className="text-gray-600">Failed seals let moisture between glass panes. We'll replace the glass unit to restore clear views.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Security Issues</h3>
                  <p className="text-gray-600">Broken locks or handles compromise security. We'll upgrade hardware to protect your home.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Air Leaks</h3>
                  <p className="text-gray-600">Worn weatherstripping causes drafts and energy loss. We'll replace seals to improve efficiency.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Maintenance Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Clean tracks monthly
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Lubricate rollers
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Check weatherstripping
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Test locks regularly
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Inspect glass seals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Ready to Fix That Door?</h2>
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
  )
} 