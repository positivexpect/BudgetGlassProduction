import React from 'react'
import { format, parse } from 'date-fns'

interface TimeSlot {
  time: string
  available: boolean
}

interface TimeSlotSelectorProps {
  selectedTime: string | null
  onTimeSelect: (time: string) => void
  availableSlots: TimeSlot[]
  date: Date
}

const TimeSlotSelector = ({
  selectedTime,
  onTimeSelect,
  availableSlots,
  date,
}: TimeSlotSelectorProps) => {
  const formatTime = (timeString: string) => {
    try {
      const parsedTime = parse(timeString, 'h:mm a', new Date())
      return format(parsedTime, 'h:mm a')
    } catch (error) {
      return timeString
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h3 className="font-bold text-xl mb-4">
        Available Times for {format(date, 'EEEE, MMMM d')}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {availableSlots.map((slot) => (
          <button
            key={slot.time}
            onClick={() => slot.available && onTimeSelect(slot.time)}
            disabled={!slot.available}
            className={`
              p-4 rounded-lg text-center transition-colors
              ${!slot.available 
                ? 'bg-neutral-lightest text-gray-400 cursor-not-allowed' 
                : selectedTime === slot.time 
                  ? 'bg-primary text-white' 
                  : 'bg-white hover:bg-primary hover:text-white border border-gray-200'
              }
            `}
          >
            {formatTime(slot.time)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TimeSlotSelector 