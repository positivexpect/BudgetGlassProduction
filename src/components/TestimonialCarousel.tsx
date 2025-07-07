'use client'

import React, { useState } from 'react'

interface Testimonial {
  text: string
  author: string
  location: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg bg-white shadow-lg p-8">
        <div className="relative">
          <blockquote className="text-center">
            <p className="text-xl italic text-gray-800 mb-4">"{testimonials[currentIndex].text}"</p>
            <footer className="text-gray-600">
              <strong className="block font-semibold">{testimonials[currentIndex].author}</strong>
              <span className="text-sm">{testimonials[currentIndex].location}</span>
            </footer>
          </blockquote>
        </div>
      </div>
      
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
} 