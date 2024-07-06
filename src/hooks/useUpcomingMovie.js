import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utility/moviesSlice";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector((store) => store.movies.upcomingMovie);
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const getUpcomingMovie = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovie && getUpcomingMovie();
  }, []);
};

export default useUpcomingMovie;
