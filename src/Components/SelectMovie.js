import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RadioButton from "./RadioButton";
import { moviesList, imagesList, RatingList, GenreList } from "../data";
import BsContext from "../Context/BsContext";
import "../styles/selectMovie.css";

const SelectMovie = () => {
  const context = useContext(BsContext);
  const navigate = useNavigate();

  const { movie, changeMovie } = context;

  const handleChangeMovie = (value) => {
    changeMovie(value);
    window.localStorage.setItem("movie", value);
    navigate("/bookings"); // Navigate to "/booking-page" route
  };

  return (
    <>
      <div className="SM_main_container">
        <h1 className="SM_heading">Select Your Movie</h1>
        {moviesList.map((el, index) => (
          <div className="movie_card" key={index}>
            <div className="movie_image_container">
              <img
                src={`images/${imagesList[index]}`}
                alt={`${el} Movie`}
                className="movie_image"
              />
            </div>
            <div className="movie_details">
              <div className="movie_name">{el}</div>
              <div className="movie_rating">Rating: {RatingList[index]}</div>
              <div className="movie_genre">Genre: {GenreList[index]}</div>
            </div>
            <RadioButton
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectMovie;
