import React from "react";
import Link from "next/link";
import ResponsiveImage from "../../components/ResponsiveImage";

export const metadata = {
  title: "About Us | Budget Glass Company",
  description:
    "Serving Richmond since 1987, Budget Glass Company is your trusted local expert for all glass repair and replacement needs.",
};

export default function About() {
  return (
    <main>
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="mb-6">About Budget Glass Company</h1>
          <p className="text-xl">Serving Richmond Since 1987</p>
        </div>
      </section>

      <Link
        href="/about/in-memory-of-butch"
        className="block bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 transition-colors"
      >
        <div className="container py-3 text-center text-black">
          <p className="font-semibold">
            In Memory of Butch - Click to Learn About His Legacy
          </p>
        </div>
      </Link>

      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Your Local Glass Experts</h2>
              <p className="mb-4 text-gray-600">
                For over 35 years, Budget Glass Company has been Richmond's
                trusted name in glass repair and replacement. We're a
                family-owned business committed to providing quality service at
                fair prices.
              </p>
              <p className="mb-8 text-gray-600">
                Our team of certified technicians brings decades of combined
                experience to every job, ensuring your glass needs are handled
                with expertise and care.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
            <div className="relative group">
              <ResponsiveImage
                src="/images/team.jpg"
                alt="Budget Glass Company Team"
                width={800}
                height={600}
                containerClassName="w-full overflow-hidden rounded-lg shadow-lg"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <h2 className="text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-subtle group hover:shadow-lg transition-shadow duration-300">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <ResponsiveImage
                  src="/images/quality.jpg"
                  alt="Quality Workmanship"
                  width={400}
                  height={300}
                  containerClassName="w-full overflow-hidden"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600 mb-6">
                We never compromise on quality, using only the best materials
                and proven techniques to ensure lasting results.
              </p>
              <Link
                href="/about/gallery"
                className="btn-primary w-full text-center"
              >
                View Our Gallery
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-subtle group hover:shadow-lg transition-shadow duration-300">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <ResponsiveImage
                  src="/images/customer-service.jpg"
                  alt="Customer Service"
                  width={400}
                  height={300}
                  containerClassName="w-full overflow-hidden"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer Service</h3>
              <p className="text-gray-600 mb-6">
                Your satisfaction is our top priority. We're committed to
                providing exceptional service and support at every step.
              </p>
              <Link
                href="/about/testimonials"
                className="btn-primary w-full text-center"
              >
                Read Testimonials
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-subtle group hover:shadow-lg transition-shadow duration-300">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <ResponsiveImage
                  src="/images/integrity.jpg"
                  alt="Business Integrity"
                  width={400}
                  height={300}
                  containerClassName="w-full overflow-hidden"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600 mb-6">
                We operate with complete transparency, providing honest pricing
                and reliable service you can trust.
              </p>
              <Link
                href="/about/our-team"
                className="btn-primary w-full text-center"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
