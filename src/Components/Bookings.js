import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SelectSeats from "../Components/SelectSeats";
import TimeShedule from "../Components/TimeShedule";
import BsContext from "../Context/BsContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bookings = () => {
  const context = useContext(BsContext);
  const navigate = useNavigate();
  const { time, noOfSeat, handlePostBooking } = context;

  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }
    return false;
  };

  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  const handleBookNow = () => {
    if (!time) {
      toast.error("Please select a time slot!", { /* ...other options... */ });
    } else if (checkNegativeSeatsValidity(noOfSeat) || checkZeroSeatsValidity(noOfSeat)) {
      toast.error("Invalid Seats!", { /* ...other options... */ });
    } else {
      handlePostBooking(); // Assuming this function handles the booking and stores data
      toast.success("Booking successful!", { /* ...other options... */ });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="navbar">
        <Link to="/">Movies</Link>
        <Link to="/last-bookings">Last Bookings</Link>
      </div>
      <div className="last_booking_details_container_main">
        <div className="time_seats_container">
          <TimeShedule />
          <SelectSeats />
          <button onClick={handleBookNow} className="BN-btn">
            Book Ticket
          </button>
        </div>
      </div>
    </>
  );
};

export default Bookings;
