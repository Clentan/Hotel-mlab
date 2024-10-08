import { useState } from 'react';
import { DateRangePicker } from "@nextui-org/react";

const Booking = ({ rooms }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (dateRange[0] && dateRange[1]) {
      // Filter rooms based on the selected date range
      const startDate = new Date(dateRange[0]);
      const endDate = new Date(dateRange[1]);

      const availableRooms = rooms.filter((room) => {
        // Assuming each room has a 'bookedDates' property which is an array of booked date ranges
        return !room.bookedDates.some((bookedRange) => {
          const bookedStart = new Date(bookedRange[0]);
          const bookedEnd = new Date(bookedRange[1]);
          return (startDate < bookedEnd && endDate > bookedStart);
        });
      });

      setFilteredRooms(availableRooms);
    } else {
      alert('Please select a valid date range.');
    }
  };

  return (
    <div className='py-44'>
      <div className='Bar bg-white'>
        <form className="flex gap-10 ml-10" onSubmit={handleSearch}>
          <div>
            <label>Stay duration:</label>
          </div>
          <div>
            <DateRangePicker 
              label="Select Dates" 
              value={dateRange}
              onChange={setDateRange}
              className="max-w-xs" 
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded w-36" 
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Display filtered rooms */}
      <div className="mt-10">
        {filteredRooms.length > 0 ? (
          <ul>
            {filteredRooms.map((room) => (
              <li key={room.id}>{room.name} - R {room.price}</li>
            ))}
          </ul>
        ) : (
          <p>No available rooms for the selected dates.</p>
        )}
      </div>
    </div>
  );
}

export default Booking;
