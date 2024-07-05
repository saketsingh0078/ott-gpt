import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utility/moviesSlice";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const getUpcomingMovie = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovie();
  }, []);
};

export default useUpcomingMovie;
