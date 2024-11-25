import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import Hero from "../components/Herosection/Hero";
import Hotels from "../components/Hotels/Hotels";
import Questions from "../components/Questions";
import Testimonials from "../components/Testimonials/Testimonials";
import Layout from "../components/Layout/Layout";

const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  console.log(rooms);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/rooms/getallroom");
        setRooms(data); // Store room data
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err.message || "Failed to fetch rooms");
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData(); // Fetch the room data when the component mounts
  }, []);

  return (
    <Layout>
      <div>
        <Hero />

        {loading ? (
          <p>Loading...</p> // Display loading message
        ) : error ? (
          <p>Error: {error}</p> // Display error message if there is an error
        ) : (
          <>
            <Hotels rooms={rooms} />{" "}
            {/* Pass rooms data to the Hotels component */}
            <Questions />
            <Testimonials />
          </>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
