import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utility/constants";
import { addMovieTrailer } from "../utility/moviesSlice";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerMovie = useSelector((store) => store.movies.trailerMovie);

  const url =
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US";

  const movieTrailer = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    const filterData = json.results.filter((el) => el.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    !trailerMovie && movieTrailer();
  }, []);
};

export default useMoviesTrailer;
