import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

export const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  useMoviesTrailer(movieId);

  return (
    <div className="w-full ">
      <iframe
        className="w-full aspect-video pointer-events-none "
        src={
          "http://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
