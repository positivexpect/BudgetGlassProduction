'use client'

import React from 'react'
import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'

interface ServiceHeroProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  imageSrc?: string
  imageAlt?: string
}

export default function ServiceHero({
  title,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageSrc,
  imageAlt,
}: ServiceHeroProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <ResponsiveImage
            src={imageSrc}
            alt={imageAlt || ''}
            fill
            containerClassName="w-full h-full"
            className="object-cover opacity-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/80" />
        </div>
      )}
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 drop-shadow-sm">
            {title}
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 max-w-2xl drop-shadow-sm">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaLink}
              className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {ctaText}
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="btn-outline text-lg px-8 py-4 rounded-lg hover:shadow-lg transition-all"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 