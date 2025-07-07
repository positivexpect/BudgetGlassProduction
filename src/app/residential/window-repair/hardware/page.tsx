import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../../components/ServiceHero'
import FeatureSection from '../../../../components/FeatureSection'

export const metadata: Metadata = {
  title: 'Window Hardware Repair & Replacement | Budget Glass',
  description: 'Expert window hardware repair in Richmond. Fix locks, handles, balances, and more. Same-day service available for most repairs.',
}

export default function WindowHardware() {
  const features = [
    {
      title: 'Expert Service',
      description: 'Professional hardware repair technicians.',
    },
    {
      title: 'Quality Parts',
      description: 'Premium replacement hardware.',
    },
    {
      title: 'Fast Repairs',
      description: 'Same-day service available.',
    },
    {
      title: 'All Window Types',
      description: 'Solutions for any window style.',
    },
  ]

  const services = [
    {
      title: 'Lock Repair',
      description: 'Restore security',
      items: [
        'Lock replacement',
        'Mechanism repair',
        'Security upgrades',
        'Child safety',
      ],
    },
    {
      title: 'Handle Service',
      description: 'Smooth operation',
      items: [
        'Handle replacement',
        'Crank repair',
        'Operator service',
        'Style options',
      ],
    },
    {
      title: 'Balance Systems',
      description: 'Easy window movement',
      items: [
        'Balance replacement',
        'Spring repair',
        'Cord service',
        'Weight systems',
      ],
    },
    {
      title: 'Weatherization',
      description: 'Improve efficiency',
      items: [
        'Weatherstripping',
        'Sweep replacement',
        'Draft prevention',
        'Seal installation',
      ],
    },
  ]

  const windowTypes = [
    {
      title: 'Double-Hung',
      repairs: [
        'Balance systems',
        'Tilt latches',
        'Sash locks',
        'Weatherstripping',
      ],
    },
    {
      title: 'Casement',
      repairs: [
        'Operators',
        'Hinges',
        'Multi-point locks',
        'Handle sets',
      ],
    },
    {
      title: 'Sliding',
      repairs: [
        'Rollers',
        'Tracks',
        'Locks',
        'Weatherseals',
      ],
    },
    {
      title: 'Awning',
      repairs: [
        'Operators',
        'Hinges',
        'Support arms',
        'Handles',
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title="Window Hardware Repair"
        description="Expert repair for all window hardware. Restore smooth operation and security."
        ctaText="Schedule Service"
        ctaLink="/schedule-appointment"
        secondaryCtaText="Call Now: (804) 231-1029"
        secondaryCtaLink="tel:+18042311029"
      />

      <FeatureSection
        title="Why Choose Our Hardware Service"
        description="Richmond's trusted window hardware experts"
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Window Types</h2>
              <div className="grid gap-6">
                {windowTypes.map((type, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                    <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                    <ul className="space-y-2">
                      {type.repairs.map((repair, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-primary mr-2">✓</span>
                          {repair}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Common Problems</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Difficult Operation</h4>
                    <p className="text-sm text-gray-600">Windows that are hard to open or close often have balance or roller issues.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Security Concerns</h4>
                    <p className="text-sm text-gray-600">Broken locks and handles compromise your home's security.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Drafts & Leaks</h4>
                    <p className="text-sm text-gray-600">Failed weatherstripping leads to energy loss and water infiltration.</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Safety Issues</h4>
                    <p className="text-sm text-gray-600">Malfunctioning hardware can create safety hazards, especially in bedrooms.</p>
                  </div>
                </div>
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
  )
} 