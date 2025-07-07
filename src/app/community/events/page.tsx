import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Events | Budget Glass',
  description: 'Join Budget Glass at our upcoming community events, workshops, and local initiatives in Richmond.',
};

const EventsPage = () => {
  const upcomingEvents = [
    {
      title: 'Glass Repair Workshop',
      date: 'Coming Soon',
      description: 'Learn basic glass repair and maintenance techniques from our experts.',
      location: 'Budget Glass Showroom',
    },
    {
      title: 'Community Open House',
      date: 'Coming Soon',
      description: 'Tour our facility and learn about our services while enjoying refreshments.',
      location: 'Budget Glass Showroom',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Community Events
        </h1>
        <p className="text-xl text-gray-600">
          Join us at our upcoming events and become part of our community
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {event.title}
            </h2>
            <div className="text-primary font-semibold mb-2">{event.date}</div>
            <div className="text-gray-500 mb-4">{event.location}</div>
            <p className="text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Stay Updated?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Follow us on social media to be the first to know about upcoming events
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.facebook.com/BudgetGlassCompany/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow on Facebook
          </a>
          <a
            href="https://instagram.com/budgetglassva"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventsPage; 