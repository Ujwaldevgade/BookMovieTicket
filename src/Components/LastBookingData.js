import React, { useContext, useEffect, useState } from "react";
import "../styles/bookingDetails.css";
import { seats } from "../data";
import Loader from "../Components/loader";
import BsContext from "../Context/BsContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LastBookingData = (props) => {
  // Getting movie and change movie components from the context.
  const [lastBooking, setLastBooking] = useState("");
  const [loader, setLoader] = useState(false);
  const context = useContext(BsContext);
  const { lastBookingDatas } = context;
  const getLastRecord = async () => {
    try {
      setLoader(true);
      const res = await fetch(
        "https://bookmyshow-backend-main.onrender.com/api/booking",
        {
          method: "GET",
        }
      );
      const data = await res.json();
      setLastBooking(data.data);
      setLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLastRecord(); //calling get last booking api
  }, [lastBookingDatas]);

  return (
    <>
      <ToastContainer />
      <div className="navbar">
        <Link to="/">Movies</Link>
        <Link to="/last-bookings">Last Bookings</Link>
      </div>

      <div className="last_booking_details_container_main">
        <h2 className="last_booking_details_header">
          Your Last Booking Details
        </h2>
        {loader ? (
          <Loader />
        ) : lastBooking ? (
          <div>
            <div className="seats_container">
              <p className="seats_header">Seats:</p>
              <ul className="seats">
                {seats.map((seat, index) => {
                  return (
                    <li className="seat_value" key={index}>
                      {seat}: {Number(lastBooking?.seats[seat])}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="slot" style={{ textAlign: "left" }}>
              Slot: <span>{lastBooking?.slot}</span>
            </p>
            <p className="movie">
              Movie: <span>{lastBooking?.movie}</span>
            </p>
          </div>
        ) : (
          <p className="no_previous_booking_msg">
            No Previous Booking Found!
          </p>
        )}
      </div>
    </>
  );
};

export default LastBookingData;
