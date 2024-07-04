import React from "react";
import { VideoTitle } from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlaying);
  if (!movies) return;

  const mainMovie = movies[0];

  return (
    <div>
      <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};
