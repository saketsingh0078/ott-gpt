import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className=" pl-6 ">
        <h1 className="text-2xl text-white">{title}</h1>
        <div className="overflow-x-auto whitespace-nowrap py-2 no-scrollbar">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    )
  );
};

export default MovieList;
