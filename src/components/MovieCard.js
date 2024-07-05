import React from "react";
import { POSTER_URL } from "../utility/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="inline-block pr-4">
      <img
        className="w-50 h-60"
        src={POSTER_URL + posterPath}
        alt="Movie Card img"
      />
    </div>
  );
};

export default MovieCard;
