import React from 'react'

export const metadata = {
  title: 'Customer Testimonials | Budget Glass Company',
  description: 'Read what our satisfied customers have to say about their experience with Budget Glass Company.',
}

export default function Testimonials() {
  const testimonials = [
    {
      text: "Budget Glass did an amazing job replacing my storefront windows. Professional, efficient, and very reasonably priced!",
      author: "John D.",
      business: "Local Business Owner"
    },
    {
      text: "The team was prompt, courteous, and did excellent work repairing our home's windows. Highly recommend!",
      author: "Sarah M.",
      business: "Homeowner"
    },
    {
      text: "Outstanding service from start to finish. They really know their craft and take pride in their work.",
      author: "Mike R.",
      business: "Property Manager"
    }
  ]

  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="mb-6">Customer Testimonials</h1>
          <p className="text-xl">What Our Clients Say About Us</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-subtle hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-8">Share Your Experience</h2>
            <p className="text-gray-600 mb-8">
              We value your feedback! If you've had a great experience with Budget Glass, 
              we'd love to hear about it. Your testimonial helps other customers make informed decisions.
            </p>
            <a href="mailto:feedback@budgetglass.com" className="btn-primary">
              Submit Your Testimonial
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 