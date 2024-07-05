import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utility/moviesSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const getPopularMovie = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovie();
  }, []);
};

export default usePopularMovie;
