import React from "react";

const Hotels = ({ rooms, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-screen-xl mx-auto p-4 mt-12 mb-12">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
        Hotels
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {rooms.map((room, index) => (
          <div
            key={index}
            className="group block bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-[200px]">
              <img
                src={room.imageUrl} // Assuming each room has an imageUrl
                alt={room.name} // Assuming each room has a name
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />
            </div>

            {/* Button and Price Section */}
            <div className="p-4 flex items-center justify-between">
              <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all">
                View Details
              </button>
              <span className="text-sm font-semibold text-gray-700">
                ${room.price} {/* Assuming each room has a price */}
              </span>
            </div>

            {/* Description */}
            <p className="px-4 pb-4 text-xs text-gray-500">
              {room.description} {/* Assuming each room has a description */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
