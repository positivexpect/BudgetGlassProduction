'use client'

import React from 'react'
import Calendar from '../../components/Calendar'
import TimeSlotSelector from '../../components/TimeSlotSelector'
import { addDays, startOfDay } from 'date-fns'

const services = [
  {
    id: 'window-repair',
    name: 'Window Repair',
    description: 'Bring your window sash for same-day service (drop off by 10am)',
    duration: 60,
  },
  {
    id: 'shower-consultation',
    name: 'Shower Door Consultation',
    description: 'Free in-home consultation and measurement',
    duration: 45,
  },
  {
    id: 'storefront-quote',
    name: 'Commercial Glass Quote',
    description: 'On-site assessment and quote for your business',
    duration: 45,
  },
]

export default function ScheduleAppointment() {
  const [step, setStep] = React.useState(1)
  const [selectedService, setSelectedService] = React.useState<string | null>(null)
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null)

  // Generate available dates (next 14 days)
  const availableDates = React.useMemo(() => {
    const dates = []
    const today = startOfDay(new Date())
    for (let i = 0; i < 14; i++) {
      dates.push(addDays(today, i))
    }
    return dates
  }, [])

  // Available time slots
  const availableSlots = [
    { time: '9:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '1:00 PM', available: true },
    { time: '2:00 PM', available: true },
    { time: '3:00 PM', available: true },
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setStep(2)
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setStep(3)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep(4)
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center mb-8">Schedule an Appointment</h1>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-lightest -translate-y-1/2" />
            {[1, 2, 3, 4].map((number) => (
              <div
                key={number}
                className={`
                  relative z-10 w-8 h-8 rounded-full flex items-center justify-center
                  ${step >= number ? 'bg-primary text-white' : 'bg-neutral-lightest text-gray-400'}
                `}
              >
                {number}
              </div>
            ))}
          </div>

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className="p-6 bg-white rounded-lg shadow-subtle text-left hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <p className="mt-2 text-sm text-gray-500">Duration: {service.duration} minutes</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date Selection */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select a Date</h2>
              <Calendar
                selectedDate={selectedDate}
                onDateSelect={handleDateSelect}
                availableDates={availableDates}
              />
            </div>
          )}

          {/* Step 3: Time Selection */}
          {step === 3 && selectedDate && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Select a Time</h2>
              <TimeSlotSelector
                selectedTime={selectedTime}
                onTimeSelect={handleTimeSelect}
                availableSlots={availableSlots}
                date={selectedDate}
              />
            </div>
          )}

          {/* Step 4: Contact Information */}
          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Information</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="notes" className="block font-semibold mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Confirm Appointment
                </button>
              </form>
            </div>
          )}

          {/* Navigation Buttons */}
          {step > 1 && (
            <div className="mt-8">
              <button
                onClick={handleBack}
                className="btn-outline"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 