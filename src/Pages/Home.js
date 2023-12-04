import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import SelectMovieButton from "../Components/SelectMovieButton";
import SelectMovie from "../Components/SelectMovie";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <>
      <ToastContainer />
      <div className="navbar">
        <Link to="/">Movies</Link>
        <Link to="/last-bookings">Last Bookings</Link>
      </div>
      <div className="container">
        <div className="selection_container">
          <div className="wrapper">
            <div className="select_movie_component">
            <SelectMovieButton />
              <SelectMovie />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
