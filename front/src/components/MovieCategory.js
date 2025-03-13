import React from "react";
import "../App.css";

const MovieCategory = ({ title, movies }) => {
  return (
    <div className="category">
      <h2>{title}</h2>
      <div className="movies-list">
        {movies.map((movie, index) => (
          <img
            key={index}
            src={movie.image}
            alt={movie.title}
            className="movie-poster"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCategory;
