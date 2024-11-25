import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
import moment from "moment"; // Import moment
import "./home.css";
import video from "../../assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { MdFilterListAlt } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios"; // Import Axios

const Hero = () => {
  // State for the date range and available date limits
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [availableStartDate, setAvailableStartDate] = useState(null);
  const [availableEndDate, setAvailableEndDate] = useState(null);

  // Hook to add a scroll animation
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Fetch available date range from backend using Axios
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/rooms/getallroom`
        );
        const data = response.data;

        // Check if data is valid and contains rooms
        if (Array.isArray(data) && data.length > 0) {
          const firstRoom = data[0]; // Assuming the first room contains the date range

          // Check if the room contains the available dates before setting state
          if (firstRoom.availableStartDate && firstRoom.availableEndDate) {
            setAvailableStartDate(
              moment(firstRoom.availableStartDate).toDate()
            ); // Format with moment
            setAvailableEndDate(moment(firstRoom.availableEndDate).toDate()); // Format with moment
          }
        }
      } catch (error) {
        console.error("Error fetching room data with Axios:", error);
      }
    };

    fetchRoomData();
  }, []);

  return (
    <>
      <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">
              Our Packages
            </span>
            <h1 data-aos="fade-up" className="homeTitle">
              Search your Holiday
            </h1>
          </div>

          <div data-aos="fade-up" className="cardDiv grid">
            {/* Destination Input */}
            <div className="destinationInput">
              <label htmlFor="city">Search your destination:</label>
              <div className="input flex ">
                <input
                  type="text"
                  className="text-black"
                  placeholder="Enter name here..."
                />
                <GrLocation className="icon" />
              </div>
            </div>

            {/* Date Picker Inputs */}
            <div className="dataInput">
              <label htmlFor="date">Select your date:</label>
              <div className="input flex">
                {/* Start Date Picker */}
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Start date"
                  minDate={availableStartDate} // Dynamically set min date
                  maxDate={availableEndDate} // Dynamically set max date
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <span className="mx-4 text-gray-500">to</span>

                {/* End Date Picker */}
                <ReactDatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="End date"
                  minDate={startDate || availableStartDate} // Ensure end date >= start date
                  maxDate={availableEndDate} // Dynamically set max date
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            {/* Price Input */}
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max price:</label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000" />
              </div>
            </div>

            <div className="searchOptions flex">
              <MdFilterListAlt className="icon" />
              <span>MORE FILTERS</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
