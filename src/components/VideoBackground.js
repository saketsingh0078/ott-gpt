import React, { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utility/moviesSlice";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

export const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  useMoviesTrailer(movieId);

  console.log(trailerVideo?.key);

  return (
    <div className="w-full">
      <iframe
        className="w-screen height-screen  pointer-events-none aspect-video "
        src={
          "http://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};
