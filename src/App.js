import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BsState from "./Context/BsState";
import Home from "./Pages/Home";
import LastBookingData from "./Components/LastBookingData";
import Bookings from "./Components/Bookings";
import SelectMovieButton from "./Components/SelectMovieButton";

function App() {
  return (
    <Router>
      <BsState>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/last-bookings" element={<LastBookingData />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </BsState>
    </Router>
  );
}

export default App;
