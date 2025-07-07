import React from "react";
import Link from "next/link";
import ResponsiveImage from "../components/ResponsiveImage";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-8 flex justify-center md:justify-start">
                <ResponsiveImage
                  src="/images/companylogo-207w.webp"
                  alt="Budget Glass Company Logo"
                  width={207}
                  height={80}
                  containerClassName=""
                  className="h-auto"
                  priority
                />
              </div>
              <h1 className="mb-6">
                Richmond's Premier Glass Service Since 1987
              </h1>
              <p className="text-xl mb-8">
                Replace the glass, not the window. Same-day service available.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
                <Link
                  href="/about"
                  className="btn-outline border-white text-white hover:bg-white hover:text-primary"
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
              <ResponsiveImage
                src="/images/storefront-repair.jpg"
                alt="Budget Glass Storefront Repair"
                width={800}
                height={600}
                containerClassName="w-full overflow-hidden rounded-lg shadow-lg"
                className="object-cover hover:opacity-90 transition-opacity duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-center mb-8">Meet Our Expert Team</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            With decades of experience, our skilled technicians are ready to
            solve your glass needs.
          </p>
          <div className="relative group">
            <ResponsiveImage
              src="/images/team.jpg"
              alt="Budget Glass Company Team"
              width={1200}
              height={800}
              containerClassName="w-full overflow-hidden rounded-lg shadow-lg"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-neutral-lightest">
        <div className="container">
          <h2 className="text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Storefront Repairs */}
            <div className="bg-white p-8 rounded-lg shadow-subtle group hover:shadow-lg transition-shadow duration-300">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <ResponsiveImage
                  src="/images/storefront-service.jpg"
                  alt="Storefront Glass Repair Service"
                  width={400}
                  height={300}
                  containerClassName="w-full overflow-hidden"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="mb-4">Storefront Repairs</h3>
              <p className="mb-6 text-gray-600">
                24/7 emergency service for your business. Back in business
                today.
              </p>
              <Link
                href="/commercial/storefront-repair"
                className="btn-primary"
              >
                Explore Storefront Repair Services
              </Link>
            </div>

            {/* Window Repair */}
            <div className="bg-white p-8 rounded-lg shadow-subtle group hover:shadow-lg transition-shadow duration-300">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <ResponsiveImage
                  src="/images/window-repair.jpg"
                  alt="Window Repair Service"
                  width={400}
                  height={300}
                  containerClassName="w-full overflow-hidden"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="mb-4">Window Repair</h3>
              <p className="mb-6 text-gray-600">
                Save 90% vs full replacement. Same-day service available.
              </p>
              <Link href="/residential/window-repair" className="btn-primary">
                View Window Repair Options
              </Link>
            </div>

            {/* Shower Doors */}
            <div className="bg-white p-8 rounded-lg shadow-subtle group hover:shadow-lg transition-shadow duration-300">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <ResponsiveImage
                  src="/images/shower-door.jpg"
                  alt="Custom Shower Door Installation"
                  width={400}
                  height={300}
                  containerClassName="w-full overflow-hidden"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="mb-4">Shower Doors</h3>
              <p className="mb-6 text-gray-600">
                Virginia's largest shower door selection. Free in-home measure.
              </p>
              <Link href="/residential/shower-doors" className="btn-primary">
                Browse Custom Shower Door Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
