import { useEffect } from "react";
import { API_OPTIONS } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utility/moviesSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((store) => store.movies.popularMovie);

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const getPopularMovie = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovie && getPopularMovie();
  }, []);
};

export default usePopularMovie;
