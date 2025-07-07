import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../../components/ServiceHero'
import FeatureSection from '../../../../components/FeatureSection'

export const metadata: Metadata = {
  title: 'Shower Door Repair Services | Budget Glass',
  description: 'Expert shower door repair in Richmond. Fix broken hardware, leaks, alignment issues, and more. Same-day service available.',
}

export default function ShowerDoorRepair() {
  const features = [
    {
      title: 'Fast Service',
      description: 'Same-day repairs for most issues.',
    },
    {
      title: 'Quality Parts',
      description: 'Premium replacement hardware.',
    },
    {
      title: 'Expert Repairs',
      description: 'Experienced repair technicians.',
    },
    {
      title: 'Warranty Coverage',
      description: '1-year warranty on repairs.',
    },
  ]

  const services = [
    {
      title: 'Hardware Repair',
      description: 'Fix or replace broken parts',
      items: [
        'Handle replacement',
        'Hinge repair',
        'Roller service',
        'Lock repair',
      ],
    },
    {
      title: 'Leak Repair',
      description: 'Stop water damage',
      items: [
        'Seal replacement',
        'Sweep installation',
        'Caulk renewal',
        'Glass alignment',
      ],
    },
    {
      title: 'Glass Issues',
      description: 'Glass repair solutions',
      items: [
        'Chip repair',
        'Crack assessment',
        'Panel replacement',
        'Safety upgrades',
      ],
    },
    {
      title: 'Maintenance',
      description: 'Preventive care',
      items: [
        'Track cleaning',
        'Hardware tightening',
        'Seal inspection',
        'Adjustment service',
      ],
    },
  ]

  const commonProblems = [
    {
      title: 'Door Not Closing',
      signs: [
        'Misalignment',
        'Damaged hinges',
        'Worn seals',
        'Track issues',
      ],
    },
    {
      title: 'Leaking Door',
      signs: [
        'Failed seals',
        'Poor alignment',
        'Damaged sweep',
        'Caulk failure',
      ],
    },
    {
      title: 'Hardware Issues',
      signs: [
        'Loose handles',
        'Broken hinges',
        'Failed rollers',
        'Lock problems',
      ],
    },
    {
      title: 'Glass Problems',
      signs: [
        'Chips or cracks',
        'Cloudy glass',
        'Loose panels',
        'Safety concerns',
      ],
    },
  ]

  return (
    <>
      <ServiceHero
        title="Expert Shower Door Repair"
        description="Fast, professional repair for all shower door problems. Same-day service available."
        ctaText="Schedule Service"
        ctaLink="/schedule-appointment"
        secondaryCtaText="Call Now: (804) 231-1029"
        secondaryCtaLink="tel:+18042311029"
      />

      <FeatureSection
        title="Why Choose Our Repair Service"
        description="Professional repairs backed by experience"
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
              <h2 className="mb-6">Common Problems</h2>
              <div className="grid gap-6">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                    <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                    <ul className="space-y-2">
                      {problem.signs.map((sign, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-primary mr-2">✓</span>
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">Our Repair Process</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">1.</span>
                    <div>
                      <h4 className="font-bold">Inspection</h4>
                      <p className="text-sm text-gray-600">Thorough assessment of the problem</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">2.</span>
                    <div>
                      <h4 className="font-bold">Diagnosis</h4>
                      <p className="text-sm text-gray-600">Identify the root cause</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">3.</span>
                    <div>
                      <h4 className="font-bold">Solution</h4>
                      <p className="text-sm text-gray-600">Recommend best repair option</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">4.</span>
                    <div>
                      <h4 className="font-bold">Repair</h4>
                      <p className="text-sm text-gray-600">Professional repair service</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">5.</span>
                    <div>
                      <h4 className="font-bold">Testing</h4>
                      <p className="text-sm text-gray-600">Verify proper operation</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8">Need Your Shower Door Fixed?</h2>
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