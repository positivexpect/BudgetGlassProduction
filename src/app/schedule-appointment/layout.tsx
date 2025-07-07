import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Schedule an Appointment - Budget Glass Company',
  description: 'Schedule your glass repair or consultation appointment with Budget Glass. Same-day service available for window repairs.',
}

export default function ScheduleAppointmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 