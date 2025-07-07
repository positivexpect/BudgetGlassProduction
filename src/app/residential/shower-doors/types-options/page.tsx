import React from 'react'
import type { Metadata } from 'next'
import ServiceHero from '../../../../components/ServiceHero'
import FeatureSection from '../../../../components/FeatureSection'
import Image from 'next/image'
import TestimonialCarousel from '../../../../components/TestimonialCarousel'

export const metadata: Metadata = {
  title: 'Shower Door Types & Glass Options | Virginia\'s Largest Selection',
  description: 'Explore Richmond\'s largest selection of shower door styles - frameless, semi-frameless, and framed designs. Expert installation and premium hardware. Free consultation.',
  openGraph: {
    title: 'Shower Door Types & Glass Options | Virginia\'s Largest Selection',
    description: 'Explore Richmond\'s largest selection of shower door styles. Expert installation and premium hardware.',
    url: 'https://budgetglasscompany.com/residential/shower-doors/types-options',
    siteName: 'Budget Glass Company',
  },
}

export default function ShowerDoorTypes() {
  const features = [
    {
      title: 'Largest Selection',
      description: 'Virginia\'s #1 shower door dealer with extensive options.',
    },
    {
      title: 'Expert Installation',
      description: 'Professional fitting with 1-year warranty.',
    },
    {
      title: 'Premium Quality',
      description: 'Top-grade materials and hardware.',
    },
    {
      title: 'Fast Turnaround',
      description: 'Superhuman speed compared to competitors.',
    },
  ]

  const doorTypes = [
    {
      title: 'Frameless',
      description: 'Ultimate luxury and modern design',
      features: [
        'Maximum glass exposure',
        'Premium hardware options',
        'Sleek, modern appearance',
        'Easy maintenance',
        'Perfect for modern bathrooms',
        'Increases home value',
      ],
      image: '/images/frameless-shower.jpg',
    },
    {
      title: 'Semi-Frameless',
      description: 'Perfect balance of style and value',
      features: [
        'Minimal metal framing',
        'Sturdy construction',
        'Contemporary look',
        'Cost-effective choice',
        'Various finish options',
        'Great durability',
      ],
      image: '/images/semi-frameless-shower.jpg',
    },
    {
      title: 'Framed',
      description: 'Classic and budget-friendly',
      features: [
        'Traditional styling',
        'Superior water-tight seal',
        'Multiple finish choices',
        'Budget-conscious option',
        'Proven reliability',
        'Easy installation',
      ],
      image: '/images/framed-shower.jpg',
    },
  ]

  const glassOptions = [
    {
      title: 'Clear Glass',
      description: 'Maximum transparency',
      options: [
        '3/8" or 1/2" thick',
        'Tempered safety glass',
        'Crystal clear view',
        'Modern appearance',
      ],
    },
    {
      title: 'Pattern Glass',
      description: 'Decorative privacy',
      options: [
        'Rain pattern',
        'Frosted options',
        'Custom designs',
        'Various opacity',
      ],
    },
    {
      title: 'Tinted Glass',
      description: 'Subtle color',
      options: [
        'Bronze tint',
        'Gray options',
        'UV protection',
        'Modern look',
      ],
    },
    {
      title: 'Low-Iron Glass',
      description: 'Ultra-clear view',
      options: [
        'No green tint',
        'Crystal clear',
        'Premium option',
        'True colors',
      ],
    },
  ]

  const hardware = [
    {
      title: 'Finishes',
      options: [
        'Chrome',
        'Brushed nickel',
        'Oil-rubbed bronze',
        'Matte black',
        'Polished brass',
        'Satin brass',
      ],
    },
    {
      title: 'Handle Styles',
      options: [
        'Modern pulls',
        'Traditional knobs',
        'Ladder pulls',
        'Back-to-back',
        'Single-sided',
        'Towel bar combo',
      ],
    },
    {
      title: 'Hinges',
      options: [
        'Wall mount',
        'Glass-to-glass',
        'Pivot style',
        'Self-closing',
        'Heavy duty',
        'Adjustable',
      ],
    },
    {
      title: 'Accessories',
      options: [
        'Towel bars',
        'Support bars',
        'Corner shelves',
        'Robe hooks',
        'Seals & sweeps',
        'Header systems',
      ],
    },
  ]

  const testimonials = [
    {
      text: "Budget Glass transformed our bathroom with a beautiful frameless shower. The installation was quick and professional!",
      author: "Sarah M.",
      location: "Midlothian, VA"
    },
    {
      text: "Best shower door selection in Richmond. Their team helped us choose the perfect style for our space.",
      author: "Michael R.",
      location: "Brandermill, VA"
    },
    {
      text: "From consultation to installation, the process was seamless. Highly recommend their services!",
      author: "Jennifer L.",
      location: "Chesterfield, VA"
    }
  ]

  const serviceAreas = [
    'Richmond',
    'Midlothian',
    'Brandermill',
    'Chesterfield',
    'Hull Street Area',
    'And surrounding areas within 30 miles'
  ]

  return (
    <main className="min-h-screen">
      <ServiceHero
        title="Shower Door Types & Glass Options"
        description="Transform your bathroom with Virginia's largest selection of shower doors. From utilitarian to fashionable, we design and construct any shower piece you need."
        ctaText="Schedule Free Consultation"
        ctaLink="/schedule-appointment"
        secondaryCtaText="View Gallery"
        secondaryCtaLink="/residential/shower-doors/gallery"
      />

      <FeatureSection
        title="Why Choose Budget Glass"
        description="Richmond's premier shower door experts since 1987"
        features={features}
        columns={4}
      />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quality & Value Guaranteed</h2>
            <p className="text-lg text-gray-600">As Virginia's #1 shower door dealer, we offer:</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Guarantees</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  1-year warranty on parts and labor
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Expert installation by certified technicians
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Premium materials and hardware
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Superhuman speed installation
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Serving Richmond Since 1987</h3>
              <p className="mb-4">Family-owned and operated, serving:</p>
              <ul className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Door Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doorTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={type.image}
                    alt={`${type.title} shower door example`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
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

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <h2 className="text-center mb-12">Glass Options</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {glassOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.options.map((opt, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="text-primary mr-2">✓</span>
                      {opt}
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
          <h2 className="text-center mb-12">Hardware & Finishes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hardware.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-subtle">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.options.map((option, i) => (
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

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Design Your Perfect Shower Door</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">1. Choose Your Style</h3>
                <div className="space-y-2">
                  {doorTypes.map((type, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-4 rounded border hover:border-primary transition-colors"
                    >
                      {type.title}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">2. Select Hardware Finish</h3>
                <div className="grid grid-cols-2 gap-4">
                  {hardware[0].options.map((finish, index) => (
                    <button
                      key={index}
                      className="p-4 rounded border hover:border-primary transition-colors"
                    >
                      {finish}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Add your FAQ content here */}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Bathroom?</h2>
            <p className="text-lg text-gray-600">Schedule your free consultation today and let our experts help you choose the perfect shower door.</p>
          </div>
          <div className="flex justify-center">
            <a 
              href="/schedule-appointment" 
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 