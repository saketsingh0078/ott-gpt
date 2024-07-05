import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  return (
    movies.nowPlaying && (
      <div className="bg-black">
        <div className="relative pl-8 -mt-72 z-2 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />
          <MovieList title={"Popular"} movies={movies.popularMovie} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovie} />
        </div>
      </div>
    )
  );
};
